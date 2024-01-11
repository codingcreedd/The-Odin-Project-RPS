const inputElement = document.querySelector('.username-input');

const playButton = document.querySelector('button');
const innerContainer = document.querySelector('.inner-container');
        
playButton.addEventListener('click', playGame);
inputElement.addEventListener('keypress', toggleNoUserName);

var username;


function toggleNoUserName(){
    if(inputElement.style.border === '1px solid red')
    {
        inputElement.style.border = '1px solid black';
    }

    if(innerContainer.lastChild.nodeName === 'SPAN')
            innerContainer.lastChild.remove();
}

function playGame(){
    const inputValue = inputElement.value;
    if(inputValue === ''){
        inputElement.style.border = '1px solid red';
        const noUserNameELement = document.createElement('span');
        noUserNameELement.classList.add('span');
        noUserNameELement.innerText = 'Enter username';
        innerContainer.appendChild(noUserNameELement);
    }
    else{
        localStorage.setItem('username', inputValue);
        window.location.href = 'game.html';
    }
}
   