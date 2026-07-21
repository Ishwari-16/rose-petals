import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Eye, X, ZoomIn, Heart } from 'lucide-react';
import bridalBlouse from "./bridal-blouse.jpeg";

interface GalleryItem {
  id: number;
  category: 'blouse' | 'embroidery' | 'students' | 'boutique' | 'clients';
  image: string;
  title: string;
  subtitle: string;
}

export default function Gallery() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [lightboxImage, setLightboxImage] = useState<GalleryItem | null>(null);

  const filterTabs = [
    { key: 'all', label: 'All Designs' },
    { key: 'blouse', label: 'Designer Blouses' },
    { key: 'embroidery', label: 'Aari & Embroidery' },
    { key: 'students', label: 'Academy & Students' },
    { key: 'boutique', label: 'Boutique Apparel' },
    { key: 'clients', label: 'Happy Customers' }
  ];

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      category: 'blouse',
      image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=600',
      title: 'Royal Bridal Blouse',
      subtitle: 'With custom padded stitching & sweetheart neckline'
    },
    {
      id: 2,
      category: 'embroidery',
      image: 'https://images.meesho.com/images/products/908156114/8xnqe_512.webp?width=512',
      title: 'Aari Hand Embroidery',
      subtitle: 'Premium golden threadwork and floral motifs'
    },
    {
      id: 3,
      category: 'students',
      image: 'https://www.anantexports.in/cdn/shop/files/IMG-20240830-WA0174.jpg?v=1774812394&width=1500',
      title: 'Practical Sewing Training',
      subtitle: 'Students mastering motor sewing machine controls'
    },
    {
      id: 4,
      category: 'boutique',
      image: 'https://www.trendbuy.co.in/cdn/shop/files/elegant-designer-lehenga-choli-exquisite-sequins-embroidery-for-women-view-13.webp?v=1773065067',
      title: 'Traditional Designer Lehenga',
      subtitle: 'Festive red lehenga with heavy custom border stitching'
    },
    {
      id: 5,
      category: 'clients',
      image: 'https://cdn.shopify.com/s/files/1/2542/7564/files/Kolhapuri_Nauvari_Saree.png?v=1745227897',
      title: 'Custom Nauvari Saree Fit',
      subtitle: 'Marathi customer styled professionally for wedding'
    },
    {
      id: 6,
      category: 'blouse',
      image: 'https://saaisnehstore.com/cdn/shop/articles/ChatGPT_Image_Jun_5_2026_12_23_22_AM.png?v=1780599264',
      title: 'Puff-Sleeve Designer Blouse',
      subtitle: 'Modern retro fusion blouse with elegant laces'
    },
    {
      id: 7,
      category: 'embroidery',
      image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=600',
      title: 'Zardosi Work Patch',
      subtitle: 'Traditional neck design patch for bridal dress'
    },
    {
      id: 8,
      category: 'students',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIRx4bGuNIx0Ojgla38HgG_OP1Dv7hKbt7xA1cIzDP35joJ-Qv2qILkTU&s=10',
      title: 'Pattern Drafting & Sizing',
      subtitle: 'Classroom drafting tutorials for designer blouses'
    },
    {
      id: 9,
      category: 'clients',
      image: 'https://i.pinimg.com/236x/41/34/2e/41342e071dcdf338e6d27fefbad17eda.jpg',
      title: 'Happy Kurti Stitching Client',
      subtitle: 'Daily wear cotton kurti with neck-button styling'
    },
    {
  id: 10,
  category: 'blouse',
  image: bridalBlouse,
  title: 'Puff-Sleeve Designer Blouse',
  subtitle: 'Modern retro fusion blouse with elegant laces'
}
  ];

  const filteredItems = activeFilter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="py-24 bg-brand-pink-soft/50 dark:bg-brand-charcoal/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-semibold tracking-widest uppercase text-brand-primary dark:text-brand-secondary block">
            {t('nav.gallery')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-charcoal dark:text-white tracking-tight">
            Our Handcrafted Masterpieces
          </h2>
          <p className="text-sm sm:text-base text-brand-charcoal/65 dark:text-brand-pink-light/70 max-w-2xl mx-auto font-sans leading-relaxed">
            Take a look at our premium stitched garments, detailed hand embroidery work, and active student classes.
          </p>
          <div className="w-16 h-1 bg-linear-to-r from-brand-primary to-brand-secondary mx-auto rounded-full mt-4" />
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
          {filterTabs.map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveFilter(tab.key)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 border ${
                activeFilter === tab.key
                  ? 'bg-linear-to-r from-brand-primary to-brand-secondary text-white border-transparent shadow-md'
                  : 'bg-white dark:bg-brand-charcoal text-brand-charcoal/70 dark:text-brand-pink-light/70 border-brand-primary/10 dark:border-brand-secondary/15 hover:bg-brand-pink-light/40 dark:hover:bg-brand-charcoal/50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Pinterest Style Masonry Grid with Framer Motion AnimatePresence */}
        <motion.div
          layout
          className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map(item => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="break-inside-avoid relative rounded-2xl overflow-hidden group shadow-xs hover:shadow-xl border border-brand-primary/5 dark:border-brand-secondary/5 bg-white dark:bg-brand-charcoal cursor-zoom-in img-zoom-container"
                onClick={() => setLightboxImage(item)}
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto object-cover rounded-2xl"
                  loading="lazy"
                />

                {/* Hover overlay content */}
                <div className="absolute inset-0 bg-linear-to-t from-brand-charcoal/80 via-brand-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                  <div className="flex items-center gap-1 text-brand-secondary mb-1">
                    <Sparkles className="w-3.5 h-3.5 fill-brand-secondary" />
                    <span className="text-[10px] font-sans uppercase tracking-wider font-semibold">
                      {item.category.toUpperCase()}
                    </span>
                  </div>
                  <h3 className="font-serif font-bold text-lg leading-tight">{item.title}</h3>
                  <p className="text-xs text-brand-pink-light/80 mt-1 font-sans">{item.subtitle}</p>

                  <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3">
                    <span className="text-[10px] tracking-widest uppercase font-sans flex items-center gap-1">
                      <ZoomIn className="w-3.5 h-3.5" />
                      <span>Click to view</span>
                    </span>
                    <Heart className="w-4 h-4 hover:fill-rose-500 transition-colors" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Dynamic Lightbox popup overlay */}
        <AnimatePresence>
          {lightboxImage && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Blur backdrop click to exit */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setLightboxImage(null)}
                className="fixed inset-0 bg-brand-charcoal/85 backdrop-blur-md"
              />

              {/* Box frame image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative max-w-3xl w-full bg-white dark:bg-brand-charcoal rounded-3xl overflow-hidden shadow-2xl z-10 border border-brand-primary/10 dark:border-brand-secondary/15 flex flex-col"
              >
                {/* Image container */}
                <div className="relative max-h-[500px] overflow-hidden flex items-center justify-center bg-brand-charcoal/20">
                  <img
                    src={lightboxImage.image}
                    alt={lightboxImage.title}
                    className="max-w-full max-h-[500px] object-contain"
                  />
                  {/* Close button */}
                  <button
                    onClick={() => setLightboxImage(null)}
                    className="absolute top-4 right-4 p-2 rounded-full bg-brand-charcoal/60 text-white hover:bg-brand-primary transition-colors z-20"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Lightbox footer details */}
                <div className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-[10px] font-sans tracking-widest uppercase text-brand-primary dark:text-brand-secondary font-bold">
                      Category: {lightboxImage.category}
                    </span>
                    <h3 className="text-xl font-serif font-bold text-brand-charcoal dark:text-white">
                      {lightboxImage.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-brand-charcoal/60 dark:text-brand-pink-light/70 font-sans">
                      {lightboxImage.subtitle}
                    </p>
                  </div>
                  
                  {/* Quick share or inquiry button */}
                  <a
                    href={`https://wa.me/917385033689?text=${encodeURIComponent(
                      `Hello Rose Petals Boutique! I saw this gorgeous picture of "${lightboxImage.title}" in your gallery. Can we arrange custom stitching for a similar outfit?`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs tracking-wider uppercase text-center shadow-md flex items-center justify-center gap-1.5"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Inquire this Design</span>
                  </a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
