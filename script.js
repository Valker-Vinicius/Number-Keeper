const resultsPlace = document.querySelector('#results')
const select = document.querySelector('#table')
var numbers = []
var userInput

function addNumber() {
    userInput = document.getElementById("user-value")

    if ( Number(userInput.value) == 0 || Number(userInput.value) > 100 || numbers.includes(Number(userInput.value))) {
        alert("The value is invalid or already in use")
    } else {
        numbers.push(Number(userInput.value))
    
        const opt = document.createElement("option")
        opt.innerText = `${Number(userInput.value)} added`
        select.appendChild(opt)
    }

    userInput.value = ''
    userInput.focus()
}


function showResults() {
    resultsPlace.innerHTML = ""
    
    if (numbers.length == 0) {
        resultsPlace.innerHTML = "Please add numbers to continue"
    } else {
        let paragraph = document.createElement("p")
        
        let results = {
            length: numbers.length,
            bigger: Math.max(...numbers),
            smaller: Math.min(...numbers),
            some: 0,
        }
        
        for (number in numbers) {
            results.some += numbers[number]
        }
        Object.assign(results, {average: Number(results.some/numbers.length).toFixed(0)})
        
        paragraph.innerText = "Based in your numbers..."
        resultsPlace.appendChild(paragraph)
        
        for (key in results) {
            paragraph2 = document.createElement("p")
            paragraph2.innerText = `The ${key} is ${results[key]}`
            resultsPlace.appendChild(paragraph2)
        }
    }
}

$(document).ready(function(){ 
    $("#delete-all").click(function(){
        $("select").empty();
        numbers = []
    });
});