var prevScrollpos = window.pageYOffset;
var intervalID = window.setInterval(MechanicalSlider, 10);
var intervalID2;
var intervalID3;

var keyFrame = 51;
var finalInset = 100;
var inTransition = false;

var canChangeColor = true;

var startColorName;
var startColorPercent;
var endColorName;
var endColorPercent;

var keyP2 = false;

var mechBlueHeight;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav-bar").style.top = "0";
  } else {
    document.getElementById("nav-bar").style.top = "-90px";
  }
  prevScrollpos = currentScrollPos;
}

window.onload = function(){

  mechBlueHeight = $("#mechanical-image-blue").css("height");
  $("#mechanical-image-red").css("transform", "translate(0px, -"+ mechBlueHeight +")");
  $("#mechanical-image-container-bg").css("height", mechBlueHeight);

    $("#blue-li").mouseenter(
      function() {
        if (keyP2 == true && inTransition == false){
          keyFrame = 51;
        }
      }
    )
    $("#red-li").mouseenter(
      function() {
        if (keyP2 == false && inTransition == false){
          keyFrame = 949;
        }
      }
    )

    $("#color1").click(function(){
      
      console.log("color 1 clicked");
      if($("#color1").hasClass("ball-selected") == false && canChangeColor == true){
        clearInterval(intervalID2);
        intervalID2 = window.setInterval(SliderCheck, 1250);
        canChangeColor = false;
        if ($("#color2").hasClass("ball-selected")){
          intervalID3 = window.setInterval(changeColor, 15);
          startColorName = "gray";
          startColorPercent = 0;
          endColorName = "darkred";
          endColorPercent = 100;
        } else if ($("#color3").hasClass("ball-selected")){
          intervalID3 = window.setInterval(changeColor, 15);
          startColorName = "gray";
          startColorPercent = 0;
          endColorName = "pink";
          endColorPercent = 100;
        }
      $("#color2").removeClass("ball-selected");
      $("#color3").removeClass("ball-selected");
      $("#color1").addClass("ball-selected");
      $("#silver-image").addClass("transition-in").removeClass("transition-out").removeClass("left");
      $("#pink-image").addClass("transition-out").removeClass("transition-in");
      $("#red-image").addClass("transition-out").removeClass("transition-in");
      $("#buy-now-button").removeClass("discontinued");
      $("#bnowp").text("Buy Now");
    }
    });

    $("#color2").click(function(){
      
      console.log("color 2 clicked");
      if($("#color2").hasClass("ball-selected") == false && canChangeColor == true){
        canChangeColor = false;
        clearInterval(intervalID2);
        intervalID2 = window.setInterval(SliderCheck, 1250);
        if ($("#color1").hasClass("ball-selected")){
          intervalID3 = window.setInterval(changeColor, 15);
          startColorName = "darkred";
          startColorPercent = 0;
          endColorName = "gray";
          endColorPercent = 100;
        } else if ($("#color3").hasClass("ball-selected")){
          intervalID3 = window.setInterval(changeColor, 15);
          startColorName = "darkred";
          startColorPercent = 0;
          endColorName = "pink";
          endColorPercent = 100;
        }
      $("#color2").addClass("ball-selected");
      $("#color3").removeClass("ball-selected");
      $("#color1").removeClass("ball-selected");
      $("#silver-image").addClass("transition-out").removeClass("transition-in");
      $("#pink-image").addClass("transition-out").removeClass("transition-in");
      $("#red-image").addClass("transition-in").removeClass("transition-out").removeClass("left");
      $("#buy-now-button").addClass("discontinued");
      $("#bnowp").text("Discontinued");
    }
    });

    $("#color3").click(function(){
      
      console.log("color 3 clicked");
      if($("#color3").hasClass("ball-selected") == false && canChangeColor == true){
        canChangeColor = false;
        clearInterval(intervalID2);
        intervalID2 = window.setInterval(SliderCheck, 1250);
        if ($("#color1").hasClass("ball-selected")){
        intervalID3 = window.setInterval(changeColor, 15);
        startColorName = "pink";
        startColorPercent = 0;
        endColorName = "gray";
        endColorPercent = 100;
      } else if ($("#color2").hasClass("ball-selected")){
        intervalID3 = window.setInterval(changeColor, 15);
        startColorName = "pink";
        startColorPercent = 0;
        endColorName = "darkred";
        endColorPercent = 100;
      }
      $("#color2").removeClass("ball-selected");
      $("#color3").addClass("ball-selected");
      $("#color1").removeClass("ball-selected");
      $("#silver-image").addClass("transition-out").removeClass("transition-in");
      $("#pink-image").addClass("transition-in").removeClass("transition-out");
      $("#pink-image").removeClass("left");
      $("#red-image").addClass("transition-out").removeClass("transition-in");
      $("#buy-now-button").addClass("discontinued");
      $("#bnowp").text("Discontinued");
    }
    });

    $("#select-blue").click(function(){
      if(!$("#select-blue").hasClass("switch-selected")){
        $("#select-blue").addClass("switch-selected");
        $("#select-red").removeClass("switch-selected");
        $("#select-red").attr("src", "_resources/red-switch-choose.png");
        $("#select-blue").attr("src", "_resources/blue-switch-choose-s.png");
      }
    })

    $("#select-red").click(function(){
      if(!$("#select-red").hasClass("switch-selected")){
        $("#select-red").addClass("switch-selected");
        $("#select-blue").removeClass("switch-selected");
        $("#select-red").attr("src", "_resources/red-switch-choose-s.png");
        $("#select-blue").attr("src", "_resources/blue-switch-choose.png");
      }
    })

    $("#buy-now-button").click(function(){
      if($("#color1").hasClass("ball-selected") && $("#select-red").hasClass("switch-selected")){
        window.open("https://www.gearbest.com/keyboards/pp_603453.html?wid=1527929#goodsDetail","_blank");
      } else if ($("#color1").hasClass("ball-selected") && $("#select-blue").hasClass("switch-selected")){
        window.open("https://www.gearbest.com/keyboards/pp_298472.html?wid=1527929#goodsDetail","_blank");
      }
    })

    $("#tomechanical").click(function(){scrollTo("#mechanical");});
    $("#tolighting").click(function(){scrollTo("#lighting");});
    $("#tobuy").click(function(){scrollTo("#buy");});
    $("#towholesale").click(function(){scrollTo("#wholesale");});
    $("#dropdown-a").click(function(){scrollTo("#about");});
    $("#home-a").click(function(){scrollTo("#landing-block");});

  }


window.onresize = function(){

  mechBlueHeight = $("#mechanical-image-blue").css("height");
  $("#mechanical-image-red").css("transform", "translate(0px, -"+ mechBlueHeight +")");
  $("#mechanical-image-container-bg").css("height", mechBlueHeight);
  

}

function SliderCheck(){

  console.log("slider check started");
  
  if(!$("#silver-image").is(":animated") && $("#silver-image").css("opacity") == 0.95){
    if($("#silver-image").hasClass("transition-out")){
      $("#silver-image").addClass("left");
    }}
    if(!$("#red-image").is(":animated") && $("#red-image").css("opacity") == 0.95){
      if($("#red-image").hasClass("transition-out")){
        $("#red-image").addClass("left");
    }}
    if(!$("#pink-image").is(":animated") && $("#pink-image").css("opacity") == 0.95){
      if($("#pink-image").hasClass("transition-out")){
        $("#pink-image").addClass("left");
    }}
    console.log("slider check done");
    canChangeColor = true;
    clearInterval(intervalID2);

  }

function MechanicalSlider(){
    if (keyFrame < 0){
      keyP2 = false;
    }
    if (keyFrame > 1000){
      keyP2 = true;
    }

    if (keyP2 == true){
      keyFrame--;
    } else { keyFrame++;}

    if (keyFrame > 950){
      LowerInset();
      inTransition = true;
    }
    if (keyFrame < 50){
      AddInset();
      inTransition = true;
    }
    if (keyFrame > 50 && keyFrame < 950){
      inTransition = false;
    }
    if (finalInset > 100){
      finalInset = 100;
    } else if (finalInset < 0){
      finalInset = 0;
    }
}

function LowerInset(){
  finalInset--
  $("#mechanical-image-red").css("clip-path", "inset(0 "+ finalInset +"% 0 0)");
}

function AddInset(){
  finalInset++
  $("#mechanical-image-red").css("clip-path", "inset(0 "+ finalInset +"% 0 0)");
}

function changeColor(){
  
    startColorPercent+= 2;
    endColorPercent-= 2;
    $("#buy-color-container").css("background", "linear-gradient("+startColorName+" "+ startColorPercent+"%, "+endColorName+" "+endColorPercent +"%)");
    
    if (startColorPercent >=  100){
      clearInterval(intervalID3);
    }
  }

function scrollTo(destination){
  console.log("foi callado")
  $([document.documentElement, document.body]).animate({
    scrollTop: $(destination).offset().top
}, 1000);
}
