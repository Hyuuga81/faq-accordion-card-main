const qna = document.querySelectorAll('.qna');

for (let item of qna) {
    const arrow = item.querySelector('.q-block img');
    const answer = item.querySelector('.answer');
    const question = item.querySelector('.question');

    question.addEventListener('click', function() {
        showAnswer();
    });

    arrow.addEventListener('click', function() {
        showAnswer();
    });

    // Function to show answer
    const showAnswer = () => {
        if (answer.classList.contains('hide')) {
            answer.classList.remove('hide');
            question.style.fontWeight = 'bolder';
            arrow.style.transform = 'rotate(180deg)';
        } else {
            answer.classList.add('hide');
            question.style.fontWeight = 'normal';
            arrow.style.transform = 'rotate(360deg)';
        }
    };
}
