const btnNumbers = document.querySelectorAll('.numbers');
const step1 = document.getElementsByClassName('step-1');
const styleSheet = document.styleSheets[0];
const steps = document.querySelectorAll('.form-step');

console.log(steps)
console.log(steps[0])

// styleSheet.insertRule('.step-1 { display: none; }', styleSheet.cssRules.length)
// isso torna possível acessar e modificar o aquivo css

btnNumbers.forEach((element) => {
    element.addEventListener('click', (event) => {
        console.log(event.target.textContent)

        if (event.target.textContent == 1) {
            styleSheet.insertRule('.step-1 { display: block; }', styleSheet.cssRules.length)
            styleSheet.insertRule('.step-2 { display: none; }', styleSheet.cssRules.length)
            styleSheet.insertRule('.step-3 { display: none; }', styleSheet.cssRules.length)
            styleSheet.insertRule('.step-4 { display: none; }', styleSheet.cssRules.length)
            styleSheet.insertRule('.step-5 { display: none; }', styleSheet.cssRules.length)
        }
        else if (event.target.textContent == 2) {
            styleSheet.insertRule('.step-1 { display: none; }', styleSheet.cssRules.length)
            styleSheet.insertRule('.step-2 { display: block; }', styleSheet.cssRules.length)
            styleSheet.insertRule('.step-3 { display: none; }', styleSheet.cssRules.length)
            styleSheet.insertRule('.step-4 { display: none; }', styleSheet.cssRules.length)
            styleSheet.insertRule('.step-5 { display: none; }', styleSheet.cssRules.length)
        } 
        else if (event.target.textContent == 3) {
            styleSheet.insertRule('.step-1 { display: none; }', styleSheet.cssRules.length)
            styleSheet.insertRule('.step-2 { display: none; }', styleSheet.cssRules.length)
            styleSheet.insertRule('.step-3 { display: block; }', styleSheet.cssRules.length)
            styleSheet.insertRule('.step-4 { display: none; }', styleSheet.cssRules.length)
            styleSheet.insertRule('.step-5 { display: none; }', styleSheet.cssRules.length)
        }
        else if (event.target.textContent == 4){  
                styleSheet.insertRule('.step-1 { display: none; }', styleSheet.cssRules.length)
                styleSheet.insertRule('.step-2 { display: none; }', styleSheet.cssRules.length)
                styleSheet.insertRule('.step-3 { display: none; }', styleSheet.cssRules.length)
                styleSheet.insertRule('.step-4 { display: block; }', styleSheet.cssRules.length)
                styleSheet.insertRule('.step-5 { display: none; }', styleSheet.cssRules.length)
        }
        else {  
            styleSheet.insertRule('.step-1 { display: none; }', styleSheet.cssRules.length)
            styleSheet.insertRule('.step-2 { display: none; }', styleSheet.cssRules.length)
            styleSheet.insertRule('.step-3 { display: none; }', styleSheet.cssRules.length)
            styleSheet.insertRule('.step-4 { display: none; }', styleSheet.cssRules.length)
            styleSheet.insertRule('.step-5 { display: block; }', styleSheet.cssRules.length)
    }

    })
})


/*console.log(btnNumbers);
console.log(step1)*/;


