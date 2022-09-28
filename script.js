const quizData = [
    {
        quest: "What is the most used programming language in 2019?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        quest: "Who is the Prime Minister of India?",
        a: "Arvind kejriwal",
        b: "Yogi Adityanath",
        c: "Narendra Modi",
        d: "Mamta benrjii",
        correct: "c",
    },
    {
        quest: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        quest: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
    {
        quest: "What is the most loved programming language?",
        a: "Java",
        b: "JavaScript",
        c: "Python",
        d: "C",
        correct: "b",
    }
];

const answersEle=document.querySelectorAll('.answer');
const quiz=document.getElementById('quiz');
const questionEl=document.getElementById('question');

const a_text=document.getElementById('a_text');
const b_text=document.getElementById('b_text');
const c_text=document.getElementById('c_text');
const d_text=document.getElementById('d_text');

const nextBtn=document.getElementById('nextOrSubmit');

let currentQuestion=0;
let score=0;

loadQuiz();

function loadQuiz(){
    //1. de select answers
    deSelectAnswers();

    // 2.get Question
    const currentquestionData=quizData[currentQuestion];
   
    // update UI
    questionEl.innerHTML=currentquestionData.quest;
    a_text.innerHTML=currentquestionData.a;
    b_text.innerHTML=currentquestionData.b;
    c_text.innerHTML=currentquestionData.c;
    d_text.innerHTML=currentquestionData.d;
}

function getSelectedOption(){
    let answer=undefined;
    answersEle.forEach((ans) => {
       if(ans.checked === true){
           answer= ans.id;
       }
    });
    return answer;
 }


 function deSelectAnswers(){
    answersEle.forEach((ans) => {
       ans.checked=false;
    });
 }
 

nextBtn.addEventListener('click',()=>{

    // 1. get selected answer
    const answer=getSelectedOption();

    if(answer){
        // 2. update score
        if(answer === quizData[currentQuestion].correct){
            score++;
        }

        // 3. move to next Question
        currentQuestion++;

        // 4 . load next Question / submit the test
        if(currentQuestion < quizData.length){
            loadQuiz();
        } else {
            // show Result
            quiz.innerHTML=`<h2> You answered correctly ${score}/${quizData.length} questions.
            <button onClick="location.reload()"> Reload Quiz </button>`;
            if(score < 2){
                quiz.style.backgroundColor='red';
            } else{
                quiz.style.backgroundColor="green";
            }
        }
    } else {
        alert('please select any one answer');
    }
})
