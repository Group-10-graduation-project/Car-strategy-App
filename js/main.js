$(document).ready(function(){
  $("#message-hide").hide();
  $(".selection").click(function(){
    var myID = $(this).attr('id');
    var msg = $("#message");
    alert("you clicked the selection: " + myID);
    //start AJAX Post request to post data to the server

    //end of post request

    $.ajax({
      type: "POST",
      url: "post.php",
      data: myID,
      success:function(data){
        msg.html(data);
      }
    });
    $("#message-hide").show();
  });
  });
