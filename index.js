var NumberOfButton = document.querySelectorAll(".drum").length;

for(var i = 0 ; i < NumberOfButton ; i++ )
{
  document.querySelectorAll("button")[i].addEventListener("click",clickDetect);
}

function clickDetect()
{
  var innerHTML = this.innerHTML;
  musicCall(innerHTML);
  buttonAnimation(innerHTML);
}

document.addEventListener("keydown",keyDetect);

function keyDetect(event)
{
  var insideAlpha = event.key;
  musicCall(insideAlpha);
  buttonAnimation(insideAlpha);
}

function musicCall(letter)
{

    switch (letter)
    {

      case "w":
        var tom1 = new Audio("sounds/tom-1.mp3")
        tom1.play();
      break;

      case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
      break;

      case "s":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
      break;

      case "d":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
      break;

      case "j":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
      break;

      case "k":
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
      break;

      case "l":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
      break;

      default:
      console.log("invalid");

    }

}

function buttonAnimation(currentKey)
{
  var requiredKey = document.querySelector("." + currentKey);
  requiredKey.classList.add("pressed");
  requiredKey.classList.add("colorChange");

  setTimeout(function(){
    requiredKey.classList.remove("pressed");
    requiredKey.classList.remove("colorChange");
  } , 100 );

}
