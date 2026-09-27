import type { Product } from "../types/product";


export const products: Product[] = [
  {
    id: "oppo-find-x7",
    name: "Oppo Find X7",
    brand: "Oppo",
    tagline: "Precision imaging, refined design",
    price: 59999,
    image: "/o.png",
    gallery: ["/images/oppo.png", "/images/oppo.png"],
    description:
      "The Oppo Find X7 pairs a Hasselblad-tuned camera system with a fluid AMOLED display, wrapped in a glass-and-metal body built for everyday premium use.",
    specs: {
      display: "6.78\" LTPO AMOLED, 120Hz",
      chipset: "Dimensity 9300",
      camera: "50MP Triple, Hasselblad tuning",
      battery: "5000mAh, 100W SuperVOOC",
      storage: "256GB / 512GB",
    },
    colors: ["#0A2540", "#EFF5FF", "#1D4ED8"],
  },
  {
    id: "vivo-x100-pro",
    name: "Vivo X100 Pro",
    brand: "Vivo",
    tagline: "Zeiss optics meet flagship power",
    price: 64999,
    image: "/v3.png",
    gallery: ["/images/vivo.png", "/images/vivo.png"],
    description:
      "Vivo X100 Pro brings ZEISS co-engineered optics and a periscope telephoto lens together with a smooth curved display for a true flagship photography experience.",
    specs: {
      display: "6.78\" LTPO AMOLED, 120Hz",
      chipset: "Dimensity 9300",
      camera: "50MP Periscope Telephoto, ZEISS",
      battery: "5400mAh, 100W FlashCharge",
      storage: "256GB / 512GB",
    },
    colors: ["#0A2540", "#3B82F6", "#FFFFFF"],
  },
  {
    id: "samsung-galaxy-s24",
    name: "Samsung Galaxy S24 Ultra",
    brand: "Samsung",
    tagline: "Galaxy AI, redefined",
    price: 129999,
    image: "/s2.png",
    gallery: ["/images/samsung.png", "/images/samsung.png"],
    description:
      "The Galaxy S24 Ultra brings a titanium frame, an embedded S Pen, and on-device Galaxy AI to a 200MP camera system built for precision at every zoom level.",
    specs: {
      display: "6.8\" QHD+ Dynamic AMOLED 2X, 120Hz",
      chipset: "Snapdragon 8 Gen 3 for Galaxy",
      camera: "200MP Quad, 10x optical zoom",
      battery: "5000mAh, 45W Super Fast Charging",
      storage: "256GB / 512GB / 1TB",
    },
    colors: ["#0A2540", "#64748B", "#EFF5FF"],
  },
  {
    id: "iphone-15-pro",
    name: "iPhone 15 Pro",
    brand: "Apple",
    tagline: "Titanium. So strong. So light. So Pro.",
    price: 134900,
    image: "/i5.png",
    gallery: ["/images/iphone.png", "/images/iphone.png"],
    description:
      "iPhone 15 Pro features an aerospace-grade titanium design, the A17 Pro chip, and a customizable Action button for a refined and capable pro experience.",
    specs: {
      display: "6.1\" Super Retina XDR, 120Hz ProMotion",
      chipset: "A17 Pro",
      camera: "48MP Main, 3x Telephoto",
      battery: "3274mAh, 20W wired",
      storage: "128GB / 256GB / 512GB / 1TB",
    },
    colors: ["#0A2540", "#EFF5FF", "#1D4ED8"],
  },
  {
    id: "moto-edge-50-pro",
    name: "Moto Edge 50 Pro",
    brand: "Motorola",
    tagline: "Effortlessly premium, endlessly smooth",
    price: 31999,
    image: "/m1.png",
    gallery: ["/images/moto.png", "/images/moto.png"],
    description:
      "Moto Edge 50 Pro combines a curved pOLED display, fast 125W charging, and a signature vegan-leather finish for a distinctive premium feel.",
    specs: {
      display: "6.7\" pOLED, 144Hz",
      chipset: "Snapdragon 7 Gen 3",
      camera: "50MP OIS Main + 13MP Ultrawide",
      battery: "4500mAh, 125W TurboPower",
      storage: "256GB / 512GB",
    },
    colors: ["#1D4ED8", "#0A2540", "#FFFFFF"],
  },
  {
    id: "xiaomi-14-ultra",
    name: "Xiaomi 14 Ultra",
    brand: "Xiaomi",
    tagline: "Leica optics for the ultimate shot",
    price: 99999,
    image: "x1.png",
    gallery: ["/images/xiaomi.png", "/images/xiaomi.png"],
    description:
      "Xiaomi 14 Ultra houses a quad-Leica camera system with a variable aperture, matched with Snapdragon's fastest mobile platform for flagship-grade performance.",
    specs: {
      display: "6.73\" LTPO AMOLED, 120Hz",
      chipset: "Snapdragon 8 Gen 3",
      camera: "50MP Quad-Leica, Variable Aperture",
      battery: "5300mAh, 90W HyperCharge",
      storage: "256GB / 512GB / 1TB",
    },
    colors: ["#0A2540", "#64748B", "#1D4ED8"],
  },
];

export const getProductById = (id: string): Product | undefined =>
  products.find((p) => p.id === id);



