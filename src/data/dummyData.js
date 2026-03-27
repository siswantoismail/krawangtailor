import { Scissors, Shirt, Ruler } from "lucide-react";

export const services = [
  {
    title: "Jahit Pakaian",
    desc: "Pembuatan baju wanita, pria, seragam, dan busana sesuai ukuran pelanggan.",
    icon: Shirt,
  },
  {
    title: "Permak & Reparasi",
    desc: "Permak celana, rok, lengan, resleting, dan perbaikan detail jahitan.",
    icon: Scissors,
  },
  {
    title: "Ukur Custom",
    desc: "Pengukuran presisi untuk hasil jahitan yang rapi, nyaman, dan pas dipakai.",
    icon: Ruler,
  },
];

export const portfolio = [
  {
    name: "Kebaya Modern",
    category: "Custom",
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Seragam Komunitas",
    category: "Seragam",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Permak Celana",
    category: "Permak",
    image:
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Dress Pesta",
    category: "Custom",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80",
  },
];

export const testimonials = [
  {
    name: "Rina",
    review:
      "Hasil jahitan rapi, ukuran pas, dan pengerjaannya cepat. Sangat puas.",
  },
  {
    name: "Dewi",
    review:
      "Permak celana dan ganti resleting hasilnya bagus sekali, seperti baru.",
  },
  {
    name: "Pak Andi",
    review:
      "Seragam pesanan kantor dikerjakan tepat waktu dan kualitasnya bagus.",
  },
];

export const pricing = [
  { item: "Permak Celana", price: "Mulai Rp25.000" },
  { item: "Permak Kemeja", price: "Mulai Rp30.000" },
  { item: "Jahit Baju Custom", price: "Mulai Rp150.000" },
  { item: "Jahit Dress/Kebaya", price: "Mulai Rp250.000" },
];
