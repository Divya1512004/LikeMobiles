export interface Product {
  id: string;
  name: string;
  brand: string;
  tagline: string;
  price: number;
  image: string; // path only — drop your image file at this location
  gallery: string[]; // additional angle shots, paths only
  description: string;
  specs: {
    display: string;
    chipset: string;
    camera: string;
    battery: string;
    storage: string;
  };
  colors: string[];
}
