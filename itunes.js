const submitButton = document.getElementById("submit-button")
const inputField = document.getElementById("input-field")

submitButton.addEventListener("click", function (event) {
    $.ajax({
        url: "https://itunes-api-proxy.glitch.me/search?term=music&genreIndex=8",
        dataType: "json",
        data: {
            term: inputField.value,
            media: "music",
            // attribute: genreIndex = 8,
            // entity: "song",
            // // limit: 25,
            // explicit: "No",
        },

        success: function (results) {

            console.log(results);

            let resultsDiv = document.getElementById("search-results")
            //This places the search results in resultsDiv
            resultsDiv.innerHTML = ""
            //This gets the HTML markup from the search results
            let countP = document.createElement("p")

            resultsDiv.appendChild(countP)

            for (let song of results.results) {

                let songP = document.createElement("p")

                let songArtistP = document.createElement("p")

                let songLink = document.createElement("a")

                let coverArt = document.createElement("img")

                coverArt.src = song.artworkUrl100

                song.href = song.trackViewUrl

                songLink.href = song.trackViewUrl

                songLink.innerText = song.trackName

                songLink.innerText = song.artistName

                songP.appendChild(songLink)

                songP.appendChild(songArtistP)

                songP.appendChild(coverArt)

                resultsDiv.appendChild(songP)
            }
        }
    });
})




