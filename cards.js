function card(name, image) {
    this.name = name;
       this.image = image;
}

var deck = [
    new card('Beer', 'beer'),     new card('Bench', 'bench'),    new card('Broom', 'broom'),    new card('Egg', 'egg'),    new card('Envelope', 'envelope'),    
    new card('Radio', 'radio'),    new card('Shoe', 'shoe'),    new card('Soap', 'soap'),    new card('Soup', 'soup'),    new card('Toast', 'toast'),     
    new card('Door', 'door'),    new card('Window', 'window'),    new card('Roof', 'roof'),    new card('Lake', 'lake'),    new card('Violin', 'violin'),
    new card('Gutter', 'gutter'),    new card('Computer', 'computer'),    new card('Umbrella', 'umbrella'),    new card('Hook', 'hook'),       new card('Meat', 'meat'),
    new card('Cup', 'cup'),    new card('Dog', 'dog'),    new card('Candy', 'candy'),    new card('Paint', 'paint'),    new card('Man', 'man'),
    new card('Water', 'water'),    new card('Bottle', 'bottle'),    new card('Neon', 'neon'),    new card('Light', 'light'),    new card('Bag', 'bag'),
    new card('Chain', 'chain'),    new card('Insect', 'insect'),    new card('Rose', 'rose'),    new card('Butter', 'butter'),    new card('Nut', 'nut'),
    new card('Monkey', 'monkey'),   new card('Fencing', 'fencing'),     new card('Bird', 'bird'),    new card('Sword', 'sword'),    new card('Motor', 'motor'),
    new card('Field', 'field'),        new card('Fly', 'fly'),    new card('Gun', 'gun'),    new card('Stamp', 'stamp'),    new card('Beetle', 'beetle'),
    new card('Sun', 'sun'),    new card('Summer', 'summer'),    new card('Ice', 'ice'),    new card('Dust', 'dust'),    new card('Bible', 'bible'),


    new card('Drum', 'drum'),    new card('Fog', 'fog'),    new card('Football', 'football'),    new card('Bridge', 'bridge'),    new card('Pulley', 'pulley'),
    new card('Toe', 'toe'),    new card('Woman', 'woman'),    new card('Plow', 'plow'),    new card('Sunset', 'sunset'),    new card('Gate', 'gate'),
    new card('Clock', 'clock'),    new card('Car', 'car'),    new card('Road', 'road'),    new card('Zoo', 'zoo'),    new card('Museum', 'museum'),
    new card('Painting', 'painting'),    new card('Sand', 'sand'),    new card('Menu', 'menu'),    new card('Book', 'book'),    new card('Ashtray', 'ashtray'),
    new card('Lighter', 'lighter'),    new card('Hip', 'hip'),    new card('Mouse', 'mouse'),    new card('Toilet', 'toilet'),    new card('Closet', 'closet'),
    new card('Weed', 'weed'),    new card('Seed', 'seed'),    new card('Knot', 'knot'),   new card('Tide', 'tide'),      new card('Shirt', 'shirt'),
    new card('Pocket', 'pocket'),     new card('Plane', 'plane'),    new card('Pill', 'pill'),   new card('Ticket', 'ticket'),       new card('Hammer', 'hammer'),
    new card('Circle', 'circle'),   new card('Smoke', 'smoke'),    new card('Sky', 'sky'),     new card('Referee', 'referee'),   new card('Pepper', 'pepper'),
    new card('Ocean', 'ocean'),    new card('Triangle', 'triangle'),    new card('Octopus', 'octopus'),    new card('Magnet', 'magnet'),    new card('Spaghetti', 'spaghetti'),
    new card('Milk', 'milk'),    new card('Poster', 'poster'),    new card('Aisle', 'aisle'),    new card('Horse', 'horse'),    new card('Pipe', 'pipe'),

    new card('Eye', 'eye'),    new card('Television', 'television'),    new card('Wedding', 'wedding'),    new card('Ring', 'ring'),    new card('Wine', 'wine'),
    new card('Pig', 'pig'),
    new card('Coconut', 'coconut'),
/*

    new card('Bruise', 'bruise'),
    
    new card('Rubber', 'toast'),
    new card('Cancer', 'toast'),
    new card('Tool', 'toast'),
    new card('Needle', 'toast'),
    new card('Rag', 'toast'),
    new card('Valve', 'toast'),
    new card('Thermostat', 'toast'),
    new card('Tube', 'toast'),
    new card('Disco', 'toast'),
    new card('Thumbtack', 'toast'),
    new card('Tie', 'toast'),
    new card('Sink', 'toast'),
    new card('Bifocals', 'toast'),
     new card('Jell-O', 'toast'),
    new card('Pot', 'toast'),
    new card('Taxes', 'toast'),
    new card('Hoe', 'toast'),
    new card('Mouse', 'toast'),
    new card('Wok', 'toast'),
    new card('Gondola', 'toast'),
    new card('Telephone', 'toast'),
    new card('Sleet', 'toast'),
    new card('Toll', 'toast'),
    new card('Notebook', 'toast'),
    new card('Dictionary', 'toast'),
    new card('File', 'toast'),
    new card('Lobby', 'toast'),
    new card('Clouds', 'toast'),
    new card('Volcano', 'toast'),
    new card('Suitcase', 'toast'),
    new card('Fish', 'toast'),
    new card('Lamp', 'toast'),
    new card('Library', 'toast'),
    new card('University', 'toast'),
    new card('Fulcrum', 'toast'),
    new card('Barbecue', 'toast'),
    new card('Canister', 'toast'),
    new card('Chimney', 'toast'),
    new card('Rotating spit', 'toast'),
    new card('Toxic waste', 'toast'),
    new card('Coffee', 'toast'),
    new card('Groundhog', 'toast'),
    new card('Ribcage', 'toast'),
    new card('Parking lot', 'toast'),
    new card('Lungs', 'toast'),
    new card('Speech', 'toast'),
    new card('Math', 'toast'),
    new card('War', 'toast'),
    new card('Brunch', 'toast'),
    new card('Sailboat', 'toast'),
    new card('Mirrors', 'toast'),
    new card('Burdock', 'toast'),
    new card('Sludge', 'toast'),
    new card('Wastebasket', 'toast'),
    new card('Watch', 'toast'),
    new card('Flag', 'toast'),
    new card('Helmet', 'toast'),
    new card('Eye', 'toast'),
    new card('Cactus', 'toast'),
    new card('Cowboy', 'toast'),
    new card('Tavern', 'toast'),
    new card('Butterfly', 'toast'),
    new card('Cube', 'toast'),
    new card('X-ray', 'toast'),
    new card('Money', 'toast'),
    new card('Magazine', 'toast'),
    new card('Screwdriver', 'toast'),
    new card('VCR', 'toast'),
    new card('Stereo', 'toast'),
    new card('Ink', 'toast'),
    new card('Ditches', 'toast'),
        new card('Razor', 'toast'),
    new card('Tea', 'toast'),
    new card('Eyedropper', 'toast'),
    new card('Actor', 'toast'),
    new card('Homeless', 'toast'),
    new card('Queen', 'toast'),
    new card('Artist', 'toast'),
    new card('Storm', 'toast'),
    new card('Indian', 'toast'),
    new card('Snake', 'toast'),
    new card('Fox', 'toast'),
    new card('Lobster', 'toast'),
    new card('Satan', 'toast'),
    new card('Balloon', 'toast'),
    new card('Sauce', 'toast'),
    new card('Acne', 'toast'),
    new card('Crystal', 'toast'),
    new card('Shrimp', 'toast'),
    new card('Army', 'toast'),
    new card('Beet', 'toast'),
    new card('Brick', 'toast'),
    new card('Prostitute', 'toast'),
    new card('Catsup', 'toast'),
        new card('Explosives', 'toast'),
    new card('Diamond', 'toast'),
    new card('Camel', 'toast'),
    new card('Leaf', 'toast'),
    new card('Train', 'toast'),
    new card('Lunch', 'toast'),
    new card('Liquor', 'toast'),
    new card('Pilot', 'toast'),
    new card('Lipstick', 'toast'),
    new card('Caviar', 'toast'),
    new card('Perfume', 'toast'),
    new card('Gum', 'toast'),
    new card('Cheese', 'toast'),
    new card('Flame', 'toast'),
    new card('Fruit', 'toast'),
    new card('Ham', 'toast'),
    new card('Highway', 'toast'),
    new card('Lingerie', 'toast'),
    new card('Jellybean', 'toast'),
    new card('Bubble', 'toast'),
    new card('Chiorboy', 'toast'),
    new card('Penis', 'toast'),
    new card('Pet', 'toast'),
        new card('Hair dye', 'toast'),
    new card('Eraser', 'toast'),
    new card('Bikini', 'toast'),
    new card('Canyon', 'toast'),
    new card('Cards', 'toast'),
    new card('Button', 'toast'),
    new card('Riot', 'toast'),
    new card('Jacket', 'toast'),
    new card('Film', 'toast'),
    new card('Runway', 'toast'),
    new card('Flamingo', 'toast'),
    new card('Police', 'toast'),
    new card('White House', 'toast'),
    new card('Lava', 'toast'),
    new card('Rainforest', 'toast'),
    new card('Island', 'toast'),
    new card('Surprise', 'toast'),
    new card('Plastic', 'toast'),
    new card('Hindu', 'toast'),
    new card('Clay', 'toast'),
    new card('Gourmet', 'toast'),
    new card('Roast', 'toast'),
    new card('Heat', 'toast'),
        new card('Limo', 'toast'),
    new card('Campfire', 'toast'),
    new card('Fireworks', 'toast'),
    new card('Tomatoe', 'toast'),
    new card('Tongue', 'toast'),
    new card('Fracture', 'toast'),
    new card('Watermelon', 'toast'),
    new card('Christmas', 'toast'),
    new card('Politian', 'toast'),
    new card('Quail', 'toast'),
    new card('Handball', 'toast'),
    new card('AK-47', 'toast'),
    new card('Donut', 'toast'),
    new card('Madman', 'toast'),
    new card('Peanut', 'toast'),
    new card('Dance', 'toast'),
    new card('Song', 'toast'),
    new card('Congress', 'toast'),
    new card('Arrow', 'toast'),
    new card('Honey', 'toast'),
    new card('Bath', 'toast'),
    new card('Igloo', 'toast'),
    new card('Tub', 'toast'),
        new card('Ruler', 'toast'),
    new card('Nomad', 'toast'),
    new card('Subway', 'toast'),
    new card('Mass', 'toast'),
    new card('Missing link', 'toast'),
    new card('Vein', 'toast'),
    new card('Truck', 'toast'),
    new card('Monk', 'toast'),
    new card('Dinner', 'toast'),
    new card('Label', 'toast'),
    new card('Laboratory', 'toast'),
    new card('Sandpaper', 'toast'),
    new card('Wedge', 'toast'),
    new card('Sundial', 'toast'),
    new card('Squirrel', 'toast'),
    new card('Mustache', 'toast'),
    new card('Organ', 'toast'),
    new card('Molar', 'toast'),
    new card('Ghetto', 'toast'),
    new card('Bag lady', 'toast'),
    new card('Ghost', 'toast'),
    new card('Athlete', 'toast'),
    new card('Herd', 'toast'),
        new card('Flute', 'toast'),
    new card('Rod', 'toast'),
    new card('Constitution', 'toast'),
    new card('Handkerchief', 'toast'),
    new card('Key', 'toast'),
    new card('Trophy', 'toast'),
    new card('Zodiac', 'toast'),
    new card('Turkey', 'toast'),
    new card('Surf', 'toast'),
    new card('Refrigerator', 'toast'),
    new card('Dragon', 'toast'),
    new card('Turtle', 'toast'),
    new card('Seaweed', 'toast'),
    new card('Goulash', 'toast'),
    new card('Mud', 'toast'),
    new card('Ostrich', 'toast'),
    new card('Vine', 'toast'),
    new card('Worm', 'toast'),
    new card('Planet', 'toast'),
    new card('Opera', 'toast'),
    new card('Chameleon', 'toast'),
    new card('Wart', 'toast'),
    new card('Olive', 'toast'),
        new card('Map', 'toast'),
    new card('Coupon', 'toast'),
    new card('Foam', 'toast'),
    new card('Nosebleed', 'toast'),
    new card('Mushroom', 'toast'),
    new card('Gasoline', 'toast'),
    new card('Music', 'toast'),
    new card('Recess', 'toast'),
    new card('Rain', 'toast'),
    new card('Hockey', 'toast'),
    new card('Eel', 'toast'),
    new card('Rocket', 'toast'),
    new card('Barge', 'toast'),
    new card('Trash', 'toast'),
    new card('Pyramid', 'toast'),
    new card('Dome', 'toast'),
    new card('Chapel', 'toast'),
    new card('Thunder', 'toast'),
    new card('Caterpillars', 'toast'),
    new card('Jaguar', 'toast'),
    new card('Firefly', 'toast'),
    new card('Wasp', 'toast'),
    new card('Moon', 'toast'),
        new card('Moss', 'toast'),
    new card('Panda', 'toast'),
    new card('Stomach', 'toast'),
    new card('Brush', 'toast'),
    new card('Gland', 'toast'),
    new card('Intestine', 'toast'),
    new card('Roach', 'toast'),
    new card('Exhibition', 'toast'),
    new card('Holocaust', 'toast'),
    new card('Ax', 'toast'),
    new card('Lamb', 'toast'),
    new card('Doorbell', 'toast'),
    new card('Marble', 'toast'),
    new card('Knot', 'toast'),
    new card('Pump', 'toast'),
    new card('Umpire', 'toast'),
    new card('Shark', 'toast'),
    new card('Onion', 'toast'),
    new card('Garage', 'toast'),
    new card('Rum', 'toast'),
    new card('Attic', 'toast'),
    new card('Fireplace', 'toast'),
    new card('Deli', 'toast'),
        new card('Knapsack', 'toast'),
    new card('Circus', 'toast'),
    new card('Ant', 'toast'),
    new card('Clamp', 'toast'),
    new card('Wrench', 'toast'),
    new card('Bum', 'toast'),
    new card('Software', 'toast'),
    new card('Star', 'toast'),
    new card('Crown', 'toast'),
    new card('Curb', 'toast'),
    new card('Fingerprint', 'toast'),
    new card('Guerilla', 'toast'),
    new card('Iodine', 'toast'),
    new card('Jam', 'toast'),
    new card('Silver', 'toast'),
    new card('Microscope', 'toast'),
    new card('Nail', 'toast'),
    new card('Piston', 'toast'),
    new card('Priest', 'toast'),
    new card('Doctor', 'toast'),
    new card('Salt', 'toast'),
    new card('Mouth', 'toast'),
    new card('Horizon', 'toast'),
        new card('Griddle', 'toast'),
    new card('Candle', 'toast'),
    new card('Banjo', 'toast'),
    new card('Anteater', 'toast'),
    new card('Tent', 'toast'),
    new card('Funeral', 'toast'),
    new card('Gear', 'toast'),
    new card('Carpet', 'toast'),
    new card('Windsurfer', 'toast'),
    new card('Champagne', 'toast'),
    new card('Salmon', 'toast'),
    new card('Underwear', 'toast'),
    new card('Diaper', 'toast'),
    new card('Lug nut', 'toast'),
    new card('Microphone', 'toast'),
    new card('Paperweight', 'toast'),
    new card('Rifle', 'toast'),
    new card('Paperclip', 'toast'),
    new card('EKG', 'toast'),
    new card('Copier', 'toast'),
    new card('Desk', 'toast'),
    new card('Vibrator', 'toast'),
    new card('Earrings', 'toast'),
        new card('Shower', 'toast'),
    new card('Podium', 'toast'),
    new card('Scotch', 'toast'),
    new card('Hat', 'toast'),
    new card('Jet', 'toast'),
    new card('Soda', 'toast'),
    new card('Stoplight', 'toast'),
    new card('Confession', 'toast'),
    new card('Roulette', 'toast'),
    new card('Spaceship', 'toast'),
    new card('Judge', 'toast'),
    new card('Explorer', 'toast'),
    new card('Dice', 'toast'),
    new card('Electrical outlet', 'toast'),
    new card('Nose', 'toast'),
    new card('Drain', 'toast'),
    new card('Bookmark', 'toast'),
    new card('Torch', 'toast'),
    new card('Tomb', 'toast'),
    new card('Can', 'toast'),
    new card('Gold', 'toast'),
    new card('Spear', 'toast'),
    new card('Beans', 'toast'),
        new card('Sparkplug', 'toast'),
    new card('Bat', 'toast'),
    new card('Lawnmower', 'toast'),
    new card('Pothole', 'toast'),
    new card('Bookends', 'toast'),
    new card('Fly', 'toast'),
    new card('Cufflinks', 'toast'),
    new card('Belt', 'toast'),
    new card('Tile', 'toast'),
    new card('Piano', 'toast'),
    new card('Skyline', 'toast'),
    new card('Creek', 'toast'),
    new card('Snow', 'toast'),
    new card('Biology', 'toast'),
    new card('Cow', 'toast'),
    new card('Cowboy', 'toast'),
    new card('Bandage', 'toast'),
    new card('Calendar', 'toast'),
    new card('Calculator', 'toast'),
    new card('Cake', 'toast'),
    new card('Fense', 'toast'),
    new card('Toothbrush', 'toast'),
    new card('Rainbow', 'toast'),
        new card('Apartment', 'toast'),
    new card('Wagon', 'toast'),
    new card('Magnifying glass', 'toast'),
    new card('Wire', 'toast'),
    new card('Dock', 'toast'),
    new card('Rock', 'toast'),
    new card('Top', 'toast'),
    new card('Cursor', 'toast'),
    new card('Tire', 'toast'),
    new card('Drawer', 'toast'),
    new card('Sock', 'toast'),
    new card('Taxi', 'toast'),
    new card('Zebra', 'toast'),
    new card('Elevator', 'toast'),
    new card('Stairs', 'toast'),
    new card('Brunch', 'toast'),
    new card('Ladder', 'toast'),
    new card('Bus', 'toast'),
    new card('Toy', 'toast'),
    new card('Hair', 'toast'),
    new card('Rubber band', 'toast'),
    new card('Pond', 'toast'),
    new card('Dream', 'toast'),
        new card('Pencil', 'toast'),
    new card('Steak', 'toast'),
    new card('Template', 'toast'),
    new card('Compass', 'toast'),
    new card('Tattoo', 'toast'),
    new card('Insulation', 'toast'),
    new card('Wheat', 'toast'),
    new card('Legs', 'toast'),
    new card('Bread', 'toast'),
    new card('Paper', 'toast'),
    new card('Soda', 'toast'),
    new card('Insurance', 'toast'),
    new card('Pennant', 'toast'),


    new card('Chess', 'toast'),
    new card('Stew', 'toast'),
    new card('Waiter', 'toast'),
    new card('Goose', 'toast'),
    new card('Sandwich', 'toast'),
    new card('Sneakers', 'toast'),
    new card('Chair', 'toast'),
    new card('Gutters', 'toast'),
    new card('Zipper', 'toast'),
    new card('Want ads', 'toast'),    
    new card('Grail', 'toast'),
    new card('Vest', 'toast'),
    new card('Crab', 'toast'),
    new card('Lottery', 'toast'),
    new card('Rake', 'toast'),
    new card('Soldier', 'toast'),
    new card('Disk', 'toast'),
    new card('Necklace', 'toast'),
    new card('Flashlight', 'toast'),
    new card('Monument', 'toast'),
    new card('Dam', 'toast'),
    new card('Teacher', 'toast'),
    new card('Bank', 'toast'),
    new card('China', 'toast'),
    new card('Fan', 'toast'),
    new card('Steering wheel', 'toast'),
    new card('Silk', 'toast'),
    new card('Earthquake', 'toast'),
    new card('Supermarket', 'toast'),
    new card('Leash', 'toast'),
    new card('Teabag', 'toast'),
    new card('Noodles', 'toast'),
    new card('Theater', 'toast'),    
    new card('Symbol', 'toast'),
    new card('Mast', 'toast'),
    new card('Cabin', 'toast'),
    new card('Bone', 'toast'),
    new card('Buffalo', 'toast'),
    new card('Kite', 'toast'),
    new card('Hoop', 'toast'),
    new card('Anchor', 'toast'),
    new card('Archer', 'toast'),
    new card('Hunter', 'toast'),
    new card('Ballet', 'toast'),
    new card('Shotgun', 'toast'),
    new card('Dirt', 'toast'),
    new card('Cream', 'toast'),
    new card('Skin', 'toast'),
    new card('Spoon', 'toast'),
    new card('Swing', 'toast'),
    new card('Skates', 'toast'),
    new card('Curtain', 'toast'),
    new card('Wax', 'toast'),
    new card('Hose', 'toast'),
    new card('Golf', 'toast'),
    new card('Fortune cookie', 'toast'),    
    new card('Globe', 'toast'),
    new card('Change', 'toast'),
    new card('Atlas', 'toast'),
    new card('Phonebook', 'toast'),
    new card('Cuffs', 'toast'),
    new card('Vacuum', 'toast'),
    new card('Courthouse', 'toast'),
    new card('Chips', 'toast'),
    new card('Blindfold', 'toast'),
    new card('Teeth', 'toast'),
    new card('Flowers', 'toast'),
    new card('Whale', 'toast'),
    new card('Chocolate', 'toast'),
    new card('Mantle', 'toast'),
    new card('Ball bearings', 'toast'),
    new card('Lock', 'toast'),
    new card('Terrorist', 'toast'),
    new card('Dishwasher', 'toast'),
    new card('Laundry', 'toast'),
    new card('Toolbox', 'toast'),
    new card('Chopsticks', 'toast'),
    new card('Bathrobe', 'toast'),
    new card('Conscience', 'toast'),    
    new card('Mow', 'toast'),
    new card('Chalk', 'toast'),
    new card('Pool', 'toast'),
    new card('Table', 'toast'),
    new card('Jar', 'toast'),
    new card('Bracelet', 'toast'),
    new card('Satellite', 'toast'),
    new card('Boot', 'toast'),
    new card('Helicopter', 'toast'),
    new card('Fishing pole', 'toast'),
    new card('Rice', 'toast'),
    new card('Puddle', 'toast'),
    new card('Wind', 'toast'),
    new card('Comic', 'toast'),
    new card('Roller', 'toast'),
    new card('Mat', 'toast'),
    new card('Volkswagen', 'toast'),
    new card('Safari', 'toast'),
    new card('Lightning', 'toast'),
    new card('Sculpture', 'toast'),
    new card('Board', 'toast'),
    new card('Keyboard', 'toast'),
    new card('Fig', 'toast'),    
    new card('Cross', 'toast'),
    new card('Pole', 'toast'),
    new card('Oceanfront', 'toast'),
    new card('Townhouse', 'toast'),
    new card('Angel', 'toast'),
    new card('Drill', 'toast'),
    new card('Orange', 'toast'),
    new card('Tobacco', 'toast'),
    new card('Myth', 'toast'),
    new card('Journey', 'toast'),
    new card('Child', 'toast'),
    new card('Eagle', 'toast'),
    new card('Costume', 'toast'),
    new card('Heaven', 'toast'),
    new card('Brain', 'toast'),
    new card('Minnow', 'toast'),
    new card('Society', 'toast'),
    new card('Examination', 'toast'),
    new card('Genesis', 'toast'),
    new card('Sin', 'toast'),
    new card('Shadow', 'toast'),
    new card('Cells', 'toast'),
    new card('Fetus', 'toast'),    
    new card('Intersection', 'toast'),
    new card('Hand', 'toast'),
    new card('Sex', 'toast'),
    new card('Fire', 'toast'),
    new card('Poem', 'toast'),
    new card('Blood', 'toast'),
    new card('Castle', 'toast'),
    new card('Psychology', 'toast'),
    new card('Parent', 'toast'),
    new card('Blueprint', 'toast'),
    new card('Forest', 'toast'),
    new card('Wigwam', 'toast'),
    new card('Iceberg', 'toast'),
    new card('Snail', 'toast'),
    new card('Jungle', 'toast'),
    new card('Syrup', 'toast'),
    new card('Parachute', 'toast'),
    new card('Pudding', 'toast'),
    new card('Parsley', 'toast'),
    new card('Sidewalk', 'toast'),
    new card('Vodka', 'toast'),
    new card('Suicide', 'toast'),
    new card('Maid', 'toast'),    
    new card('Noose', 'toast'),
    new card('Comb', 'toast'),
    new card('Picture', 'toast'),
    new card('Frame', 'toast'),
    new card('Jeep', 'toast'),
    new card('Rolex', 'toast'),
    new card('Mailbox', 'toast'),
    new card('Shampoo', 'toast'),
    new card('Pendant', 'toast'),
    new card('Rail', 'toast'),
    new card('Megaphone', 'toast'),
    new card('Skyscraper', 'toast'),
    new card('Skyline', 'toast'),
    new card('Hubcap', 'toast'),
    new card('Carton', 'toast'),
    new card('Sugar', 'toast'),
    new card('Match', 'toast'),
    new card('Deadbolt', 'toast'),
    new card('Steam', 'toast'),
    new card('Saucer', 'toast'),
    new card('Remote control', 'toast'),
    new card('Boxing glove', 'toast'),
    new card('Jeans', 'toast'),    
    new card('Aerial', 'toast'),
    new card('Crayons', 'toast'),
    new card('Pipe cleaner', 'toast'),
    new card('Ribbon', 'toast'),
    new card('Pencil sharpener', 'toast'),
    new card('Battery', 'toast'),
    new card('Wheel', 'toast'),
    new card('Baton', 'toast'),
    new card('Orchestra', 'toast'),
    new card('Suspenders', 'toast'),
    new card('Brassiere', 'toast'),
    new card('Tractor', 'toast'),
    new card('Candlestick', 'toast'),
    new card('Newspaper', 'toast'),
    new card('Secretary', 'toast'),
    new card('Salesman', 'toast'),
    new card('Wallpaper', 'toast'),
    new card('Tower', 'toast'),
    new card('Kitchen', 'toast'),
    new card('Magnifier', 'toast'),
    new card('Garden', 'toast'),
    new card('General', 'toast'),
    new card('Eyebrow', 'toast'),    
    new card('Bonnet', 'toast'),
    new card('Chapter', 'toast'),
    new card('Catalog', 'toast'),
    new card('Butcher', 'toast'),
    new card('Dinette', 'toast'),
    new card('Bed', 'toast'),
    new card('Locker', 'toast'),
    new card('Professor', 'toast'),
    new card('Cereal', 'toast'),
    new card('Cotton', 'toast'),
    new card('Brochure', 'toast'),
    new card('Mime', 'toast'),
    new card('Meme', 'toast'),
    new card('Elbow', 'toast'),
    new card('Medal', 'toast'),
    new card('Fountain', 'toast'),
    new card('Fingernail', 'toast'),

    new card('Toast', 'toast'),
    new card('Toast', 'toast'),
    new card('Toast', 'toast'),
    new card('Toast', 'toast'),
    new card('Toast', 'toast'),
    new card('Toast', 'toast'),    new card('Toast', 'toast'),
    new card('Toast', 'toast'),
    new card('Toast', 'toast'),
    new card('Toast', 'toast'),
    new card('Toast', 'toast'),
    new card('Toast', 'toast'),
    new card('Toast', 'toast'),
    new card('Toast', 'toast'),
    new card('Toast', 'toast'),
    new card('Toast', 'toast'),
    new card('Toast', 'toast'),
    new card('Toast', 'toast'),
    new card('Toast', 'toast'),
    new card('Toast', 'toast'),
    new card('Toast', 'toast'),
    new card('Toast', 'toast'),
    new card('Toast', 'toast'),
    new card('Toast', 'toast'),
    new card('Toast', 'toast'),
    new card('Toast', 'toast'),
    new card('Toast', 'toast'),
    new card('Toast', 'toast'),
    new card('Toast', 'toast'),    new card('Toast', 'toast'),
    new card('Toast', 'toast'),
    new card('Toast', 'toast'),
    new card('Toast', 'toast'),
    new card('Toast', 'toast'),
    new card('Toast', 'toast'),
    new card('Toast', 'toast'),
    new card('Toast', 'toast'),
    new card('Toast', 'toast'),
    new card('Toast', 'toast'),
    new card('Toast', 'toast'),
    new card('Toast', 'toast'),
    new card('Toast', 'toast'),
    new card('Toast', 'toast'),
    new card('Toast', 'toast'),
    new card('Toast', 'toast'),
    new card('Toast', 'toast'),
    new card('Toast', 'toast'),
    new card('Toast', 'toast'),
    new card('Toast', 'toast'),
    new card('Toast', 'toast'),
    new card('Toast', 'toast'),
    new card('Toast', 'toast'),





    new card('Rope', 'rope'),    
    new card('Twig', 'twig'),
    new card('Landlord', 'landlord'),
    new card('Cashier', 'cashier'),    
    new card('Glue', 'glue'),
    new card('Shaft', 'shaft'),
    new card('Prison', 'prison'),
    new card('Torpedo', 'torpedo'),
    new card('Ladle', 'ladle'),
    new card('Fossil', 'fossil'),
    new card('Monster', 'monster'),    
    new card('Acid', 'acid'),
    new card('Mattress', 'mattress'),
    new card('Rash', 'rash'),
    new card('Index', 'index'),

    */

]

function getRandom(number) {
    var randomNumber = Math.floor(Math.random() * number);
    return randomNumber;
}

document.getElementById("draw").onclick = function(){
    var index = getRandom(107);
    var currentCard = deck[index];

    document.getElementById("display").innerHTML = '<h3>' + currentCard.name + '</h3><img src="assets/' + currentCard.image + '.jpg" height=400em width=300em>';
};
