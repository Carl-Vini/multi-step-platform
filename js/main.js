const btnNumbers = document.querySelectorAll('.numbers');
const step1 = document.getElementsByClassName('step-1');
const styleSheet = document.styleSheets[0];

console.log(styleSheet);

// styleSheet.insertRule('.step-1 { display: none; }', styleSheet.cssRules.length)
// isso torna possível acessar e modificar o aquivo css

btnNumbers.forEach( (element) => {
    element.addEventListener('click', (event) => {
        console.log(event.target.textContent)

        if (event.target.textContent != 1 ) {
            styleSheet.insertRule('.step-1 { display: none; }', styleSheet.cssRules.length)
        }
    })
})


console.log(btnNumbers);
console.log(step1); 


function hideStep(step) {
    step.style.display = 'none'
}