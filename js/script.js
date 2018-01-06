// 'use strict';

$(document).ready(function () {

    setTimeout(function () {
        $('.loader_bg').fadeToggle();
    }, 1500);

    if ($(window).scrollTop()) {
        $('.navbar').addClass('white');
    } else if ($(window).width() > 767) {
        $('.navbar').removeClass('white');
    }

    if ($(window).width() < 768) {
        $('.navbar').addClass('white');
    }

    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        // $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('active');
        });
        $(this).addClass('active');

        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 900, 'swing', function () {
            // window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });

    function onScroll(event){
        var scrollPos = $(document).scrollTop();
        $('.nav a').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('.nav a').removeClass("active");
                currLink.addClass("active");
            }
            else{
                currLink.removeClass("active");
            }
        });
    }

    $(window).on('scroll', function(){

        if ($(window).scrollTop() * 2 > $(window).height()) {
            $('.btn_subscribe').addClass('on');
        } else {
            $('.btn_subscribe').removeClass('on');
        }

        if ($(window).scrollTop()) {
            $('.navbar').addClass('white');
        } else if ($(window).width() > 767) {
            $('.navbar').removeClass('white');
        }
    });

    $(".parallax-s").each(function() {
        var img = $(this);
        var imgParent = $(this).parent();
        function parallaxImg() {
            var speed = img.data("speed");
            var imgY = imgParent.offset().top;
            var winY = $(this).scrollTop();
            var winH = $(this).height();
            var parentH = imgParent.innerHeight();

            // The next pixel to show on screen
            var winBottom = winY + winH;

            // If block is shown on screen
            if (winBottom > imgY && winY < imgY + parentH) {
                // Number of pixels shown after block appear
                var imgBottom = (winBottom - imgY) * speed;
                // Max number of pixels until block disappear
                var imgTop = winH + parentH;
                // Porcentage between start showing until disappearing
                var imgPercent = imgBottom / imgTop * 100 + (50 - speed * 50);
            }
            img.css({
                top: imgPercent + "%",
                transform: "translate(-50%, -" + imgPercent + "%)"
            });
        }
        $(document).on({
            scroll: function() {
                parallaxImg();
            },
            ready: function() {
                parallaxImg();
            }
        });
    });


    document.onreadystatechange = function () {
        if ((document.readyState == "complete") && $(window).scrollTop() < 5 ) {
            jQuery(window).scroll(function(event) {
                jQuery(".animate").each(function(i, el) {
                    var el = jQuery(el);
                    if (el.visible(true)) {
                        el.addClass("start");
                    }
                });
            });
        } else {
            $('p, div').removeClass('animate');
        }
    };


    // -----------------------------------------------------------------------------------------------------
    // Animation on scroll

    (function(e) {
        e.fn.visible = function(t, n, r) {
            var i = e(this).eq(0),
                s = i.get(0),
                o = e(window),
                u = o.scrollTop(),
                a = u + o.height(),
                f = o.scrollLeft(),
                l = f + o.width(),
                c = i.offset().top,
                h = c + i.height(),
                p = i.offset().left,
                d = p + i.width(),
                v = t === true ? h : c,
                m = t === true ? c : h,
                g = t === true ? d : p,
                y = t === true ? p : d,
                b = n === true ? s.offsetWidth * s.offsetHeight : true,
                r = r ? r : "both";
            if (r === "both") return !!b && m <= a && v >= u && y <= l && g >= f;
            else if (r === "vertical") return !!b && m <= a && v >= u;
            else if (r === "horizontal") return !!b && y <= l && g >= f
        }
    })(jQuery);

});