import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../assets/icons";

import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  customer1,
  customer2,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
} from "../assets/images";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
  {
    id: 0,
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1,
  },
  {
    id: 1,
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2,
  },
  {
    id: 2,
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3,
  },
];

export const statistics = [
  { id: 0, value: "1000", label: "Brands" },
  { id: 1, value: "500", label: "Shops" },
  { id: 2, value: "250000", label: "Customers" },
];

export const products = [
  {
    id: 0,
    imgURL: shoe4,
    name: "Nike Air Jordan-01",
    price: "$200.20",
    rating: 4.8,
  },
  {
    id: 1,
    imgURL: shoe5,
    name: "Nike Air Jordan-10",
    price: "$210.20",
    rating: 4.5,
  },
  {
    id: 2,
    imgURL: shoe6,
    name: "Nike Air Jordan-100",
    price: "$220.20",
    rating: 3.2,
  },
  {
    id: 3,
    imgURL: shoe7,
    name: "Nike Air Jordan-001",
    price: "$230.20",
    rating: 4.9,
  },
];

export const services = [
  {
    id: 0,
    imgURL: truckFast,
    label: "Free shipping",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    id: 1,
    imgURL: shieldTick,
    label: "Secure Payment",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    id: 2,
    imgURL: support,
    label: "Love to help you",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];

export const reviews = [
  {
    id: 0,
    imgURL: customer1,
    customerName: "Morich Brown",
    rating: 4.5,
    feedback:
      "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
  },
  {
    id: 1,
    imgURL: customer2,
    customerName: "Lota Mongeskar",
    rating: 4.5,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Air Force 1", link: "/" },
      { name: "Air Max 1", link: "/" },
      { name: "Air Jordan 1", link: "/" },
      { name: "Air Force 2", link: "/" },
      { name: "Nike Waffle Racer", link: "/" },
      { name: "Nike Cortez", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "hasnain@nike.com", link: "mailto:hasnainahmed20000@gmail.com" },
      { name: "+923162460716", link: "tel:+923162460716" },
    ],
  },
];

export const socialMedia = [
  { id: 0, src: facebook, alt: "facebook logo" },
  { id: 1, src: twitter, alt: "twitter logo" },
  { id: 2, src: instagram, alt: "instagram logo" },
];
