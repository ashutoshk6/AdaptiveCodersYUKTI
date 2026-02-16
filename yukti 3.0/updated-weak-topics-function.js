// Updated populateWeakTopicsTable function with safety checks
// Replace lines 241-325 in teacher-dashboard.html with this:

function populateWeakTopicsTable(students) {
    const tableBody = document.getElementById('weakTopicsTableBody');

    let rows = '';
    students.forEach(student => {
        // Safety checks for missing data
        const topicPerformance = student.topicPerformance || {};
        const totalQuestions = student.totalQuestions || 0;
        const codeSuccessRate = student.codeSuccessRate || 0;
        const name = student.name || student.username || 'Unknown';
        const id = student.id || student.username || 'N/A';

        // Calculate weak topics
        const weakTopics = [];
        Object.keys(topicPerformance).forEach(topic => {
            const perf = topicPerformance[topic];
            if (perf && perf.attempted >= 3) {
                const successRate = (perf.correct / perf.attempted) * 100;
                if (successRate < 60 || perf.failureStreak >= 2) {
                    weakTopics.push(DATA.topics[topic] || topic);
                }
            }
        });

        // Calculate overall score (success rate)
        const score = codeSuccessRate;

        // Determine skill status based on multiple factors
        let status = '';
        let statusBadge = '';

        // Status determination logic
        if (score >= 85 && totalQuestions >= 30 && weakTopics.length === 0) {
            status = 'Master';
            statusBadge = 'badge-success';
        } else if (score >= 70 && totalQuestions >= 20) {
            status = 'Advanced';
            statusBadge = 'badge-primary';
        } else if (score >= 50 && totalQuestions >= 10) {
            status = 'Intermediate';
            statusBadge = 'badge-warning';
        } else {
            status = 'Beginner';
            statusBadge = 'badge-danger';
        }

        // Additional status indicators
        let statusDetails = '';
        if (status === 'Master') {
            statusDetails = 'Excellent problem-solving';
        } else if (status === 'Advanced') {
            statusDetails = 'Strong problem-solving';
        } else if (status === 'Intermediate') {
            statusDetails = 'Developing skills';
        } else {
            statusDetails = 'Building foundations';
        }

        // Format weak topics display
        let weakTopicsDisplay = '';
        if (weakTopics.length === 0) {
            weakTopicsDisplay = '<span class="badge badge-success">None</span>';
        } else if (weakTopics.length <= 2) {
            weakTopicsDisplay = weakTopics.map(t =>
                `<span class="badge badge-warning" style="margin: 0.2rem;">${t}</span>`
            ).join('');
        } else {
            weakTopicsDisplay = `<span class="badge badge-danger">${weakTopics.length} topics</span>`;
            weakTopicsDisplay += '<div style="margin-top: 0.5rem; font-size: 0.85rem; color: var(--text-muted);">';
            weakTopicsDisplay += weakTopics.slice(0, 3).join(', ');
            if (weakTopics.length > 3) {
                weakTopicsDisplay += ` +${weakTopics.length - 3} more`;
            }
            weakTopicsDisplay += '</div>';
        }

        // Score display with visual indicator
        const scoreClass = score >= 80 ? 'badge-success' :
            score >= 60 ? 'badge-primary' :
                score >= 40 ? 'badge-warning' : 'badge-danger';

        rows += `
            <tr>
                <td>
                    <div style="display: flex; flex-direction: column;">
                        <strong style="color: var(--text-primary);">${name}</strong>
                        <span style="font-size: 0.75rem; color: var(--text-muted);">${id}</span>
                    </div>
                </td>
                <td>${weakTopicsDisplay}</td>
                <td>
                    <div style="display: flex; flex-direction: column; gap: 0.25rem;">
                        <span class="badge ${scoreClass}" style="font-size: 1rem; padding: 0.5rem;">${score}%</span>
                        <span style="font-size: 0.75rem; color: var(--text-muted);">${totalQuestions} questions</span>
                    </div>
                </td>
                <td>
                    <div style="display: flex; flex-direction: column; gap: 0.25rem;">
                        <span class="badge ${statusBadge}" style="font-size: 0.9rem; padding: 0.5rem;">${status}</span>
                        <span style="font-size: 0.75rem; color: var(--text-muted);">${statusDetails}</span>
                    </div>
                </td>
            </tr>
        `;
    });

    tableBody.innerHTML = rows;
}
