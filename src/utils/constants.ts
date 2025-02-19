import { IDropdownOption } from '../components/Dropdown';
import { IProduct } from '../components/ProductCard';
import { ISelect } from '../components/Select';
import { IBrand, IDepartment } from './types';

export const dummy_products: IProduct[] = [
  {
    id: '1',
    title: 'Easy T-shirt',
    description:
      "This brand is a proud member of the Better Cotton Initiative. By buying cotton products from this brand you're supporting more sustainable cotton farming.",
    extraInfo: ['Crew neck', 'Short sleeve', 'Graphic print', '100% Cotton'],
    image: '',
    price: 229,
    colour: 'red',
    brand: 'Cotton On',
    material: '100% Cotton',
    averageRating: 3.5,
    departmentId: 'dep1',
    inventory: {
      sizes: [
        { size: 's', countInStock: 20 },
        { size: 'm', countInStock: 15 },
        { size: 'l', countInStock: 15 },
      ],
    },
  },
  {
    id: '2',
    title: 'Gabby off The Shoulder Long Sleeve Top',
    image: '',
    price: 349,
    extraInfo: [
      'Smooth stretchy fabrication',
      'Gathered side seams',
      'Asymmetrical design',
      'Long sleeve',
    ],
    colour: 'white',
    brand: 'Cotton On',
    material: '78% Modal or Polynosic, 22% Polyester.',
    averageRating: 1,
    departmentId: 'dep2',
    inventory: {
      sizes: [
        { size: 's', countInStock: 20 },
        { size: 'm', countInStock: 15 },
        { size: 'l', countInStock: 15 },
      ],
    },
  },
  {
    id: '3',
    title: 'Long sleeve workshirt',
    image: '',
    price: 699,
    extraInfo: [
      'Button-up',
      'Long sleeve',
      'Brand detail',
      'Classic collar',
      '100% Cotton',
    ],
    colour: 'black',
    brand: 'JEEP',
    material: '100% Cotton',
    averageRating: 3.5,
    departmentId: 'dep1',
    inventory: {
      sizes: [
        { size: 's', countInStock: 20 },
        { size: 'm', countInStock: 15 },
        { size: 'l', countInStock: 15 },
      ],
    },
  },
  {
    id: '4',
    title: 'Woven label v-neck long sleeve',
    image: '',
    price: 1599,
    extraInfo: [
      'V-neck',
      'Long sleeve',
      'Regular fit',
      'Branding detail',
      'Plain print',
    ],
    colour: 'yellow',
    brand: 'CALVIN KLEIN',
    material: '96% Cotton, 4% Elastane',
    averageRating: 2,
    departmentId: 'dep2',
    inventory: {
      sizes: [
        { size: 's', countInStock: 20 },
        { size: 'm', countInStock: 15 },
        { size: 'l', countInStock: 15 },
      ],
    },
  },
  {
    id: '5',
    title: 'Relaxed fit cotton joggers',
    image: '',
    price: 429,
    description:
      'Relaxed-fit sweatpant joggers in cotton fabric. Covered elastic at waistband, jersey-lined side-seam pockets, and an open back pocket. Covered elastic at hems.',
    extraInfo: ['Long', 'Regular waist'],
    colour: 'green',
    brand: 'H&M',
    material: '100% Cotton',
    averageRating: 4.6,
    departmentId: 'dep1',
    inventory: {
      sizes: [
        { size: 's', countInStock: 20 },
        { size: 'm', countInStock: 15 },
        { size: 'l', countInStock: 15 },
      ],
    },
  },
  {
    id: '6',
    title: 'Twill cargo trousers',
    description:
      'Loose-fit cargo trousers in cotton twill with elasticated smocking at the sides and back of the waist. Zip fly and button, diagonal side pockets, a flap back pocket and bellows leg pockets.',
    image: '',
    price: 379,
    extraInfo: ['Loose fit', 'Long'],
    colour: 'blue',
    brand: 'H&M',
    material: '100% Cotton',
    averageRating: 2.8,
    departmentId: 'dep2',
    inventory: {
      sizes: [
        { size: 's', countInStock: 20 },
        { size: 'm', countInStock: 15 },
        { size: 'l', countInStock: 15 },
      ],
    },
  },
  {
    id: '7',
    title: 'Twill cargo trousers',
    description: 'Easy T-shirt',
    image: '',
    price: 229,
    extraInfo: ['Crew neck', 'Short sleeve', 'Graphic print', '100% Cotton'],
    colour: 'dusk',
    brand: 'Cotton On',
    material: '100% Cotton',
    averageRating: 5,
    departmentId: 'dep1',
    inventory: {
      sizes: [
        { size: 'xs', countInStock: 9 },
        { size: 's', countInStock: 5 },
        { size: 'm', countInStock: 15 },
        { size: 'l', countInStock: 9 },
        { size: 'xl', countInStock: 10 },
        { size: 'xxl', countInStock: 16 },
      ],
    },
  },
  {
    id: '8',
    title: 'Reflectiv base long sleeve',
    image: '',
    price: 499,
    extraInfo: ['Crew neck', 'Long sleeve', 'Branding detail', 'Regular fit'],
    colour: 'black',
    brand: 'RVCA',
    material: 'Cotton-blend',
    averageRating: 3.3,
    departmentId: 'dep1',
    inventory: {
      sizes: [
        { size: 's', countInStock: 5 },
        { size: 'm', countInStock: 15 },
        { size: 'l', countInStock: 9 },
        { size: 'xl', countInStock: 10 },
      ],
    },
  },
  {
    id: '9',
    title: 'Skirt glass',
    image: '',
    price: 1599,
    extraInfo: [
      'Flowy fabric',
      'Long design',
      'Straight design',
      'Invisible lateral zipper fastening',
      'Opening in the lower front',
    ],
    colour: 'light beige',
    brand: 'Mango',
    material: '75% Polyester, 20% Viscose, 5% Elastane',
    averageRating: 4,
    departmentId: 'dep2',
    inventory: {
      sizes: [
        { size: 's', countInStock: 5 },
        { size: 'm', countInStock: 15 },
      ],
    },
  },
  {
    id: '10',
    title: 'Naples essential relaxed fit chino',
    image: '',
    price: 1099,
    extraInfo: [
      'Chino',
      'Belt loops',
      'Zip fly with button fastening',
      'Functional pockets',
    ],
    colour: 'navy',
    brand: 'POLO',
    material: '95% Cotton 5% Spandex',
    averageRating: 1.2,
    departmentId: 'dep1',
    inventory: {
      sizes: [
        { size: 's', countInStock: 5 },
        { size: 'm', countInStock: 15 },
        { size: 'l', countInStock: 9 },
      ],
    },
  },
];

export const dummy_departments: IDepartment[] = [
  {
    id: 'dep1',
    title: "Browse all men's products",
    description:
      'Stay on top of your game with designer brands like G-Star RAW, Adidas Originals, and more. There’s an item for every occasion, from the office to the great outdoors, not to mention basics for the everyday grind.',
    tag: 'men',
  },
  {
    id: 'dep2',
    title: "Browse all women's products",
    description:
      'Find yourself saying, “I have nothing to wear,” no longer with our range of women’s tops. Off-the-shoulder, lace, and crop tops are just a few of the styles in our selection of top brands like Missguided and Nike.',
    tag: 'women',
  },
];

export const dummy_brands: IBrand[] = [
  {
    id: '1',
    title: 'Mango',
    image: '../brands/mango.jpg',
  },
  {
    id: '2',
    title: 'G-Star Raw',
    image: '../brands/g-star-raw.jpg',
  },
  {
    id: '3',
    title: 'Nike',
    image: '../brands/nike.jpg',
  },
  {
    id: '4',
    title: 'Cotton On',
    image: '../brands/cotton-on.jpg',
  },
  {
    id: '5',
    title: 'Superbalist',
    image: '../brands/superbalist.jpg',
  },
  {
    id: '6',
    title: 'H&M',
    image: '../brands/h&m.jpg',
  },
  {
    id: '7',
    title: 'Adidas',
    image: '../brands/adidas.jpg',
  },
  {
    id: '8',
    title: 'Tommy Hilfiger',
    image: '../brands/tommy-hilfiger.jpg',
  },
];

export const sortOptions: ISelect[] = [
  {
    id: '1',
    text: 'Name: A-Z',
    value: 'a-z',
  },
  {
    id: '2',
    text: 'Name: Z-A',
    value: 'z-a',
  },
  {
    id: '3',
    text: 'Newest',
    value: 'newest',
  },
  {
    id: '4',
    text: 'Oldest',
    value: 'oldest',
  },
];

export const itemsPerPageOptions: ISelect[] = [
  {
    id: '1',
    text: '10',
    value: 10,
  },
  {
    id: '2',
    text: '20',
    value: 20,
  },
  {
    id: '3',
    text: '30',
    value: 30,
  },
];

export const categories: IDropdownOption[] = [
  {
    id: 1,
    text: 'Boots',
    url: '',
  },
  {
    id: 2,
    text: 'Jackets + coats',
    url: '',
  },
  {
    id: 3,
    text: 'Jeans',
    url: '',
  },
  {
    id: 4,
    text: 'Shirts',
    url: '',
  },
  {
    id: 5,
    text: 'Shoes',
    url: '',
  },
  {
    id: 6,
    text: 'Sport',
    url: '',
  },
  {
    id: 7,
    text: 'Sport',
    url: '',
  },
  {
    id: 8,
    text: 'Sneakers',
    url: '',
  },
];

export const brands: IDropdownOption[] = [
  {
    id: 1,
    text: 'H&M',
    url: '',
  },
  {
    id: 2,
    text: 'Adidas',
    url: '',
  },
  {
    id: 3,
    text: "Levi's",
    url: '',
  },
  {
    id: 4,
    text: 'Nike',
    url: '',
  },
  {
    id: 5,
    text: 'Polo',
    url: '',
  },
  {
    id: 6,
    text: 'Reebok',
    url: '',
  },
  {
    id: 7,
    text: 'Vans',
    url: '',
  },
  {
    id: 8,
    text: 'Puma',
    url: '',
  },
];
