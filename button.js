// code from http://www.terminally-incoherent.com/blog/2014/06/04/scraping-reddits-json-for-cool-pics/ - thanks a lot
var pics= new Array();
pics[0] = new Image();
pics[0].src = 'https://lh3.googleusercontent.com/ZFUvUpeTUQ6hHKKzzDalIhwwQrM-ymrmrYzCZcjdTdihxR7vEDIscl0QZlQjeNwEjgzSkUwiuiDudixN82wMrXTZ1tbwyds9w_Y4A43sqlYPNmT-qZ1AiUCMkTR0X-ao-FOCQGRkJ4AJ9NN63cRqvOMHpcMkcb4B7_B5or5BrvarQFJgJgmIYsv_-JV8765hbmFoNxZov2N3X-ZAMZK2Y8aRzZPFe8kC3Q8-kehqKWM1_FbzK5yACABsZ5lpIDqoWcczrbW5l9cN5sgxyXbqzQf37BorW0x_4f-lDlEZk1tRm3_PB3x8C4ZAwqtuCJRtsqPCGYyOYrIrnuqswucyjg0hYduICoGV7ANkPUhlUp2MygQDu9CgOXn1KALgqGd_9xqVihUiYn8KRhvIN_x5PYcEOJAmz6Op_a2Dq7B1_1EuQzyHnlguRE9yaNkx8WLaXBkeCCRZIig2Ky0pY4aizDCUAECDugBc9JFJRHeWL13i2bxUSXwQ27KgRiGNjGDbCvNNsJbrt1UV6K-uux9W3o-wCZIrYKnhlRY22Ib-ckmBHWynlIEyBQ0M8SmqV4p6l7tyTqYkKhxvkKNpqlAsSNQzcpDnmO2kq98EXSJ4EkKk-T0N6oynGujCXmtKpUQ6fQT02HAbAGcQyEDOVZhfCjnCeqZ0b_4=w320-h657-no';
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
