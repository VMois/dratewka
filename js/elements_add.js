var CreateElements = {

    init: function ()
    {
        var body = document.getElementById("body");

        // create main structure
        // start
        html = "<div id='main'>"; // main start

        html = html + "<div id='location-div'>" +
                      "<h1 id='location-description'></h1>" +
                      "<img id='location-img'></img>" +
                      "<h1 id='location-moves'></h1>" +
                      "<h1 id='location-things'>You see nothing</h1>" +
                      "<h1 id='player-inventory-field'>You carrying nothing</h1>" +
                      "</div>";

        html = html + "<div id='input-div'>" +
                      "<h1 id='input-div-text'>What now?</h1>" +
                      "<input id='main-input' type='text' autofocus></div>";

        html = html + "</div>"; //main end
        body.innerHTML = html;
        // end
    }

};
