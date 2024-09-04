const correctAnswers = ["B", "B", "C", "D", "A", "A", "B", "C", "D", "A"];
const form = document.querySelector(".quiz-form"); 
const result = document.querySelector(".result");
const questions = document.querySelectorAll(".question");

//console.log(questions[1]);


form.addEventListener("submit", event => {
    event.preventDefault();
    
    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value, form.q6.value, form.q7.value, form.q8.value, form.q9.value, form.q10.value];
    //console.log(userAnswers);
    
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]){
            //score = score + 1;
            score += 1;
            questions[index].classList.add("correct")
        } else {
            questions[index].classList.add("wrong")
        }
    })
    //console.log(score);

    scrollTo(0, 0);
    result.classList.remove("hide");

    //console.log(result.querySelector("p").textContent);
    result.querySelector("p").textContent = `You scored ${score}/10!`;
});