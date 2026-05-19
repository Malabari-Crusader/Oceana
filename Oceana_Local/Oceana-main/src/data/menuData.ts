import { Flame, Utensils, Fish, Leaf, Wheat, Coffee, Sparkles } from 'lucide-react';

export const menuData = [
  {
    id: 'shuruaat',
    title: 'Shuruaat — The Awakening',
    subtitle: 'Indian Starters in True Tradition',
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1732519970445-8f2d6998961f?q=80&w=1000&auto=format&fit=crop',
    items: [
      { name: 'Shabnam Chaat', price: 'SAR 42', desc: 'Mushroom & potato salad in a spicy combination. Shabnam means "morning dew" in Hindi. This dish captures that fresh, dewy moment—the crisp bite of fresh vegetables glistening with spiced oils.' },
      { name: 'Chicken Chaat', price: 'SAR 52', desc: 'Boneless cold chicken pieces spiced up in a tasty salad. Chicken is sous-vide for absolute tenderness, then seared for crust. The salad is a precise balance: tamarind\'s sourness, pomegranate\'s burst, the cooling whisper of mint.' },
      { name: 'Prawns Pakoda', price: 'SAR 102', desc: 'A salty fried snack, stuffed with prawns. Fresh Gulf prawns, butterflied and stuffed with a spiced potato-paneer mixture, then enrobed in a chickpea batter that\'s crispy, not greasy.' },
      { name: 'Khumb-O-Paneer Shorba', price: 'SAR 42', desc: 'Mushrooms & cottage cheese make up this exotic broth. Mushrooms are slowly cooked until they release their umami essence. Paneer is hand-cut into delicate pieces.' },
      { name: 'Tamartar Ka Shorba', price: 'SAR 42', desc: 'Your all-time favourite tomato, blended with rich cream. We slowly roast tomatoes until their acidity mellows into sweetness, then blend with cream and spices.' }
    ],
    additional: [
      {
        group: 'Additional Starters & Soups',
        items: [
          { name: 'Sabhnaam Chaat (Fresh Green Salad)', price: 'SAR 28' },
          { name: 'Tossed Salad', price: 'SAR 28' },
          { name: 'Winter Salad', price: 'SAR 52' },
          { name: 'Russian Salad', price: 'SAR 52' },
          { name: 'Prawns Salad', price: 'SAR 84' },
          { name: 'Cole Slaw', price: 'SAR 52' },
          { name: 'Murgh Shorba (Chicken Noodle Soup)', price: 'SAR 42' },
          { name: 'Sin Toli Kai Thonk (Hot Sour Chicken Soup)', price: 'SAR 52' },
          { name: 'Sweet Corn Asparagus in Chicken Soup', price: 'SAR 52' },
          { name: 'Soulr-N-Pepper Seafood Soup', price: 'SAR 63' }
        ]
      }
    ]
  },
  {
    id: 'tandoori',
    title: 'Tandoori Creations — The Fire',
    subtitle: 'Mastery of the Clay Oven',
    icon: Flame,
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=1000&auto=format&fit=crop',
    items: [
      { name: 'Oceana Special Prawns', price: 'SAR 172', desc: 'Jumbo Gulf prawns (with/without shell) seared in the tandoor. Marinated in yogurt infused with ginger, garlic, and fenugreek. The shell sears to a crisp while meat inside stays buttery.' },
      { name: 'Prawn Sizzler', price: 'SAR 172', desc: 'Prawns sizzler served fresh on a hot plate. Fresh Gulf prawns are marinated in a spiced yogurt, then cooked on a bed of peppers and onions on an iron plate that stays at 120°C.' },
      { name: 'Chilli Prawns', price: 'SAR 161', desc: 'Prawns dipped in butter, with capsicum and green chilli. Coated in ghee, then hit with green chilies and Kashmiri chili powder. The tandoor locks in the spice.' },
      { name: 'Seekh Kabab', price: 'SAR 122', desc: 'Minced meat cooked in a traditional way, in clay oven. Meat is minced so fine it becomes paste, mixed with spices and bound with eggs. Texture so delicate it melts on your tongue.' },
      { name: 'Tandoori Fish', price: 'SAR 172', desc: 'Whole fresh fish marinated, fish & charcoal grilled. We use only whole fish—never fillets. Placed whole in the tandoor until the skin chars, the flesh stays moist.' },
      { name: 'Tandoori Chicken', price: 'SAR 158', desc: 'Full chicken, marinated in yoghurt & cooked in clay oven. Farm-raised chicken, marinated for 24 hours in yogurt infused with 12 spices. Meat so moist it pulls from the bone.' },
      { name: 'Oceana Special Seafood', price: 'SAR 350 - 1,050', desc: 'Assorted sea food from the sea. Tandoori fish, tandoori prawns, tandoori calamari, tandoori lobster tail. Each cooked separately to its own perfection.' }
    ],
    additional: [
      {
        group: 'Additional Tandoori',
        items: [
          { name: 'Tandoori Fish Tikka', price: 'SAR 136' },
          { name: 'Tandoori Prawns', price: 'SAR 161' },
          { name: 'Boti Kabab (Tender mutton)', price: 'SAR 122' },
          { name: 'Seekh Kabab (Minced meat)', price: 'SAR 122' },
          { name: 'Chicken Chops Kabab', price: 'SAR 122' },
          { name: 'Chicken Tikka', price: 'SAR 112' },
          { name: 'Tandoori Chicken', price: 'SAR 133' },
          { name: 'Hariyali Kabab (Paneer)', price: 'SAR 126' },
          { name: 'Paneer Tikka', price: 'SAR 126' },
          { name: 'Assorted Kababs', price: 'SAR 158' }
        ]
      }
    ]
  },
  {
    id: 'curry',
    title: 'Curry Creations — The Alchemy',
    subtitle: 'Slow-cooked Spiced Gravies',
    icon: Utensils,
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=1000&auto=format&fit=crop',
    items: [
      { name: 'Oceana Mutton Kadai', price: 'SAR 147', desc: 'A special mutton delicacy from Goa. Mutton is cut into chunks and cooked in a thick, spiced gravy made from roasted spices: cumin, coriander, fenugreek, asafoetida.' },
      { name: 'Mutton Masala', price: 'SAR 133', desc: 'Tender mutton pieces cooked in a thick rich gravy. The Mughlai tradition. The gravy is built on a base of fried onions, yogurt, cream, and 15+ spices.' },
      { name: 'Keema Mutter', price: 'SAR 133', desc: 'Ethnic country preparation of minced meat & green peas. Keema is minced meat cooked until it becomes almost a paste. Fresh peas are added for sweetness and texture contrast.' },
      { name: 'Mutton Mughlai', price: 'SAR 147', desc: 'Boneless pieces of lamb cooked in rich brown gravy. Boneless lamb is marinated in yogurt and spices, then slow-cooked in a gravy made from caramelized onions, cream, coconut, and spices.' },
      { name: 'Mutton Rashida', price: 'SAR 147', desc: 'A delicate mutton dish in a rich cream & cashewnut gravy. Mutton is cooked until delicate, then finished in a cream-based gravy enriched with cashew paste.' },
      { name: 'Mutton Boti Masala', price: 'SAR 161', desc: 'Boneless lamb grilled & served in exotic gravy. Lamb is marinated, grilled in the tandoor, then finished in a tomato-based curry with a surprising twist: sweet and sour.' },
      { name: 'Mutton Dum Pukht', price: 'SAR 147', desc: 'Tender mutton cooked in unique Dum pukht tradition. Meat is sealed in a pot with spices, and the natural moisture creates a pressure cooker effect.' }
    ],
    additional: [
      {
        group: 'Chicken Curries',
        items: [
          { name: 'Chicken Mughlai', price: 'SAR 112' },
          { name: 'Chicken Tikka Masala', price: 'SAR 112' },
          { name: 'Chicken Tango Sizzler', price: 'SAR 136' },
          { name: 'Chicken Termindo', price: 'SAR 147' },
          { name: 'Chicken Chor Mein', price: 'SAR 112' },
          { name: 'Chicken Kadai', price: 'SAR 98' },
          { name: 'Chicken Masala', price: 'SAR 98' },
          { name: 'Butter Chicken', price: 'SAR 112' },
          { name: 'Adraki Chicken', price: 'SAR 112' }
        ]
      },
      {
        group: 'Vegetable Curries',
        items: [
          { name: 'Vegetable Jalfreze', price: 'SAR 91' },
          { name: 'Makkai Shimla', price: 'SAR 98' },
          { name: 'Aloo Gobi', price: 'SAR 84' },
          { name: 'Dingli Mutter', price: 'SAR 91' },
          { name: 'Palak Paneer', price: 'SAR 112' },
          { name: 'Paneer Makhani', price: 'SAR 112' },
          { name: 'Vegetable Kadai Paneer', price: 'SAR 98' }
        ]
      },
      {
        group: 'Seafood Curries',
        items: [
          { name: 'Goan Fish Curry', price: 'SAR 122' },
          { name: 'Fish Kadai', price: 'SAR 122' },
          { name: 'Prawns Masala', price: 'SAR 147' },
          { name: 'Kadai Prawns', price: 'SAR 147' }
        ]
      }
    ]
  },
  {
    id: 'seafood',
    title: 'Seafood Treasury — The Gulf\'s Gift',
    subtitle: 'Fresh Catch from the Arabian Gulf',
    icon: Fish,
    image: 'https://images.unsplash.com/photo-1559742811-822873691df8?q=80&w=1000&auto=format&fit=crop',
    items: [
      { name: 'Prawns Sizzler', price: 'SAR 172', desc: 'Jumbo Gulf prawns on a hot sizzling plate. The prawns are coated in butter and spices, served on a bed of grilled peppers and onions. Theatrical dining.' },
      { name: 'Sweet-N-Sour Prawn', price: 'SAR 168', desc: 'Medium-sized prawns in a sweet-sour reduction. Fresh Gulf prawns are cooked in a reduction of tomato paste, vinegar, and a touch of jaggery.' },
      { name: 'Garlic Prawns', price: 'SAR 168', desc: 'Prawns cooked in garlic sauce to a spicy taste. Fresh Gulf prawns are seared in ghee infused with roasted garlic. Slight spice from Kashmiri chili powder.' },
      { name: 'Fish Tikka', price: 'SAR 136', desc: 'Boneless fish dipped in chilli sauce & grilled. Finest white fish from the Gulf, cut into cubes, marinated in yogurt and spices, then grilled.' },
      { name: 'Fish Kadai', price: 'SAR 122', desc: 'Fish with fresh ginger, minced in a spicy kadai sauce. Fish is cooked in a thick spice-infused sauce, aromatics are constantly stirred.' },
      { name: 'Prawn Manchurian', price: 'SAR 161', desc: 'Prawns cooked in a spicy concoction. Prawns are fried until crispy, then coated in a sweet-spicy sauce made from tomato, soy, garlic, and chilies.' },
      { name: 'Oceana Special Seafood', price: 'SAR 350 - 1,050', desc: 'Assorted seafood treasures from the Arabian Gulf. Tandoori fish, tandoori prawns, sizzler prawns, fish tikka, grilled calamari—the Gulf\'s entire bounty.' }
    ],
    additional: [
      {
        group: 'Fish Tandoori',
        items: [
          { name: 'Tandoori Fish', price: 'SAR 172' },
          { name: 'Fish Tikka', price: 'SAR 136' },
          { name: 'Tandoori Prawns', price: 'SAR 161' }
        ]
      },
      {
        group: 'Fish Curry',
        items: [
          { name: 'Goan Fish Curry', price: 'SAR 122' },
          { name: 'Fish Kadai', price: 'SAR 122' },
          { name: 'Prawns Masala', price: 'SAR 147' },
          { name: 'Kadai Prawns', price: 'SAR 147' },
          { name: 'Fish Thibathean', price: 'SAR 161' },
          { name: 'Fish Tango Sizzler', price: 'SAR 161' }
        ]
      }
    ]
  },
  {
    id: 'meat',
    title: 'Meat Mastery — The Heritage Craft',
    subtitle: 'The Finest Cuts, Perfectly Spiced',
    icon: Flame,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1000&auto=format&fit=crop',
    items: [
      { name: 'Chops Kabab', price: 'SAR 122', desc: 'Mutton chops, delicately spiced & barbecued. Marinated in yogurt and spices, then grilled in the tandoor until the exterior sears and the interior remains pink and tender.' },
      { name: 'Boti Kabab', price: 'SAR 122', desc: 'Tender mutton marinated, spiced and grilled on clay oven. Mutton is cut into cubes, marinated in yogurt infused with 12 spices, then grilled.' },
      { name: 'Seekh Kabab', price: 'SAR 122', desc: 'Minced meat, delicately spiced & cooked in clay oven. The meat is ground to paste, mixed with spices and eggs, molded around a metal skewer, and placed directly in the tandoor.' },
      { name: 'Chicken Chops', price: 'SAR 112', desc: 'Chicken chops, delicately spiced & barbecued. A single rib-in chicken chop, marinated in yogurt and spices, grilled until the exterior is crispy and the interior stays moist.' },
      { name: 'Tandoori Chicken', price: 'SAR 158', desc: 'Full chicken, marinated & cooked in tandoor. Farm-raised chicken, marinated for 24 hours in yogurt infused with 12 spices, cooked in a clay tandoor.' },
      { name: 'Man Chow Kay', price: 'SAR 112', desc: 'Chicken manchurian, boneless in spiced sauce. Boneless chicken is cut into cubes, marinated in soy and spices, then fried until crispy.' },
      { name: 'Tender Loin Special', price: 'SAR 147 - 172', desc: 'Beef tender loin prepared in multiple ways. The most expensive, most tender cut of beef. Can be prepared as tandoori, curry, sizzler, or steak.' }
    ],
    additional: [
      {
        group: 'Mutton',
        items: [
          { name: 'Mutton Kadai', price: 'SAR 147' },
          { name: 'Mutton Masala', price: 'SAR 133' },
          { name: 'Keema Mutter', price: 'SAR 133' },
          { name: 'Mutton Mughlai', price: 'SAR 147' },
          { name: 'Mutton Rashida', price: 'SAR 147' },
          { name: 'Mutton Boti Masala', price: 'SAR 161' },
          { name: 'Mutton Dum Pukht', price: 'SAR 147' }
        ]
      },
      {
        group: 'Chicken',
        items: [
          { name: 'Cha Kai Lat Chaui', price: 'SAR 112' },
          { name: 'Leon Mun Kai', price: 'SAR 112' },
          { name: 'Hong Kong Kai', price: 'SAR 112' },
          { name: 'Chicken Chor Chor', price: 'SAR 112' },
          { name: 'Chicken Thibathean', price: 'SAR 133' },
          { name: 'Chicken Tango Sizzler', price: 'SAR 136' },
          { name: 'Chicken Termindo', price: 'SAR 147' },
          { name: 'Chicken Tikka Masala', price: 'SAR 112' },
          { name: 'Butter Chicken', price: 'SAR 112' },
          { name: 'Adraki Chicken', price: 'SAR 112' }
        ]
      },
      {
        group: 'Beef/Tender Loin',
        items: [
          { name: 'Thonk Yan Yun Yurk', price: 'SAR 172' },
          { name: 'Honk Kong Yurk', price: 'SAR 161' },
          { name: 'Lat Chui Yan Yurk', price: 'SAR 161' },
          { name: 'Steak Sizzler', price: 'SAR 172' }
        ]
      }
    ]
  },
  {
    id: 'rice',
    title: 'Rice & Bread Canvas',
    subtitle: 'The Foundation of the Feast',
    icon: Wheat,
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1000&auto=format&fit=crop',
    items: [
      { name: 'Kashmiri Pulao', price: 'SAR 84', desc: 'Steamed rice in a mouth-watering mix. Basmati rice is toasted in ghee with whole spices, then steamed. Dried fruits and nuts are toasted separately, then folded in.' },
      { name: 'Mutter Pulao', price: 'SAR 77', desc: 'Pulao rice cooked in green peas & butter. Rice and peas are cooked together so they absorb each other\'s flavors. Rice that\'s subtly sweet, fragrant, and dotted with green.' },
      { name: 'Biryani Rice / Steamed Rice', price: 'SAR 42', desc: 'A well-known combination of rice & flavored ingredients. Rice, meat, and spices are layered and cooked together in a sealed pot—the dum pukht method.' },
      { name: 'Fish N Rice', price: 'SAR 122', desc: 'Fish rice with coconut-spiced accompaniment. Fresh fish is layered with rice, both absorbing spices and each other\'s flavors. Coconut adds subtle sweetness.' },
      { name: 'Biryani Hyderabadi / Mutton Pulao', price: 'SAR 126', desc: 'An ethnic taste in a mutton, cooked in traditional Hyderabadi style. Mutton is marinated, fried, layered with rice, sealed, and steam-cooked.' },
      { name: 'Chicken Biryani / Pulao', price: 'SAR 87', desc: 'Chicken, onion gravy & juicy fish piece flavoured with rose water. Quality chicken marinated, layered with rice, sealed, and steam-cooked. Saffron threads soak into the rice.' },
      { name: 'Butter Nan / Kulcha', price: 'SAR 14', desc: 'Bread made in tandoor, finished with butter. Heat causes the dough to puff, creating air pockets that become crispy outside, soft inside.' }
    ],
    additional: [
      {
        group: 'Rice Dishes',
        items: [
          { name: 'Schezwan Fried Rice', price: 'SAR 98' },
          { name: 'Chicken Fried Rice', price: 'SAR 84' },
          { name: 'Mixed Fried Rice', price: 'SAR 98' },
          { name: 'Chicken Hong Kong Fried Rice', price: 'SAR 91' },
          { name: 'Chicken Ginger Fried Rice', price: 'SAR 91' },
          { name: 'Triple Schezwan', price: 'SAR 126' },
          { name: 'Mix Chow Mein', price: 'SAR 126' },
          { name: 'Chicken Noodle-Hakka Style', price: 'SAR 112' },
          { name: 'Chicken Chow Mein', price: 'SAR 112' },
          { name: 'American Chop Suey', price: 'SAR 105' },
          { name: 'Chicken Spaghetti', price: 'SAR 147' }
        ]
      },
      {
        group: 'Breads',
        items: [
          { name: 'Tandoori Roti', price: 'SAR 7' },
          { name: 'Tandoori Paratha', price: 'SAR 14' },
          { name: 'Naan', price: 'SAR 7' },
          { name: 'Roomali Roti', price: 'SAR 21' },
          { name: 'Reshmi Paratha', price: 'SAR 17' },
          { name: 'Masala Kulcha', price: 'SAR 21' },
          { name: 'Pudina Paratha', price: 'SAR 17' },
          { name: 'Garlic Naan', price: 'SAR 14' },
          { name: 'Assorted Bread', price: 'SAR 63' }
        ]
      }
    ]
  },
  {
    id: 'vegetarian',
    title: 'Vegetarian Treasures',
    subtitle: 'The Garden\'s Gift',
    icon: Leaf,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1000&auto=format&fit=crop',
    items: [
      { name: 'Paneer Tikka', price: 'SAR 126', desc: 'Spiced pieces of cottage cheese, delicately barbecued. Cut into cubes, marinated in yogurt and spices, then grilled in the tandoor. The exterior chars, the interior stays soft.' },
      { name: 'Haryali Kabab', price: 'SAR 126', desc: 'Finely ground vegetable kebab, barbecued on skewers. Green herbs—cilantro, mint, parsley—are ground together with paneer and vegetables. Molded around a skewer and grilled.' },
      { name: 'Vegetable Jaipur', price: 'SAR 91', desc: 'Vegetables cooked with butter & spices. Fresh vegetables are cut into uniform pieces, cooked in a spiced butter sauce. The sauce is thick, rich with cream, balanced with acid.' },
      { name: 'Malai Kofta', price: 'SAR 112', desc: 'Vegetable bulks in creamy sauce with a sweet flavour. Paneer is mixed with potatoes and cream cheese, shaped into balls, fried until golden, then finished in a sauce of cream, butter, and spices.' },
      { name: 'Vegetable Makhani', price: 'SAR 91', desc: 'Garden fresh vegetables prepared in rich butter sauce. Fresh vegetables are cooked in a tomato-based sauce enriched with butter and cream.' },
      { name: 'Vegetable Kadai Paneer', price: 'SAR 98', desc: 'Garden vegetables prepared in kadai with cottage cheese. Vegetables and paneer are cooked in a thick spice-infused sauce, the kadai constantly tilted and rotated.' },
      { name: 'Navratan Curry', price: 'SAR 98', desc: 'A rich vegetable curry traditionally made. Nine gems—nine vegetables and paneer in a single, sophisticated curry. Each is cooked separately to preserve texture.' }
    ],
    additional: [
      {
        group: 'Tandoori',
        items: [
          { name: 'Paneer Tikka', price: 'SAR 126' },
          { name: 'Haryali Kabab', price: 'SAR 126' }
        ]
      },
      {
        group: 'Curry',
        items: [
          { name: 'Kashmiri Dum Aloo', price: 'SAR 112' },
          { name: 'Vegetable Jaipuri', price: 'SAR 91' },
          { name: 'Radai Vegetable', price: 'SAR 91' },
          { name: 'Makkai Shimla', price: 'SAR 98' },
          { name: 'Aloo Gobi', price: 'SAR 84' },
          { name: 'Dingli Mutter', price: 'SAR 91' },
          { name: 'Palak Paneer', price: 'SAR 112' },
          { name: 'Paneer Makhani', price: 'SAR 112' },
          { name: 'Vegetable Kadai Paneer', price: 'SAR 98' },
          { name: 'Malai Kofta', price: 'SAR 112' },
          { name: 'Navratan Curry', price: 'SAR 98' }
        ]
      },
      {
        group: 'Dal (Lentils)',
        items: [
          { name: 'Dum Daal', price: 'SAR 98' },
          { name: 'Tadka Daal', price: 'SAR 98' },
          { name: 'Daal Bukhara', price: 'SAR 98' }
        ]
      }
    ]
  },
  {
    id: 'sweet',
    title: 'Sweet Finale — The Memory',
    subtitle: 'Decadent Endings',
    icon: Coffee,
    image: 'https://images.unsplash.com/photo-1515037893149-de7f840978e2?q=80&w=1000&auto=format&fit=crop',
    items: [
      { name: 'Gulab Jamun', price: 'SAR 35', desc: 'Milk solids rolled in nuts, fried and served in syrup. Soaked in sugar syrup infused with rose water and cardamom. Each bite releases warmth and sweetness.' },
      { name: 'Ras Malai', price: 'SAR 42', desc: 'Cheese discs served in malai (cream). Fresh paneer is flattened into discs, boiled until soft, then chilled, then placed in sweetened, cardamom-infused cream.' },
      { name: 'Ice Cream Selection', price: 'SAR 35', desc: 'Choice of premium ice creams. Rose, mango, pistachio, saffron, cardamom—each flavor is a meditation on Indian tradition.' },
      { name: 'Banana Split', price: 'SAR 42', desc: 'Fresh banana with choice of toppings & ice cream. A fresh banana is sliced lengthwise, ice cream is scooped beside it, toppings are scattered.' },
      { name: 'Fruit Salad with Ice Cream', price: 'SAR 52', desc: 'Fresh seasonal fruits served with ice cream. Fresh fruits are cut, chilled, served in their own light syrup, topped with a scoop of vanilla ice cream.' },
      { name: 'Cream Caramel', price: 'SAR 28', desc: 'Caramel infused custard with light topping. Each spoonful has caramel\'s bittersweet complexity balanced with custard\'s silky richness.' },
      { name: 'Fresh Fruit Salad', price: 'SAR 42', desc: 'Fresh fruit salad with ice cream accompaniment. Seasonal fruits are chilled, mixed gently, served in a light cardamom-infused syrup.' }
    ],
    additional: [
      {
        group: 'Desserts',
        items: [
          { name: 'Gulab Jamun', price: 'SAR 35' },
          { name: 'Ras Malai', price: 'SAR 42' },
          { name: 'Ice Cream Selection', price: 'SAR 35' },
          { name: 'Banana Split', price: 'SAR 42' },
          { name: 'Fruit Salad with Ice Cream', price: 'SAR 52' },
          { name: 'Cream Caramel', price: 'SAR 28' },
          { name: 'Fresh Fruit Salad', price: 'SAR 42' }
        ]
      }
    ]
  }
];
