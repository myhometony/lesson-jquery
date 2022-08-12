//$(document).ready(function(){//(document).readyは省略可
  //$("body").html("<h1>Hello jQuery!!</h1>");
//});
//$( セレクタ ).メソッド ( パラメータ ) ;
//bodyタグ内のHTMLを、<h1>Hello JQuery!!</h1>で書き換えなさい

$(function(){
  $(".box1").slideDown(function(){
      $('.box1').css({
        'background-color': '#0000FF',
         'height': '100px',
         "weight":"200px"
      }).slideUp();
  });
});