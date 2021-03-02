
//Querying the DOM (reaching in and selecting elements to change, delete or add HTML tags)
//const mainText = document.getElementById('mainText');
//mainText.innerHTML = '<span style="color:red;">Changed</span>';
//This will change the element specified "mainText" and change it to a span element with the new data 


//This is a function that handles the action of the button being clicked
let i = 0;

function clickHandler(){
    const mainText = document.getElementById('mainText');
    mainText.innerHTML = '<span style="color:red;">The DOM has changed</span>';
    i++;
    
    if(i%2 == 0){
        mainText.innerHTML = '<span style="color:Blue;">I\'m Blue!</span>';
    }
}