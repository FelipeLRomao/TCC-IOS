let count = 1;
document.getElementById('slide1').checked = true;

setInterval( function(){
    nextImage();
}, 5000)

function nextImage(){
    count++;
    if(count>3){
        count = 1;
    }

    document.getElementById('slide'+count).checked = true;
}