$(document).ready(function(){
  $("#message-hide").hide();
  $(".selection").click(function(){
    var myID = $(this).attr('id');
    var msg = $("#message");
    alert("您单击了所选内容: " + myID);
    //启动ajax post请求将数据发布到服务器

    //请求结束

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
