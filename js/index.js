let results_history = "";
let all_inputs = [];

document.getElementById("addButton").addEventListener("click", (event) => {
    main(event);
});

document.getElementById("substractButton").addEventListener("click", (event) => {
    main(event);
});

document.getElementById("multiplicationButton").addEventListener("click", (event) => {
    main(event);
});

document.getElementById("divisionButton").addEventListener("click", (event) => {
    main(event);
});

function main(event) {
    event.preventDefault();
    all_inputs.push(document.querySelector(".inputNumber").value);
    all_inputs.push(event.target.innerText);
    document.querySelector(".inputNumber").value = "";
}

document.querySelector(".resetButton").addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelector(".inputNumber").value = "";
    document.getElementById("resultValue").value = "";
});

document.querySelector(".equalButton").addEventListener("click", (event) => {
    event.preventDefault();
    all_inputs.push(document.querySelector(".inputNumber").value);
    all_inputs = all_inputs.join(" ");
    let final_result = eval(all_inputs);
    results_history = `${all_inputs} = ${final_result}`;
    document.getElementById("resultValue").value = final_result;
    document.getElementById("logInformation").value += `${results_history}\n`
    all_inputs = [];    
    document.querySelector(".inputNumber").value = "";
});