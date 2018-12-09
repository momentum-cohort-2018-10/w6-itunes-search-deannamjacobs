const submitButton = document.getElementById("submit-button")
const inputField = document.getElementById("input-field")

submitButton.addEventListener("click", function (event) {
    $.ajax({
        url: "https://itunes-api-proxy.glitch.me/search?term=",
        dataType: "json",
        data: {
            term: inputField.value,
            // entity: "song",
            // limit: 25,
            // explicit: "No"
        },

        success: function (results) {

            console.log(results);

            let resultsDiv = document.getElementById("search-results")

            let countP = document.createElement("p")

            countP.innerText = "Total count: ${results.resultCount}"

            resultsDiv.appendChild(countP)

            for (let song of search.results) {

                let songP = document.createElement("p")

                let songLink = document.createElement("a")

                songLink.href = song.songViewUrl

                songLink.innerText = song.songName

                songLink.innerText = song.artistName

                songP.appendChild(songLink)

                resultsDiv.appendChild(songP)
            }
        }
    });
})
// $results.empty();

// $.each(data.results, function (i, result) {
//     if (i > 24) { return false; }




// })
// //This is the function for the Submit button.



// var $input = $('<input type="search" />').appendTo(document.body),
//     $results = $('<div class="results" />').appendTo(document.body);

            // // $input.val('LeCrae');

            // // function fetch(term) {

