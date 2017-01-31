var Game = {
    init: function()
    {
        var locationDescription = document.getElementById("location-description");
        var locationImg = document.getElementById("location-img");
        var locationMoves = document.getElementById("location-moves");
        var locationThings = document.getElementById("location-things");
        var playerInventoryField = document.getElementById("player-inventory-field");

        var messageDiv = document.getElementById('message-div');
        var inputDivText = document.getElementById('input-div-text');
        var mainInput = document.getElementById('main-input');

        var currentLocation = location_47;
        var currentX = 4;
        var currentY = 7;

        var playerInventory = [];

        // element: 1 - north, 2 - east, 3 - south, 4 - west
        // commands dictionary
        var commands = {
            WEST: function() { move(4); },
            W: function() { move(4); },

            EAST: function() { move(2); },
            E: function() { move(2); },

            NORTH: function() { move(1); },
            N: function() { move(1); },

            SOUTH: function() { move(3); },
            S: function() { move(3); },

            TAKE: function() {console.log("take")},
            T: function() {console.log("take")},
        };

        function showMessage(message)
        {
            messageDiv.innerHTML = message;
            messageDiv.style.display = 'block';

            // need to refactor in future
            mainInput.style.display = 'none';
            inputDivText.style.display = 'none';

            setTimeout(function()
            {
                messageDiv.style.display = 'none';

                // need to refactor in future
                mainInput.style.display = 'block';
                inputDivText.style.display = 'block';

            }, 1000);
        }

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

        // move to another location
        function move(direction)
        {
            var is_can = false;
            switch(direction){
                // go north
                case 1:
                    if(currentLocation.moves[direction-1])
                    {
                        currentX--;
                        if(window["location_" + currentX + currentY] != undefined)
                        {
                            is_can = true;
                            currentLocation = window["location_" + currentX + "" + currentY];
                            showMessage('You are going north...');
                        }
                    }
                    break;
                // go east
                case 2:
                    if(currentLocation.moves[direction-1])
                    {
                        currentY++;
                        if(window["location_" + currentX + currentY] != undefined)
                        {
                            is_can = true;
                            currentLocation = window["location_" + currentX + "" + currentY];
                            showMessage('You are going east...');
                        }
                    }
                    break;
                // go south
                case 3:
                    if(currentLocation.moves[direction-1])
                    {
                        currentX++;
                        if(window["location_" + currentX + currentY] != undefined)
                        {
                            is_can = true;
                            currentLocation = window["location_" + currentX + "" + currentY];
                            showMessage('You are going south...');
                        }
                    }
                    break;
                // go west
                case 4:
                    if(currentLocation.moves[direction-1])
                    {
                        currentY--;
                        if(window["location_" + currentX + currentY] != undefined)
                        {
                            is_can = true;
                            currentLocation = window["location_" + currentX + "" + currentY];
                            showMessage('You are going west...');
                        }
                    }
                    break;
            }

            if(!is_can)
            {
                showMessage("You can't go that way!");
            }

            console.debug(currentLocation);
            // at the end, change location
            update_location();
        }

        function processor(command)
        {
            if(commands[command] == undefined)
            {
                console.log('Notification: Command not exist');
            }
            else
            {
                commands[command]();
            }
        }

        command_processor = processor;

        // start game
        update_location();
    }
};
