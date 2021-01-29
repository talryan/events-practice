
const buttonAlert = document.querySelector("#helicopter-parent > div > div > div > div > button:nth-child(1)") 

buttonAlert.addEventListener("click", function(){
    alert('I was clicked!');
});

const buttonConsole = document.querySelector("#helicopter-parent > div > div > div > div > button:nth-child(2)")

buttonConsole.addEventListener("click", function(){
    console.log("We're in the console! ");
});

const submitForm = document.querySelector("#comment-form")
submitForm.addEventListener("submit", function(event){ 
    event.preventDefault()
    let input = document.getElementById('new-comment') 
    const   = input.value
    // when click, take input and add to the comments container 
    // reset the form 

}
)

//take whatever is inputted into the comments container