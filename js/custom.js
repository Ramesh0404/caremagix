$(document).ready(function () {
    // Smooth scroll to the anchor when the link is clicked
    $('a[href^="#"]').on('click', function (event) {
        event.preventDefault();

        var target = this.hash;
        var $target = $(target);

        // Scroll animation with a duration of 800 milliseconds (adjust as needed)
        $('html, body').animate({
            'scrollTop': $target.offset().top
        }, 800, 'swing', function () {
            window.location.hash = target; // Update the URL hash
        });
    });

});


$("#suscribeForm").submit(function (e) {
    e.preventDefault();
    var action = $(this).attr("action");
    var data = {};
    $(this)
        .serializeArray()
        .map(function (x) {
            data[x.name] = x.value;
        });
    $.ajax({
        type: "POST",
        url: action,
        data: JSON.stringify(data),
        contentType: "application/json",
        headers: {
            Accept: "application/json",
        },
    })
        .done(function () {
            alert("Thank you for writing to us. We value your feedback.");
            location.href = document.referrer;
            // window.location.reload();
            // $('.success').addClass('is-active');
        })
        .fail(function () {
            alert("Please try after sometime!");
        });
});

$('#subscribeCheckbox').change(function(){
    if($(this).is(":checked")) {
        $('[name="subscribe"]').val("yes");
    } else {
        $('[name="subscribe"]').val("no");
    }
});

$("#healthcareplan").submit(function (e) {
    e.preventDefault();
    var action = $(this).attr("action");
    var data = {};
    $(this)
        .serializeArray()
        .map(function (x) {
            data[x.name] = x.value;
        });
    $.ajax({
        type: "POST",
        url: action,
        data: JSON.stringify(data),
        contentType: "application/json",
        headers: {
            Accept: "application/json",
        },
    })
        .done(function () {
            alert("Thank you for writing to us. We value your feedback.");
            location.href = document.referrer;
            // window.location.reload();
            // $('.success').addClass('is-active');
        })
        .fail(function () {
            alert("Please try after sometime!");
        });
});