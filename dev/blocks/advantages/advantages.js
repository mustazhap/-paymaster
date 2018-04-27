var slideNow2 = 1;
var slideCount2 = $('#slidewrapper2').children().length;
var slideInterval2 = 10000;
var translateWidth2 = 0;

$(document).ready(function() {
    var switchInterval2 = setInterval(nextSlide2, slideInterval2);

    $('#viewport2').hover(function() {
        clearInterval(switchInterval2);
    }, function() {
        switchInterval2 = setInterval(nextSlide2, slideInterval2);
    });

    $('#next-btn2').click(function() {
        nextSlide2();
    });

    $('#prev-btn2').click(function() {
        prevSlide2();
    });

});


function nextSlide2() {
    if (slideNow2 == slideCount2 || slideNow2 <= 0 || slideNow2 > 4) {
        $('#slidewrapper2').css('transform', 'translate(0, 0)');
        slideNow2 = 1;
    } else {
        translateWidth2 = (-$('#viewport2').width()/4) * (slideNow2);
        $('#slidewrapper2').css({
            'transform': 'translate(' + translateWidth2 + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth2 + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth2 + 'px, 0)',
        });
        slideNow2++;
    }
}

function prevSlide2() {
    if (slideNow2 == 1 || slideNow2 <= 0) {
        translateWidth2 = (-$('#viewport2').width()/4) * (slideCount2 - 1);
        $('#slidewrapper2').css({
            'transform': 'translate(' + -500 + 'px, 0)',
            '-webkit-transform': 'translate(' + -500 + 'px, 0)',
            '-ms-transform': 'translate(' + -500 + 'px, 0)',
        });
        slideNow2 = slideCount2;
    } else {
        translateWidth2 = (-$('#viewport2').width()/4) * (slideNow2 - 2);
        $('#slidewrapper2').css({
            'transform': 'translate(' + translateWidth2 + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth2 + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth2 + 'px, 0)',
        });
        slideNow2--;
    }
}