$(function () {
    var slider = $('.slider'),
        list = slider.find('ul.slider_liste'),
        length = list.find('li').length,
        width = slider.outerWidth(),
        totalWidth = width * length,
        index = 0;
    list.find('li').width(width).end().width(totalWidth);
   // alert(length);
});