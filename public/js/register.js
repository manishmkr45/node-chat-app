
(function() {
    
    $( "#form" ).submit(function(event) {
        event.preventDefault();

        $.ajax({
            type: 'POST',
            url: '/register',
            data: JSON.stringify({
                "email": $('#email').val(),
                "username": $('#username').val(),
                "password": $('#password').val(),
                "passwordConf": $('#passwordConf').val()
                }),
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            success: function(response){
                //alert("a");
                //console.log(response.Success);
                // $('#form')[0].reset();

                document.getElementById("check").innerHTML=response.Success;
                     //ADD THIS CODE
                     setTimeout(function(){
                         document.getElementById("check").innerHTML="";
                     },3000);
                     if (response.Success=="Success!") {
                         document.getElementById("aa").click();
                     };
                 },
                 error: function() {
                 }
             })
    });

})();

