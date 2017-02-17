var StartGame = {
        init: function()
        {
            var body = document.getElementById("body");
            html = "<div id='main'>" +
                   "<img id='intro-img' src='gfx/main_theme.jpg' />" +
                   "<audio autoplay>" +
                   "<source src='songs/krakow_signal.mp3' type='audio/mp3'>" +
                   "</audio>" +
                   "</div>";
            body.innerHTML = html;
            var introImg = document.getElementById("intro-img");

            // timeout for animation to change to description_1
            setTimeout(function()
            {
                introImg.style.opacity = '0.4';
            }, 7500);

            // timeout to change to description_1 img
            setTimeout(function(){
                introImg.style.opacity = '0.8';
                introImg.src = "gfx/description_1.jpg";
            }, 8000);

            // timeout for animation to change to description_2
            setTimeout(function()
            {
                introImg.style.opacity = '0.4';
            }, 22500);

            // timeout to change to description_2 img
            setTimeout(function(){
                introImg.style.opacity = '0.8';
                introImg.src = "gfx/description_2.jpg";
            }, 23000);

            setTimeout(function(){
                introImg.style.opacity = '0.4';
            }, 32500);

            setTimeout(function(){
                body.innerHTML = "";
            }, 33000);

            // timeout to load modules, interface and start game
            setTimeout(function()
            {
                body.innerHTML = "<div id='main' style='padding: 1em;'></div>";
                main.style.opacity = '0.8';
                Items.init();
                Locations.init();
                CreatePlayerInterface.init();
                Game.init();
                UI.init();
            }, 34000);
        }
};
