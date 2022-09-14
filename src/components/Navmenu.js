import Chicken from "../assets/images/chickenfries.jpg";
import Special1 from "../assets/images/specialdish2.jpg";
import Special2 from "../assets/images/specialdish3.jpg";
import customer1 from '../assets/images/customer1.jpg'
import customer2 from '../assets/images/customer2.jpg'
import customer3 from '../assets/images/customer3.jpg'
import customer4 from '../assets/images/customer4.jpg'
import customer5 from '../assets/images/customer5.jpg'

export const Menu = [
  {
    path: "/",
    name: "home",
  },
  {
    path: "/",
    name: "about",
  },
  {
    path: "/menu",
    name: "menu",
  },
  {
    path: "/",
    name: "review",
  },
  {
    path: "/order",
    name: "order",
  },
  {
    path: "/",
    name: "contact",
  },
  {
    path: "/profile",
    name: "profile",
  },
];

export const SpecialMeal = [
  {
    src: Chicken,
    title: "This month special dish",
    name: "chuicken fries",
    description: "you can never get enough of it",
  },
  {
    src: Special1,
    title: "This month special dish",
    name: "chuicken biryani",
    description: "you can never get enough of it",
  },
  {
    src: Special2,
    title: "This month special dish",
    name: "wrap burrito",
    description: "you can never get enough of it",
  },
];


export const MenuList =[
 {
  id: 1,
  src: Special1,
  price: '$104.20',
  title: 'wrap burrito',
  description: 'enjoy the beat meal'
 },
]


export const Reviews = [
 {
  id: 1,
  name: 'prince will',
  src: customer1,
  note: 'After my first experience with them, all i can say is that they are at the top of their game'
 },
 {
  id: 2,
  name: 'ruth b',
  src: customer2,
  note: 'After my first experience with them, all i can say is that they are at the top of their game'
 },
 {
  id: 3,
  name: 'adedoyin miracle',
  src: customer3,
  note: 'After my first experience with them, all i can say is that they are at the top of their game'
 },
 {
  id: 4,
  name: 'miracle smith',
  src: customer4,
  note: 'After my first experience with them, all i can say is that they are at the top of their game'
 },
]