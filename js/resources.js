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
        item_14 = new Item(14, 'MUSHROOMS', 1, 'MUSHROOMS');
        item_15 = new Item(15, 'MONEY', 1, 'MONEY');
        item_16 = new Item(16, 'a BARREL', 1, 'BARREL');
        item_17 = new Item(17, 'a sheeptrunk', 0, 'sheeptrunk');
        item_18 = new Item(18, 'BERRIES', 1, 'BERRIES');
        item_19 = new Item(19, 'WOOL', 1, 'WOOL');
        item_20 = new Item(20, 'a sheepskin', 0, 'sheepskin');
        item_21 = new Item(21, 'a BAG', 1, 'BAG');
        item_22 = new Item(22, 'a RAG', 1, 'RAG');
        item_23 = new Item(23, 'a sheephead', 0, 'sheephead');
        item_24 = new Item(24, 'a SPADE', 1, 'SPADE');
        item_25 = new Item(25, 'SULPHUR', 1, 'SULPHUR');
        item_26 = new Item(26, 'a solid poison', 0, 'solid poison');
        item_27 = new Item(27, 'a BUCKET', 1, 'BUCKET');
        item_28 = new Item(28, 'TAR', 1, 'TAR');
        item_29 = new Item(29, 'a liqid poison', 0, 'liquid poison');
        item_30 = new Item(30, 'a dead dragon', 0, 'dead dragon');
        item_31 = new Item(31, 'a STONE', 1, 'STONE');
        item_32 = new Item(32, 'a FISH', 1, 'FISH');
        item_33 = new Item(33, 'a KNIFE', 1, 'KNIFE');
        item_34 = new Item(34, 'a DRAGONSKIN', 1, 'DRAGONSKIN');
        item_35 = new Item(35, 'a dragonskin SHOES', 1, 'SHOES');
        item_36 = new Item(36, 'a PRIZE', 1, 'PRIZE');
        item_37 = new Item(37, 'a SHEEP', 1, 'SHEEP');
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
        location_13 = new Location("13.gif", "A hill",
                                   "rgb(117,237,243)", [false, true, true, true],
                                   [item_31]);
        location_15 = new Location("15.gif", "An old deserted hut",
                                   "rgb(220,204,61)", [false, true, false, true],
                                   [item_27]);
        location_17 = new Location("17.gif", "A dark forest",
                                   "rgb(140,253,99)", [false, false, true, true],
                                   [item_14]);
        location_23 = new Location("23.gif", "You are by a roadside shrine",
                                   "rgb(167,245,63)", [true, true, true, true],
                                   [item_10]);
        location_27 = new Location("27.gif", "You are in a deep forest",
                                   "rgb(140,253,99)", [true, false, false, true],
                                   [item_18]);
        location_32 = new Location("32.gif", "You are by the Vistula River",
                                   "rgb(140,214,255)", [true, false, false, true],
                                   [item_32]);
        location_36 = new Location("36.gif", "You are in a butcher's shop",
                                   "rgb(255,188,102)", [false, false, true, false]);
        location_37 = new Location("37.gif", "You are in a cooper's house",
                                   "rgb(255,188,102)", [false, false, true, false]);
        location_44 = new Location("44.gif", "You are by the water mill",
                                   "rgb(255,190,99)", [false, true, false, false],
                                  [item_21]);
        location_45 = new Location("45.gif", "You are at a main crossroad",
                                   "rgb(255,190,99)", [true, true, true, true]);
        location_46 = new Location("46.gif", "You are on a town street",
                                   "rgb(255,190,99)", [true, true, false, true]);
        location_47 = new Location("47.gif", "You are in a frontyard of your house",
                                   "rgb(255,190,99)", [true, false, true, true]);
        location_55 = new Location("55.gif", "You are on a street leading forest",
                                   "rgb(255,190,99)", [true, false, true, true],
                                   [item_33]);
        location_57 = new Location("57.gif", "You are in a shoemaker's house",
                                   "rgb(254,194,97)", [true, false, false, false]);
        location_64 = new Location("64.gif", "You are in a bleak funeral house",
                                   "rgb(254,194,97)", [false, true, false, false],
                                   [item_24]);



    }

};
