var Game = {
    init: function()
    {
        var locationDescription = document.getElementById("location-description");
        var locationImg = document.getElementById("location-img");
        var locationMoves = document.getElementById("location-moves");
        var locationThings = document.getElementById("location-things");
        var playerInventoryField = document.getElementById("player-inventory-field");

        var currentLocation = location_47;
        var playerInventory = [];

        // update location and player inventory
        // START
        function update_location()
        {
            // basic change
            locationDescription.innerHTML = currentLocation.description;
            locationImg.src = currentLocation.img_name;
            locationImg.style.backgroundColor = currentLocation.rgb_color;

            // possible moves v1
            text = "";
            if(currentLocation.moves[0] == true)
            {
                text += "NORTH, ";
            }
            if(currentLocation.moves[1] == true)
            {
                text += "EAST, ";
            }
            if(currentLocation.moves[2] == true)
            {
                text += "SOUTH, ";
            }
            if(currentLocation.moves[3] == true)
            {
                text += "WEST.";
            }

            if(text != "")
            {
                locationMoves.innerHTML = "You can go " + text;
            }
            else
            {
                locationMoves.innerHTML = "Sorry! You cannot escape!:)"
            }

            // possible to take things
            text = "";

            for(i=0; i < currentLocation.things.length; i++)
            {
                if(i == currentLocation.things.length - 1)
                {
                    text += currentLocation.things[i] + ".";
                }
                else
                {
                    text += currentLocation.things[i] + ", ";
                }
            }

            if(text != "")
            {
                locationThings.innerHTML = "You see: " + text;
            }
            else
            {
                locationThings.innerHTML = "You see nothing."
            }

        }
        // END

        // start game
        update_location();
    }
};
