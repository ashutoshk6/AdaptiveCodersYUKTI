// ===================================
// Student Learning Logic
// ===================================

const STUDENT = {
    // Get weak topics based on performance
    getWeakTopics(studentData) {
        const weakTopics = [];

        Object.keys(studentData.topicPerformance).forEach(topic => {
            const perf = studentData.topicPerformance[topic];

            // A topic is weak if:
            // 1. Success rate < 60% AND attempted at least 3 questions
            // 2. OR has 2+ consecutive failures
            if (perf.attempted >= 3) {
                const successRate = (perf.correct / perf.attempted) * 100;
                if (successRate < 60 || perf.failureStreak >= 2) {
                    weakTopics.push(topic);
                }
            }
        });

        return weakTopics;
    },

    // Generate specific feedback messages
    generateSpecificFeedback(studentData) {
        const feedback = [];

        Object.keys(studentData.topicPerformance).forEach(topic => {
            const perf = studentData.topicPerformance[topic];

            if (perf.attempted === 0) return;

            const successRate = (perf.correct / perf.attempted) * 100;

            // Specific feedback based on patterns
            if (perf.failureStreak >= 3) {
                feedback.push({
                    type: 'warning',
                    message: `⚠️ You struggle with <strong>${DATA.topics[topic]}</strong>. You've switched to code-fixing mode for better understanding.`
                });
            } else if (perf.failureStreak === 2) {
                feedback.push({
                    type: 'warning',
                    message: `⚠️ Be careful with <strong>${DATA.topics[topic]}</strong>. One more failure will switch you to code-fixing mode.`
                });
            } else if (successRate >= 80 && perf.attempted >= 5) {
                feedback.push({
                    type: 'success',
                    message: `✅ Excellent work on <strong>${DATA.topics[topic]}</strong>! You have ${Math.round(successRate)}% success rate.`
                });
            } else if (successRate < 50 && perf.attempted >= 3) {
                feedback.push({
                    type: 'warning',
                    message: `📚 You need more practice with <strong>${DATA.topics[topic]}</strong>. Focus on understanding the basics.`
                });
            }

            // Specific pattern detection
            if (topic === 'loops' && successRate < 60) {
                feedback.push({
                    type: 'info',
                    message: `💡 <strong>Loop Tip:</strong> Pay attention to loop termination conditions and variable updates.`
                });
            } else if (topic === 'arrays' && successRate < 60) {
                feedback.push({
                    type: 'info',
                    message: `💡 <strong>Array Tip:</strong> Remember that array indices start at 0 and go to length-1.`
                });
            } else if (topic === 'conditionals' && successRate < 60) {
                feedback.push({
                    type: 'info',
                    message: `💡 <strong>Conditional Tip:</strong> Use == for comparison, not = (which is assignment).`
                });
            }
        });

        return feedback;
    },

    // Check if topic should switch to code-fix mode
    shouldSwitchToCodeFix(studentData, topic) {
        const perf = studentData.topicPerformance[topic];
        return perf.failureStreak >= 3;
    },

    // Get next question for student
    getNextQuestion(studentData) {
        const level = studentData.currentLevel;

        // Get all topics
        const topics = Object.keys(DATA.topics);

        // Prioritize weak topics
        const weakTopics = this.getWeakTopics(studentData);
        const selectedTopic = weakTopics.length > 0
            ? weakTopics[Math.floor(Math.random() * weakTopics.length)]
            : topics[Math.floor(Math.random() * topics.length)];

        const perf = studentData.topicPerformance[selectedTopic];

        // Check if should use code-fix mode
        if (this.shouldSwitchToCodeFix(studentData, selectedTopic)) {
            perf.mode = 'code-fix';
            const problems = DATA.codeFixProblems[selectedTopic] || [];
            if (problems.length > 0) {
                const problem = problems[Math.floor(Math.random() * problems.length)];
                return {
                    type: 'code-fix',
                    topic: selectedTopic,
                    data: problem
                };
            }
        }

        // Randomly choose between MCQ and fill-in (70% MCQ, 30% fill-in)
        const useFillIn = Math.random() < 0.3;

        if (useFillIn) {
            const fillInProblems = DATA.fillInProblems[selectedTopic];
            if (fillInProblems && fillInProblems.length > 0) {
                perf.mode = 'fill-in';
                const problem = fillInProblems[Math.floor(Math.random() * fillInProblems.length)];
                return {
                    type: 'fill-in',
                    topic: selectedTopic,
                    data: problem
                };
            }
        }

        // Use MCQ mode
        perf.mode = 'mcq';
        const questions = DATA.mcqQuestions[selectedTopic]?.[level] || [];
        if (questions.length > 0) {
            const question = questions[Math.floor(Math.random() * questions.length)];
            return {
                type: 'mcq',
                topic: selectedTopic,
                data: question
            };
        }

        // Fallback
        return null;
    },

    // Record answer
    recordAnswer(studentData, topic, isCorrect) {
        const perf = studentData.topicPerformance[topic];

        perf.attempted++;
        if (isCorrect) {
            perf.correct++;
            perf.failureStreak = 0;
        } else {
            perf.failureStreak++;
        }

        // Update overall stats
        studentData.totalQuestions++;
        if (isCorrect) {
            studentData.correctAnswers++;
        }

        // Update improvement trend (every 5 questions)
        if (studentData.totalQuestions % 5 === 0) {
            const successRate = Math.round((studentData.correctAnswers / studentData.totalQuestions) * 100);
            studentData.improvementTrend.push(successRate);

            // Keep only last 10 data points
            if (studentData.improvementTrend.length > 10) {
                studentData.improvementTrend.shift();
            }
        }

        studentData.lastActive = new Date().toISOString();
    }
};
