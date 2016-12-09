var UI = {
    init: function()
    {
        var mainInput = document.getElementById("main-input");
        var locationDescription = document.getElementById("location-description");
        var locationImg = document.getElementById("location-img");

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

        // start game | test function | delete in future
        function start_game()
        {
            locationDescription.innerHTML = location_47.description;
            locationImg.src = location_47.img_name;
            locationImg.style.backgroundColor = location_47.rgb_color;
        }

        start_game();
    }

};
