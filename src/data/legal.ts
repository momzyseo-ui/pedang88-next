/**
 * Isi halaman Syarat & Ketentuan. Teks legal disimpan sebagai data terstruktur
 * agar mudah ditinjau/diperbarui tanpa menyentuh markup halaman.
 *
 * CATATAN: dokumen ini adalah draf awal untuk landing page v1. Tinjau bersama
 * penasihat hukum dan sesuaikan dengan praktik bisnis sebelum peluncuran resmi.
 */

export const legalUpdatedAt = "10 September 2026";

export type LegalSection = {
  id: string;
  title: string;
  paragraphs: string[];
  points?: string[];
};

export const terms: LegalSection[] = [
  {
    id: "penerimaan",
    title: "1. Penerimaan Syarat",
    paragraphs: [
      "Dengan mengakses situs web Oemago, mengunjungi kedai kami, melakukan reservasi, atau memesan produk kami, Anda dianggap telah membaca, memahami, dan menyetujui Syarat & Ketentuan ini beserta Kebijakan Privasi kami.",
      "Jika Anda tidak menyetujui sebagian atau seluruh ketentuan ini, mohon untuk tidak menggunakan situs web dan layanan kami.",
    ],
  },
  {
    id: "tentang",
    title: "2. Tentang Oemago",
    paragraphs: [
      "Oemago adalah sebuah coffee house yang berlokasi di Kelapa Dua, Kabupaten Tangerang, Banten. Situs web ini dikelola untuk memberikan informasi mengenai kedai, menu, lokasi, jam operasional, serta kanal untuk menghubungi kami.",
      "Seluruh informasi pada situs ditujukan untuk keperluan umum dan dapat berubah sewaktu-waktu tanpa pemberitahuan terlebih dahulu.",
    ],
  },
  {
    id: "penggunaan-situs",
    title: "3. Penggunaan Situs Web",
    paragraphs: [
      "Anda setuju untuk menggunakan situs ini hanya untuk tujuan yang sah dan tidak melakukan tindakan yang dapat merugikan Oemago maupun pihak lain.",
    ],
    points: [
      "Dilarang mencoba mengakses bagian sistem yang tidak diperuntukkan bagi publik, mengganggu ketersediaan layanan, atau menyisipkan kode berbahaya.",
      "Dilarang menyalin, menggandakan, atau menggunakan kembali konten situs untuk kepentingan komersial tanpa izin tertulis dari kami.",
      "Tautan ke situs pihak ketiga (peta, layanan pesan-antar, media sosial) disediakan untuk kemudahan Anda; Oemago tidak bertanggung jawab atas konten maupun kebijakan situs tersebut.",
    ],
  },
  {
    id: "reservasi",
    title: "4. Reservasi Meja",
    paragraphs: [
      "Untuk saat ini reservasi dilakukan melalui WhatsApp. Sistem reservasi online sedang dalam pengembangan dan akan diumumkan bila telah tersedia.",
      "Permintaan reservasi baru dianggap berlaku setelah kami mengirimkan konfirmasi. Permintaan yang belum dikonfirmasi tidak menjamin ketersediaan meja.",
    ],
    points: [
      "Mohon informasikan nama, tanggal, jam kedatangan, dan jumlah orang saat melakukan reservasi.",
      "Meja yang direservasi akan kami tahan hingga 15 menit dari jam yang disepakati. Setelahnya, meja dapat kami berikan kepada tamu lain.",
      "Perubahan atau pembatalan reservasi mohon disampaikan selambat-lambatnya 2 jam sebelum jam kedatangan.",
      "Untuk rombongan besar atau acara khusus, dapat berlaku ketentuan minimum pembelian dan tanda jadi (deposit) yang akan diinformasikan terpisah.",
      "Kami berhak menyesuaikan atau membatalkan reservasi dalam keadaan di luar kendali kami, dan akan berupaya memberi tahu Anda sesegera mungkin.",
    ],
  },
  {
    id: "menu-harga",
    title: "5. Menu, Harga, dan Ketersediaan",
    paragraphs: [
      "Menu, foto, dan deskripsi produk pada situs bersifat ilustrasi. Tampilan dan penyajian produk sebenarnya dapat berbeda.",
      "Harga yang tercantum dapat berubah sewaktu-waktu. Harga yang berlaku adalah harga yang tertera pada menu di kedai atau pada kanal pemesanan resmi saat transaksi dilakukan.",
    ],
    points: [
      "Harga dapat belum termasuk pajak dan biaya layanan (service charge) sesuai ketentuan yang berlaku.",
      "Ketersediaan produk bergantung pada stok harian; beberapa item dapat habis atau tidak tersedia sewaktu-waktu.",
      "Foto pada situs ini masih berupa placeholder dan akan diganti dengan foto asli sebelum peluncuran.",
    ],
  },
  {
    id: "pemesanan-pengantaran",
    title: "6. Pemesanan dan Pengantaran",
    paragraphs: [
      "Pemesanan untuk diantar dilakukan melalui mitra layanan pesan-antar pihak ketiga (misalnya GoFood, GrabFood, ShopeeFood). Transaksi tersebut tunduk pada syarat, ketentuan, biaya, dan kebijakan masing-masing platform.",
      "Estimasi waktu, biaya pengantaran, dan penanganan keluhan untuk pesanan melalui mitra tersebut menjadi bagian dari layanan platform yang bersangkutan.",
    ],
  },
  {
    id: "pembayaran",
    title: "7. Pembayaran",
    paragraphs: [
      "Pembayaran di kedai dapat dilakukan secara tunai maupun non-tunai sesuai metode yang tersedia saat itu. Struk pembelian merupakan bukti transaksi yang sah.",
      "Kecuali diwajibkan oleh peraturan yang berlaku, pembelian produk makanan dan minuman yang telah disajikan tidak dapat dikembalikan atau ditukar dengan uang.",
    ],
  },
  {
    id: "perilaku",
    title: "8. Ketentuan di Kedai",
    paragraphs: [
      "Demi kenyamanan bersama, kami menerapkan beberapa ketentuan selama Anda berada di area Oemago.",
    ],
    points: [
      "Kunjungan mengikuti jam operasional yang tertera. Order terakhir (last order) berlaku beberapa saat sebelum tutup.",
      "Mohon menjaga volume suara, tidak memindahkan perabot tanpa izin, dan turut menjaga kebersihan area.",
      "Anak-anak tetap menjadi tanggung jawab dan pengawasan orang tua atau pendamping.",
      "Ketentuan mengenai membawa makanan/minuman dari luar, area merokok, dan hewan peliharaan mengikuti kebijakan yang berlaku di kedai serta arahan staf.",
      "Pada jam ramai, dapat berlaku batas waktu penggunaan meja atau minimum pembelian.",
      "Oemago berhak menolak atau menghentikan layanan bagi pengunjung yang berperilaku mengganggu, membahayakan, atau melanggar hukum.",
    ],
  },
  {
    id: "alergen",
    title: "9. Alergen dan Informasi Produk",
    paragraphs: [
      "Produk kami disiapkan di dapur yang juga mengolah bahan seperti susu, kacang, telur, kedelai, dan gluten. Kami tidak dapat menjamin suatu produk sepenuhnya bebas dari jejak alergen tertentu.",
      "Jika Anda memiliki alergi, pantangan, atau kebutuhan diet khusus, mohon informasikan kepada staf sebelum memesan agar kami dapat membantu sebaik mungkin.",
    ],
  },
  {
    id: "kekayaan-intelektual",
    title: "10. Kekayaan Intelektual",
    paragraphs: [
      "Seluruh merek, logo, nama “Oemago”, desain, tata letak, teks, ilustrasi, dan foto pada situs ini adalah milik Oemago atau digunakan dengan izin, dan dilindungi oleh hukum yang berlaku.",
      "Anda tidak diperkenankan menggunakan materi tersebut untuk tujuan komersial, mengubahnya, atau menampilkannya kembali tanpa persetujuan tertulis dari kami. Penyebutan atau tag di media sosial secara wajar tetap diperbolehkan.",
    ],
  },
  {
    id: "konten-pengunjung",
    title: "11. Foto dan Konten Pengunjung",
    paragraphs: [
      "Oemago sesekali mendokumentasikan suasana kedai untuk keperluan promosi. Dengan berada di area publik kedai, Anda memahami bahwa Anda dapat terekam dalam foto atau video suasana.",
      "Bila Anda keberatan untuk ditampilkan, sampaikan kepada staf kami dan kami akan menghormatinya. Konten yang Anda kirim atau tandai kepada kami dapat kami bagikan ulang dengan tetap mencantumkan kredit yang wajar.",
    ],
  },
  {
    id: "privasi",
    title: "12. Privasi Data",
    paragraphs: [
      "Data yang Anda berikan saat menghubungi kami (misalnya nama dan nomor WhatsApp untuk reservasi) hanya digunakan untuk memproses permintaan Anda dan berkomunikasi terkait layanan Oemago.",
      "Kami tidak menjual data pribadi Anda kepada pihak ketiga. Penjelasan lengkap akan dituangkan dalam Kebijakan Privasi tersendiri.",
    ],
  },
  {
    id: "promo",
    title: "13. Promosi dan Voucher",
    paragraphs: [
      "Setiap promosi, diskon, atau voucher memiliki syarat, periode, dan kuota tersendiri yang diumumkan pada saat promosi berlangsung.",
      "Promosi tidak dapat digabungkan kecuali dinyatakan lain, tidak dapat diuangkan, dan dapat dihentikan sewaktu-waktu tanpa pemberitahuan.",
    ],
  },
  {
    id: "tanggung-jawab",
    title: "14. Batasan Tanggung Jawab",
    paragraphs: [
      "Situs dan layanan disediakan “sebagaimana adanya”. Sepanjang diizinkan hukum, Oemago tidak bertanggung jawab atas kerugian tidak langsung yang timbul dari penggunaan situs, keterlambatan, kesalahan informasi, atau tidak tersedianya layanan.",
      "Oemago tidak bertanggung jawab atas kehilangan atau kerusakan barang pribadi milik pengunjung selama berada di area kedai. Mohon jaga barang berharga Anda.",
      "Ketentuan ini tidak menghapus hak konsumen yang dijamin oleh peraturan perundang-undangan yang berlaku.",
    ],
  },
  {
    id: "force-majeure",
    title: "15. Keadaan Kahar (Force Majeure)",
    paragraphs: [
      "Oemago tidak dianggap lalai apabila tidak dapat menjalankan layanan karena keadaan di luar kendali yang wajar, termasuk namun tidak terbatas pada bencana alam, gangguan listrik atau internet, kebijakan pemerintah, atau keadaan darurat lainnya.",
    ],
  },
  {
    id: "perubahan",
    title: "16. Perubahan Syarat & Ketentuan",
    paragraphs: [
      "Kami dapat memperbarui Syarat & Ketentuan ini dari waktu ke waktu. Versi terbaru akan selalu ditampilkan pada halaman ini beserta tanggal pembaruannya.",
      "Dengan tetap menggunakan situs atau layanan kami setelah perubahan berlaku, Anda dianggap menyetujui ketentuan yang telah diperbarui.",
    ],
  },
  {
    id: "hukum",
    title: "17. Hukum yang Berlaku",
    paragraphs: [
      "Syarat & Ketentuan ini diatur dan ditafsirkan berdasarkan hukum Republik Indonesia.",
      "Setiap perselisihan akan diupayakan diselesaikan secara musyawarah terlebih dahulu. Bila tidak tercapai kesepakatan, penyelesaian dilakukan melalui jalur hukum yang berlaku di Indonesia.",
    ],
  },
];
