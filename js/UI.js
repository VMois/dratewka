var UI = {
    init: function()
    {
        var is_upper_case = true;
        var mainInput = document.getElementById("main-input");
        // always foxus on main-input field
        mainInput.addEventListener("blur", function(){
            setInterval(function(){
                mainInput.focus();
            });
        });
        

        document.addEventListener('keyup', (event) => {
            if(event.keyCode == 16)
            {
                is_upper_case = !is_upper_case;
            }
        });

        document.addEventListener('keydown', (event) => {
            event.preventDefault();
            if( !is_halt )
            {
                const keyName = event.key;
                if(keyName == "Enter")
                {
                    // get first word for command
                    var command = mainInput.innerHTML.split(" ")[0];

                    // execute command
                    command_processor(command);
                }

                // accept only chracters (according to Unicode)
                if(event.keyCode >= 65 && event.keyCode <= 90)
                {
                    if(is_upper_case)
                    {
                        mainInput.innerHTML += event.key.toUpperCase();
                    }
                    else
                    {
                        mainInput.innerHTML += event.key.toLowerCase();
                    }
                }

                // backspace
                if(event.keyCode == 8)
                {
                    // it is a trick, i hate tricks but it is fastest way :)
                    if(mainInput.innerHTML[mainInput.innerHTML.length - 1] == ";")
                    {
                        mainInput.innerHTML = mainInput.innerHTML.slice(0, mainInput.innerHTML.length - 6);
                    }
                    else
                    {
                    mainInput.innerHTML = mainInput.innerHTML.slice(0, mainInput.innerHTML.length-1);
                    }
                }

                // caps lock and shift key press check
                if(event.keyCode == 20 || event.keyCode == 16)
                {
                    is_upper_case = !is_upper_case;
                }

                // space key
                if(event.keyCode == 32)
                {
                    console.log('space');
                    mainInput.innerHTML += "&nbsp;";
                }
            }
        }, false);
    }

};
