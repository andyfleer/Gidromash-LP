$(function($) {
    "use strict";

    if($(window).width()>992){
        $('#section-pluses').parallax("50%", 0.4);
    }

   /*----------------------------------------------------*/
   /*  Explor Room Slider
   /*----------------------------------------------------*/

   $('.owl-carousel').owlCarousel({
       loop:true,
       margin:0,
       nav:false,
       dots:true,
       items: 1,
       smartSpeed: 1500,
       autoplay: true,
       animateOut: 'fadeOut'
   });
});


//------------------------------------------------------------------------------------
//						CONTACT FORM VALIDATION'S SETTINGS
//------------------------------------------------------------------------------------
$('#contact_form').validate({
    onfocusout: false,
    onkeyup: false,
    rules: {
        name: "required",
        message: "required",
        cell: "required",
        email: {
            required: true,
            email: true
        }
    },
    errorPlacement: function (error, element) {
        error.insertAfter(element);
    },
    messages: {
        name: "Введите Ваше имя",
        cell: "Введите Ваш номер телефона",
        message: "Введите текст сообщения",
        email: {
            required: "Введите Ваш e-mail",
            email: "Введите корректный e-mail"
        }
    },

    highlight: function (element) {
        $(element)
            .text('').addClass('error')
    },

    success: function (element) {
        element
            .text('').addClass('valid')
    }
});




//------------------------------------------------------------------------------------
//								CONTACT FORM SCRIPT
//------------------------------------------------------------------------------------

$('#contact_form').submit(function () {
    // submit the form
    if ($(this).valid()) {
        $('#contact_submit').button('loading');
        var action = $(this).attr('action');
        $.ajax({
            url: action,
            type: 'POST',
            data: {
                contactname: $('#contact_name').val(),
                contactemail: $('#contact_email').val(),
                contactmessage: $('#contact_message').val(),
                contactcell: $('#contact_cell').val()
            },
            success: function () {
                $('#contact_submit').button('reset');
                //Use modal popups to display messages
                $('#showMessageModal').modal('hide');
                $('#modalContactSuccess').modal('show');
            },
            error: function () {
                // $('#contact_form').button('reset');
                //Use modal popups to display messages
                $('#showMessageModal').modal('hide');
                $('#modalContactError').modal('show');
            }
        });
    } else {
        $('#contact_submit').button('reset')
    }
    return false;
});
