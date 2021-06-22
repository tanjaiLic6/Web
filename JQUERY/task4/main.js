var img1=$('img').first();
img1.addClass('selected');

function removeAdd(){
    img1.removeClass('selected');
    $('body').find('div').eq(1).children().eq(1).addClass('selected');

}

removeAdd();