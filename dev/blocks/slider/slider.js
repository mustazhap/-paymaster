var slideNow1 = 1;
var slideCount = $('#slidewrapper1').children().length;
var slideInterval1 = 4000;
var navBtnId = 0;
var translateWidth = 0;

$(document).ready(function() {
    var switchInterval1 = setInterval(nextSlide1, slideInterval);

    $('#viewport1').hover(function() {
        clearInterval(switchInterval1);
    }, function() {
        switchInterval1 = setInterval(nextSlide1, slideInterval1);
    });

    $('.dot').click(function() {
        navBtnId = $(this).index();

        $('.dot').removeClass("dot_active");
        $(this).addClass("dot_active");

        if (navBtnId + 1 != slideNow1) {
            translateWidth = -$('#viewport1').width() * (navBtnId);
            $('#slidewrapper1').css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
            });
            slideNow1 = navBtnId + 1;
        }
    });
});


function nextSlide1() {

    if (slideNow1 == slideCount || slideNow1 <= 0 || slideNow1 > slideCount) {
        $('#slidewrapper1').css('transform', 'translate(0, 0)');
        slideNow1 = 1;
        $('.dot').removeClass("dot_active");
        $('.dot').eq([slideNow1-1]).addClass("dot_active");
    } else {
        translateWidth = -$('#viewport1').width() * (slideNow1);
        $('#slidewrapper1').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow1++;
        $('.dot').removeClass("dot_active");
        $('.dot').eq([slideNow1-1]).addClass("dot_active");

    }

}

