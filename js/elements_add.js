var CreateElements = {

    init: function ()
    {
        var body = document.getElementById("body");

        // create main structure
        // start
        html = "<div id='main'>";
        html = html + "<div id='location-div'><h1 id='location-description'></h1><img id='location-img'></img></div>";
        html = html + "<div id='input-div'><h1 id='input-div-text'>What now?</h1><input id='main-input' type='text' autofocus></div>";
        html = html + "</div>";
        body.innerHTML = html;
        // end
    }

};
