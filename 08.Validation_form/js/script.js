
$("#validationForm").submit(function(event){

    var errorMessage = "";

    event.preventDefault();

    var name = $("#email-name").val();
    var email = $("#email-address").val();
    var pass1 = $("#password1").val();   
    var pass2 = $("#password2").val();
    var message = $("#email-message").val();

    function isValidEmailAddress(email) {
        var pattern = /^\b[A-Z0-9-]+@[A-Z0-9]+\.com\b/i;
        return pattern.test(email);
    }

    if(name == "" || email =="" || pass1 == "" || pass2 == "" || message == ""){
        errorMessage = "請輸入完整信息";
    }else if (!isValidEmailAddress(email)){
        errorMessage = "請輸入正確的郵箱地址";
    }else if (pass1 != pass2){
        errorMessage = "請確認您輸入的密碼";
    }

    if(errorMessage == ""){
        $("#error").html("郵件已發送!");
        $("#error").css("color","green");
    }else {
        $("#error").html(errorMessage);
        $("#error").css("color","red");
    }
})
