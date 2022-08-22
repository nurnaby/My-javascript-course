 for (i = 0; i < 3; i++) {

     document.querySelectorAll(".audio_btn")[i].addEventListener("click", function() {
         var text = this.innerHTML;

         console.log(text);
         switch (text) {
             case "a":

         }

         var audio = new Audio('audio_file.mp3');
         audio.play();
     });
 }