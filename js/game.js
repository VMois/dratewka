var Game = {
    init: function()
    {
        var locationDescription = document.getElementById("location-description");
        var locationImg = document.getElementById("location-img");
        var locationMoves = document.getElementById("location-moves");
        var locationItems = document.getElementById("location-items");
        var playerInventoryField = document.getElementById("player-inventory-field");

        var messageDiv = document.getElementById('message-div');
        var helpDiv = document.getElementById('help-div');
        var inputDivText = document.getElementById('input-div-text');
        var mainInput = document.getElementById('main-input');
        is_halt = false;

        var currentLocation = location_47;
        var currentX = 4;
        var currentY = 7;

        // only one item can be
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

            TAKE: function() { take() },
            T: function() { take() },

            DROP: function() { drop() },
            D: function() { drop() },

            USE: function() { use() },
            U: function() { use() },

            VOCABULARY: function() { vocabulary_help() },
            V: function() { vocabulary_help() },

            GOSSIPS: function() { gossips() },
            G: function() { gossips() },
        };

        // crafts each location has craft options
        // each craft for location is list
        // List: 1-ued item, 2 - item to get, 3 - message, 4 - extra actions
        var crafts = {
            loc_37: [
                [15, 16, ["The cooper sold you a new barrel"],
                function() { console.debug('[*] No extra action!')}]
            ],
        };

        function showMessage(message, type='message', time=1000, many=false)
        {
            mainInput.style.display = 'none';
            inputDivText.style.display = 'none';
            if( type == 'message' )
            {
                messageDiv.innerHTML = message;
                messageDiv.style.display = 'block';

                is_halt = true;

                setTimeout(function()
                {
                    if(!many)
                    {
                        messageDiv.style.display = 'none';
                        messageDiv.innerHTML = '';
                        mainInput.style.display = 'block';
                        inputDivText.style.display = 'block';
                    }

                    is_halt = false;

                }, time);
            }
            else if( type == 'help' )
            {
                helpDiv.innerHTML = message;
                helpDiv.style.display = 'block';

                locationMoves.style.display = 'none';
                locationItems.style.display = 'none';
                playerInventoryField.style.display = 'none';
                is_halt = true;
                document.onkeydown=function(e)
                {
                    if( is_halt )
                    {
                        helpDiv.className = 'hide';
                        helpDiv.innerHTML = '';
                        mainInput.style.display = 'block';
                        inputDivText.style.display = 'block';
                        locationMoves.style.display = 'block';
                        locationItems.style.display = 'block';
                        playerInventoryField.style.display = 'block';
                        is_halt = false;

                        // use to free keydown event and prevent bug
                        document.onkeydown = null;
                    }
                }
            }
        }

        // update location and player inventory
        // START
        function update_player_inventory()
        {
            var item = playerInventory[0];
            if(item != undefined)
            {
                playerInventoryField.innerHTML = "You are carrying " + item.variant_name;
            }
            else
            {
                playerInventoryField.innerHTML = "You are carrying nothing."
            }
        }

        function update_location_items()
        {
            // possible items to take
            text = "";

            for(i=0; i < currentLocation.items.length; i++)
            {
                if(i == currentLocation.items.length - 1)
                {
                    text += currentLocation.items[i].variant_name + ".";
                }
                else
                {
                    text += currentLocation.items[i].variant_name + ", ";
                }
            }

            if(text != "")
            {
                locationItems.innerHTML = "You see " + text;
            }
            else
            {
                locationItems.innerHTML = "You see nothing."
            }
        }

        // maps list position to dection name
        var moves_map = {
            0: 'NORTH',
            1: 'EAST',
            2: 'SOUTH',
            3: 'WEST'
        };

        function update_location()
        {
            // basic change
            locationDescription.innerHTML = currentLocation.description;
            locationImg.src = currentLocation.img_name;
            locationImg.style.backgroundColor = currentLocation.rgb_color;

            // possible moves
            text = "";
            var can_go_list = [];

            for(i=0; i < currentLocation.moves.length; i++)
            {
                if(currentLocation.moves[i])
                {
                    can_go_list.push(moves_map[i]);
                }
            }

            for(i=0; i < can_go_list.length; i++)
            {
                if(i == can_go_list.length - 1)
                {
                    text += can_go_list[i] + ".";
                }
                else
                {
                    text += can_go_list[i] + ", ";
                }
            }

            if(text != "")
            {
                locationMoves.innerHTML = "You can go " + text;
            }
            else
            {
                locationMoves.innerHTML = "Sorry! You cannot escape!:)"
            }

            update_location_items();
            update_player_inventory();
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
                        if(window["location_" + (currentX - 1) + currentY] != undefined)
                        {
                            is_can = true;
                            currentX--;
                            currentLocation = window["location_" + currentX + "" + currentY];
                            showMessage('You are going north...');
                        }
                    }
                    break;
                // go east
                case 2:
                    if(currentLocation.moves[direction-1])
                    {
                        if(window["location_" + currentX + (currentY + 1)] != undefined)
                        {
                            is_can = true;
                            currentY++;
                            currentLocation = window["location_" + currentX + "" + currentY];
                            showMessage('You are going east...');
                        }
                    }
                    break;
                // go south
                case 3:
                    if(currentLocation.moves[direction-1])
                    {
                        if(window["location_" + (currentX + 1) + currentY] != undefined)
                        {
                            is_can = true;
                            currentX++;
                            currentLocation = window["location_" + currentX + "" + currentY];
                            showMessage('You are going south...');
                        }
                    }
                    break;
                // go west
                case 4:
                    if(currentLocation.moves[direction-1])
                    {
                        if(window["location_" + currentX + (currentY - 1)] != undefined)
                        {
                            is_can = true;
                            currentY--;
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
            else
            {
                // at the end, change location
                update_location();
            }

            console.debug(currentLocation);
        }

        // START
        function processor(command)
        {
            if(commands[command] == undefined)
            {
                console.debug("Command doesn't exist!");
                showMessage('Try another word or V for vocabulary', 'message', 2000);
            }
            else
            {
                commands[command]();
                mainInput.value = '';
            }
        }

        // need for access processor function from UI.js
        command_processor = processor;
        // END

        // help
        // START
        function vocabulary_help()
        {
            showMessage('NORTH or N, SOUTH or S <br>' +
                        'WEST or W, EAST or E <br>' +
                        'TAKE (object) or T (object) <br>' +
                        'DROP (object) or D (object) <br>' +
                        'USE (object) or U (object) <br>' +
                        'GOSSIPS or G, VOCABULARY or V <br>' +
                        'Press any key',
                        'help');
        }

        function gossips()
        {
            showMessage('The woodcutter lost his home key... <br>' +
                        'The butcher likes fruit... <br>' +
                        'The cooper is greedy... <br>' +
                        'Dratewka plans to make a poisoned bait for the dragon... <br>' +
                        'The tavern owner is buying food from the pickers... <br>' +
                        'Making a rag from a bag... <br>' +
                        'Press any key',
                        'help');
        }
        // END

        // take command function
        // START
        function take()
        {
            var item_name = mainInput.value.split(' ')[1];

            // check if player carrying something
            if(playerInventory.length > 0)
            {
                showMessage("You are carrying something");
                return false;
            }

            // check if location has items
            if(currentLocation.items.length == 0)
            {
                showMessage("There isn't anything like that here");
                return false;
            }

            // check if item exist on location
            for(i=0; i < currentLocation.items.length; i++)
            {
                // check if item exist
                if(currentLocation.items[i].name === item_name)
                {
                    // if item exist check flag
                    if(currentLocation.items[i].flag == 0)
                    {
                        showMessage("You can't carry it");
                        return false;
                    }

                    // if everything all right
                    // add item to player inventory
                    playerInventory[0] = currentLocation.items[i];
                    // delete item from location
                    currentLocation.items.splice(i, 1);
                    // show message about taking item
                    showMessage("You are taking " + item_name);

                    // location items and player inventory
                    update_location_items();
                    update_player_inventory();
                    return true;
                }
            }

            // if nothing find show message
            showMessage("There isn't anything like that here");
        }
        // END

        // drop command function
        // START
        function drop()
        {
            var item_name = mainInput.value.split(' ')[1];

            // check if player carrying something
            if(playerInventory.length < 1)
            {
                showMessage("You are not carrying anything");
                return false;
            }

            // check if item player wants to drop is in player inventory
            if(playerInventory[0].name != item_name)
            {
                showMessage("You are not carrying it");
                return false;
            }

            // check if player can store more items on this location
            var items_count = 0;
            for(i=0; i < currentLocation.items.length; i++)
            {
                if(currentLocation.items[i].flag == 1)
                {
                    items_count++;
                }
            }
            if(items_count >= 3)
            {
                showMessage("You can't store any more here!");
                return false;
            }

            // add item to location items
            currentLocation.items.push(playerInventory[0]);

            // delete item from player inventory
            playerInventory.splice(0, 1);

            // location items and player inventory
            update_location_items();
            update_player_inventory();

            showMessage("You are about to drop " + item_name);

        }
        // END

        // use command function
        // START
        function use()
        {
            var item_name = mainInput.value.split(' ')[1];

            // check if item exist in player inventory
            if(playerInventory[0].name != item_name)
            {
                showMessage("You aren't carrying anything like that");
                return false;
            }

            var craft_list = crafts['loc_' + currentX + currentY];
            var used_item = undefined;
            var get_item = undefined;
            var current_craft = undefined;

            // check if craft for this location exist
            // if not show message
            if(craft_list === undefined)
            {
                console.debug('[!] Nothing happened');
                showMessage('Nothing happened');
                return false;
            }

            // check for craft in crafts
            for(i=0; i < craft_list.length; i++)
            {
                used_item = window['item_' + craft_list[i][0]];
                if(used_item.name === item_name)
                {
                    console.debug('[*] Find item: ' + item_name);
                    current_craft = craft_list[i];
                    get_item = window['item_' + current_craft[1]];
                    break;
                }
            }

            console.debug(get_item);

            // check if craft on this location available for used item
            // if not show message
            if(current_craft === undefined)
            {
                console.debug('[!] Nothing happened');
                showMessage('Nothing happened');
                return false;
            }

            // check get item flag
            if(get_item.flag === 1)
            {
                // overwrite get item over used item
                playerInventory[0] = get_item;
            }
            else
            {
                // delete item from player inventory
                playerInventory[0] = undefined;

                // add crafted item to location
                currentLocation.items.push(get_item);
            }

            // show message
            if(current_craft[2].length < 2)
            {
                // show single message
                showMessage(current_craft[2], 'message', 2000);
            }
            else
            {
                // show all messages with timeout
                var time = 0;
                var last_i = current_craft[2].length - 1;
                for(i=0; i < current_craft[2].length; i++)
                {
                    setTimeout(function(){
                        console.debug('[*] Show message...');
                        console.debug('Message text: ' + current_craft[2][i]);

                        // check last element
                        if(i == last_i)
                        {
                            showMessage(current_craft[2][i], 'message', 1000);
                            return true;
                        }

                        showMessage(current_craft[2][i], 'message', 1000, true);
                        // update i
                        i++;
                    }, time);

                    // update timer
                    time = time + 1800;
                }
            }

            // do extra actions
            current_craft[3]();

            // update location and player inventory
            update_location_items();
            update_player_inventory();

        }
        // END

        // start game
        update_location();
    }
};
