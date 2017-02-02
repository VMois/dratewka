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

        // test items item_(id)
        item_10 = new Item(10, 'a KEY', 1, 'KEY');
        item_11 = new Item(11, 'an AXE', 1, 'AXE');
        item_12 = new Item(12, 'STICKS', 1, 'STICKS');
        item_13 = new Item(13, 'sheeplegs', 0, 'sheeplegs');
        item_21 = new Item(21, 'a BAG', 1, 'BAG');
    }
};

var Locations = {
    init: function()
    {

        var path_to_img_folder = "gfx/";

        class Location
        {
            constructor(img_name, description, rgb_color, moves, items=[])
            {
                this.img_name = path_to_img_folder + img_name;  // string
                this.description = description;  // string
                this.rgb_color = rgb_color;  // string
                this.moves = moves;  // list
                //element: 1 - north, 2 - east, 3 - south, 4 - west
                this.items = items; // list
            }
        };

        // test location (YX)
        location_47 = new Location("47.gif", "You are in a frontyard of your house",
                                   "rgb(255,190,99)", [true, false, true, true]);
        location_46 = new Location("46.gif", "You are on a town street",
                                   "rgb(255,190,99)", [true, true, false, true]);
        location_45 = new Location("45.gif", "You are at a main crossroad",
                                   "rgb(255,190,99)", [true, true, true, true]);
        location_44 = new Location("44.gif", "You are by the water mill",
                                   "rgb(255,190,99)", [false, true, false, false],
                                  [item_21]);
        location_37 = new Location("37.gif", "You are in a cooper's house",
                                   "rgb(255,188,102)", [false, false, true, false]);
        location_36 = new Location("36.gif", "You are in a butcher's shop",
                                   "rgb(255,188,102)", [false, false, true, false]);
        location_57 = new Location("57.gif", "You are in a shoemaker's house",
                                   "rgb(254,194,97)", [true, false, false, false]);



    }

};
