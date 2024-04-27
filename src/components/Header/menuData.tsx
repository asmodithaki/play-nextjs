import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Products",
    path: "/products",
    newTab: false,
  },
  {
    id: 2,
    title: "Solutions",
    path: "/solutions",
    newTab: true,
  },
  {
    id: 3,
    title: "FWaaS",
    path: "/fwaas",
    newTab: true,
  },
  {
    id: 5,
    title: "Partners",
    path: "/partners",
    newTab: true,
  },
  {
    id: 5,
    title: "Blog",
    path: "/blogs",
    newTab: false,
  },
  {
    id: 6,
    title: "Resources",
    newTab: false,
    submenu: [
      {
        id: 61,
        title: "About Page",
        path: "/about",
        newTab: false,
      },
      {
        id: 62,
        title: "Pricing Page",
        path: "/pricing",
        newTab: false,
      },
      {
        id: 63,
        title: "Contact Page",
        path: "/contact",
        newTab: false,
      },
      {
        id: 64,
        title: "Blog Grid Page",
        path: "/blogs",
        newTab: false,
      },
      {
        id: 66,
        title: "Sign Up Page",
        path: "/signup",
        newTab: false,
      },
      {
        id: 67,
        title: "Sign In Page",
        path: "/signin",
        newTab: false,
      },
      {
        id: 68,
        title: "Error Page",
        path: "/error",
        newTab: false,
      },
    ],
  },
];
export default menuData;
