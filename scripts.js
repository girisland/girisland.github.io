$(document).ready(function () {
    // 打字机效果
    const text = "Ryan's Portfolio🐄🐄";
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            $('h1').text($('h1').text() + text.charAt(index));
            index++;
            setTimeout(typeWriter, 100);
        }
    }

    $('h1').text('');
    typeWriter();

    // Lightbox 功能
    $('.gallery-item').click(function() {
        const imgSrc = $(this).attr('data-lightbox');
        $('.lightbox-content').attr('src', imgSrc);
        $('.lightbox').css('display', 'flex').hide().fadeIn(300);
    });

    // 修改这里：点击 lightbox 内的任何元素都会关闭 lightbox
    $('.lightbox, .lightbox-content, .close').click(function () {
        $('.lightbox').fadeOut(300);
    });

    $(document).keydown(function (e) {
        if (e.key === "Escape") {
            $('.lightbox').fadeOut(300);
        }
    });

    // 过滤功能
    $('.filter-btn').click(function () {
        const category = $(this).data('category');
        if (category === 'all') {
            $('.gallery-item').fadeIn(300);
        } else {
            $('.gallery-item').hide();
            $('.gallery-item.' + category).fadeIn(300);
        }
    });
});