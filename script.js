let nb_stops = 10; // 10 color stops should be enough
let dir = "left"; // left, right, top, bottom

function SetupRainbow() {
  var rainbowStr = GetRainbowString(nb_stops, 80, 50);
  var oppositeDir = (dir==="left"?"right":(dir==="right"?"left":(dir==="top"?"bottom":"top")));
  var css = '.rainbowText {\
   background-clip: text;\
   color: transparent;\
   -webkit-background-clip: text;\
   -webkit-text-fill-color: transparent;\
   background-image: -webkit-linear-gradient(' + dir + ',' + rainbowStr + '); \
   background-image: linear-gradient(to ' + oppositeDir + ',' + rainbowStr + ') \
}'

  var style = document.createElement("style");
  style.type = 'text/css';
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
  document.head.appendChild(style);
}


// function that generate the rainbow string
function GetRainbowString(nbStops, saturation, luminosity) {
  let gap = 360 / nbStops,
    colors = [];
  for (let i = 0; i < nbStops; i++) {
    colors.push("hsl(" + (i * gap) + "," + saturation + "%," + luminosity + "%)");
  }
  return colors.join();
}



window.addEventListener("load", function() {
  SetupRainbow();
});
