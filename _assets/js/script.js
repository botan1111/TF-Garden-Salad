//スムーススクロール

$(function () {
    $('a[href^="#"]').click(function () {
        var header = $(".l-header").innerHeight();  //headerの高さを定義
        var speed = 600;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        //headerの高さを引く
        var position = target.offset().top - header;
        $("html, body").animate({ scrollTop: position }, speed, "swing");
        return false;
    });
});

//トップへ戻る
$('.js-totop').hide();
$(window).scroll(function () {
    if ($(this).scrollTop() > 500) {  //スクロールしたら現れる
        $('.js-totop').fadeIn();
    } else {
        $('.js-totop').fadeOut();
    }
});

$('.js-totop').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 700);
    return false;
});


//モーダル

$(function () {
    $('.js-modal_open').on('click', function () {
        $('body').addClass('fixed');
        $('.js-modal').fadeIn();
        return false;
    });
    $('.js-modal_close').on('click', function () {
        $('.js-modal').fadeOut();
        $('body').removeClass('fixed');
        return false;
    });
});

//お問い合わせフォーム
$('#js-form').submit(function (event) {
    var formData = $('#js-form').serialize();
    $.ajax({
        url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdmv1HfCo82Eo6VoPArK0MOVhOE96bNsbIaT_FbtKzlRrBtuQ/formResponse",
        data: formData,
        type: "POST",
        dataType: "xml",
        statusCode: {
            0: function () {
                $('.l-main_contact_success').slideDown();
                $('#js-submit').fadeOut();
            },
            200: function () {
                $('.l-main_contact_error').slideDown();
            }
        }
    });
    event.preventDefault();
});

//送信ボタン

let $submit = $('#js-submit')
$('#js-form input, #js-form textarea').on('change', function () {
    if (
        $('#your-name').val() !== "" &&
        $('#your-email').val() !== "" &&
        $('#your-message').val() !== "" &&
        $('#your-privacy').prop('checked') === true
    ) {
        $submit.prop('disabled', false);
    } else {
        $submit.prop('disabled', true);
    }
});

//パララックス
var image = document.getElementsByClassName('parallax');
new simpleParallax(image, {
    delay: 0.8,
    transition: 'cubic-bezier(0,0,0,1)'
    });