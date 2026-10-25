/**
 * Digital menu — hardcoded for v1. The Laravel admin panel on a separate
 * subdomain will own this data later; keep the shape flat and simple.
 */

export type MenuItem = {
  name: string;
  description: string;
  /** Price in IDR (integer rupiah). */
  price: number;
  image: string;
  badge?: "Best Seller" | "Signature" | "Baru";
};

export type MenuCategory = {
  id: string;
  title: string;
  blurb: string;
  items: MenuItem[];
};

const img = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=600&q=70`;

export const menu: MenuCategory[] = [
  {
    id: "signature",
    title: "Signature",
    blurb: "Racikan khas Oemago yang tidak ada di tempat lain.",
    items: [
      {
        name: "Oemago Kopi Susu",
        description: "Espresso, susu segar, dan gula aren cair rumahan.",
        price: 24000,
        image: img("photo-1461023058943-07fcbe16d735"),
        badge: "Best Seller",
      },
      {
        name: "Pandan Latte",
        description: "Espresso dengan infus daun pandan dan susu.",
        price: 30000,
        image: img("photo-1442512595331-e89e73853f31"),
        badge: "Signature",
      },
      {
        name: "Kelapa Dua Cold Brew",
        description: "Cold brew 18 jam dengan air kelapa muda.",
        price: 33000,
        image: img("photo-1517701550927-30cf4ba1dba5"),
        badge: "Baru",
      },
    ],
  },
  {
    id: "espresso",
    title: "Espresso Based",
    blurb: "Klasik yang dikerjakan dengan benar.",
    items: [
      {
        name: "Espresso",
        description: "Single origin, rotasi tiap bulan.",
        price: 18000,
        image: img("photo-1510591509098-f4fdc6d0ff04"),
      },
      {
        name: "Cappuccino",
        description: "Rasio seimbang, microfoam lembut.",
        price: 28000,
        image: img("photo-1572442388796-11668a67e53d"),
      },
      {
        name: "Caffè Latte",
        description: "Halus, creamy, ramah untuk semua.",
        price: 28000,
        image: img("photo-1509042239860-f550ce710b93"),
      },
      {
        name: "Americano",
        description: "Espresso dan air panas, bersih dan ringan.",
        price: 22000,
        image: img("photo-1521302080334-4bebac2763a6"),
      },
    ],
  },
  {
    id: "non-coffee",
    title: "Non-Coffee",
    blurb: "Untuk yang datang menemani.",
    items: [
      {
        name: "Cokelat Panas",
        description: "Dark chocolate 55% dengan susu.",
        price: 26000,
        image: img("photo-1542990253-0d0f5be5f0ed"),
      },
      {
        name: "Matcha Latte",
        description: "Matcha ceremonial grade, tanpa terlalu manis.",
        price: 30000,
        image: img("photo-1536256263959-770b48d82b0a"),
      },
      {
        name: "Teh Melati Segar",
        description: "Diseduh dingin, wangi bunga melati.",
        price: 20000,
        image: img("photo-1556679343-c7306c1976bc"),
      },
    ],
  },
  {
    id: "bites",
    title: "Pastry & Bites",
    blurb: "Teman terbaik secangkir kopi.",
    items: [
      {
        name: "Butter Croissant",
        description: "Dipanggang tiap pagi, renyah berlapis.",
        price: 25000,
        image: img("photo-1555507036-ab1f4038808a"),
        badge: "Best Seller",
      },
      {
        name: "Banana Bread",
        description: "Pisang matang, walnut panggang.",
        price: 27000,
        image: img("photo-1528740561666-dc2479dc08ab"),
      },
      {
        name: "Cinnamon Roll",
        description: "Lembut, glaze tipis, kayu manis asli.",
        price: 29000,
        image: img("photo-1509365465985-25d11c17e812"),
      },
    ],
  },
  {
    id: "meals",
    title: "Heavy Meals",
    blurb: "Kalau lapar datang di sela obrolan.",
    items: [
      {
        name: "Truffle Mushroom Pasta",
        description: "Fettuccine, jamur, minyak truffle.",
        price: 55000,
        image: img("photo-1621996346565-e3dbc646d9a9"),
      },
      {
        name: "Nasi Ayam Sambal Matah",
        description: "Ayam goreng, sambal matah, nasi hangat.",
        price: 45000,
        image: img("photo-1512058564366-18510be2db19"),
        badge: "Best Seller",
      },
      {
        name: "Beef Slice Rice Bowl",
        description: "Irisan sapi saus lada hitam, telur mata sapi.",
        price: 52000,
        image: img("photo-1603133872878-684f208fb84b"),
      },
    ],
  },
];

export const formatIDR = (value: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
