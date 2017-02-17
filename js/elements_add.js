var CreatePlayerInterface = {

    init: function ()
    {
        var main = document.getElementById("main");

        // create player interface structure
        // start

        html = "<div id='location-div'>" +
               "<h1 id='location-description'></h1>" +
               "<img id='location-img' />" +
               "<div class='compass_div'>" +
               "<img id='compass' src='gfx/compass.png' />" +
               "<div id='compass-west' class='compass_close'></div>" +
               "<div id='compass-east' class='compass_close'></div>" +
               "<div id='compass-north' class='compass_close'></div>" +
               "<div id='compass-south' class='compass_close'></div>" +
               "</div>" +
               "</div>" +
               "<div id='player-div'>" +
               "<h1 id='location-moves'></h1>" +
               "<h1 id='location-items'>You see nothing</h1>" +
               "<h1 id='player-inventory-field'>You carrying nothing</h1>" +
               "<div id='help-div'></div>";

        html = html + "<div id='input-div'>" +
                      "<div id='message-div'></div>" +
                      "<h1 id='input-div-text'>What now?</h1>" +
                      "<input id='main-input' type='text' autofocus>" +
                      "</div>" +
                      "</div>";

        main.innerHTML = html;
        // end
    }

};
