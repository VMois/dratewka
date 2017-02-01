var UI = {
    init: function()
    {
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

        document.addEventListener('keydown', (event) => {
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
            }
        }, false);
    }

};
