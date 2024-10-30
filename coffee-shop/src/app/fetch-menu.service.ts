import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchMenuService {

  constructor() {}

   getMenu() {
      const items = {
        "SPECIALTY COFFEE" :
        {
          "Filter" :
            {
              "main":
                [
                  {
                  name : "REGULAR ORIGINS",
                  price : 1790,
                  currency : "HUF",
                  description : `Through our selected origins, you will experience cup qualities highlighted by spectacular processing methods, both conventional and experimental.
                                Fore more details about our selection, our baristas are here for you. | 200 ml`
                  },
                  {
                    name : "RARITIES ORIGINS",
                    price : 1990,
                    currency : "HUF",
                    description : `Your journey will be influenced by all the particularities each origin has and how much this means for a special,
                              rare and extraordinary coffee. For prices and more details about our nano lots, our baristas are here for you. | 200 ml`
                  }
                ],
              "extra":
                []
            },
          "ESPRESSO" :
            {
              "main" :
                [
                  {
                    name : "ESPRESSO SINGLE",
                    price : 1080,
                    currency : "HUF",
                    description : `single shot espresso (coffee, water) | 20 ml`
                  },
                  {
                    name : "ESPRESSO DOUBLE",
                    price : 1190,
                    currency : "HUF",
                    description : `double shot espresso (coffee, water) | 40 ml`
                  },
                  {
                    name : "LONG BLACK",
                    price : 1190,
                    currency : "HUF",
                    description : `double shot espresso (coffee, water), hot Water | 80 ml`
                  },
                  {
                    name : "ESPRESSO TONIC",
                    price : 1690,
                    currency : "HUF",
                    description : `double shot espresso (coffee, water), tonic water | 150 ml`
                  }
                ],
              "extra":
                []
            },
          "ESPRESSO & MILK" :
              {
                "main" :
                  [
                    {
                      name : "CORTADO",
                      price : 1190,
                      currency : "HUF",
                      description : `single shot espresso (coffee, water), milk cream [7] | 80 ml`
                    },
                    {
                      name : "CAPPUCCINO",
                      price : 1250,
                      currency : "HUF",
                      description : `single shot espresso (coffee, water), milk cream [7] | 140 ml`
                    },
                    {
                      name : "GRANDE",
                      price : 1350,
                      currency : "HUF",
                      description : `single shot espresso (coffee, water), milk cream [7] | 250 ml`
                    },
                    {
                      name : "SINGLE-SHOT LATTE",
                      price : 1350,
                      currency : "HUF",
                      description : `single shot espresso (coffee, water), milk cream [7] | 280 ml`
                    },
                    {
                      name : "MOJO",
                      price : 1250,
                      currency : "HUF",
                      description : `double shot espresso (coffee, water), milk cream [7] | 80 ml`
                    },
                    {
                      name : "GIBRALTAR",
                      price : 1350,
                      currency : "HUF",
                      description : `double shot espresso (coffee, water), milk cream [7] | 140 ml`
                    },
                    {
                      name : "FLAT WHITE",
                      price : 1400,
                      currency : "HUF",
                      description : `double shot espresso (coffee, water), milk cream [7] | 180 ml`
                    },
                    {
                      name : "MARRAKESH",
                      price : 1500,
                      currency : "HUF",
                      description : `double shot espresso (coffee, water), milk cream [7] | 250 ml`
                    },
                    {
                      name : "LATTE",
                      price : 1500,
                      currency : "HUF",
                      description : `double shot espresso, milk cream [7] | 300 ml`
                    },
                    {
                      name : "LATTE GRANDE",
                      price : 1700,
                      currency : "HUF",
                      description : `double shot espresso (coffee, water), milk cream [7] | 550 ml`
                    }
                  ],
                "extra":
                  [
                    {
                      name : "Extra-shot",
                      price : 300,
                      currency : "HUF",
                    },
                    {
                      name : "Milk alternatives",
                      price : 300,
                      currency : "HUF",
                    }
                  ]
              },
            "COLD BREW" :
              {
                "main" :
                  [
                    {
                      name : "COLD BREW",
                      price : 1450,
                      currency : "HUF",
                      description : `cold brew (coffee, water), ice | 200 ml`
                    },
                    {
                      name : "COLD BREW TONIC",
                      price : 1750,
                      currency : "HUF",
                      description : `cold brew (coffee, water), tonic water, ice | 400 ml`
                    },
                    {
                      name : "COLD BREW LATTE",
                      price : 1500,
                      currency : "HUF",
                      description : `cold brew (coffee, water), milk, ice | 400 ml`
                    }
                  ],
                "extra":
                  []
              },
            "ICED COFFEE" :
              {
                "main" :
                  [
                    {
                      name : "ICED CAPPUCCINO",
                      price : 1250,
                      currency : "HUF",
                      description : `a shot of espresso (coffee, water), milk, ice [7] | 280 ml`
                    },
                    {
                      name : "ICED LATTE",
                      price : 15000,
                      currency : "HUF",
                      description : `double shot of espresso (coffee, water), milk, ice [7] | 400 ml`
                    },
                  ],
                "extra":
                  []
              }
        }
      }
      return items;
    }
}
