

// Modal
$("#toggle_modal").click(function(){
    $("#modal").fadeIn();
})

$("#modal_overlay").click(function () { 
    $("#modal").fadeout();    
});

$("#modal_cancel").click(function () { 
    $("#modal").fadeOut();
});

// Validasi

$.fn.validasi = function () {
    var form = this;

    this.on("submit", function (event) {
        
        event.preventDefault();
        var email = $("input[name='email']").val();
        var password = $("input[name='password']").val();

        if (email == "" || password == "") {
            $("#email").addClass("border-red-500");
            $("#password").addClass("border-red-500");
            alert("Fill the input email and password field to login");          
            // show_error('Harap isi email dan password untuk login');
        } else if (email != "email" && password != "password") {
            $("#email").alert("Wrong email or password");

            // show_error('Email atau Password salah. Coba lagi');
        } else {
            // document.location.href = "dashboard.html";
            $(this).off("submit").trigger("submit");
        }
    });
}    