$('#podcast-search-form').click(function (e) {
    e.preventDefault();
    const searchString = $('#input-search-field').val();
    $.ajax({
        type: 'POST',
        url: '/searchpodcasts/',
        data: {
            searchParam: searchString
        },
        success: function () {
            console.log("success")
        },
        error: function () {
            console.log("fail")
        }
    )
});