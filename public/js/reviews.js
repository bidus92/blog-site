$("#grid-1").hide(); 
$("#grid-2").hide(); 
$("#grid-3").hide();

$("#grid-1").fadeIn(800).slideDown(); 


setTimeout(()=>
{
   $("#grid-2").fadeIn(800); 
}, "600");

setTimeout(()=>
{
   $("#grid-3").fadeIn(800); 
}, "1400");
