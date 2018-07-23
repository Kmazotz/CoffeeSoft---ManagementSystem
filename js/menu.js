$(document).ready(function(){

  $("#TogleMenu").click(function(){
    //Submenu
    $("#submenu").removeClass("hidden");
    $("#submenu").addClass("visible");
    //Open
    $("#TogleMenu").removeClass("visible");
    $("#TogleMenu").addClass("hidden");
    //Close
    $("#CloseMenu").removeClass("hidden");
    $("#CloseMenu").addClass("visible");
  });

  $("#CloseMenu").click(function(){
    //Submenu
    $("#submenu").removeClass("visible");
    $("#submenu").addClass("hidden");
    //Open
    $("#CloseMenu").removeClass("visible");
    $("#CloseMenu").addClass("hidden");
    //Close
    $("#TogleMenu").removeClass("hidden");
    $("#TogleMenu").addClass("visible");
  });
});
