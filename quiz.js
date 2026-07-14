let question = document.getElementById("question");
let answerInput = document.getElementById("answerInput");
let check_ans_btn = document.getElementById("check_ans_btn");
let wrong_ans = document.getElementById("wrong_ans");
let scoreDisplay = document.getElementById("score");
let display_answer = document.getElementById("display_answer");

let questions = [    
    
    {

        question: "2 + 2 = ?",
        answer: "4"

    },

    {

        question: "Capital of India?",
        answer: "Delhi"

    },

    {

        question: "India's Prime Minister?",
        answer: "Narendra Modi"        

    },

    {

        question: "25 + 68 = ?",
        answer: "93"        

    },

    {

        question: "5 + 5 = ?",
        answer: "10"        

    },

    {

        question: "5 + 5 = ?",
        answer: "10"        

    },
    
    {

        question: "5 + 5 = ?",
        answer: "10"        

    },

    {

        question: "5 + 5 = ?",
        answer: "10"        

    },

    {

        question: "5 + 5 = ?",
        answer: "10"        

    },

    {

        question: "5 + 5 = ?",
        answer: "10"        

    }

];

let score = 0;
let currentQuestion = 0;

displayQuestion();

function displayQuestion() {

    answerInput.value = "";

    if(currentQuestion < questions.length) {

        question.innerHTML = questions[currentQuestion].question;
    
    }
    else {

        question.innerHTML = "Quiz finished! Final score: " + score + "/10";
        scoreDisplay.innerHTML = "";
        // display_answer.innerHTML = "";

    }

}

check_ans_btn.addEventListener("click", () => {

    display_answer.innerHTML = "";
    wrong_ans.innerHTML = "";

    if(currentQuestion >= questions.length) {

        return;

    }

    if(answerInput.value === questions[currentQuestion].answer)
    {
        
        display_answer.innerHTML = "Correct answer";
        score++;
        scoreDisplay.innerHTML = "Score:" + score;
        currentQuestion++;
        displayQuestion();

    }
    else{

        wrong_ans.innerHTML = "Wrong answer";
        currentQuestion++;
        displayQuestion();

    }

})
