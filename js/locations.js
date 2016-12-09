var Locations = {
    init: function()
    {

        var path_to_img_folder = "gfx/";

        class Location
        {
            constructor(img_name, description, rgb_color)
            {
                this.img_name = path_to_img_folder + img_name;
                this.description = description;
                this.rgb_color = rgb_color;
            }
        };

        // test location
        location_47 = new Location("47.gif", "You are in a frontyard of your house", "rgb(255,190,99)");

    }

};
