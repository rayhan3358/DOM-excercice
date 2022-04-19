/*
*/
newPageTitle = 'Modifing the DOM';
document.title = newPageTitle;

function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
 console.log(bgColor);
  
    document.body.style.background = bgColor;
    }

random_bg_color();

for (let i = 0; i < document.body.childNodes.length; i++) {
    console.log(document.body.childNodes[i]) 
  }
  for (let elem of document.body.children) {
    console.log(elem);
  }
  
               

