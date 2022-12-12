const quizData = [
    {
        question: "Which built-in method calls a function for each element in the array?",
        a: "while()",
        b: "loop()",
        c: "forEach()",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "Which built-in method reverses the order of the elements of an array?",
        a: "changeOrder(order)",
        b: "reverse()",
        c: "sort(order)",
        d: "None of the above",
        correct: "b",
    },
    {
        question: "Which of the following is a valid type of function javascript supports?",
        a: "named function",
        b: "anonymous function",
        c: "Both the above",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];


let submitBtn = document.getElementById('submit');
let incre = 0

let currentQuiz = 0
let score = 0

let a;
let b;
let c;
let d;


loadQuiz()


function loadQuiz() {
    document.getElementById('question').innerText = quizData[incre].question
    document.getElementById('a_text').innerHTML = quizData[incre].a
    document.getElementById('b_text').innerHTML = quizData[incre].b
    document.getElementById('c_text').innerHTML = quizData[incre].c
    document.getElementById('d_text').innerHTML = quizData[incre].d
}


function deselectAnswers() {



    a = document.getElementById('a')
    b = document.getElementById('b')
    c = document.getElementById('c')
    d = document.getElementById('d')

    a.checked = false;
    b.checked = false;
    c.checked = false;
    d.checked = false;


}

function getSelected() {
    a = document.getElementById('a')
    b = document.getElementById('b')
    c = document.getElementById('c')
    d = document.getElementById('d')
    if (incre === 0 && c.checked == true) {
        document.getElementById('c_text').innerHTML = quizData[incre].c + " " + "is correct"
    }

    if (incre === 1 && b.checked == true) {
        document.getElementById('b_text').innerHTML = quizData[incre].b + " " + "is correct"
    }

    if (incre === 2 && c.checked == true) {
        document.getElementById('c_text').innerHTML = quizData[incre].c + " " + "is correct"
    }

    if (incre === 3 && b.checked == true) {
        document.getElementById('b_text').innerHTML = quizData[incre].b + " " + "is correct"
    }



}

submitBtn.addEventListener('click', () => {
    incre = incre + 1
    if (incre >= quizData.length) {
        document.getElementById('question').innerText = "End"

        document.getElementById('a_text').innerHTML = ""
        document.getElementById('b_text').innerHTML = ""
        document.getElementById('c_text').innerHTML = ""
        document.getElementById('d_text').innerHTML = ""
    }
    else {
        loadQuiz()
        deselectAnswers()
        getSelected()


    }
})


