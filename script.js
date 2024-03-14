const textInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const result = document.getElementById('result');
  
//  added Event Listener on checkBtn to check palindrome

checkBtn.addEventListener('click', () => {
    
    if(textInput.value === ""){
        return alert("Please input a value");
    }

    const  text = textInput.value;
    const textLowerCase = text.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    const reverseText = textLowerCase.split('').reverse().join('');
    if(textLowerCase === reverseText){
        result.innerText = `${text} is a Palindrome`;
    }
    else{
        result.innerText = `${text} is not a Palindrome`;
    }
});
 
