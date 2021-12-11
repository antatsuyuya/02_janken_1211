// ここからコードを書きます🤗

console.log("はじめてのジャバスクリプト");

console.log(23+5);
console.log(2000-1800,"2門目");
console.log(18+5);

const name="就職キャンプ太郎"

const point=50;
if (point >= 80){
console.log("素晴らしい！おめでとう！");
}else if(point < 80){
    console.log("もっと頑張りましょう！")
}

//画像

$(function(){
  $(".img-wrap1 img:not(:first-child)").hide();
  setInterval(function() {
    $(".img-wrap1 img:first-child").fadeOut("slow").next("img").fadeIn("slow").end().appendTo(".img-wrap1");
  },2000);
});


$(function(){
  $(".img-wrap2 img:not(:first-child)").hide();
  setInterval(function() {
    $(".img-wrap2 img:first-child").fadeOut("slow").next("img").fadeIn("slow").end().appendTo(".img-wrap2");
  },2000);
});


//↑画像
//\-----------------------------------------------------------------------------------


 //画像切り替え関数
function changeIMG(){

  window.addEventListener("devicemotion", function(evt){

    //加速度
    var x = evt.acceleration.x;
    var y = evt.acceleration.y;
    var z = evt.acceleration.z;  
    console.log(x);
    console.log(y);
    console.log(z);


  //画像番号を進める
  if (z > 0.1){
    document.getElementById("gazo").src="img/freeza2.jpg";
  }else if(x > 0.1){
    document.getElementById("gazo").src="img/freeza4.jpg";
  }else if(y > 0.05){
    document.getElementById("gazo").src="img/freeza5.jpg";
   }
   
  //画像を切り替える

}, );
}

setTimeout(function(){
  window.location.href = 'kadai2.html';
}, 30*1000);



//--------------------------------------------------------------------------


//----------------------------------------------------------------------------

