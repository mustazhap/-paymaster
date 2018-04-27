var slideNow = 1;
var slideCount = $('#slidewrapper3').children().length;
var slideInterval = 10000;
var navBtnId = 0;
var translateWidth = 0;

$(document).ready(function() {
    var switchInterval = setInterval(nextSlide3, slideInterval);

    $('#viewport3').hover(function() {
        clearInterval(switchInterval);
    }, function() {
        switchInterval = setInterval(nextSlide3, slideInterval);
    });

    $('#next-btn3').click(function() {
        nextSlide3();
    });

    $('#prev-btn3').click(function() {
        prevSlide3();
    });

    $('.slide-nav-btn').click(function() {
        navBtnId = $(this).index();

        if (navBtnId + 1 != slideNow) {
            translateWidth = -$('#viewport3').width() * (navBtnId);
            $('#slidewrapper3').css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
            });
            slideNow = navBtnId + 1;
        }
    });
});


function nextSlide3() {
    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
        $('#slidewrapper3').css('transform', 'translate(0, 0)');
        slideNow = 1;
    } else {
        translateWidth = -$('#viewport3').width() * (slideNow);
        $('#slidewrapper3').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow++;
    }
}

function prevSlide3() {
    if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
        translateWidth = -$('#viewport3').width() * (slideCount - 1);
        $('#slidewrapper3').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow = slideCount;
    } else {
        translateWidth = -$('#viewport3').width() * (slideNow - 2);
        $('#slidewrapper3').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow--;
    }
}

