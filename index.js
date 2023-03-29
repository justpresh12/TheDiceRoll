function roll(){
  let heading = document.querySelector("h1");

  let randomNumber1 = Math.ceil(Math.random() * 6);
  let randomNumber2 = Math.ceil(Math.random() * 6);

  let imageSrc1 = "images/dice" + randomNumber1 + ".png";
  let imageSrc2 = "images/dice" + randomNumber2 + ".png";

  document.querySelector(".img1").setAttribute("src", imageSrc1);

  document.querySelector(".img2").setAttribute("src", imageSrc2);

  if(randomNumber1>randomNumber2){
    heading.innerHTML = "Player 1 wins"; 
  }
  else if(randomNumber1<randomNumber2){
    heading.innerHTML = "Player 2 wins"; 
  }
  else{
    heading.innerHTML = "Draw!";
  }
}