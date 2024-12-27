


const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")


const handowNumber = Math.round(Math.random()*10)



let xAttempts = 0

function handowTryClick(event){
    event.preventDefault()

    const inpultNumber = document.querySelector('#inpultNumber')
    
    xAttempts++
    

    if(Number(inpultNumber.value) == handowNumber){
        screen1.classList.add("hide")
        screen2.classList.remove("hide")
        document.querySelector(".screen2 h2").innerText =`you hit in ${xAttempts} attempts `
        
    }else{
        document.querySelector(".screen1 button").innerText = `try again`
        document.querySelector(".color1").innerText = `Change the number and try again`
        inpultNumber.value = ""       
    }

    console.log("correct number " + handowNumber)
    console.log("you number " + inpultNumber.value)
    console.log("tentativas " + xAttempts)
}

 
const btTry = document.querySelector('#btnTry')
const pyagain = document.querySelector(".pyAgain")

btTry.addEventListener("click", handowTryClick)

pyagain.addEventListener('click', function(){
    screen1.classList.remove("hide")
    screen2.classList.add("hide")
    xAttempts = 0
    inpultNumber.value = "" 
} )



