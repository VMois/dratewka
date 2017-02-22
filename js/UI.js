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


        // always upper case letter in main-input field
        mainInput.addEventListener("input", function(){
            mainInput.value = mainInput.value.toUpperCase();
        })

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
                    var command = mainInput.value.split(" ")[0];

                    // execute command
                    command_processor(command);
                }

                // accept only chracters (according to Unicode)
                if(event.keyCode >= 65 && event.keyCode <= 90)
                {
                    if(is_upper_case)
                    {
                        mainInput.value += event.key.toUpperCase();
                    }
                    else
                    {
                        mainInput.value += event.key.toLowerCase();
                    }
                }

                // backspace
                if(event.keyCode == 8)
                {
                    mainInput.value = mainInput.value.slice(0, mainInput.value.length-1);
                }

                // caps lock and shift key press check
                if(event.keyCode == 20 || event.keyCode == 16)
                {
                    is_upper_case = !is_upper_case;
                }
            }
        }, false);
    }

};
