
var btnBlack=document.getElementById('btn-1');
var btnRed=document.getElementById('btn-2');
var btnPurple=document.getElementById('btn-3');
var btnPink=document.getElementById('btn-4');
var imWatch=document.getElementById('imageWatch');
var timeFetch=document.getElementById('time-show');
var btnTime=document.getElementById('btn-time');
var btnHeart=document.getElementById('btn-heartRate');

btnBlack.addEventListener('click',function(){
    imWatch.src="iOeUBV7.png";
});


btnRed.addEventListener('click',function(){
    imWatch.src="PTgQlim.png";
});

btnPurple.addEventListener('click',function(){
    imWatch.src="Mplj1YR.png";
});

btnPink.addEventListener('click',function(){
    imWatch.src="xSIK4M8.png";
});

function timeOverlay(){
    var time=new Date().toLocaleTimeString();
    timeFetch.innerHTML=time;
    setInterval(timeOverlay,1000);
};
btnTime.addEventListener('click',timeOverlay);
function Heart()
{
    var w=(Math.random()*60)+60;
    w=Math.round(w)+"  Pulse";
    timeFetch.innerHTML=w;
}
btnHeart.addEventListener('click',Heart);