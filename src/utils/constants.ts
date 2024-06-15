import { IDepartment, IProduct } from './types';

export const dummy_products: IProduct[] = [
  {
    id: '1',
    title: 'Easy T-shirt',
    image: '',
    price: 229,
    availableSizes: ['s', 'm', 'l', 'xl'],
    productDetails: {
      description:
        "This brand is a proud member of the Better Cotton Initiative. By buying cotton products from this brand you're supporting more sustainable cotton farming.",
      extraInfo: ['Crew neck', 'Short sleeve', 'Graphic print', '100% Cotton'],
      color: 'Pale Sand/Nouveau',
      brand: 'Cotton On',
      material: '100% Cotton',
    },
    // department: 'men',
    departmentId: 'dep1',
  },
  {
    id: '2',
    title: 'Gabby off The Shoulder Long Sleeve Top',
    image: '',
    price: 349,
    availableSizes: ['xs', 's', 'm', 'l', 'xl'],
    productDetails: {
      extraInfo: [
        'Smooth stretchy fabrication',
        'Gathered side seams',
        'Asymmetrical design',
        'Long sleeve',
      ],
      color: 'Black',
      brand: 'Cotton On',
      material: '78% Modal or Polynosic, 22% Polyester.',
    },
    // department: 'women',
    departmentId: 'dep2',
  },
  {
    id: '3',
    title: 'Long sleeve workshirt',
    image: '',
    price: 699,
    availableSizes: ['s', 'm', 'l', 'xl', 'xxl'],
    productDetails: {
      extraInfo: [
        'Button-up',
        'Long sleeve',
        'Brand detail',
        'Classic collar',
        '100% Cotton',
      ],
      color: 'Khaki',
      brand: 'JEEP',
      material: '100% Cotton',
    },
    // department: 'men',
    departmentId: 'dep1',
  },
  {
    id: '4',
    title: 'Woven label v-neck long sleeve',
    image: '',
    price: 1599,
    availableSizes: ['xs', 's', 'm', 'l'],
    productDetails: {
      extraInfo: [
        'V-neck',
        'Long sleeve',
        'Regular fit',
        'Branding detail',
        'Plain print',
      ],
      color: 'Bright White',
      brand: 'CALVIN KLEIN',
      material: '96% Cotton, 4% Elastane',
    },
    // department: 'women',
    departmentId: 'dep2',
  },
  {
    id: '5',
    title: 'Relaxed fit cotton joggers',
    image: '',
    price: 429,
    availableSizes: ['xs', 's', 'm', 'l', 'xl'],
    productDetails: {
      description:
        'Relaxed-fit sweatpant joggers in cotton fabric. Covered elastic at waistband, jersey-lined side-seam pockets, and an open back pocket. Covered elastic at hems.',
      extraInfo: ['Long', 'Regular waist'],
      color: 'Rust Red',
      brand: 'H&M',
      material: '100% Cotton',
    },
    // department: 'men',
    departmentId: 'dep1',
  },
  {
    id: '6',
    title: 'Twill cargo trousers',
    image: '',
    price: 379,
    availableSizes: ['xxs', 'xs', 's', 'm', 'l', 'xl'],
    productDetails: {
      description:
        'Loose-fit cargo trousers in cotton twill with elasticated smocking at the sides and back of the waist. Zip fly and button, diagonal side pockets, a flap back pocket and bellows leg pockets.',
      extraInfo: ['Loose fit', 'Long'],
      color: 'Light Beige',
      brand: 'H&M',
      material: '100% Cotton',
    },
    // department: 'women',
    departmentId: 'dep2',
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
