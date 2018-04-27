// Get the modal
var modal = document.getElementsByClassName('myModal');

// Get the button that opens the modal
var btn = document.getElementsByClassName("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");

function cuurentBlock(n){
    show(indexC = n);
}

function show(indexC){
    modal[indexC].style.display = "flex";

    span[indexC].onclick = function() {
        modal[indexC].style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target == modal[indexC]) {
            modal[indexC].style.display = "none";
        }
    };
}
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


var slideNow = 1;
var slideCount = $('#slidewrapper').children().length;
var slideInterval = 10000;
var navBtnId = 0;
var translateWidth = 0;

$(document).ready(function() {
    var switchInterval = setInterval(nextSlide, slideInterval);

    $('#viewport').hover(function() {
        clearInterval(switchInterval);
    }, function() {
        switchInterval = setInterval(nextSlide, slideInterval);
    });

    $('#next-btn').click(function() {
        nextSlide();
    });

    $('#prev-btn').click(function() {
        prevSlide();
    });

    $('.slide-nav-btn').click(function() {
        navBtnId = $(this).index();

        if (navBtnId + 1 != slideNow) {
            translateWidth = -$('#viewport').width() * (navBtnId);
            $('#slidewrapper').css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
            });
            slideNow = navBtnId + 1;
        }
    });
});


function nextSlide() {
    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
        $('#slidewrapper').css('transform', 'translate(0, 0)');
        slideNow = 1;
    } else {
        translateWidth = -$('#viewport').width() * (slideNow);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow++;
    }
}

function prevSlide() {
    if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
        translateWidth = -$('#viewport').width() * (slideCount - 1);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow = slideCount;
    } else {
        translateWidth = -$('#viewport').width() * (slideNow - 2);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow--;
    }
}

