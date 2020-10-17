// alert("GO");
// alert('ho ho ho');

// $('#publications').click(function() {
//     alert('ho ho ho');
// });
// $(".left").on("click",function() {
//     alert("GO");

// $(".contact").hide();
$("#year").innerHTML = new Date().getFullYear();
// alert(new Date().getFullYear());

$("#menu").click(function(){
    $("#navbarTogglerDemo03").toggleClass("navbar-right");
});

$("#home").on("click", function(){

    var win = window.open('index.html', '_self');
        if (win) {
            //Browser has allowed it to be opened
            win.focus();
        } else {
            //Browser has blocked it
            alert('Please allow popups for this website');
        }
});

$("#publications").on("click", function(){

    var win = window.open('pubs.html', '_self');
        if (win) {
            //Browser has allowed it to be opened
            win.focus();
        } else {
            //Browser has blocked it
            alert('Please allow popups for this website');
        }
});


// $(".form-check-inline").on("click", function(){
//     $(".other-option").fadeOut();
//     $('#other_text').val('')
//     $('#category_names').val('')
//  });
 
//  $(".other-policy").on("click", function(){
//     $(".other-option").fadeIn();
//     $("#other_policy").attr("checked", true);
//  });