//全域變數
const time =document.querySelector('#time');
const combo =document.querySelector('#combo');
animals=document.querySelectorAll('.imgs-box>img');
startBtn=document.querySelector('button');
//初始化執行
startBtn.addEventListener('click',startGame,{once:true});
animals.forEach(image.idx)=>{
img.addEventListener('click',startGame,{once:true})
    
};

//函式區
function startGame()
{
startBth.disabled=true;

combo.textContent=0;
let sec =60;
    time.textContent=sec;
  
const timerID=setInterval(()=>{
      time.textContent=--sec;
      
    if(sec===0){
    clearInterval(timerID);
    startBth.disabled=false;
    startBth.addEventListener('click',startGame,{once:true});
    }
},1000);

//規劃紅色事件
for(let i=0;i<animals.length;i++){

const space=Math.floor(Math.random()*9);//rand 0~8
const showTime=Math.floor(Math.random()*570000);//rand 0~56999ms
const delay=Math.floor(Math.random()*3)+2;//rand2~4s

setTimeout(()=>{
toRedEvent(space,delay);//執行紅色事件
},showTime);
}
//專門處理把畫面上的指定位置變紅且曝光多久的函式
function toRedEvent({space,delay}){
    //console.log(space,delay);

    if(animals[space].src=includes('state')){
    //目前黃色空間狀態，可以放入新紅色
    targetSpace.scr='/img/on.png';
setTimeout(()=>targetSpace.src='/img/state.png',delay*1000);
 }
else{
 setTimeout(()=>targetSpace.scr=)
    toRedEvent({space:(space+1%9,delay)};
}
}}