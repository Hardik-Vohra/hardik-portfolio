"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type GalleryItem = {
  src: string;
  title: string;
  subtitle: string;
};

type MediaGalleryProps = {
  items: GalleryItem[];
};

export function MediaGallery({ items }: MediaGalleryProps) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {items.map((item, index) => (
        <motion.figure
          key={item.src}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: index * 0.08, duration: 0.45 }}
          className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-panel/70"
        >
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src={item.src}
              alt={item.title}
              fill
              className="object-cover transition duration-700 group-hover:scale-105"
              sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-base via-transparent to-transparent" />
          </div>
          <figcaption className="space-y-1 p-5">
            <h3 className="font-display text-xl text-white">{item.title}</h3>
            <p className="text-sm leading-6 text-silver">{item.subtitle}</p>
          </figcaption>
        </motion.figure>
      ))}
    </div>
  );
}
