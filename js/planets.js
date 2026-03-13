// API: 
// https://api.visibleplanets.dev/v3?latitude=12&longitude=-981

// Card Template:
    // <div class="entry" id="">
    // 	<figure>
    //         <img src="" alt="" />
    // 	<figcaption></figcaption>
    // 	</figure>
    // </div>

$(function () {

    $("#dialog").hide();
    
    $.getJSON("https://api.visibleplanets.dev/v3?latitude=12&longitude=-981", function(response) {

            response.data.forEach(function(body) {

                var card = `
                <div class="entry" 
                    data-name="${body.name}"
                    data-constellation="${body.constellation}"
                    data-altitude="${body.altitude}"
                    data-azimuth="${body.azimuth}">
                    
                    <figure>
                        <img src="images/${body.name.toLowerCase()}.png" alt="${body.name}">
                        <figcaption>${body.name}</figcaption>
                    </figure>

                </div>
                `;

                $("#planet-container").append(card);

            });

        });

});