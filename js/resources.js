var Items = {
    init: function()
    {
        class Item
        {
            constructor(id, variant_name, flag, name)
            {
                this.id = id; // integer
                this.variant_name = variant_name; // string, variant name e.g a KEY
                this.flag = flag; // integer, 1 (can take) or 0 (can't take)
                this.name = name; // string, name like KEY
            }
        };
    }
};

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

        // test location (YX)
        location_47 = new Location("47.gif", "You are in a frontyard of your house",
                                   "rgb(255,190,99)", [true, false, true, true]);
        location_46 = new Location("46.gif", "You are on a town street",
                                   "rgb(255,190,99)", [true, true, false, true]);
        location_37 = new Location("37.gif", "You are in a cooper's house",
                                   "rgb(255,188,102)", [false, false, true, false]);
        location_57 = new Location("57.gif", "You are in a shoemaker's house",
                                   "rgb(254,194,97)", [true, false, false, false]);



    }

};
