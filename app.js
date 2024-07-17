const quizData = [{
        question: "Who is current prime  minister of Nepal?",
        a: "Puspakamal Dahal",
        b: "Naresh Bahadur Chand",
        c: "sher Bahadur deuba",
        d: "kp sharma oli",
        correct: "d",
    },
    {
        question: "who is the hitting fattest fifty in t20I?",
        a: "ds airre",
        b: "virat",
        c: "paras",
        d: "gyale",
        correct: "a",
    },
    {
        question: "who is captain of nepali cricket team?",
        a: "Sandy",
        b: "rohit",
        c: "sompal",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "Who won the copa america 2024?",
        a: "Brazil",
        b: "Argentina",
        c: "columbia",
        d: "urugbey",
        correct: "b",
    }
];
let index = 0;
let correct = 0,
    incorrect = 0,
    total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
    if (total === index) {
        return quizEnd()
    }
    reset()
    const data = quizData[index]
    questionBox.innerHTML = `${index + 1}) ${data.question}`
    allInputs[0].nextElementSibling.innerText = data.a
    allInputs[1].nextElementSibling.innerText = data.b
    allInputs[2].nextElementSibling.innerText = data.c
    allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
    "click",
    function() {
        const data = quizData[index]
        const ans = getAnswer()
        if (ans === data.correct) {
            correct++;
        } else {
            incorrect++;
        }
        index++;
        loadQuestion()
    }
)

const getAnswer = () => {
    let ans;
    allInputs.forEach(
        (inputEl) => {
            if (inputEl.checked) {
                ans = inputEl.value;
            }
        }
    )
    return ans;
}

const reset = () => {
    allInputs.forEach(
        (inputEl) => {
            inputEl.checked = false;
        }
    )
}

const quizEnd = () => {
    // console.log(document.getElementsByClassName("container"));
    document.getElementsByClassName("container")[0].innerHTML = `
        <div class="col">
            <h3 class="w-100"> Congrats , you've scored ${correct} / ${total} </h3>
        </div>
    `
}
loadQuestion(index);