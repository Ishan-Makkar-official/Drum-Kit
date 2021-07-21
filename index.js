var n=document.querySelectorAll("button").length;
for(var i=0;i<n;i++)
{
  document.querySelectorAll(".set button")[i].addEventListener("click",function() {
    // alert("i got clicked");
    // var audio=new Audio('sounds/tom-1.mp3');
    // audio.play();
    // var drum;
    var character=this.innerHTML;

    makeSound(character);
    buttonAnimation(character);
  });
}

document.addEventListener("keydown",function(e)
{
  makeSound(e.key);
  buttonAnimation(e.key);
});


function buttonAnimation(currentKey)
{
  var btn=document.querySelector("."+currentKey);
  btn.classList.add("pressed");

  setTimeout(function()
{
  btn.classList.remove("pressed");
},100);
}
function makeSound(key)
{
  var audio;
  switch(key)
  {
    case "w":
    audio=new Audio("sounds/tom-1.mp3");
    // audio.play();
    break;

    case "a":
    audio=new Audio("sounds/tom-2.mp3");
    // audio.play();
    break;

    case "s":
    audio=new Audio("sounds/tom-3.mp3");
    // audio.play();
    break;

    case "d":
    audio=new Audio("sounds/tom-4.mp3");
    // audio.play();
    break;

    case "j":
    audio=new Audio("sounds/crash.mp3");
    // audio.play();
    break;

    case "k":
    audio=new Audio("sounds/kick-bass.mp3");
    // audio.play();
    break;

    case "l":
    audio=new Audio("sounds/snare.mp3");
    // audio.play();
    break;

    default:
    // audio=new Audio("sounds/kick-bass.mp3");
    // audio.play();
    console.log(character);

  }

  audio.play();
}
