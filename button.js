$.getJSON('https://www.reddit.com/user/dogpicswebsite/m/dogs/.json', function (data) {
    $.each(data.data.children, function (i, item) {
        IsValidImageUrl(item.data.url, function (url, isvalid) {
            if (isvalid) {
                $('<img/>').attr('src', item.data.url)
                    .width(500)
                    .appendTo('#images');
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