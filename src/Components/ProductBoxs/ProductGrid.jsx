import React from "react";
import BoxRow from "../ProductBoxs/BoxRow";

const boxesData = [
  {
    title: "Game Accessories",
    images: [
      { src: "/src/assets/passets/boxSet1.jpg", label: "Chair" },
      { src: "/src/assets/passets/boxSet3.jpg", label: "Keyboard" },
      { src: "/src/assets/passets/boxSet2.jpg", label: "Headphones" },
      { src: "/src/assets/passets/boxSet4.jpg", label: "Mouse" },
    ],
    linkText: "Shop More",
    linkUrl: "/",
  },
  {
    title: "New Year, New Supplies",
    images: [{ src: "/src/assets/passets/mainRow1.jpg" }],
    linkText: "Shop More",
    linkUrl: "/",
  },
  {
    title: "New Year, New Supplies",
    images: [{ src: "/src/assets/passets/mainRow3.jpg" }],
    linkText: "Shop More",
    linkUrl: "/",
  },
  {
    title: "Shop for your Home",
    images: [
      { src: "/src/assets/passets/bed1.jpg", label: "Chair" },
      { src: "/src/assets/passets/bed2.jpg", label: "Keyboard" },
      { src: "/src/assets/passets/bed3.jpg", label: "Headphones" },
      { src: "/src/assets/passets/bed4.jpg", label: "Mouse" },
    ],
    linkText: "Discover more in Homes",
    linkUrl: "/",
  },
  {
    title: "New Year, New Supplies",
    images: [{ src: "/src/assets/box2-1.jpg", label: "" }],
    linkText: "Shop More",
    linkUrl: "/",
  },
  {
    title: "New Year, New Supplies",
    images: [{ src: "/src/assets/box2-2.jpg", label: "" }],
    linkText: "Shop More",
    linkUrl: "/",
  },
  {
    title: "New Year, New Supplies",
    images: [{ src: "/src/assets/box2-3.jpg", label: "" }],
    linkText: "Shop More",
    linkUrl: "/",
  },
  {
    title: "New Year, New Supplies",
    images: [{ src: "/src/assets/box2-2.jpg", label: "" }],
    linkText: "Shop More",
    linkUrl: "/",
  },
];

const ProductGrid = () => {
  return <BoxRow boxes={boxesData} />;
};

export default ProductGrid;
