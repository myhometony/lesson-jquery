//$(document).ready(function(){//(document).readyは省略可
  //$("body").html("<h1>Hello jQuery!!</h1>");
//});
//$( セレクタ ).メソッド ( パラメータ ) ;
//bodyタグ内のHTMLを、<h1>Hello JQuery!!</h1>で書き換えなさい

// $(function(){
//   $(".box1").slideDown(500,function(){
//       $('.box1').css({
//         'background-color': '#0000FF',
//          'height': '100px',
//          "weight":"200px"
//       }).slideUp(900);
//   });
// });
//javascriptでは引数の中に関数を入れられる
//アニメーションの速度はslideDown()の第一引数に数字を入力
//（単位はミリ秒なので、1秒の場合は1000）



// $(function(){
//   $(".box1").on("click",function(){//クリックすると
//     $(".box1").addClass("box1-ext");//処理起動
//   });
//   $('.box1').mouseout(function(){//マウスを離すと
//     $('.box1').removeClass("box1-ext");//処理解除
//   });
// });



// $(function(){
//   $(".bg1").on("click",function(){
//     $(".bg1").slideUp();
//   });

//   $('.bg2').on('click', function(){
//     $('.bg2').slideUp();
//   });

//   $('.bg3').on('click', function(){
//     $('.bg3').slideUp();
//   });

//   $('.bg4').on('click', function(){
//     $('.bg4').slideUp();
//   });
// });
//↓変更後


// $(function(){
//   $('.box1').on('click', function(){
//     $(this).slideUp();
//   });
// });
//box1クラスがクリックされたとき、
//this（クリックされた要素）のみslideUpさせる


$(function(){
  $('button').on('click', function(){
    $('ul').children().css('color','red');
  });
});//HTML要素(ここではul)直下のすべての子要素