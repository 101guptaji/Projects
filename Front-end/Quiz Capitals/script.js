// Correct answers map
    const correctAnswers = {
        q1: 'c', // Paris
        q2: 'a', // Madrid
        q3: 'c', // Rome
        q4: 'b', // Berlin
        q5: 'b', // London
        q6: 'c'  // Tokyo
};
    
function submitQuiz(event) {
    event.preventDefault();

    let score = 0;
    const totalQuestions = Object.keys(correctAnswers).length;

    for (let key in correctAnswers) {
        let selected = document.querySelector(`input[name=${key}]:checked`);
        if (selected && selected.value == correctAnswers[key]) {
            score++;
        }
    }

    const result = document.getElementById("result");
    result.innerHTML = `You got ${score} out of ${totalQuestions} correct`;

    // Show summary button when quiz is submitted
    document.getElementById('summaryButton').style.display = 'block';
}

function viewSummary() {
    const summaryDiv = document.getElementById('summary');
    const correctAnswersText = `
        <h3>Correct Answers:</h3>
        <ol>
            <li>Paris</li>
            <li>Madrid</li>
            <li>Rome</li>
            <li>Berlin</li>
            <li>London</li>
            <li>Tokyo</li>
        </ol>
    `;
    summaryDiv.innerHTML = correctAnswersText;
}