 var twobombSlider  = (function(){
var drag = false;
var values = [];

    
$(".slide").each(function(i,e){
  updateView(e);
});
$(".slide>.bar>.lp,.slide>.bar>.rp").bind("mousedown",function(){
  drag = $(this);
})
$(document).bind("mousemove",function(e){
  if(!drag)
    return;
   var x = (e.pageX - $(drag).outerWidth()/2 - $(drag).parent().parent().offset().left)/$(drag).parent().parent().outerWidth();
   if(x < 0 ) x = 0;
   if(x > 1) x = 1;
   var rp = $(drag).parent().find(".rp");
   var lp = $(drag).parent().find(".lp");
   if($(drag).hasClass("lp") && x > $(rp).attr("data-pos") ){
      $(rp).attr("data-pos",x);
   }
   if($(drag).hasClass("rp") && x < $(lp).attr("data-pos") ){
      $(lp).attr("data-pos",x);
   }
   $(drag).attr("data-pos",x);
   updateView($(drag).parent().parent());
});
$(document).bind("mouseup",function(){
  drag = false;
});
function updateView(slide){
  var startVal = parseInt($(slide).find(".bar").data("start"));
  var endVal = parseInt($(slide).find(".bar").data("end"));
  if(startVal > endVal)
    endVal = startVal;
  startVal = startVal || 0;
  endVal = endVal || 100;
  var values = [];
  for(var i = startVal; i <= endVal;i++)
    values.push(i);
  var l  =$(slide).find(".lp").attr("data-pos");
  var r  =$(slide).find(".rp").attr("data-pos");
  var x = $(slide).outerWidth() * l;
  var w = (r - l)*$(slide).outerWidth();
  $(slide).find(".bar").css({left:x+"px",width:w+"px"});
  var index = Math.round(values.length*l);
  if(index >= values.length)
    index = values.length-1;
  $(slide).find(".lp").html("<span>"+values[index]+" BYN" +"</span>");
  index = Math.round(values.length*r);
  if(index >= values.length)
    index = values.length-1;
  $(slide).find(".rp").html("<span>"+values[index]+" BYN" + "</span>");
  }
  })();
