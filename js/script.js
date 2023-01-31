//variable
const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";  
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "1234567890";
const symbolSet = "!@#$%^&*()_+/";

//get data from ids from html input box
const passBox = document.getElementById("pass-box");
const totalChar = document.getElementById("total-char");
const upperInput = document.getElementById("upper-case");
const lowerInput = document.getElementById("lower-case");
const numberInput = document.getElementById("numbers");
const symbolInput = document.getElementById("symbols");



const getRandomData = (dataSet) => {
  // console.log(dataSet.length);
  // console.log("random",Math.floor(Math.random()*dataSet.length));
  return dataSet[Math.floor(Math.random() * dataSet.length)]; 
  };
const generatePassword = (password = "") => {
  if (upperInput.checked) {
    password += getRandomData(upperSet);
  }
  if (lowerInput.checked) {
    password += getRandomData(lowerSet);
  }

  if (numberInput.checked) {
    password += getRandomData(numberSet);
  }

  if (symbolInput.checked) {
    password += getRandomData(symbolSet);
  }
  // console.log(password);
  
  if(password.length<totalChar.value){
    console.log(password);
    console.log("total",totalChar.value);
    return generatePassword(password)
  }
  //to display
  passBox.innerText=truncateString(password,totalChar.value);
};

function truncateString(str,num){
if(str.length>num){
  let subStr=str.substring(0,num);
  return subStr
}else{
  return str;
}
}

generatePassword()
document.getElementById("btn").addEventListener("click", function () {
  generatePassword();
});
// generatePassword();
