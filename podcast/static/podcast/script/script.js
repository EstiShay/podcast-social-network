$('#podcast-search-form').click(function (e) {
    e.preventDefault();
    const searchString = $('#input-search-field').val();
    $.ajax({
        type: 'GET',
        url: 'https://itunes.apple.com/search?term=ringer&limit=25&media=podcast',
        // data: {
        //     searchParam: searchString
        // },
        success: function (e) {
            console.log(e)
        },
        error: function () {
            console.log(e)
        }
    // )
});
})
;


// https://itunes.apple.com/search?
// https://itunes.apple.com/search?term=ringer&limit=25&media=podcast

