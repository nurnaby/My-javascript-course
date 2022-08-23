 for (i = 0; i < 3; i++) {

     document.querySelectorAll(".audio_btn")[i].addEventListener("click", function() {
         var text = this.innerHTML;
         audioPlay(text);
         console.log(text);
     });
 }



 function audioPlay(text) {

     switch (text) {
         case "a":
             var audio = new Audio('sound/a.mp3');
             audio.play();
             break;
         case "b":
             var audio = new Audio('sound/b.mp3');
             audio.play();
             break;
         case "c":
             var audio = new Audio('sound/b,mp3');
             audio.play();
             break;
     }
 }