canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

var lastPostionOfX, lastPositionOfY;
var color="black";
var widthOfLine=2;
var width=screen.width;
var newWidth=screen.width-70;
var newHeight=screen.height-300;
if (width<992)
{document.getElementById("myCanvas").width=newWidth;
document.getElementById("myCanvas").height=newHeight;
document.body.style.overflow=hidden;

}


canvas.addEventListener("touchmove",myTouchMove);
function myTouchMove(e){
    currentPositionOfMouseX=e.touches[0].clientX-canvas.offsetLeft;
    currentPositionOfMouseY=e.touches[0].clientY-canvas.offsetTop;
    ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=widthOfLine
        console.log("lastPositionOfXAndYCordinates=");
        console.log("x="+lastPostionOfX+"y="+lastPositionOfY);
        ctx.moveTo(lastPostionOfX,lastPositionOfY);
        console.log("currentPositionOfXAndYCordinates=");
        console.log("x="+currentPositionOfMouseX+"y="+currentPositionOfMouseY); 
        ctx.stroke();
        lastPostionOfX=currentPositionOfMouseX;
        lastPositionOfY=currentPositionOfMouseY;
        
    
}
    function clearArea(){
        ctx.clearRect(0,0,ctx.canvas.width,
            ctx.canvas.height)
    }
    canvas.addEventListener("touchstart",myTouchStart);
    function myTouchStart(e){
        console.log("touchstart");
        color = document.getElementById("color").value;
         width_of_line = document.getElementById("width_of_line").value;
        lastPostionOfX=e.touches[0].clientX-canvas.offsetLeft;
        lastPositionOfY=e.touches[0].clientY-canvas.offsetTop;

    }