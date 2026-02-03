import product1 from "./assets/images/products/LymoPDPImagesArtboard1.webp";
import product2 from "./assets/images/products/LymphDrainageREWAMPEDvisualsArtboard2.webp";
import product3 from "./assets/images/products/LymphDrainageREWAMPEDvisualsArtboard3.webp";
import product4 from "./assets/images/products/LymoPDPImagesArtboard4.webp";
import product5 from "./assets/images/products/LymphDrainageREWAMPEDvisualsArtboard5.webp";
import product6 from "./assets/images/products/LymphDrainageREWAMPEDvisualsArtboard6.webp";
import product7 from "./assets/images/products/LymphDrainageREWAMPEDvisualsArtboard7.webp";
import product8 from "./assets/images/products/LymphDrainageREWAMPEDvisualsArtboard8.webp";
import product9 from "./assets/images/products/LymphDrainageREWAMPEDvisualsArtboard9.webp";
import product10 from "./assets/images/products/LymphDrainageREWAMPEDvisualsArtboard10.webp";
import product11 from "./assets/images/products/LymphDrainageREWAMPEDvisualsArtboard11.webp";
import product12 from "./assets/images/products/LymphDrainageREWAMPEDvisualsArtboard12.webp";
import product13 from "./assets/images/products/LymphDrainageREWAMPEDvisualsArtboard13.webp";

import populationIcon from "./assets/icons/population_icon.png";
import bloodIcon from "./assets/icons/blood_icon.webp";
import blood2Icon from "./assets/icons/blood2_icon.png";
import thighIcon from "./assets/icons/thigh_icon.webp";
import smileIcon from "./assets/icons/smile_icon.webp";
import crowecologyIcon from "./assets/icons/ecology_icon.webp";
import deliveryTruckIcon from "./assets/icons/delivery-truck_icon.webp";
import downloadIcon from "./assets/icons/download_icon.png";
import kachingBundlesGiftCardIcon from "./assets/icons/kaching-Bundles-gift-card_icon.avif";
import refundIcon from "./assets/icons/60-days_icon.png";
import americaFlagIcon from "./assets/icons/america_flag_icon.webp";

const products = [
  {
    id: 1,
    image: product1,
    specialOffer: true,
  },
  {
    id: 2,
    image: product2,
    specialOffer: false,
  },
  {
    id: 3,
    image: product3,
    specialOffer: false,
  },
  {
    id: 4,
    image: product4,
    specialOffer: false,
  },
  {
    id: 5,
    image: product5,
    specialOffer: false,
  },
  {
    id: 6,
    image: product6,
    specialOffer: false,
  },
  {
    id: 7,
    image: product7,
    specialOffer: false,
  },
  {
    id: 8,
    image: product8,
    specialOffer: false,
  },
  {
    id: 9,
    image: product9,
    specialOffer: false,
  },
  {
    id: 10,
    image: product10,
    specialOffer: false,
  },
  {
    id: 11,
    image: product11,
    specialOffer: false,
  },
  {
    id: 12,
    image: product12,
    specialOffer: false,
  },
  {
    id: 13,
    image: product13,
    specialOffer: false,
  },
];

const formulas = [
  {
    icon: populationIcon,
    text: "Join over 93 Thousand who say - it WORKS!",
  },
  {
    icon: bloodIcon,
    text: "Restores your body’s natural 24-hour lymphatic cycle",
  },
  {
    icon: thighIcon,
    text: "Helps reduce fluid retention and the appearance of puffiness and bloating",
  },
  {
    icon: smileIcon,
    text: "Helps fall asleep faster, stay asleep longer and wake up energized",
  },
  {
    icon: blood2Icon,
    text: "Eliminates joint stiffness, pain, morning creakiness and feel more grounded",
  },
  {
    icon: crowecologyIcon,
    text: "Boosts energy, mental clarity and emotional balance",
  },
];

const buys = [
  {
    id: 0,
    text: "1 Bottle",
    saveText: "1 bottle total | Save $27.99",
    price: "$31.96",
    basePrice: "$59.95",
    isSale: false,
    details: [
      {
        icon: deliveryTruckIcon,
        text: "Free USA Shipping",
      },
    ],
  },
  {
    id: 1,
    text: "Buy 2 Get 1 Free",
    saveText: "3 bottles total | Save $115.93",
    price: "$63.92",
    basePrice: "$179.85",
    isSale: true,
    details: [
      {
        icon: deliveryTruckIcon,
        text: "Free USA Shipping",
      },
      {
        icon: downloadIcon,
        text: "Free Anti-Bloating Protocol E-book",
      },
    ],
  },
  {
    id: 2,
    text: "Buy 3 Get 2 Free",
    saveText: "5 bottles total | Save $210.95",
    price: "$95.88",
    basePrice: "$299.75",
    isSale: false,
    details: [
      {
        icon: deliveryTruckIcon,
        text: "Free USA Shipping",
      },
      {
        icon: downloadIcon,
        text: "Free Anti-Bloating Protocol E-book",
      },
      {
        icon: kachingBundlesGiftCardIcon,
        text: "$20 Gift Card",
      },
    ],
  },
];

const buyServices = [
  {
    icon: refundIcon,
    text: "60-Day Money-Back Guarantee",
  },
  {
    icon: americaFlagIcon,
    text: "Free Shipping From USA Included",
  },
];

const sculptiqueIngredients = [
  {
    id: 1,
    title: "Echinacea purpurea Extract",
    text: " – Known for its anti-inflammatory properties, it may support skin health.",
  },
  {
    id: 2,
    title: "Dandelion Extract",
    text: " – Traditionally used as a diuretic, it may help reduce water retention.",
  },
  {
    id: 3,
    title: "Burdock Powder",
    text: " – Contains antioxidants that may promote skin clarity.",
  },
  {
    id: 4,
    title: "Cleavers Extract",
    text: " – Believed to support lymphatic drainage and detoxification.",
  },
  {
    id: 5,
    title: "Rutin",
    text: " – A flavonoid that may strengthen blood vessels and improve circulation.",
  },
  {
    id: 6,
    title: "Bromelain Powder",
    text: " – An enzyme from pineapple that may reduce inflammation and support tissue repair.",
  },
  {
    id: 7,
    title: "Lemon Powder",
    text: " – Rich in vitamin C, it may aid in collagen production and skin rejuvenation.",
  },
  {
    id: 8,
    title: "Kelp Extract",
    text: " – A source of iodine and minerals that may support skin metabolism.",
  },
];

export { products, formulas, buys, buyServices, sculptiqueIngredients };
