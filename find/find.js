let randomNumber =  parseInt(Math.floor((Math.random())*100));
let btn = document.querySelector("#button");
btn.addEventListener("click", find);
let guess = document.getElementById("change");

function find (){
    let inputNumber = parseInt(document.querySelector("#text").value);
    console.log(inputNumber);
    console.log(randomNumber);


    if (randomNumber>inputNumber){
        document.getElementById("result").innerText = "Numarani yukselt"
    }
    else if(randomNumber<inputNumber){
        document.getElementById("result").innerText = "Numarani alcalt"
    }
    else {
        document.getElementById("result").innerHTML = `correct ${guess}.onclick="reload(this)" `
        
        // location.reload() 
    }   
     function reload (el){
         el.location.reload()
     }
}





