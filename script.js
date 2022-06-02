const choose_color = document.getElementById('choose_color');
const main_color = document.querySelector('.maincol');
const lighter = document.querySelector('.lighter');
const morelighter = document.querySelector('.morelighter');
const darker = document.querySelector('.darker');
const moredarker = document.querySelector('.moredarker');
const lilcir = document.querySelector('.lilcir');
const circen = document.querySelector('.circen');
var movebtn = document.getElementById('movebtn');

choose_color.addEventListener('input', () =>{
    main_color.style.backgroundColor = choose_color.value;
    lilcir.style.backgroundColor = choose_color.value;
    lighter.style.backgroundColor = shadeColor1(choose_color.value, 20);
    morelighter.style.backgroundColor = shadeColor1(choose_color.value, 40);
    darker.style.backgroundColor = shadeColor1(choose_color.value, -20);
    moredarker.style.backgroundColor = shadeColor1(choose_color.value, -40);
});

function shadeColor1(color, percent) {
    var num = parseInt(color.slice(1),16), amt = Math.round(2.55 * percent), R = (num >> 16) + amt, G = (num >> 8 & 0x00FF) + amt, B = (num & 0x0000FF) + amt;
    return "#" + (0x1000000 + (R<255?R<1?0:R:255)*0x10000 + (G<255?G<1?0:G:255)*0x100 + (B<255?B<1?0:B:255)).toString(16).slice(1);
}

movebtn.onmousedown = function(event) {

    let shiftX = event.clientX - movebtn.getBoundingClientRect().left;
    let shiftY = event.clientY - movebtn.getBoundingClientRect().top;
    
    document.body.append(movebtn);

    moveAt(event.pageX, event.pageY);
  
    function moveAt(pageX, pageY) {
        movebtn.style.left = pageX - shiftX + 'px';
        movebtn.style.top = pageY - shiftY + 'px';
    }
  
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
  
    circen.addEventListener('mousemove', onMouseMove);
    movebtn.onmouseup = function() {
      circen.removeEventListener('mousemove', onMouseMove);
      movebtn.onmouseup = null;
    };
  };
  
  movebtn.ondragstart = function() {
    return false;
};