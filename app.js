const correctAnswers = ['A', 'C', 'A', 'B'];

const form = document.querySelector('form');
const result = document.querySelector('.result');
const resText = document.querySelector('.result div p span');

form.addEventListener('submit', event => {
    event.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
    console.log(userAnswers);

    userAnswers.forEach((answer, index) => {
        if(answer == correctAnswers[index]) {
            score += 25;
        }
    });

    result.classList.remove('d-none');
    resText.textContent = score + '%';


    console.log("USER SCORE: ", score);
});