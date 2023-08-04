let string = "";
let inputfield = document.querySelector("input");
let buttons = document.querySelectorAll("button");

Array.from(buttons).forEach((button) => {
    button.addEventListener('click',(e) => {
        handleButtonClick(e.target.innerHTML);
    });
}); 

document.addEventListener('keydown', (e)=>{
    if(e.key.match(/[0-9+/*-.]/)){
        console.log(e.key);
        handleButtonClick(e.key);
    }
    else if(e.key === "Enter"){
        string = eval(string);
        inputfield.value = string;
        e.preventDefault();
    }
});

function handleButtonClick(value){
    if(value === 'C'){
        string = string.slice(0,-1);
    }
    else if(value === 'AC'){
        string = "";
    }
    else if(value === '='){
        string = eval(string);
    }
    else {
        string += value;
    }
    inputfield.value = string;
}


