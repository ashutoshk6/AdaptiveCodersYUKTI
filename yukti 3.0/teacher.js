// ===================================
// Teacher Dashboard Logic
// ===================================

const TEACHER = {
    // Get all students with their performance data
    getAllStudents() {
        return DATA.students;
    },

    // Get aggregated statistics
    getAggregatedStats() {
        const students = this.getAllStudents();

        const stats = {
            totalStudents: students.length,
            totalQuestions: 0,
            totalCorrect: 0,
            averageSuccessRate: 0,
            topicPerformance: {},
            activeToday: 0
        };

        // Initialize topic stats
        Object.keys(DATA.topics).forEach(topic => {
            stats.topicPerformance[topic] = {
                attempted: 0,
                correct: 0,
                successRate: 0
            };
        });

        // Calculate aggregates
        const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);

        students.forEach(student => {
            stats.totalQuestions += student.totalQuestions;
            stats.totalCorrect += student.correctAnswers;

            // Check if active today
            if (new Date(student.lastActive) > oneDayAgo) {
                stats.activeToday++;
            }

            // Aggregate topic performance
            Object.keys(student.topicPerformance).forEach(topic => {
                const perf = student.topicPerformance[topic];
                stats.topicPerformance[topic].attempted += perf.attempted;
                stats.topicPerformance[topic].correct += perf.correct;
            });
        });

        // Calculate average success rate
        stats.averageSuccessRate = stats.totalQuestions > 0
            ? Math.round((stats.totalCorrect / stats.totalQuestions) * 100)
            : 0;

        // Calculate topic success rates
        Object.keys(stats.topicPerformance).forEach(topic => {
            const perf = stats.topicPerformance[topic];
            perf.successRate = perf.attempted > 0
                ? Math.round((perf.correct / perf.attempted) * 100)
                : 0;
        });

        return stats;
    },

    // Get student by ID
    getStudentById(studentId) {
        return DATA.students.find(s => s.id === studentId);
    },

    // Get struggling students (success rate < 60%)
    getStrugglingStudents() {
        return this.getAllStudents().filter(s => s.codeSuccessRate < 60);
    },

    // Get top performers (success rate >= 80%)
    getTopPerformers() {
        return this.getAllStudents().filter(s => s.codeSuccessRate >= 80);
    },

    // Sort students by various criteria
    sortStudents(students, criteria, ascending = true) {
        const sorted = [...students].sort((a, b) => {
            let compareValue = 0;

            switch (criteria) {
                case 'name':
                    compareValue = a.name.localeCompare(b.name);
                    break;
                case 'successRate':
                    compareValue = a.codeSuccessRate - b.codeSuccessRate;
                    break;
                case 'questions':
                    compareValue = a.totalQuestions - b.totalQuestions;
                    break;
                case 'weakTopics':
                    compareValue = a.weakTopics.length - b.weakTopics.length;
                    break;
                case 'trend':
                    const trendA = this.calculateTrend(a.improvementTrend);
                    const trendB = this.calculateTrend(b.improvementTrend);
                    compareValue = trendA - trendB;
                    break;
                default:
                    compareValue = 0;
            }

            return ascending ? compareValue : -compareValue;
        });

        return sorted;
    },

    // Calculate improvement trend
    calculateTrend(improvementTrend) {
        if (improvementTrend.length < 2) return 0;
        return improvementTrend[improvementTrend.length - 1] - improvementTrend[0];
    },

    // Generate report for a student
    generateStudentReport(studentId) {
        const student = this.getStudentById(studentId);
        if (!student) return null;

        const report = {
            studentName: student.name,
            studentId: student.id,
            overallPerformance: {
                totalQuestions: student.totalQuestions,
                correctAnswers: student.correctAnswers,
                successRate: student.codeSuccessRate,
                currentLevel: student.currentLevel
            },
            topicBreakdown: {},
            weakTopics: student.weakTopics,
            improvementTrend: student.improvementTrend,
            recommendations: []
        };

        // Topic breakdown
        Object.keys(student.topicPerformance).forEach(topic => {
            const perf = student.topicPerformance[topic];
            report.topicBreakdown[topic] = {
                topicName: DATA.topics[topic],
                attempted: perf.attempted,
                correct: perf.correct,
                successRate: perf.attempted > 0
                    ? Math.round((perf.correct / perf.attempted) * 100)
                    : 0,
                mode: perf.mode,
                failureStreak: perf.failureStreak
            };
        });

        // Generate recommendations
        if (student.weakTopics.length > 0) {
            report.recommendations.push(
                `Focus on weak topics: ${student.weakTopics.map(t => DATA.topics[t]).join(', ')}`
            );
        }

        if (student.codeSuccessRate < 60) {
            report.recommendations.push(
                'Consider additional practice sessions or one-on-one tutoring'
            );
        }

        const trend = this.calculateTrend(student.improvementTrend);
        if (trend < 0) {
            report.recommendations.push(
                'Performance is declining. Schedule a check-in to identify challenges'
            );
        } else if (trend > 10) {
            report.recommendations.push(
                'Great improvement! Consider advancing to a higher difficulty level'
            );
        }

        return report;
    }
};
