let UserScore = 0;
let CompScore = 0;


let result = document.querySelector('#btn');
let genChoice = ()=>{
    const option =["rock","paper","scissor"];
    let choice = Math.floor(Math.random()*3);
    return option[choice];
}

const gameDraw = ()=>{
    result.innerText = `Game was drawn ! Play Again`;
    result.style.backgroundColor = `#e8e268`;
    result.style.color = "black";
    
}

function winner(userWin, compChoice, userChoice) {
    if (userWin) {
        UserScore++;
        document.querySelector('#uscore').innerHTML = UserScore;
        result.innerText = `You won ! ${userChoice} beats ${compChoice}`;
        result.style.backgroundColor = '#7ff090';
    result.style.color = "black";

    }

    else {
        CompScore++;
        result.innerText = `Opponent won ${userChoice} loses to ${compChoice}`;
        result.style.backgroundColor = '#f04532';
        document.querySelector('#cscore').innerHTML = CompScore;
    result.style.color = "black";


    }
}


const user = document.querySelectorAll('.choices');
console.log(user)
user.forEach((choice)=>{
    choice.addEventListener("click",()=>{
      const userChoice = choice.getAttribute('id');
      console.log("choice is selected"+ choice.getAttribute('id'))
      console.log(userChoice)
      playGame(userChoice);
    })
})

playGame = (userChoice)=>{
    const compChoice = genChoice();
    console.log(`comp choice is ${compChoice}`)
    let userWin = true;
    if(userChoice===compChoice)
    {
        console.log("game draw");
        gameDraw();
        
    }
    else
    {
        
        if(userChoice=="rock")
        {
            //scissor, paper
            userWin = compChoice===`scissor`?true:false;
        }
        else if(userChoice=="paper")
        {
            //rock , scissor
            userWin= compChoice==="rock"?true:false;
        }
        else 
        {
            //rock , paper
            userWin = compChoice==="paper"?true:false;
        }
        winner(userWin,compChoice,userChoice);
    }
      
}
