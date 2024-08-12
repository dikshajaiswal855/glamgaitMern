import p1_img from "./product_1.png";
import p2_img from "./product_2.png";
import p3_img from "./product_3.png";
import men1 from  "./men ca-1,28,26/ARTEMIS_6G_TRIPLE-BLK_2.jpg"
import wmn7 from "./women/BEACH_22L-905_OFFWHT-S.GRN_2.jpg"
import kd11 from "./kids/SRM-03_SRM-03_M.BLU-AQUAGRN_2.jpg"
import men5 from "./men ca-1,28,26/CAD_22G-432_L.GRY_2.jpg"


let data_product = [
  {
    id: 8,
    category:"men",
    name: "CAD_22G-432_L.GRY_2",
    image: men5,
    new_price: 8500.0,
    old_price: 12000.0,
  },
  {
    id: 22,
    category:"women",
    name: "BEACH_22L-905_OFFWHT-S.GRN_2",
    image: wmn7,
    new_price: 5000.0,
    old_price: 7000.0,
  },
  {
    id: 40,
    category:"kid",
    name: "SRM-03_SRM-03_M.BLU-AQUAGRN_2",
    image: kd11,
    new_price: 5000.0,
    old_price: 7000.0,
  },
];

let data_product_men = [
  {
    id: 1,
    name: " ARTEMIS_6G_TRIPLE-BLK_2.jpg",
    image: men1,
    new_price: 5000.0,
    old_price: 7000.0,
  },
  {
    id: 2,
    name: "NIKE Running Shoes AIR MAX , All Black",
    image: p2_img,
    new_price: 8500.0,
    old_price: 12000.0,
  },
  {
    id: 3,
    name: "NIKE AIR Running Shoes , Blue , White Sole",
    image: p3_img,
    new_price: 6000.0,
    old_price: 10000.0,
  },
];

let data_product_women = [
  {
    id: 1,
    name: "NIKE Running Shoes , Red , White Sole",
    image: p1_img,
    new_price: 5000.0,
    old_price: 7000.0,
  },
  {
    id: 2,
    name: "NIKE Running Shoes AIR MAX , All Black",
    image: p2_img,
    new_price: 8500.0,
    old_price: 12000.0,
  },
  {
    id: 3,
    name: "NIKE AIR Running Shoes , Blue , White Sole",
    image: p3_img,
    new_price: 6000.0,
    old_price: 10000.0,
  },
];
let data_product_kids= [
  {
    id: 1,
    name: "NIKE Running Shoes , Red , White Sole",
    image: p1_img,
    new_price: 5000.0,
    old_price: 7000.0,
  },
  {
    id: 2,
    name: "NIKE Running Shoes AIR MAX , All Black",
    image: p2_img,
    new_price: 8500.0,
    old_price: 12000.0,
  },
  {
    id: 3,
    name: "NIKE AIR Running Shoes , Blue , White Sole",
    image: p3_img,
    new_price: 6000.0,
    old_price: 10000.0,
  },
];


export {data_product,data_product_men,data_product_women,data_product_kids};

