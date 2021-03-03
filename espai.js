var gLogo = document.getElementById("logo-espai");
var gCanvas = document.getElementById("espai");
var gContext = gCanvas.getContext("2d");
var gFrame = 0;

function pintar() {
  gFrame = (gFrame + 1) % 400;

  gContext.fillStyle="#fff";
  gContext.rect(0, 0, 320, 60);
  gContext.fill();
    
  gContext.drawImage(gLogo, 330 - gFrame * 2, 10);
  
  if ((gFrame > 310) && (gFrame % 20 < 10)) {
      gContext.fillStyle="#FF5A19";
      gContext.font = "35px Arial";
      gContext.fillText("Escola Espai", 60, 40);  
      gContext.strokeText("Escola Espai", 60, 40);     
  }
}

setInterval(pintar, 40);

