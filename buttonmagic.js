// code from http://www.terminally-incoherent.com/blog/2014/06/04/scraping-reddits-json-for-cool-pics/ - thanks a lot

var pics= new Array();
pics[0] = new Image();
pics[0].src = 'https://i.ytimg.com/vi/QPyy0oyWUTc/hqdefault.jpg';
$.getJSON('https://www.reddit.com/user/dogpicswebsite/m/dogs/.json?show=all&limit=100', function (data) {
    $.each(data.data.children, function (i, item) {
        IsValidImageUrl(item.data.url, function (url, isvalid) {
            if (isvalid) {
                pics.push(
                    $('<img/>').attr('src', item.data.url)
                        .width(500)
                );
                $('.pics').html(pics[0]);
            }
        });
    });
});
function IsValidImageUrl(url, callback) {
    var img = new Image();
    img.onerror = function () {
        callback(url, false);
    };
    img.onload = function () {
        callback(url, true);
    };
img.src = url;
}
var loops = 1;
// a function that will get the next image in the array
var nextPic = function() {
    // put first pic in all html elements with class pics
    $('.pics').html(pics[loops]);
    // move the next pic into the variable loops
    loops++;
    //alert('end of other method');
};
