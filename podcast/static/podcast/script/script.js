// using jQuery
function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}


var csrftoken = getCookie('csrftoken');

//
// Below is just an example of a JSON return of the Itunes API request
//
search_return = {
    "resultCount": 21,
    "results": [
        {
            "wrapperType": "track",
            "kind": "podcast",
            "artistId": 125443881,
            "collectionId": 253191823,
            "trackId": 253191823,
            "artistName": "NPR",
            "collectionName": "Car Talk",
            "trackName": "Car Talk",
            "collectionCensoredName": "Car Talk",
            "trackCensoredName": "Car Talk",
            "artistViewUrl": "https://itunes.apple.com/us/artist/npr/125443881?mt=2&uo=4",
            "collectionViewUrl": "https://itunes.apple.com/us/podcast/car-talk/id253191823?mt=2&uo=4",
            "feedUrl": "https://www.npr.org/rss/podcast.php?id=510208",
            "trackViewUrl": "https://itunes.apple.com/us/podcast/car-talk/id253191823?mt=2&uo=4",
            "artworkUrl30": "http://is3.mzstatic.com/image/thumb/Music128/v4/61/8d/70/618d70f9-fcb6-65dd-b8ae-aad770ed8b05/source/30x30bb.jpg",
            "artworkUrl60": "http://is3.mzstatic.com/image/thumb/Music128/v4/61/8d/70/618d70f9-fcb6-65dd-b8ae-aad770ed8b05/source/60x60bb.jpg",
            "artworkUrl100": "http://is3.mzstatic.com/image/thumb/Music128/v4/61/8d/70/618d70f9-fcb6-65dd-b8ae-aad770ed8b05/source/100x100bb.jpg",
            "collectionPrice": 0.00,
            "trackPrice": 0.00,
            "trackRentalPrice": 0,
            "collectionHdPrice": 0,
            "trackHdPrice": 0,
            "trackHdRentalPrice": 0,
            "releaseDate": "2018-01-27T13:00:00Z",
            "collectionExplicitness": "notExplicit",
            "trackExplicitness": "notExplicit",
            "trackCount": 2,
            "country": "USA",
            "currency": "USD",
            "primaryGenreName": "Automotive",
            "artworkUrl600": "http://is3.mzstatic.com/image/thumb/Music128/v4/61/8d/70/618d70f9-fcb6-65dd-b8ae-aad770ed8b05/source/600x600bb.jpg",
            "genreIds": ["1454", "26", "1323", "1303"],
            "genres": ["Automotive", "Podcasts", "Games & Hobbies", "Comedy"]
        },
        {
            "wrapperType": "track",
            "kind": "podcast",
            "artistId": 910791972,
            "collectionId": 1199526401,
            "trackId": 1199526401,
            "artistName": "Salomondrin",
            "collectionName": "Lets Talk About Cars YO!",
            "trackName": "Lets Talk About Cars YO!",
            "collectionCensoredName": "Lets Talk About Cars YO!",
            "trackCensoredName": "Lets Talk About Cars YO!",
            "artistViewUrl": "https://itunes.apple.com/us/artist/embassy-row/910791972?mt=2&uo=4",
            "collectionViewUrl": "https://itunes.apple.com/us/podcast/lets-talk-about-cars-yo/id1199526401?mt=2&uo=4",
            "feedUrl": "http://rss.acast.com/letstalkaboutcarsyo",
            "trackViewUrl": "https://itunes.apple.com/us/podcast/lets-talk-about-cars-yo/id1199526401?mt=2&uo=4",
            "artworkUrl30": "http://is1.mzstatic.com/image/thumb/Music128/v4/92/92/44/92924420-b231-174e-ebc9-e579b1dbc56d/source/30x30bb.jpg",
            "artworkUrl60": "http://is1.mzstatic.com/image/thumb/Music128/v4/92/92/44/92924420-b231-174e-ebc9-e579b1dbc56d/source/60x60bb.jpg",
            "artworkUrl100": "http://is1.mzstatic.com/image/thumb/Music128/v4/92/92/44/92924420-b231-174e-ebc9-e579b1dbc56d/source/100x100bb.jpg",
            "collectionPrice": 0.00,
            "trackPrice": 0.00,
            "trackRentalPrice": 0,
            "collectionHdPrice": 0,
            "trackHdPrice": 0,
            "trackHdRentalPrice": 0,
            "releaseDate": "2018-01-27T20:15:00Z",
            "collectionExplicitness": "cleaned",
            "trackExplicitness": "cleaned",
            "trackCount": 40,
            "country": "USA",
            "currency": "USD",
            "primaryGenreName": "Comedy",
            "contentAdvisoryRating": "Clean",
            "artworkUrl600": "http://is1.mzstatic.com/image/thumb/Music128/v4/92/92/44/92924420-b231-174e-ebc9-e579b1dbc56d/source/600x600bb.jpg",
            "genreIds": ["1303", "26", "1323", "1454"],
            "genres": ["Comedy", "Podcasts", "Games & Hobbies", "Automotive"]
        },
        {
            "wrapperType": "track",
            "kind": "podcast",
            "collectionId": 1083180382,
            "trackId": 1083180382,
            "artistName": "Wrench Nation - Car Talk Radio Show",
            "collectionName": "Wrench Nation - Car Talk Radio Show",
            "trackName": "Wrench Nation - Car Talk Radio Show",
            "collectionCensoredName": "Wrench Nation - Car Talk Radio Show",
            "trackCensoredName": "Wrench Nation - Car Talk Radio Show",
            "collectionViewUrl": "https://itunes.apple.com/us/podcast/wrench-nation-car-talk-radio-show/id1083180382?mt=2&uo=4",
            "feedUrl": "http://www.wrenchnation.tv/feed/podcast/",
            "trackViewUrl": "https://itunes.apple.com/us/podcast/wrench-nation-car-talk-radio-show/id1083180382?mt=2&uo=4",
            "artworkUrl30": "http://is1.mzstatic.com/image/thumb/Music62/v4/a6/3b/25/a63b2559-9d6e-a4b8-ffa7-4937a59167f5/source/30x30bb.jpg",
            "artworkUrl60": "http://is1.mzstatic.com/image/thumb/Music62/v4/a6/3b/25/a63b2559-9d6e-a4b8-ffa7-4937a59167f5/source/60x60bb.jpg",
            "artworkUrl100": "http://is1.mzstatic.com/image/thumb/Music62/v4/a6/3b/25/a63b2559-9d6e-a4b8-ffa7-4937a59167f5/source/100x100bb.jpg",
            "collectionPrice": 0.00,
            "trackPrice": 0.00,
            "trackRentalPrice": 0,
            "collectionHdPrice": 0,
            "trackHdPrice": 0,
            "trackHdRentalPrice": 0,
            "releaseDate": "2018-01-28T21:12:00Z",
            "collectionExplicitness": "cleaned",
            "trackExplicitness": "cleaned",
            "trackCount": 92,
            "country": "USA",
            "currency": "USD",
            "primaryGenreName": "Automotive",
            "contentAdvisoryRating": "Clean",
            "artworkUrl600": "http://is1.mzstatic.com/image/thumb/Music62/v4/a6/3b/25/a63b2559-9d6e-a4b8-ffa7-4937a59167f5/source/600x600bb.jpg",
            "genreIds": ["1454", "26", "1323", "1318", "1450", "1304"],
            "genres": ["Automotive", "Podcasts", "Games & Hobbies", "Technology", "Podcasting", "Education"]
        },
        {
            "wrapperType": "track",
            "kind": "podcast",
            "artistId": 791298254,
            "collectionId": 630839767,
            "trackId": 630839767,
            "artistName": "Consumer Reports",
            "collectionName": "Talking Cars (HQ)",
            "trackName": "Talking Cars (HQ)",
            "collectionCensoredName": "Talking Cars (HQ)",
            "trackCensoredName": "Talking Cars (HQ)",
            "artistViewUrl": "https://itunes.apple.com/us/artist/consumer-reports/791298254?mt=2&uo=4",
            "collectionViewUrl": "https://itunes.apple.com/us/podcast/talking-cars-hq/id630839767?mt=2&uo=4",
            "feedUrl": "http://talkingcarshq.cr.libsynpro.com/rss",
            "trackViewUrl": "https://itunes.apple.com/us/podcast/talking-cars-hq/id630839767?mt=2&uo=4",
            "artworkUrl30": "http://is5.mzstatic.com/image/thumb/Music62/v4/ed/5c/13/ed5c1302-47bb-7c38-9b8e-0f22f9381523/source/30x30bb.jpg",
            "artworkUrl60": "http://is5.mzstatic.com/image/thumb/Music62/v4/ed/5c/13/ed5c1302-47bb-7c38-9b8e-0f22f9381523/source/60x60bb.jpg",
            "artworkUrl100": "http://is5.mzstatic.com/image/thumb/Music62/v4/ed/5c/13/ed5c1302-47bb-7c38-9b8e-0f22f9381523/source/100x100bb.jpg",
            "collectionPrice": 0.00,
            "trackPrice": 0.00,
            "trackRentalPrice": 0,
            "collectionHdPrice": 0,
            "trackHdPrice": 0,
            "trackHdRentalPrice": 0,
            "releaseDate": "2018-02-01T19:02:00Z",
            "collectionExplicitness": "cleaned",
            "trackExplicitness": "cleaned",
            "trackCount": 137,
            "country": "USA",
            "currency": "USD",
            "primaryGenreName": "Automotive",
            "contentAdvisoryRating": "Clean",
            "artworkUrl600": "http://is5.mzstatic.com/image/thumb/Music62/v4/ed/5c/13/ed5c1302-47bb-7c38-9b8e-0f22f9381523/source/600x600bb.jpg",
            "genreIds": ["1454", "26", "1323"],
            "genres": ["Automotive", "Podcasts", "Games & Hobbies"]
        },
        {
            "wrapperType": "track",
            "kind": "podcast",
            "collectionId": 268955711,
            "trackId": 268955711,
            "artistName": "Rich Baxter",
            "collectionName": "Car and Truck Talk",
            "trackName": "Car and Truck Talk",
            "collectionCensoredName": "Car and Truck Talk",
            "trackCensoredName": "Car and Truck Talk",
            "collectionViewUrl": "https://itunes.apple.com/us/podcast/car-and-truck-talk/id268955711?mt=2&uo=4",
            "feedUrl": "http://recordings.talkshoe.com/rss77402.xml",
            "trackViewUrl": "https://itunes.apple.com/us/podcast/car-and-truck-talk/id268955711?mt=2&uo=4",
            "artworkUrl30": "http://is5.mzstatic.com/image/thumb/Music71/v4/08/43/63/08436389-9668-7542-e871-fcc8310b4f6f/source/30x30bb.jpg",
            "artworkUrl60": "http://is5.mzstatic.com/image/thumb/Music71/v4/08/43/63/08436389-9668-7542-e871-fcc8310b4f6f/source/60x60bb.jpg",
            "artworkUrl100": "http://is5.mzstatic.com/image/thumb/Music71/v4/08/43/63/08436389-9668-7542-e871-fcc8310b4f6f/source/100x100bb.jpg",
            "collectionPrice": 0.00,
            "trackPrice": 0.00,
            "trackRentalPrice": 0,
            "collectionHdPrice": 0,
            "trackHdPrice": 0,
            "trackHdRentalPrice": 0,
            "releaseDate": "2017-12-06T02:15:00Z",
            "collectionExplicitness": "cleaned",
            "trackExplicitness": "cleaned",
            "trackCount": 23,
            "country": "USA",
            "currency": "USD",
            "primaryGenreName": "Hobbies",
            "contentAdvisoryRating": "Clean",
            "artworkUrl600": "http://is5.mzstatic.com/image/thumb/Music71/v4/08/43/63/08436389-9668-7542-e871-fcc8310b4f6f/source/600x600bb.jpg",
            "genreIds": ["1460", "26", "1323"],
            "genres": ["Hobbies", "Podcasts", "Games & Hobbies"]
        },
        {
            "wrapperType": "track",
            "kind": "podcast",
            "artistId": 791298254,
            "collectionId": 630831189,
            "trackId": 630831189,
            "artistName": "Consumer Reports",
            "collectionName": "Talking Cars (MP3)",
            "trackName": "Talking Cars (MP3)",
            "collectionCensoredName": "Talking Cars (MP3)",
            "trackCensoredName": "Talking Cars (MP3)",
            "artistViewUrl": "https://itunes.apple.com/us/artist/consumer-reports/791298254?mt=2&uo=4",
            "collectionViewUrl": "https://itunes.apple.com/us/podcast/talking-cars-mp3/id630831189?mt=2&uo=4",
            "feedUrl": "http://talkingcarsmp3.cr.libsynpro.com/rss",
            "trackViewUrl": "https://itunes.apple.com/us/podcast/talking-cars-mp3/id630831189?mt=2&uo=4",
            "artworkUrl30": "http://is4.mzstatic.com/image/thumb/Music62/v4/bb/db/3d/bbdb3de9-a590-8b98-f32c-f6250908aae6/source/30x30bb.jpg",
            "artworkUrl60": "http://is4.mzstatic.com/image/thumb/Music62/v4/bb/db/3d/bbdb3de9-a590-8b98-f32c-f6250908aae6/source/60x60bb.jpg",
            "artworkUrl100": "http://is4.mzstatic.com/image/thumb/Music62/v4/bb/db/3d/bbdb3de9-a590-8b98-f32c-f6250908aae6/source/100x100bb.jpg",
            "collectionPrice": 0.00,
            "trackPrice": 0.00,
            "trackRentalPrice": 0,
            "collectionHdPrice": 0,
            "trackHdPrice": 0,
            "trackHdRentalPrice": 0,
            "releaseDate": "2018-02-01T19:04:00Z",
            "collectionExplicitness": "cleaned",
            "trackExplicitness": "cleaned",
            "trackCount": 137,
            "country": "USA",
            "currency": "USD",
            "primaryGenreName": "Automotive",
            "contentAdvisoryRating": "Clean",
            "artworkUrl600": "http://is4.mzstatic.com/image/thumb/Music62/v4/bb/db/3d/bbdb3de9-a590-8b98-f32c-f6250908aae6/source/600x600bb.jpg",
            "genreIds": ["1454", "26", "1323"],
            "genres": ["Automotive", "Podcasts", "Games & Hobbies"]
        },
        {
            "wrapperType": "track",
            "kind": "podcast",
            "collectionId": 1337941379,
            "trackId": 1337941379,
            "artistName": "Andrew Goldblatt  / Anchor",
            "collectionName": "CAR Sports Talk",
            "trackName": "CAR Sports Talk",
            "collectionCensoredName": "CAR Sports Talk",
            "trackCensoredName": "CAR Sports Talk",
            "collectionViewUrl": "https://itunes.apple.com/us/podcast/car-sports-talk/id1337941379?mt=2&uo=4",
            "feedUrl": "https://anchor.fm/s/229965c/podcast/rss",
            "trackViewUrl": "https://itunes.apple.com/us/podcast/car-sports-talk/id1337941379?mt=2&uo=4",
            "artworkUrl30": "http://is1.mzstatic.com/image/thumb/Music128/v4/06/89/81/0689817e-1090-b040-f848-34005ece8907/source/30x30bb.jpg",
            "artworkUrl60": "http://is1.mzstatic.com/image/thumb/Music128/v4/06/89/81/0689817e-1090-b040-f848-34005ece8907/source/60x60bb.jpg",
            "artworkUrl100": "http://is1.mzstatic.com/image/thumb/Music128/v4/06/89/81/0689817e-1090-b040-f848-34005ece8907/source/100x100bb.jpg",
            "collectionPrice": 0.00,
            "trackPrice": 0.00,
            "trackRentalPrice": 0,
            "collectionHdPrice": 0,
            "trackHdPrice": 0,
            "trackHdRentalPrice": 0,
            "releaseDate": "2018-02-02T01:58:00Z",
            "collectionExplicitness": "cleaned",
            "trackExplicitness": "cleaned",
            "trackCount": 8,
            "country": "USA",
            "currency": "USD",
            "primaryGenreName": "Sports & Recreation",
            "contentAdvisoryRating": "Clean",
            "artworkUrl600": "http://is1.mzstatic.com/image/thumb/Music128/v4/06/89/81/0689817e-1090-b040-f848-34005ece8907/source/600x600bb.jpg",
            "genreIds": ["1316", "26"],
            "genres": ["Sports & Recreation", "Podcasts"]
        },
        {
            "wrapperType": "track",
            "kind": "podcast",
            "collectionId": 1070433232,
            "trackId": 1070433232,
            "artistName": "Randy Kerdoon",
            "collectionName": "Talking About Cars “Classic” with Randy Kerdoon",
            "trackName": "Talking About Cars “Classic” with Randy Kerdoon",
            "collectionCensoredName": "Talking About Cars “Classic” with Randy Kerdoon",
            "trackCensoredName": "Talking About Cars “Classic” with Randy Kerdoon",
            "collectionViewUrl": "https://itunes.apple.com/us/podcast/talking-about-cars-classic-with-randy-kerdoon/id1070433232?mt=2&uo=4",
            "feedUrl": "http://feeds.soundcloud.com/users/soundcloud:users:165924904/sounds.rss",
            "trackViewUrl": "https://itunes.apple.com/us/podcast/talking-about-cars-classic-with-randy-kerdoon/id1070433232?mt=2&uo=4",
            "artworkUrl30": "http://is3.mzstatic.com/image/thumb/Music62/v4/b8/09/f9/b809f915-5cb4-d5e5-ed44-c3baf81a34a2/source/30x30bb.jpg",
            "artworkUrl60": "http://is3.mzstatic.com/image/thumb/Music62/v4/b8/09/f9/b809f915-5cb4-d5e5-ed44-c3baf81a34a2/source/60x60bb.jpg",
            "artworkUrl100": "http://is3.mzstatic.com/image/thumb/Music62/v4/b8/09/f9/b809f915-5cb4-d5e5-ed44-c3baf81a34a2/source/100x100bb.jpg",
            "collectionPrice": 0.00,
            "trackPrice": 0.00,
            "trackRentalPrice": 0,
            "collectionHdPrice": 0,
            "trackHdPrice": 0,
            "trackHdRentalPrice": 0,
            "releaseDate": "2018-01-19T22:13:00Z",
            "collectionExplicitness": "cleaned",
            "trackExplicitness": "cleaned",
            "trackCount": 103,
            "country": "USA",
            "currency": "USD",
            "primaryGenreName": "Automotive",
            "contentAdvisoryRating": "Clean",
            "artworkUrl600": "http://is3.mzstatic.com/image/thumb/Music62/v4/b8/09/f9/b809f915-5cb4-d5e5-ed44-c3baf81a34a2/source/600x600bb.jpg",
            "genreIds": ["1454", "26", "1323"],
            "genres": ["Automotive", "Podcasts", "Games & Hobbies"]
        },
        {
            "wrapperType": "track",
            "kind": "podcast",
            "collectionId": 590035133,
            "trackId": 590035133,
            "artistName": "BSCarTalk.com - Heights Technology, LLC",
            "collectionName": "BS Car Talk",
            "trackName": "BS Car Talk",
            "collectionCensoredName": "BS Car Talk",
            "trackCensoredName": "BS Car Talk",
            "collectionViewUrl": "https://itunes.apple.com/us/podcast/bs-car-talk/id590035133?mt=2&uo=4",
            "feedUrl": "http://bscartalk.podomatic.com/rss2.xml",
            "trackViewUrl": "https://itunes.apple.com/us/podcast/bs-car-talk/id590035133?mt=2&uo=4",
            "artworkUrl30": "http://is3.mzstatic.com/image/thumb/Music71/v4/46/c1/42/46c14275-5dc3-afd7-857a-53dad3325266/source/30x30bb.jpg",
            "artworkUrl60": "http://is3.mzstatic.com/image/thumb/Music71/v4/46/c1/42/46c14275-5dc3-afd7-857a-53dad3325266/source/60x60bb.jpg",
            "artworkUrl100": "http://is3.mzstatic.com/image/thumb/Music71/v4/46/c1/42/46c14275-5dc3-afd7-857a-53dad3325266/source/100x100bb.jpg",
            "collectionPrice": 0.00,
            "trackPrice": 0.00,
            "trackRentalPrice": 0,
            "collectionHdPrice": 0,
            "trackHdPrice": 0,
            "trackHdRentalPrice": 0,
            "releaseDate": "2013-01-14T16:53:00Z",
            "collectionExplicitness": "cleaned",
            "trackExplicitness": "cleaned",
            "trackCount": 4,
            "country": "USA",
            "currency": "USD",
            "primaryGenreName": "Automotive",
            "contentAdvisoryRating": "Clean",
            "artworkUrl600": "http://is3.mzstatic.com/image/thumb/Music71/v4/46/c1/42/46c14275-5dc3-afd7-857a-53dad3325266/source/600x600bb.jpg",
            "genreIds": ["1454", "26", "1323"],
            "genres": ["Automotive", "Podcasts", "Games & Hobbies"]
        },
        {
            "wrapperType": "track",
            "kind": "podcast",
            "collectionId": 442192513,
            "trackId": 442192513,
            "artistName": "Michelle Naranjo, Chelsea Sexton, Aaron Bragman",
            "collectionName": "Open Line: Car Talk that Talks Back",
            "trackName": "Open Line: Car Talk that Talks Back",
            "collectionCensoredName": "Open Line: Car Talk that Talks Back",
            "trackCensoredName": "Open Line: Car Talk that Talks Back",
            "collectionViewUrl": "https://itunes.apple.com/us/podcast/open-line-car-talk-that-talks-back/id442192513?mt=2&uo=4",
            "feedUrl": "http://www.autoline.tv/podcasts/feeds/openline-audio.xml",
            "trackViewUrl": "https://itunes.apple.com/us/podcast/open-line-car-talk-that-talks-back/id442192513?mt=2&uo=4",
            "artworkUrl30": "http://is3.mzstatic.com/image/thumb/Music4/v4/78/62/3d/78623d6c-986a-a40b-e5ed-2f57ceede59e/source/30x30bb.jpg",
            "artworkUrl60": "http://is3.mzstatic.com/image/thumb/Music4/v4/78/62/3d/78623d6c-986a-a40b-e5ed-2f57ceede59e/source/60x60bb.jpg",
            "artworkUrl100": "http://is3.mzstatic.com/image/thumb/Music4/v4/78/62/3d/78623d6c-986a-a40b-e5ed-2f57ceede59e/source/100x100bb.jpg",
            "collectionPrice": 0.00,
            "trackPrice": 0.00,
            "trackRentalPrice": 0,
            "collectionHdPrice": 0,
            "trackHdPrice": 0,
            "trackHdRentalPrice": 0,
            "releaseDate": "2011-12-19T20:48:00Z",
            "collectionExplicitness": "cleaned",
            "trackExplicitness": "cleaned",
            "trackCount": 8,
            "country": "USA",
            "currency": "USD",
            "primaryGenreName": "Automotive",
            "contentAdvisoryRating": "Clean",
            "artworkUrl600": "http://is3.mzstatic.com/image/thumb/Music4/v4/78/62/3d/78623d6c-986a-a40b-e5ed-2f57ceede59e/source/600x600bb.jpg",
            "genreIds": ["1454", "26", "1323", "1318"],
            "genres": ["Automotive", "Podcasts", "Games & Hobbies", "Technology"]
        },
        {
            "wrapperType": "track",
            "kind": "podcast",
            "collectionId": 1253457640,
            "trackId": 1253457640,
            "artistName": "55KRC (WKRC-AM)",
            "collectionName": "Car Talk with Dale Donovan",
            "trackName": "Car Talk with Dale Donovan",
            "collectionCensoredName": "Car Talk with Dale Donovan",
            "trackCensoredName": "Car Talk with Dale Donovan",
            "collectionViewUrl": "https://itunes.apple.com/us/podcast/car-talk-with-dale-donovan/id1253457640?mt=2&uo=4",
            "feedUrl": "https://www.spreaker.com/ihr/show/2459997/episodes/feed-passthrough",
            "trackViewUrl": "https://itunes.apple.com/us/podcast/car-talk-with-dale-donovan/id1253457640?mt=2&uo=4",
            "artworkUrl30": "http://is2.mzstatic.com/image/thumb/Music117/v4/e4/c6/f2/e4c6f248-94b5-dbf4-6c5b-f4e6644075a6/source/30x30bb.jpg",
            "artworkUrl60": "http://is2.mzstatic.com/image/thumb/Music117/v4/e4/c6/f2/e4c6f248-94b5-dbf4-6c5b-f4e6644075a6/source/60x60bb.jpg",
            "artworkUrl100": "http://is2.mzstatic.com/image/thumb/Music117/v4/e4/c6/f2/e4c6f248-94b5-dbf4-6c5b-f4e6644075a6/source/100x100bb.jpg",
            "collectionPrice": 0.00,
            "trackPrice": 0.00,
            "trackRentalPrice": 0,
            "collectionHdPrice": 0,
            "trackHdPrice": 0,
            "trackHdRentalPrice": 0,
            "releaseDate": "2018-01-28T01:33:00Z",
            "collectionExplicitness": "cleaned",
            "trackExplicitness": "cleaned",
            "trackCount": 73,
            "country": "USA",
            "currency": "USD",
            "primaryGenreName": "Comedy",
            "contentAdvisoryRating": "Clean",
            "artworkUrl600": "http://is2.mzstatic.com/image/thumb/Music117/v4/e4/c6/f2/e4c6f248-94b5-dbf4-6c5b-f4e6644075a6/source/600x600bb.jpg",
            "genreIds": ["1303", "26"],
            "genres": ["Comedy", "Podcasts"]
        },
        {
            "wrapperType": "track",
            "kind": "podcast",
            "collectionId": 1334730107,
            "trackId": 1334730107,
            "artistName": "Tazz Da Angel / Anchor",
            "collectionName": "Car Talk",
            "trackName": "Car Talk",
            "collectionCensoredName": "Car Talk",
            "trackCensoredName": "Car Talk",
            "collectionViewUrl": "https://itunes.apple.com/us/podcast/car-talk/id1334730107?mt=2&uo=4",
            "feedUrl": "https://anchor.fm/s/206e580/podcast/rss",
            "trackViewUrl": "https://itunes.apple.com/us/podcast/car-talk/id1334730107?mt=2&uo=4",
            "artworkUrl30": "http://is5.mzstatic.com/image/thumb/Music62/v4/2c/e4/f9/2ce4f996-8d7d-f074-36fa-f06be64c2685/source/30x30bb.jpg",
            "artworkUrl60": "http://is5.mzstatic.com/image/thumb/Music62/v4/2c/e4/f9/2ce4f996-8d7d-f074-36fa-f06be64c2685/source/60x60bb.jpg",
            "artworkUrl100": "http://is5.mzstatic.com/image/thumb/Music62/v4/2c/e4/f9/2ce4f996-8d7d-f074-36fa-f06be64c2685/source/100x100bb.jpg",
            "collectionPrice": 0.00,
            "trackPrice": 0.00,
            "trackRentalPrice": 0,
            "collectionHdPrice": 0,
            "trackHdPrice": 0,
            "trackHdRentalPrice": 0,
            "releaseDate": "2018-01-30T00:59:00Z",
            "collectionExplicitness": "cleaned",
            "trackExplicitness": "cleaned",
            "trackCount": 2,
            "country": "USA",
            "currency": "USD",
            "primaryGenreName": "Society & Culture",
            "contentAdvisoryRating": "Clean",
            "artworkUrl600": "http://is5.mzstatic.com/image/thumb/Music62/v4/2c/e4/f9/2ce4f996-8d7d-f074-36fa-f06be64c2685/source/600x600bb.jpg",
            "genreIds": ["1324", "26"],
            "genres": ["Society & Culture", "Podcasts"]
        },
        {
            "wrapperType": "track",
            "kind": "podcast",
            "collectionId": 1300709523,
            "trackId": 1300709523,
            "artistName": "KFKA",
            "collectionName": "Car Talk on 1310 KFKA",
            "trackName": "Car Talk on 1310 KFKA",
            "collectionCensoredName": "Car Talk on 1310 KFKA",
            "trackCensoredName": "Car Talk on 1310 KFKA",
            "collectionViewUrl": "https://itunes.apple.com/us/podcast/car-talk-on-1310-kfka/id1300709523?mt=2&uo=4",
            "feedUrl": "http://1310kfka.com/category/podcasts/car-talk/feed/podcast/",
            "trackViewUrl": "https://itunes.apple.com/us/podcast/car-talk-on-1310-kfka/id1300709523?mt=2&uo=4",
            "artworkUrl30": "http://is4.mzstatic.com/image/thumb/Music128/v4/03/ec/38/03ec383b-5542-a864-b443-e7b33fc679af/source/30x30bb.jpg",
            "artworkUrl60": "http://is4.mzstatic.com/image/thumb/Music128/v4/03/ec/38/03ec383b-5542-a864-b443-e7b33fc679af/source/60x60bb.jpg",
            "artworkUrl100": "http://is4.mzstatic.com/image/thumb/Music128/v4/03/ec/38/03ec383b-5542-a864-b443-e7b33fc679af/source/100x100bb.jpg",
            "collectionPrice": 0.00,
            "trackPrice": 0.00,
            "trackRentalPrice": 0,
            "collectionHdPrice": 0,
            "trackHdPrice": 0,
            "trackHdRentalPrice": 0,
            "releaseDate": "2017-10-09T15:54:00Z",
            "collectionExplicitness": "cleaned",
            "trackExplicitness": "cleaned",
            "trackCount": 10,
            "country": "USA",
            "currency": "USD",
            "primaryGenreName": "Business",
            "contentAdvisoryRating": "Clean",
            "artworkUrl600": "http://is4.mzstatic.com/image/thumb/Music128/v4/03/ec/38/03ec383b-5542-a864-b443-e7b33fc679af/source/600x600bb.jpg",
            "genreIds": ["1321", "26", "1316", "1465", "1466"],
            "genres": ["Business", "Podcasts", "Sports & Recreation", "Professional", "College & High School"]
        },
        {
            "wrapperType": "track",
            "kind": "podcast",
            "artistId": 726780397,
            "collectionId": 1290245147,
            "trackId": 1290245147,
            "artistName": "Radio.com",
            "collectionName": "Talking About Cars with Randy Kerdoon",
            "trackName": "Talking About Cars with Randy Kerdoon",
            "collectionCensoredName": "Talking About Cars with Randy Kerdoon",
            "trackCensoredName": "Talking About Cars with Randy Kerdoon",
            "artistViewUrl": "https://itunes.apple.com/us/artist/radio-com/726780397?mt=2&uo=4",
            "collectionViewUrl": "https://itunes.apple.com/us/podcast/talking-about-cars-with-randy-kerdoon/id1290245147?mt=2&uo=4",
            "feedUrl": "https://www.omnycontent.com/d/playlist/4b5f9d6d-9214-48cb-8455-a73200038129/8d8a2452-59cd-4c32-9eab-a7c3014d3b0b/87891159-63b6-4df5-9819-a7c3014d8758/podcast.rss",
            "trackViewUrl": "https://itunes.apple.com/us/podcast/talking-about-cars-with-randy-kerdoon/id1290245147?mt=2&uo=4",
            "artworkUrl30": "http://is1.mzstatic.com/image/thumb/Music128/v4/7a/0d/70/7a0d7020-8127-eed3-2b3a-d1c3805ddd7a/source/30x30bb.jpg",
            "artworkUrl60": "http://is1.mzstatic.com/image/thumb/Music128/v4/7a/0d/70/7a0d7020-8127-eed3-2b3a-d1c3805ddd7a/source/60x60bb.jpg",
            "artworkUrl100": "http://is1.mzstatic.com/image/thumb/Music128/v4/7a/0d/70/7a0d7020-8127-eed3-2b3a-d1c3805ddd7a/source/100x100bb.jpg",
            "collectionPrice": 0.00,
            "trackPrice": 0.00,
            "trackRentalPrice": 0,
            "collectionHdPrice": 0,
            "trackHdPrice": 0,
            "trackHdRentalPrice": 0,
            "releaseDate": "2018-02-01T17:26:00Z",
            "collectionExplicitness": "cleaned",
            "trackExplicitness": "cleaned",
            "trackCount": 13,
            "country": "USA",
            "currency": "USD",
            "primaryGenreName": "Automotive",
            "contentAdvisoryRating": "Clean",
            "artworkUrl600": "http://is1.mzstatic.com/image/thumb/Music128/v4/7a/0d/70/7a0d7020-8127-eed3-2b3a-d1c3805ddd7a/source/600x600bb.jpg",
            "genreIds": ["1454", "26", "1323"],
            "genres": ["Automotive", "Podcasts", "Games & Hobbies"]
        },
        {
            "wrapperType": "track",
            "kind": "podcast",
            "collectionId": 1022077375,
            "trackId": 1022077375,
            "artistName": "Official podcast of the What are We Talking About YouTube channel",
            "collectionName": "Carcast - weekly discussion show from my car",
            "trackName": "Carcast - weekly discussion show from my car",
            "collectionCensoredName": "Carcast - weekly discussion show from my car",
            "trackCensoredName": "Carcast - weekly discussion show from my car",
            "collectionViewUrl": "https://itunes.apple.com/us/podcast/carcast-weekly-discussion-show-from-my-car/id1022077375?mt=2&uo=4",
            "feedUrl": "http://feeds.soundcloud.com/users/soundcloud:users:161596907/sounds.rss",
            "trackViewUrl": "https://itunes.apple.com/us/podcast/carcast-weekly-discussion-show-from-my-car/id1022077375?mt=2&uo=4",
            "artworkUrl30": "http://is1.mzstatic.com/image/thumb/Music62/v4/19/38/60/19386058-e6b7-6cea-5f45-170eb9a55af4/source/30x30bb.jpg",
            "artworkUrl60": "http://is1.mzstatic.com/image/thumb/Music62/v4/19/38/60/19386058-e6b7-6cea-5f45-170eb9a55af4/source/60x60bb.jpg",
            "artworkUrl100": "http://is1.mzstatic.com/image/thumb/Music62/v4/19/38/60/19386058-e6b7-6cea-5f45-170eb9a55af4/source/100x100bb.jpg",
            "collectionPrice": 0.00,
            "trackPrice": 0.00,
            "trackRentalPrice": 0,
            "collectionHdPrice": 0,
            "trackHdPrice": 0,
            "trackHdRentalPrice": 0,
            "releaseDate": "2017-12-06T03:04:00Z",
            "collectionExplicitness": "cleaned",
            "trackExplicitness": "cleaned",
            "trackCount": 85,
            "country": "USA",
            "currency": "USD",
            "primaryGenreName": "TV & Film",
            "contentAdvisoryRating": "Clean",
            "artworkUrl600": "http://is1.mzstatic.com/image/thumb/Music62/v4/19/38/60/19386058-e6b7-6cea-5f45-170eb9a55af4/source/600x600bb.jpg",
            "genreIds": ["1309", "26"],
            "genres": ["TV & Film", "Podcasts"]
        },
        {
            "wrapperType": "track",
            "kind": "podcast",
            "collectionId": 354161935,
            "trackId": 354161935,
            "artistName": "Mike TM",
            "collectionName": "Car Balls Talk",
            "trackName": "Car Balls Talk",
            "collectionCensoredName": "Car Balls Talk",
            "trackCensoredName": "Car Balls Talk",
            "collectionViewUrl": "https://itunes.apple.com/us/podcast/car-balls-talk/id354161935?mt=2&uo=4",
            "feedUrl": "http://feeds.feedburner.com/CarBallsTalk",
            "trackViewUrl": "https://itunes.apple.com/us/podcast/car-balls-talk/id354161935?mt=2&uo=4",
            "artworkUrl30": "http://is4.mzstatic.com/image/thumb/Music6/v4/00/83/44/008344f6-7d9f-2031-39c1-107020839411/source/30x30bb.jpg",
            "artworkUrl60": "http://is4.mzstatic.com/image/thumb/Music6/v4/00/83/44/008344f6-7d9f-2031-39c1-107020839411/source/60x60bb.jpg",
            "artworkUrl100": "http://is4.mzstatic.com/image/thumb/Music6/v4/00/83/44/008344f6-7d9f-2031-39c1-107020839411/source/100x100bb.jpg",
            "collectionPrice": 0.00,
            "trackPrice": 0.00,
            "trackRentalPrice": 0,
            "collectionHdPrice": 0,
            "trackHdPrice": 0,
            "trackHdRentalPrice": 0,
            "releaseDate": "2010-03-16T13:32:00Z",
            "collectionExplicitness": "explicit",
            "trackExplicitness": "explicit",
            "trackCount": 2,
            "country": "USA",
            "currency": "USD",
            "primaryGenreName": "Comedy",
            "contentAdvisoryRating": "Explicit",
            "artworkUrl600": "http://is4.mzstatic.com/image/thumb/Music6/v4/00/83/44/008344f6-7d9f-2031-39c1-107020839411/source/600x600bb.jpg",
            "genreIds": ["1303", "26"],
            "genres": ["Comedy", "Podcasts"]
        },
        {
            "wrapperType": "track",
            "kind": "podcast",
            "collectionId": 1233837917,
            "trackId": 1233837917,
            "artistName": "Ru",
            "collectionName": "Ru's Car Talk",
            "trackName": "Ru's Car Talk",
            "collectionCensoredName": "Ru's Car Talk",
            "trackCensoredName": "Ru's Car Talk",
            "collectionViewUrl": "https://itunes.apple.com/us/podcast/rus-car-talk/id1233837917?mt=2&uo=4",
            "feedUrl": "http://ruscartalk.podbean.com/feed/",
            "trackViewUrl": "https://itunes.apple.com/us/podcast/rus-car-talk/id1233837917?mt=2&uo=4",
            "artworkUrl30": "http://is5.mzstatic.com/image/thumb/Music127/v4/cf/6c/39/cf6c392f-f2ae-d262-21fd-be3d0f908f6d/source/30x30bb.jpg",
            "artworkUrl60": "http://is5.mzstatic.com/image/thumb/Music127/v4/cf/6c/39/cf6c392f-f2ae-d262-21fd-be3d0f908f6d/source/60x60bb.jpg",
            "artworkUrl100": "http://is5.mzstatic.com/image/thumb/Music127/v4/cf/6c/39/cf6c392f-f2ae-d262-21fd-be3d0f908f6d/source/100x100bb.jpg",
            "collectionPrice": 0.00,
            "trackPrice": 0.00,
            "trackRentalPrice": 0,
            "collectionHdPrice": 0,
            "trackHdPrice": 0,
            "trackHdRentalPrice": 0,
            "releaseDate": "2017-06-23T03:02:00Z",
            "collectionExplicitness": "explicit",
            "trackExplicitness": "explicit",
            "trackCount": 3,
            "country": "USA",
            "currency": "USD",
            "primaryGenreName": "Automotive",
            "contentAdvisoryRating": "Explicit",
            "artworkUrl600": "http://is5.mzstatic.com/image/thumb/Music127/v4/cf/6c/39/cf6c392f-f2ae-d262-21fd-be3d0f908f6d/source/600x600bb.jpg",
            "genreIds": ["1454", "26", "1323"],
            "genres": ["Automotive", "Podcasts", "Games & Hobbies"]
        },
        {
            "wrapperType": "track",
            "kind": "podcast",
            "collectionId": 1153259390,
            "trackId": 1153259390,
            "artistName": "Marc Farley (GoFarley)",
            "collectionName": "VulcanCast tech talk in cars podcast (audio-only)",
            "trackName": "VulcanCast tech talk in cars podcast (audio-only)",
            "collectionCensoredName": "VulcanCast tech talk in cars podcast (audio-only)",
            "trackCensoredName": "VulcanCast tech talk in cars podcast (audio-only)",
            "collectionViewUrl": "https://itunes.apple.com/us/podcast/vulcancast-tech-talk-in-cars-podcast-audio-only/id1153259390?mt=2&uo=4",
            "feedUrl": "http://vulcancast_tech_talks_in_cars.blubrry.com/feed/podcast/",
            "trackViewUrl": "https://itunes.apple.com/us/podcast/vulcancast-tech-talk-in-cars-podcast-audio-only/id1153259390?mt=2&uo=4",
            "artworkUrl30": "http://is2.mzstatic.com/image/thumb/Music62/v4/8d/9a/fb/8d9afba3-6722-c55b-14a2-ba28f2e6e56f/source/30x30bb.jpg",
            "artworkUrl60": "http://is2.mzstatic.com/image/thumb/Music62/v4/8d/9a/fb/8d9afba3-6722-c55b-14a2-ba28f2e6e56f/source/60x60bb.jpg",
            "artworkUrl100": "http://is2.mzstatic.com/image/thumb/Music62/v4/8d/9a/fb/8d9afba3-6722-c55b-14a2-ba28f2e6e56f/source/100x100bb.jpg",
            "collectionPrice": 0.00,
            "trackPrice": 0.00,
            "trackRentalPrice": 0,
            "collectionHdPrice": 0,
            "trackHdPrice": 0,
            "trackHdRentalPrice": 0,
            "releaseDate": "2016-09-25T17:00:00Z",
            "collectionExplicitness": "cleaned",
            "trackExplicitness": "cleaned",
            "trackCount": 20,
            "country": "USA",
            "currency": "USD",
            "primaryGenreName": "Tech News",
            "contentAdvisoryRating": "Clean",
            "artworkUrl600": "http://is2.mzstatic.com/image/thumb/Music62/v4/8d/9a/fb/8d9afba3-6722-c55b-14a2-ba28f2e6e56f/source/600x600bb.jpg",
            "genreIds": ["1448", "26", "1318", "1450"],
            "genres": ["Tech News", "Podcasts", "Technology", "Podcasting"]
        },
        {
            "wrapperType": "track",
            "kind": "podcast",
            "collectionId": 1266688299,
            "trackId": 1266688299,
            "artistName": "MSL",
            "collectionName": "MSL Car Talk",
            "trackName": "MSL Car Talk",
            "collectionCensoredName": "MSL Car Talk",
            "trackCensoredName": "MSL Car Talk",
            "collectionViewUrl": "https://itunes.apple.com/us/podcast/msl-car-talk/id1266688299?mt=2&uo=4",
            "feedUrl": "https://msl.co.uk/feed/podcast",
            "trackViewUrl": "https://itunes.apple.com/us/podcast/msl-car-talk/id1266688299?mt=2&uo=4",
            "artworkUrl30": "http://is5.mzstatic.com/image/thumb/Music128/v4/45/74/fa/4574fa9f-e5b9-dcae-df32-b3705f44667b/source/30x30bb.jpg",
            "artworkUrl60": "http://is5.mzstatic.com/image/thumb/Music128/v4/45/74/fa/4574fa9f-e5b9-dcae-df32-b3705f44667b/source/60x60bb.jpg",
            "artworkUrl100": "http://is5.mzstatic.com/image/thumb/Music128/v4/45/74/fa/4574fa9f-e5b9-dcae-df32-b3705f44667b/source/100x100bb.jpg",
            "collectionPrice": 0.00,
            "trackPrice": 0.00,
            "trackRentalPrice": 0,
            "collectionHdPrice": 0,
            "trackHdPrice": 0,
            "trackHdRentalPrice": 0,
            "releaseDate": "2017-11-01T08:00:00Z",
            "collectionExplicitness": "cleaned",
            "trackExplicitness": "cleaned",
            "trackCount": 7,
            "country": "USA",
            "currency": "USD",
            "primaryGenreName": "Automotive",
            "contentAdvisoryRating": "Clean",
            "artworkUrl600": "http://is5.mzstatic.com/image/thumb/Music128/v4/45/74/fa/4574fa9f-e5b9-dcae-df32-b3705f44667b/source/600x600bb.jpg",
            "genreIds": ["1454", "26", "1323", "1311", "1460"],
            "genres": ["Automotive", "Podcasts", "Games & Hobbies", "News & Politics", "Hobbies"]
        },
        {
            "wrapperType": "track",
            "kind": "podcast",
            "collectionId": 1303226860,
            "trackId": 1303226860,
            "artistName": "Casual Car Talk / Anchor",
            "collectionName": "Casual Car Talk",
            "trackName": "Casual Car Talk",
            "collectionCensoredName": "Casual Car Talk",
            "trackCensoredName": "Casual Car Talk",
            "collectionViewUrl": "https://itunes.apple.com/us/podcast/casual-car-talk/id1303226860?mt=2&uo=4",
            "feedUrl": "https://anchor.fm/s/160c1dc/podcast/rss",
            "trackViewUrl": "https://itunes.apple.com/us/podcast/casual-car-talk/id1303226860?mt=2&uo=4",
            "artworkUrl30": "http://is4.mzstatic.com/image/thumb/Music118/v4/d6/d5/1c/d6d51c92-1fb2-a66c-0729-a7afa862415d/source/30x30bb.jpg",
            "artworkUrl60": "http://is4.mzstatic.com/image/thumb/Music118/v4/d6/d5/1c/d6d51c92-1fb2-a66c-0729-a7afa862415d/source/60x60bb.jpg",
            "artworkUrl100": "http://is4.mzstatic.com/image/thumb/Music118/v4/d6/d5/1c/d6d51c92-1fb2-a66c-0729-a7afa862415d/source/100x100bb.jpg",
            "collectionPrice": 0.00,
            "trackPrice": 0.00,
            "trackRentalPrice": 0,
            "collectionHdPrice": 0,
            "trackHdPrice": 0,
            "trackHdRentalPrice": 0,
            "releaseDate": "2017-10-29T04:33:00Z",
            "collectionExplicitness": "cleaned",
            "trackExplicitness": "cleaned",
            "trackCount": 3,
            "country": "USA",
            "currency": "USD",
            "primaryGenreName": "Sports & Recreation",
            "contentAdvisoryRating": "Clean",
            "artworkUrl600": "http://is4.mzstatic.com/image/thumb/Music118/v4/d6/d5/1c/d6d51c92-1fb2-a66c-0729-a7afa862415d/source/600x600bb.jpg",
            "genreIds": ["1316", "26"],
            "genres": ["Sports & Recreation", "Podcasts"]
        },
        {
            "wrapperType": "track",
            "kind": "podcast",
            "collectionId": 626603036,
            "trackId": 626603036,
            "artistName": "FM Yamaguchi",
            "collectionName": "遥)Sound Puredio Car Audio Talking",
            "trackName": "遥)Sound Puredio Car Audio Talking",
            "collectionCensoredName": "遥)Sound Puredio Car Audio Talking",
            "trackCensoredName": "遥)Sound Puredio Car Audio Talking",
            "collectionViewUrl": "https://itunes.apple.com/us/podcast/%E9%81%A5-sound-puredio-car-audio-talking/id626603036?mt=2&uo=4",
            "feedUrl": "http://www.fmy.co.jp/blog/xml-rss2.php?blogid=53",
            "trackViewUrl": "https://itunes.apple.com/us/podcast/%E9%81%A5-sound-puredio-car-audio-talking/id626603036?mt=2&uo=4",
            "artworkUrl30": "http://is5.mzstatic.com/image/thumb/Music2/v4/7e/b4/dd/7eb4dde0-a082-d2f6-48e8-8ae18f8597da/source/30x30bb.jpg",
            "artworkUrl60": "http://is5.mzstatic.com/image/thumb/Music2/v4/7e/b4/dd/7eb4dde0-a082-d2f6-48e8-8ae18f8597da/source/60x60bb.jpg",
            "artworkUrl100": "http://is5.mzstatic.com/image/thumb/Music2/v4/7e/b4/dd/7eb4dde0-a082-d2f6-48e8-8ae18f8597da/source/100x100bb.jpg",
            "collectionPrice": 0.00,
            "trackPrice": 0.00,
            "trackRentalPrice": 0,
            "collectionHdPrice": 0,
            "trackHdPrice": 0,
            "trackHdRentalPrice": 0,
            "releaseDate": "2016-07-23T02:45:00Z",
            "collectionExplicitness": "notExplicit",
            "trackExplicitness": "notExplicit",
            "trackCount": 29,
            "country": "USA",
            "currency": "USD",
            "primaryGenreName": "Games & Hobbies",
            "artworkUrl600": "http://is5.mzstatic.com/image/thumb/Music2/v4/7e/b4/dd/7eb4dde0-a082-d2f6-48e8-8ae18f8597da/source/600x600bb.jpg",
            "genreIds": ["1323", "26", "1454"],
            "genres": ["Games & Hobbies", "Podcasts", "Automotive"]
        }]
};


$('#podcast-search-form').focus();


function submitPodcastSearch(e) {
    //
    // AJAX request that calls the searchResultsDisplay function in views.py
    // uses the string in the search bar to access Itunes API
    // inserts searchresultsdisplay.html into the search-results div
    //
    e.preventDefault();
    const searchString = $('#input-search-field').val().toLowerCase();
    const searchStringNoSPace = searchString.split(' ').join('+');
    $.ajax({
        // type: 'GET',
        type: 'POST',
        url: /searchresultsdisplay/,
        data: {
            searchParam: searchStringNoSPace,
            csrfmiddlewaretoken: csrftoken,
        },
        success: function (response) {
            $('#search-results').html(response)
        },
        error: function () {
            console.log("e")
        }
    });
}
;

function clickCoverImage(xml_link, collection_id, div_id) {
    //
    // By clicking on the cover image of the podcast, user displays that podcast's episodes
    // Calls the episodeDisplay function in views.py, which,
    // parses the xml feed to return specific information for that podcast, such as artwork, mp3 url, title, date, etc.
    // With that info, the Podcast is added to our openDatabase
    //
    // Some Podcast use a different XML path than the one we currently are able to navigate.  Need to build an alternative
    // traversal method
    //
    const rss_feed = xml_link;
    event.preventDefault();
    $.ajax({
        type: 'POST',
        url: '/episodedisplay/',
        data: {
            rss_feed: rss_feed,
            collection_id: collection_id,
            csrfmiddlewaretoken: csrftoken,
        },
        success: function (response) {
            const episode_div = document.getElementById(collection_id);
            episode_div.innerHTML = response
        },
        error: function () {
            console.log('f')
        }

    })
}

function addToLikes(name) {
    //
    // Calls addToLikes method in views.py.  Adds episode and user to the database in the Likes table in models.py
    //
    event.preventDefault();
    $.ajax({
            type: "POST",
            url: '/addtolikes/',
            data: {
                episode_name: name,
                csrfmiddlewaretoken: csrftoken,
            },
            success: function (response) {
                document.location.reload()
            },
            error: function (response) {
                console.log('f')
            }
        }
    )
}

function removeFromLikes(user, episode_name) {
    //
    // Removes episode and user from Likes table in models.py
    //
    event.preventDefault();
    $.ajax({
        type: "POST",
        url: '/removefromlikes/',
        data: {
            user: user,
            episode_name: episode_name,
            csrfmiddlewaretoken: csrftoken
        }, success: function (response) {
            document.location.reload()
        }, error: function (response) {
            console.log('fail: ' + response)
        }
    })
}

function followUser(user, following) {
    //
    // calls followUser in views.py
    // Creates a Following instance in which a user is following another user
    //
    event.preventDefault();
    $.ajax({
        type: "POST",
        url: '/followuser/',
        data: {
            user: user,
            following: following,
            csrfmiddlewaretoken: csrftoken
        }, success: function (response) {

            document.location.reload()
        }, error: function (response) {
            console.log('fail')
        }
    })
}

function unFollowUser(user, following) {
    //
    // Removes following instance from Following model by calling unFollwoUser in views.py
    //
    event.preventDefault();
    $.ajax({
        type: "POST",
        url: '/unfollowuser/',
        data: {
            user: user,
            following: following,
            csrfmiddlewaretoken: csrftoken
        }, success: function (response) {
            document.location.reload()
        }, error: function (response) {
            console.log('success')
        }
    })
}

