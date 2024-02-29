let btn = document.querySelectorAll(".button-option");
let popup = document.querySelector(".popup");
let newgame_btn = document.getElementById("new-game");
let restart_btn = document.getElementById("restart");
let display_message = document.getElementById("message");

// All the possible winning casue of any player
let win_pattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [1, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];




let X_turn = true;
let count=0;

btn.forEach((element)=>{
    element.addEventListener("click", ()=>{
        if(X_turn){
            X_turn=false;
            element.innerText = "X";
            element.disabled = true;
        } else{
            X_turn=true;
            element.innerText = "O";
            element.disabled = true;
        }


        count++;
        if(count == 9){
            // It's a draw since there are a total of a 9 boxed
            drawFunction();
        }
        // check for win on every click
        winChecker();
    });
});

const winChecker = ()=>{
    // loop through all win pattern
    for(let i of win_pattern){
        let [element1, element2, element3] = [
            btn[i[0]].innerText,
            btn[i[1]].innerText,
            btn[i[2]].innerText,
        ];
 
        // Check if elements are filled
        // If 3 empty elements are same and would give will would
        if(element1!="" && element2!="" && element3!=""){
            if(element1==element2 && element2==element3){
                // If all 3 buttons have same values then pass the value to winFunction
                winFunction(element1);
            }
        }
    }
}



// New game
newgame_btn.addEventListener("click", ()=>{
    count = 0;
    enableButtons();
});
restart_btn.addEventListener("click", ()=>{
    count = 0;
    enableButtons();
});




// This function is Executed when a player wins
const winFunction = (letter)=>{
    disableButtons();
    if(letter == "X"){
        display_message.innerHTML = "&#x1F389; <br> 'X' WINS";
    } else{
        display_message.innerHTML = "&#x1F389; <br> 'O' WINS";
    }
};


// When the gane is DRAW...
const drawFunction = ()=>{
    disableButtons();
    display_message.innerHTML = "&#x1F60E; <br> It's Draw";
}


// Disable all buttons 
const disableButtons = () =>{
    btn.forEach((element)=>(element.disabled = true));
    
    // Enable popup
    popup.classList.remove("hide");
}


// Enable all buttons (For New Game and Restart)
const enableButtons = ()=>{
    btn.forEach((element)=>{
        element.innerText = "";
        element.disabled = false;
    });
    
    // disable popup
    popup.classList.add("hide");
};




//  Enable Buttons and disable popup on page load
window.onload = enableButtons;