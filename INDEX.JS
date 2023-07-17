const getColor =() => {
    const randomNumber = Math.floor(Math.random() * 8765+764);
    const randomCode = "#" + randomNumber.toString(16);
    document.body.style.background = randomCode;
    console.log(randomNumber, randomCode);
  }
  
  document.getElementById("btn").addEventListener(
    "click",
    getColor
  )
  
  // 16777215