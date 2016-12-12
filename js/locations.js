var Locations = {
    init: function()
    {

        var path_to_img_folder = "gfx/";

        class Location
        {
            constructor(img_name, description, rgb_color, moves, things=[])
            {
                this.img_name = path_to_img_folder + img_name;  // string
                this.description = description;  // string
                this.rgb_color = rgb_color;  // string
                this.moves = moves;  // list
                //element: 1 - north, 2 - east, 3 - south, 4 - west
                this.things = things; // list
            }
        };

        // test location
        location_47 = new Location("47.gif", "You are in a frontyard of your house",
                                   "rgb(255,190,99)", [true, false, true, true]);
        location_46 = new Location("46.gif", "You are on a town street",
                                   "rgb(255,190,99)", [true, true, false, true]);


    }

};
