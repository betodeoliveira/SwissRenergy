$(".home-news_item").each(function(index) {
    if(index == 7) {
        $(this).find('.news-item_last-item-wrapper').css("display", "block");
        $(this).find('.news-item_content-wrapper').remove();
        $(this).find('.news-item_wrapper').attr("href","https://google.com");
    }
    else {
        $(this).find('.news-item_last-item-wrapper').remove();
    }
});