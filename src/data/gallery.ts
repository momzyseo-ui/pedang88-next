/**
 * Gallery — interior & ambiance. Placeholder photography for v1.
 * `span` drives the masonry-ish grid emphasis on desktop.
 */

export type GalleryImage = {
  src: string;
  alt: string;
  span?: "wide" | "tall" | "normal";
};

const img = (id: string, w = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`;

export const gallery: GalleryImage[] = [
  {
    src: img("photo-1554118811-1e0d58224f24", 1100),
    alt: "Sudut ruang duduk dengan kursi kayu dan cahaya alami",
    span: "wide",
  },
  {
    src: img("photo-1445116572660-236099ec97a0"),
    alt: "Barista menyeduh kopi di bar",
    span: "tall",
  },
  {
    src: img("photo-1495474472287-4d71bcdd2085"),
    alt: "Secangkir cappuccino di atas meja kayu",
  },
  {
    src: img("photo-1521017432531-fbd92d768814"),
    alt: "Rak tanaman dan buku di dinding kafe",
  },
  {
    src: img("photo-1600093463592-8e36ae95ef56"),
    alt: "Meja komunal panjang dengan pengunjung mengobrol",
    span: "wide",
  },
  {
    src: img("photo-1481833761820-0509d3217039"),
    alt: "Detail biji kopi dan alat seduh manual",
    span: "tall",
  },
  {
    src: img("photo-1559925393-8be0ec4767c8"),
    alt: "Area outdoor dengan tanaman hijau",
  },
  {
    src: img("photo-1453614512568-c4024d13c247"),
    alt: "Jendela besar dengan pemandangan jalan Kelapa Dua",
  },
];
