import brownbrim from '../../assets/shop/brown-brim.png'
import bluebeanie from '../../assets/shop/blue-beanie.png'
import browncowboy from '../../assets/shop/brown-cowboy.png'
import greybrim from '../../assets/shop/grey-brim.png'
import greenbeanie from '../../assets/shop/green-beanie.png'
import palmtreecap from '../../assets/shop/palm-tree-cap.png'
import redbeanie from '../../assets/shop/red-beanie.png'
import wolfcap from '../../assets/shop/wolf-cap.png'
import bluesnapback from '../../assets/shop/blue-snapback.png'
import adidasnmd from '../../assets/shop/adidas-nmd.png'
import yeezy from '../../assets/shop/yeezy.png'
import blackconverse from '../../assets/shop/black-converse.png'
import whitenikehightops from '../../assets/shop/white-nike-high-tops.png'
import nikesred from '../../assets/shop/nikes-red.png'
import nikebrown from '../../assets/shop/nike-brown.png'
import nikefunky from '../../assets/shop/nike-funky.png'
import timberlands from '../../assets/shop/timberlands.png'
import blackshearling from '../../assets/shop/black-shearling.png'
import bluejeanjacket from '../../assets/shop/blue-jean-jacket.png'
import greyjeanjacket from '../../assets/shop/grey-jean-jacket.png'
import brownshearling from '../../assets/shop/brown-shearling.png'
import browntrench from '../../assets/shop/brown-trench.png'
import bluetank from '../../assets/shop/blue-tank.png'
import floralblouse from '../../assets/shop/floral-blouse.png'
import floralskirt from '../../assets/shop/floral-skirt.png'
import redpolkadotdress from '../../assets/shop/red-polka-dot-dress.png'
import stripedsweater from '../../assets/shop/striped-sweater.png'
import yellowtracksuit from '../../assets/shop/yellow-track-suit.png'
import whitevest from '../../assets/shop/white-vest.png'
import camovest from '../../assets/shop/camo-vest.png'
import floralshirt from '../../assets/shop/floral-shirt.png'
import longsleeve from '../../assets/shop/long-sleeve.png'
import pinkshirt from '../../assets/shop/pink-shirt.png'
import rollupjeanshirt from '../../assets/shop/roll-up-jean-shirt.png'
import polkadotshirt from '../../assets/shop/polka-dot-shirt.png'

const SHOP_DATA = {
  hats: {
    id: 1,
    title: 'Hats',
    routeName: 'hats',
    items: [
      {
        id: 1,
        name: 'Brown Brim',
        imageUrl: brownbrim,
        price: 25
      },
      {
        id: 2,
        name: 'Blue Beanie',
        imageUrl: bluebeanie,
        price: 18
      },
      {
        id: 3,
        name: 'Brown Cowboy',
        imageUrl: browncowboy,
        price: 35
      },
      {
        id: 4,
        name: 'Grey Brim',
        imageUrl: greybrim,
        price: 25
      },
      {
        id: 5,
        name: 'Green Beanie',
        imageUrl: greenbeanie,
        price: 18
      },
      {
        id: 6,
        name: 'Palm Tree Cap',
        imageUrl: palmtreecap,
        price: 14
      },
      {
        id: 7,
        name: 'Red Beanie',
        imageUrl: redbeanie,
        price: 18
      },
      {
        id: 8,
        name: 'Wolf Cap',
        imageUrl: wolfcap,
        price: 14
      },
      {
        id: 9,
        name: 'Blue Snapback',
        imageUrl: bluesnapback,
        price: 16
      }
    ]
  },
  sneakers: {
    id: 2,
    title: 'Sneakers',
    routeName: 'sneakers',
    items: [
      {
        id: 10,
        name: 'Adidas NMD',
        imageUrl: adidasnmd,
        price: 220
      },
      {
        id: 11,
        name: 'Adidas Yeezy',
        imageUrl: yeezy,
        price: 280
      },
      {
        id: 12,
        name: 'Black Converse',
        imageUrl: blackconverse,
        price: 110
      },
      {
        id: 13,
        name: 'Nike White AirForce',
        imageUrl: whitenikehightops,
        price: 160
      },
      {
        id: 14,
        name: 'Nike Red High Tops',
        imageUrl: nikesred,
        price: 160
      },
      {
        id: 15,
        name: 'Nike Brown High Tops',
        imageUrl: nikebrown,
        price: 160
      },
      {
        id: 16,
        name: 'Air Jordan Limited',
        imageUrl: nikefunky,
        price: 190
      },
      {
        id: 17,
        name: 'Timberlands',
        imageUrl: timberlands,
        price: 200
      }
    ]
  },
  jackets: {
    id: 3,
    title: 'Jackets',
    routeName: 'jackets',
    items: [
      {
        id: 18,
        name: 'Black Jean Shearling',
        imageUrl: blackshearling,
        price: 125
      },
      {
        id: 19,
        name: 'Blue Jean Jacket',
        imageUrl: bluejeanjacket,
        price: 90
      },
      {
        id: 20,
        name: 'Grey Jean Jacket',
        imageUrl: greyjeanjacket,
        price: 90
      },
      {
        id: 21,
        name: 'Brown Shearling',
        imageUrl: brownshearling,
        price: 165
      },
      {
        id: 22,
        name: 'Tan Trench',
        imageUrl: browntrench,
        price: 185
      }
    ]
  },
  womens: {
    id: 4,
    title: 'Womens',
    routeName: 'womens',
    items: [
      {
        id: 23,
        name: 'Blue Tanktop',
        imageUrl: bluetank,
        price: 25
      },
      {
        id: 24,
        name: 'Floral Blouse',
        imageUrl: floralblouse,
        price: 20
      },
      {
        id: 25,
        name: 'Floral Dress',
        imageUrl: floralskirt,
        price: 80
      },
      {
        id: 26,
        name: 'Red Dots Dress',
        imageUrl: redpolkadotdress,
        price: 80
      },
      {
        id: 27,
        name: 'Striped Sweater',
        imageUrl: stripedsweater,
        price: 45
      },
      {
        id: 28,
        name: 'Yellow Track Suit',
        imageUrl: yellowtracksuit,
        price: 135
      },
      {
        id: 29,
        name: 'White Blouse',
        imageUrl: whitevest,
        price: 20
      }
    ]
  },
  mens: {
    id: 5,
    title: 'Mens',
    routeName: 'mens',
    items: [
      {
        id: 30,
        name: 'Camo Down Vest',
        imageUrl: camovest,
        price: 325
      },
      {
        id: 31,
        name: 'Floral Tshirt',
        imageUrl: floralshirt,
        price: 20
      },
      {
        id: 32,
        name: 'Black & White Longsleeve',
        imageUrl: longsleeve,
        price: 25
      },
      {
        id: 33,
        name: 'Pink Tshirt',
        imageUrl: pinkshirt,
        price: 25
      },
      {
        id: 34,
        name: 'Jean Long Sleeve',
        imageUrl: rollupjeanshirt,
        price: 40
      },
      {
        id: 35,
        name: 'Burgundy Tshirt',
        imageUrl: polkadotshirt,
        price: 25
      }
    ]
  }
}

export default SHOP_DATA
