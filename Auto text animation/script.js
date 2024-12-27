 const containerEl = document.querySelector(".container")
 

 const career = ["Student","Trainee", "Developer","Freelancer","Instructor"]

 let careerIndex =0
 let charaterIndex = 0
 
 updateText()
 function updateText(){
    charaterIndex++
    containerEl.innerHTML = `
    <h1>I am ${career[careerIndex].slice(0,1) === "I" ? "an": "a"} ${career[careerIndex].slice(0,charaterIndex)}</h1>

`;


if(charaterIndex === career[careerIndex].length){
    careerIndex++
    charaterIndex =0
}
if(careerIndex === career.length){
    careerIndex = 0
}
setTimeout(updateText,400)
 }
 