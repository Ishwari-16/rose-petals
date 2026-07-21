export type Language = 'en' | 'hi' | 'mr';

export interface TranslationDictionary {
  nav: {
    home: string;
    services: string;
    classes: string;
    about: string;
    gallery: string;
    healing: string;
    faq: string;
    contact: string;
  };
  hero: {
    tagline: string;
    headline: string;
    ctaBook: string;
    ctaClasses: string;
    ctaWhatsapp: string;
    features: string[];
  };
  about: {
    title: string;
    subtitle: string;
    storyTitle: string;
    storyText1: string;
    storyText2: string;
    ownerBadge: string;
    features: {
      title: string;
      desc: string;
    }[];
  };
  services: {
    title: string;
    subtitle: string;
    bookCta: string;
    items: {
      id: string;
      title: string;
      desc: string;
      image: string;
    }[];
  };
  classes: {
    title: string;
    subtitle: string;
    timelineTitle: string;
    curriculumTitle: string;
    admissionOpen: string;
    limitedSeats: string;
    ctaJoin: string;
    timingLabel: string;
    timingValue: string;
    levels: {
      level: string;
      title: string;
      desc: string;
      duration: string;
    }[];
    features: string[];
  };
  whyUs: {
    title: string;
    subtitle: string;
    items: {
      title: string;
      desc: string;
    }[];
  };
  healing: {
    title: string;
    tag: string;
    subtitle: string;
    intro: string;
    ctaConsult: string;
    services: {
      title: string;
      desc: string;
    }[];
  };
  testimonials: {
    title: string;
    subtitle: string;
    ratingText: string;
    items: {
      name: string;
      role: string;
      text: string;
    }[];
  };
  faq: {
    title: string;
    subtitle: string;
    items: {
      q: string;
      a: string;
    }[];
  };
  contact: {
    title: string;
    subtitle: string;
    addressLabel: string;
    address: string;
    phoneLabel: string;
    hoursLabel: string;
    hoursValue: string;
    mapLabel: string;
    btnCall: string;
    btnWhatsapp: string;
    formTitle: string;
    formName: string;
    formPhone: string;
    formMessage: string;
    formSubmit: string;
    formSuccess: string;
  };
  footer: {
    desc: string;
    quickLinks: string;
    rights: string;
    disclaimer: string;
  };
}

export const translations: Record<Language, TranslationDictionary> = {
  en: {
    nav: {
      home: "Home",
      services: "Boutique Services",
      classes: "Academy Classes",
      about: "About Us",
      gallery: "Design Gallery",
      healing: "Healing Center",
      faq: "FAQs",
      contact: "Get in Touch"
    },
    hero: {
      tagline: "Haute Couture & Professional Tailoring Academy",
      headline: "Create Your Signature Style with Rose Petals Boutique",
      ctaBook: "Book Appointment",
      ctaClasses: "Join Tailoring Classes",
      ctaWhatsapp: "WhatsApp Query",
      features: [
        "Premium Stitching",
        "Designer Blouses & Aari Work",
        "Expert Tailoring Classes",
        "Personal Guidance"
      ]
    },
    about: {
      title: "Our Story",
      subtitle: "Where Elegance Meets Craftsmanship",
      storyTitle: "Rose Petals Boutique & Academy",
      storyText1: "Rose Petals Boutique specializes in Designer Blouse Stitching, Designer Lehenga Stitching, Bridal Wear, Aari Work, Custom Fashion Designing, and Professional Stitching Classes.",
      storyText2: "We have proudly completed more than 2000 happy client orders with premium quality craftsmanship.",
      ownerBadge: "Chanchal Uday Kirad (Founder & Chief Designer)",
      features: [
        { title: "Premium Tailoring", desc: "Expert stitching tailored precisely to your unique measurements." },
        { title: "Designer Innovation", desc: "Always updating styles with the latest international fashion trends." },
        { title: "Practical Mentorship", desc: "Hands-on, direct training for every single student." },
        { title: "Complete Satisfaction", desc: "Meticulous quality control with perfect on-time delivery." }
      ]
    },
    services: {
      title: "Boutique Services",
      subtitle: "Custom-made designer garments stitched to perfection for your special occasions",
      bookCta: "Inquire on WhatsApp",
      items: [
        { id: "blouse", title: "Designer Blouse Stitching", desc: "Perfect fit, sophisticated cuts, and high-fashion neckline designs customized for you.", image: "/src/assets/images/hero_blouse_traditional_1784565585673.jpg" },
        { id: "lehenga", title: "Designer Lehenga Stitching", desc: "Graceful festive wear featuring voluminous flares, custom waistlines, and coordinated blouses.", image: "https://www.trendbuy.co.in/cdn/shop/files/elegant-designer-lehenga-choli-exquisite-sequins-embroidery-for-women-view-13.webp?v=1773065067" },
        { id: "bridal", title: "Bridal Blouse Stitching", desc: "Premium wedding blouses with royal embroidery, customized padding, and designer tassels.", image: "/src/assets/images/bridal_blouse_maggam_1784565616116.jpg" },
        { id: "party", title: "Party Wear Blouse", desc: "Chic halter-necks, backless, puff-sleeves, and designer patchwork to elevate any saree.", image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=600" },
        { id: "aari", title: "Aari Work", desc: "Exquisite hand-crafted embroidery featuring premium zari and gorgeous gemstone threadwork.", image: "https://images.meesho.com/images/products/908156114/8xnqe_512.webp?width=512" },
        { id: "hand_embroidery", title: "Hand Embroidery", desc: "Beautiful custom hand embroidery, Zardosi work, and intricate detailing tailored to you.", image: "https://saaisnehstore.com/cdn/shop/articles/ChatGPT_Image_Jun_5_2026_12_23_22_AM.png?v=1780599264" },
        { id: "shivan_classes", title: "Shivan Classes", desc: "Learn professional stitching from beginner to advanced level with practical guidance and hands-on training.", image: "/src/assets/images/tailoring_classroom_1784565632821.jpg" },
        { id: "aari_classes", title: "Aari Work Classes", desc: "Learn traditional and modern Aari embroidery with professional techniques and creative designs.", image: "https://saaisnehstore.com/cdn/shop/articles/ChatGPT_Image_Jun_5_2026_12_23_22_AM.png?v=1780599264" },
        { id: "alteration", title: "Dress Alteration", desc: "Reshape, resize, and modify your pre-owned premium wear to fit you like a glove.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIRx4bGuNIx0Ojgla38HgG_OP1Dv7hKbt7xA1cIzDP35joJ-Qv2qILkTU&s=10" },
        { id: "fall_pico", title: "Fall & Pico", desc: "Flawless saree finishing with premium cotton falls and delicate modern pico edge rolling.", image: "https://m.media-amazon.com/images/I/81lp4cNiB9L._AC_UY350_.jpg" },
        { id: "custom_design", title: "Custom Boutique Designing", desc: "Bespoke design creation from sketching to fabric sourcing and ultimate custom tailoring.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr8NrKNiy1_iWrMZ27sa0f8aXGf42PTKVqzxXwr-qP2psxJ1WATcjMMjQ&s=10" },
        { id: "consultation", title: "Fashion Consultation", desc: "Personalized styling advice, silhouette suggestions, and material consulting for your occasions.", image: "/src/assets/images/about_tailor_workspace_1784565600891.jpg" }
      ]
    },
    classes: {
      title: "Tailoring Academy",
      subtitle: "Transform your passion into a business with our certified practical training courses",
      timelineTitle: "Our Structured Learning Path",
      curriculumTitle: "Comprehensive Course Modules",
      admissionOpen: "Admissions Open for New Batches!",
      limitedSeats: "Limited seats available to ensure personalized individual attention.",
      ctaJoin: "Secure Your Seat Now",
      timingLabel: "Class Batches",
      timingValue: "12:00 PM – 2:00 PM Daily",
      levels: [
        { level: "Phase 1", title: "Beginner: Sewing Foundations", desc: "Master sewing machines, basic stitches, precise body measurements, pattern cutting, and simple garments like kurtis and skirts.", duration: "1 Month" },
        { level: "Phase 2", title: "Intermediate: Blouse & Suit Mastery", desc: "Deep dive into different types of blouses (Katori, Princess cut, padded), Punjabi dress cutting, perfect darting, and lace work.", duration: "2 Months" },
        { level: "Phase 3", title: "Advanced: Designer Couture & Aari", desc: "Learn bridal blouses, high-end designer necks, patchwork, complex Aari work, and boutique-style finishing.", duration: "2 Months" }
      ],
      features: [
        "100% Practical Sewing Machine Training",
        "Expert Pattern Making & Sizing Rules",
        "Professional Techniques (Puff Sleeves, Dori, Patch Work)",
        "Boutique Business Setup & Marketing Guidance",
        "Course Completion Certificate (Optional)",
        "Empowers you to start a successful home-based business"
      ]
    },
    whyUs: {
      title: "Why Choose Rose Petals",
      subtitle: "Crafting careers and beautiful designs with unmatched personal dedication",
      items: [
        { title: "100% Practical Learning", desc: "No boring textbooks. You cut, design, and sew real premium fabrics from day one." },
        { title: "Experienced Mentorship", desc: "Learn directly from Chanchal Ma'am who has years of elite boutique experience." },
        { title: "Small Batch Sizes", desc: "We limit student numbers per batch to ensure you get direct face-to-face attention." },
        { title: "Boutique Business Guide", desc: "We teach you how to source material, price your products, and attract local clients." },
        { title: "Premium Tailoring Standards", desc: "We maintain international stitching and double-seam standards for high longevity." },
        { title: "Flexible Learning Pace", desc: "Every student learns at their own speed. We never rush your creative expression." }
      ]
    },
    healing: {
      title: "Astro Hindvi & Shubharambh Healing",
      tag: "Holistic Wellness & Cosmic Guidance",
      subtitle: "Align your energies and resolve life obstacles with our spiritually curated healing programs",
      intro: "Managed by Chanchal Uday Kirad, the Shubharambh Healing Center offers deep spiritual guidance and alignment. We combine ancient Indian wisdom with modern energy psychology to help you manifest abundance, health, and peace of mind.",
      ctaConsult: "Book Spiritual Consultation",
      services: [
        { title: "Numerology & Name Correction", desc: "Optimize your name spelling vibration to match your birth date numbers for career prosperity." },
        { title: "Signature Analysis", desc: "Unlock your confidence and personal power by fine-tuning your unique physical signature." },
        { title: "Chakra & Spiritual Healing", desc: "Dissolve emotional blockages and restore physical energy through guided chakra cleansing." },
        { title: "Energy & Relationship Healing", desc: "Cleanse negativity from your living spaces and mend bonds with advanced energy healing techniques." },
        { title: "Life Guidance & Stress Relief", desc: "Receive highly personalized spiritual solutions to overcome persistent career and personal obstacles." }
      ]
    },
    testimonials: {
      title: "What Our Customers Say",
      subtitle: "Over 2000+ happy customers and successful academy graduates in Pune",
      ratingText: "Google Rating 4.5/5 stars based on verified boutique customers",
      items: [
        { name: "Priya Sharma", role: "Happy Saree Client", text: "The fit of my bridal blouse was absolutely spectacular! Chanchal Ma'am gave personal suggestions for the Aari embroidery work, and everyone at my wedding loved it. Highly recommended!" },
        { name: "Meena Deshmukh", role: "Academy Graduate", text: "I joined the tailoring classes from scratch. Within 3 months, I gained the confidence to start my own tailoring work at home. The teaching style is so gentle and 100% practical." },
        { name: "Snehal Patil", role: "Nauvari Saree Customer", text: "Stitched my Nauvari Saree here. Perfect professional drape and very comfortable to wear. They delivered it exactly on time!" },
        { name: "Anjali Joshi", role: "Healing & Styling Client", text: "I took numerology name correction services along with boutique designing. Chanchal ji's guidance gave me immense peace of mind and success. She is extremely talented!" }
      ]
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Got questions? We have compiled the most common answers for you.",
      items: [
        { q: "What are the timings for the tailoring classes?", a: "Our dedicated academy batch runs from 12:00 PM to 2:00 PM daily. We offer highly interactive, hands-on sewing practice during this period." },
        { q: "Do I need to own a sewing machine to join?", a: "No, we provide modern sewing machines and draft papers at our academy. You only need to bring your practice fabric." },
        { q: "Do you offer certificates upon course completion?", a: "Yes, we provide an academy certificate upon completion of our Advanced Fashion Designing & Tailoring course." },
        { q: "What is the typical delivery time for custom stitched boutique wear?", a: "Standard boutique tailoring takes 5 to 7 days. For urgent bridal and heavy Aari work blouses, we request 10 to 14 days, though express options are available on request." },
        { q: "Can I bring my own design ideas from Pinterest or Instagram?", a: "Absolutely! We specialize in custom styling. You can show us any photo and we will translate it into a custom fit for you." },
        { q: "How can I book a spiritual healing or numerology consultation?", a: "You can book directly via our 'Book Spiritual Consultation' button or call 9579175296. We conduct private sessions at the center." }
      ]
    },
    contact: {
      title: "Connect With Us",
      subtitle: "Visit our luxurious boutique in Pune or schedule a consultation today",
      addressLabel: "Boutique Location",
      address: "Shop No.4, Ganesh Vihar, Autadwadi Handewadi, Vardhaman Township, Sasane Nagar, Hadapsar, Pune, Maharashtra 411028",
      phoneLabel: "Phone Numbers",
      hoursLabel: "Opening Hours",
      hoursValue: "Open Daily: 9:00 AM – 10:00 PM",
      mapLabel: "Find Us on Google Maps",
      btnCall: "Call Now",
      btnWhatsapp: "WhatsApp Chat",
      formTitle: "Send a Quick Inquiry",
      formName: "Full Name",
      formPhone: "Mobile Number",
      formMessage: "Message / What are you looking for?",
      formSubmit: "Send Inquiry via WhatsApp",
      formSuccess: "Inquiry prepared! We are opening WhatsApp to send your message..."
    },
    footer: {
      desc: "Rose Petals Boutique & Academy represents haute couture bespoke tailoring and professional training under the expertise of Chanchal Uday Kirad in Pune.",
      quickLinks: "Quick Navigation",
      rights: "© 2026 Rose Petals Boutique & Academy. All Rights Reserved.",
      disclaimer: "Astro Hindvi & Shubharambh Healing services are holistic practices. Results may vary and are based on individual energy alignment."
    }
  },
  hi: {
    nav: {
      home: "मुख्य पृष्ठ",
      services: "बुटीक सेवाएं",
      classes: "टेलरिंग क्लासेस",
      about: "हमारे बारे में",
      gallery: "डिज़ाइन गैलरी",
      healing: "हीलिंग सेंटर",
      faq: "अक्सर पूछे जाने वाले सवाल",
      contact: "संपर्क करें"
    },
    hero: {
      tagline: "प्रीमियम फैशन बुटीक और व्यावसायिक टेलरिंग अकादमी",
      headline: "रोज़ पेटल्स बुटीक के साथ अपनी खुद की अनूठी शैली बनाएं",
      ctaBook: "अपॉइंटमेंट बुक करें",
      ctaClasses: "टेलरिंग क्लासेस में शामिल हों",
      ctaWhatsapp: "व्हाट्सएप पूछताछ",
      features: [
        "प्रीमियम सिलाई काम",
        "डिजाइनर ब्लाउज और आरी वर्क",
        "विशेषज्ञ टेलरिंग क्लासेस",
        "व्यक्तिगत मार्गदर्शन"
      ]
    },
    about: {
      title: "हमारी कहानी",
      subtitle: "जहां लालित्य शिल्प कौशल से मिलता है",
      storyTitle: "रोज़ पेटल्स बुटीक और अकादमी",
      storyText1: "रोज़ पेटल्स बुटीक मुख्य रूप से डिजाइनर ब्लाउज सिलाई (Designer Blouse Stitching), डिजाइनर लहंगा सिलाई (Designer Lehenga Stitching), ब्राइडल वियर (Bridal Wear), आरी वर्क (Aari Work), कस्टमाइज्ड फैशन डिजाइनिंग और प्रोफेशनल सिलाई क्लासेस के लिए प्रसिद्ध है।",
      storyText2: "हमने बेहद गर्व के साथ उत्कृष्ट शिल्प कौशल और प्रीमियम गुणवत्ता के साथ 2000 से अधिक खुशहाल ग्राहकों के ऑर्डर्स को सफलतापूर्वक पूरा किया है।",
      ownerBadge: "चंचल उदय किराड़ (संस्थापक और मुख्य डिजाइनर)",
      features: [
        { title: "प्रीमियम सिलाई", desc: "आपकी शारीरिक माप के अनुसार पूरी तरह से फिट और फिनिशिंग वाली सिलाई।" },
        { title: "नवीनतम डिज़ाइन", desc: "नवीनतम फैशन ट्रेंड्स के अनुसार हमेशा नए डिज़ाइन्स की पेशकश।" },
        { title: "व्यावहारिक प्रशिक्षण", desc: "हर एक छात्र पर व्यक्तिगत ध्यान और हाथों-हाथ सिलाई अभ्यास।" },
        { title: "पूर्ण संतुष्टि", desc: "उत्कृष्ट गुणवत्ता नियंत्रण और सही समय पर कपड़ों की डिलीवरी।" }
      ]
    },
    services: {
      title: "बुटीक सेवाएं",
      subtitle: "आपके विशेष अवसरों के लिए पूरी तरह से सिली गई प्रीमियम और डिजाइनर पोशाकें",
      bookCta: "व्हाट्सएप पर पूछें",
      items: [
        { id: "blouse", title: "डिजाइनर ब्लाउज सिलाई", desc: "बेहतरीन फिटिंग, आधुनिक कट्स और आपके पसंद के अनुसार अनुकूलित नेक डिज़ाइन्स।", image: "/src/assets/images/hero_blouse_traditional_1784565585673.jpg" },
        { id: "lehenga", title: "डिजाइनर लहंगा सिलाई", desc: "उत्सवों के लिए मनमोहक घेरदार लहंगे, कस्टमाइज्ड वेस्टलाइन और सुंदर मैचिंग ब्लाउज।", image: "https://www.trendbuy.co.in/cdn/shop/files/elegant-designer-lehenga-choli-exquisite-sequins-embroidery-for-women-view-13.webp?v=1773065067" },
        { id: "bridal", title: "ब्राइडल ब्लाउज सिलाई", desc: "शाही कढ़ाई, कस्टमाइज्ड पैडिंग और खूबसूरत लटकन के साथ विशेष शादी के ब्लाउज।", image: "/src/assets/images/bridal_blouse_maggam_1784565616116.jpg" },
        { id: "party", title: "पार्टी वियर ब्लाउज", desc: "हाल्टर-नेक, बैकलेस, पफ-स्लीव्स और डिजाइनर पैचवर्क जो आपकी साड़ी को उत्कृष्ट लुक दे।", image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=600" },
        { id: "aari", title: "आरी वर्क", desc: "प्रीमियम जरी, मोतियों और धागों के साथ उत्तम दर्जे की हस्तनिर्मित आरी कढ़ाई कला।", image: "https://images.meesho.com/images/products/908156114/8xnqe_512.webp?width=512" },
        { id: "hand_embroidery", title: "हैंड एम्ब्रॉयडरी (Hand Embroidery)", desc: "आपकी पसंद के अनुसार उत्तम हस्तनिर्मित कढ़ाई, जरदोजी और कलात्मक धागे का काम।", image: "https://saaisnehstore.com/cdn/shop/articles/ChatGPT_Image_Jun_5_2026_12_23_22_AM.png?v=1780599264" },
        { id: "shivan_classes", title: "सिलाई क्लासेस (Shivan Classes)", desc: "शुरुआती से उन्नत स्तर तक व्यावहारिक मार्गदर्शन और सिलाई मशीन का संपूर्ण प्रशिक्षण।", image: "/src/assets/images/tailoring_classroom_1784565632821.jpg" },
        { id: "aari_classes", title: "आरी वर्क क्लासेस", desc: "पारंपरिक और आधुनिक आरी कढ़ाई को व्यावसायिक तकनीकों और नए डिज़ाइनों के साथ सीखें।", image: "https://saaisnehstore.com/cdn/shop/articles/ChatGPT_Image_Jun_5_2026_12_23_22_AM.png?v=1780599264" },
        { id: "alteration", title: "कपड़ों की अल्टरेशन (Dress Alteration)", desc: "अपने कीमती कपड़ों को नया जैसा फिटिंग और सुंदर आकार देने की सुविधा।", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIRx4bGuNIx0Ojgla38HgG_OP1Dv7hKbt7xA1cIzDP35joJ-Qv2qILkTU&s=10" },
        { id: "fall_pico", title: "फॉल और पीको (Fall & Pico)", desc: "प्रीमियम सूती फॉल और बारीक आधुनिक पीको फिनिशिंग के साथ साड़ी का उत्तम काम।", image: "https://m.media-amazon.com/images/I/81lp4cNiB9L._AC_UY350_.jpg" },
        { id: "custom_design", title: "कस्टम बुटीक डिजाइनिंग", desc: "फैशन स्केचिंग से लेकर कपड़े के चयन और अंतिम सिलाई तक संपूर्ण बुटीक सेवा।", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr8NrKNiy1_iWrMZ27sa0f8aXGf42PTKVqzxXwr-qP2psxJ1WATcjMMjQ&s=10" },
        { id: "consultation", title: "फैशन कंसल्टेशन (Fashion Consultation)", desc: "आपके खास अवसरों के लिए व्यक्तिगत स्टाइलिंग, डिज़ाइन्स और फैब्रिक चयन पर मार्गदर्शन।", image: "/src/assets/images/about_tailor_workspace_1784565600891.jpg" }
      ]
    },
    classes: {
      title: "टेलरिंग अकादमी",
      subtitle: "हमारे प्रमाणित और व्यावहारिक कोर्सेज के साथ अपने शौक को एक सफल व्यवसाय में बदलें",
      timelineTitle: "सखने का व्यवस्थित तरीका",
      curriculumTitle: "व्यापक कोर्स मॉड्यूल्स",
      admissionOpen: "नए बैचों के लिए प्रवेश खुले हैं!",
      limitedSeats: "व्यक्तिगत ध्यान सुनिश्चित करने के लिए प्रति बैच सीमित सीटें।",
      ctaJoin: "अपनी सीट अभी बुक करें",
      timingLabel: "क्लास का समय",
      timingValue: "दोपहर 12:00 बजे – 2:00 बजे दैनिक",
      levels: [
        { level: "चरण 1", title: "शुरुआती (Beginner): सिलाई का आधार", desc: "सिलाई मशीन संचालन, बुनियादी टांके, सटीक माप लेना, सिलाई कटिंग, और साधारण कुर्ती व स्कर्ट बनाना सीखें।", duration: "1 महीना" },
        { level: "चरण 2", title: "मध्यम (Intermediate): ब्लाउज और सूट विशेषज्ञ", desc: "विभिन्न प्रकार के ब्लाउज (कटोरी, प्रिंसेस कट, पैडेड), पंजाबी ड्रेस की कटिंग, उत्तम डार्ट्स और लेस वर्क सीखें।", duration: "2 महीने" },
        { level: "चरण 3", title: "एडवांस्ड (Advanced): डिजाइनर कढ़ाई और आरी", desc: "दुल्हन के ब्लाउज, हैवी डिजाइनर नेक, पैचवर्क, विस्तृत आरी कढ़ाई वर्क, और बुटीक स्तर की फिनिशिंग सीखें।", duration: "2 महीने" }
      ],
      features: [
        "100% व्यावहारिक (Practical) सिलाई मशीन प्रशिक्षण",
        "व्यावसायिक पैटर्न मेकिंग और सिलाई नियम",
        "पफ स्लीव, डोरी डिज़ाइन, पैच वर्क की आधुनिक तकनीकें",
        "घर पर बुटीक शुरू करने और मार्केटिंग के लिए बिजनेस मार्गदर्शन",
        "कोर्स पूरा होने पर प्रमाण पत्र (वैकल्पिक)",
        "सफल होम-बिजनेस शुरू करने का बेहतरीन अवसर"
      ]
    },
    whyUs: {
      title: "हमें क्यों चुनें",
      subtitle: "बेजोड़ व्यक्तिगत समर्पण के साथ करियर और सुंदर डिज़ाइनों को संवारना",
      items: [
        { title: "100% प्रैक्टिकल ट्रेनिंग", desc: "कोई बोरिंग थ्योरी नहीं। आप पहले दिन से ही वास्तविक कपड़ों पर काम करना सीखते हैं।" },
        { title: "अनुभवी शिक्षिका", desc: "वर्षों के बुटीक अनुभव वाली चंचल मैम से सीधे और आसान भाषा में सीखें।" },
        { title: "छोटा बैच साइज", desc: "प्रत्येक छात्र को पूरा व्यक्तिगत ध्यान देने के लिए हम बैच में कम संख्या रखते हैं।" },
        { title: "बिजनेस सेटअप गाइड", desc: "हम आपको कपड़ा खरीदने, सही दाम तय करने और ग्राहकों को आकर्षित करना सिखाते।" },
        { title: "प्रीमियम स्टिचिंग स्टैंडर्ड", desc: "कपड़ों के लंबे समय तक चलने के लिए हम सिलाई में अंतरराष्ट्रीय मानक बनाए रखते हैं।" },
        { title: "सीखने की लचीली गति", desc: "हर छात्र अपनी गति से सीखता है। हम आपकी रचनात्मकता को पूरा समय देते हैं।" }
      ]
    },
    healing: {
      title: "एस्ट्रो हिंदवी और शुभारंभ हीलिंग",
      tag: "समग्र कल्याण और आध्यात्मिक मार्गदर्शन",
      subtitle: "आध्यात्मिक ऊर्जा को संतुलित करें और जीवन की बाधाओं को दूर करें",
      intro: "चंचल उदय किराड़ द्वारा संचालित, शुभारंभ हीलिंग सेंटर आपको आंतरिक शांति और समृद्धि प्राप्त करने में मदद करता है। हम आपके करियर, स्वास्थ्य और मन की शांति को बेहतर बनाने के लिए प्राचीन ज्योतिषीय और ऊर्जा विज्ञान का उपयोग करते हैं।",
      ctaConsult: "आध्यात्मिक परामर्श बुक करें",
      services: [
        { title: "अंकशास्त्र और नाम सुधार", desc: "करियर में सफलता और समृद्धि के लिए अपनी जन्मतिथि के अनुसार नाम की स्पेलिंग को सुधारें।" },
        { title: "हस्ताक्षर (Signature) विश्लेषण", desc: "अपने हस्ताक्षर को बेहतर बनाकर आत्मविश्वास और व्यक्तिगत सफलता को बढ़ाएं।" },
        { title: "चक्र और आध्यात्मिक हीलिंग", desc: "अपने शरीर के ऊर्जा चक्रों को संतुलित और शुद्ध करके मानसिक व शारीरिक तनाव को दूर करें।" },
        { title: "ऊर्जा और संबंध हीलिंग", desc: "घर या ऑफिस से नकारात्मक ऊर्जा को दूर करें और आपसी रिश्तों में सामंजस्य स्थापित करें।" },
        { title: "जीवन मार्गदर्शन और तनाव राहत", desc: "करियर, व्यवसाय या व्यक्तिगत जीवन की बाधाओं को दूर करने के लिए अनुकूलित समाधान प्राप्त करें।" }
      ]
    },
    testimonials: {
      title: "हमारे ग्राहक क्या कहते हैं",
      subtitle: "पुणे में 200 से अधिक संतुष्ट ग्राहक और हमारी अकादमी के सफल स्नातक",
      ratingText: "सत्यापित ग्राहकों की समीक्षाओं के आधार पर Google रेटिंग 4.5/5 सितारे",
      items: [
        { name: "प्रिया शर्मा", role: "बुटीक ग्राहक", text: "मेरे ब्राइडल ब्लाउज की फिटिंग अद्भुत थी! चंचल मैम ने ब्लाउज के आरी वर्क के लिए बहुत अच्छे सुझाव दिए। शादी में सबने इसकी तारीफ की।" },
        { name: "मीना देशमुख", role: "अकादमी स्नातक", text: "मुझे सिलाई का कोई अनुभव नहीं था। टेलरिंग क्लासेस के 3 महीनों में मैंने इतना सीखा कि अब मैं घर से ही ब्लाउज सिलने लगी हूँ।" },
        { name: "स्नेहल पाटिल", role: "साड़ी ग्राहक", text: "मैंने यहां अपनी नौवारी साड़ी सिलवाई। फिनिशिंग बहुत बढ़िया थी और साड़ी पहनने में बहुत आरामदायक है। सही समय पर डिलीवरी मिली!" },
        { name: "अंजलि जोशी", role: "हीलिंग और स्टाइलिंग ग्राहक", text: "मैंने अंकशास्त्र के अनुसार नाम सुधार करवाया। चंचल जी के मार्गदर्शन से मुझे मानसिक शांति और काम में काफी तरक्की मिली है।" }
      ]
    },
    faq: {
      title: "अक्सर पूछे जाने वाले सवाल",
      subtitle: "क्या आपके मन में कोई सवाल हैं? हमने यहां महत्वपूर्ण उत्तर संकलित किए हैं।",
      items: [
        { q: "टेलरिंग क्लासेस का समय क्या है?", a: "हमारी अकादमी की कक्षाएं रोजाना दोपहर 12:00 बजे से 2:00 बजे तक चलती हैं। इस दौरान व्यावहारिक अभ्यास पर पूरा जोर दिया जाता है।" },
        { q: "क्या क्लासेस में शामिल होने के लिए मेरे पास सिलाई मशीन होना जरूरी है?", a: "नहीं, हम अपनी अकादमी में सभी आधुनिक मशीनें और ड्राफ्ट पेपर प्रदान करते हैं। आपको केवल अभ्यास का कपड़ा लाना होगा।" },
        { q: "क्या कोर्स पूरा होने पर सर्टिफिकेट मिलता है?", a: "हां, हमारे एडवांस्ड फैशन डिजाइनिंग और टेलरिंग कोर्स को पूरा करने पर आपको हमारी अकादमी का सर्टिफिकेट मिलता है।" },
        { q: "बुटीक में कपड़े सिलने में कितना समय लगता है?", a: "सामान्य सिलाई में 5 से 7 दिन लगते हैं। भारी आरी वर्क और ब्राइडल ब्लाउज के लिए हमें 10 से 14 दिनों की आवश्यकता होती है।" },
        { q: "क्या मैं इंस्टाग्राम या पिंटरेस्ट से अपनी पसंद का डिज़ाइन ला सकती हूँ?", a: "बिल्कुल! हम कस्टमाइज्ड स्टिचिंग में माहिर हैं। आप हमें कोई भी तस्वीर दिखाएं, हम उसे आपके लिए परफेक्ट फिटिंग में सील देंगे।" },
        { q: "हीलिंग या ज्योतिष परामर्श कैसे बुक कर सकते हैं?", a: "आप हमारी वेबसाइट पर 'आध्यात्मिक परामर्श' बटन दबाकर या सीधे 9579175296 पर फोन करके अपॉइंटमेंट बुक कर सकते हैं।" }
      ]
    },
    contact: {
      title: "हमसे संपर्क करें",
      subtitle: "पुणे में हमारे बुटीक पर आएं या आज ही अपना अपॉइंटमेंट तय करें",
      addressLabel: "बुटीक का पता",
      address: "दुकान नंबर 4, गणेश विहार, औतादवाड़ी हांडेवाड़ी, वर्धमान टाउनशिप, सासाने नगर, हडपसर, पुणे, महाराष्ट्र 411028",
      phoneLabel: "फोन नंबर",
      hoursLabel: "खुलने का समय",
      hoursValue: "रोजाना सुबह 9:00 बजे से रात 10:00 बजे तक खुला है",
      mapLabel: "हमें गूगल मैप पर खोजें",
      btnCall: "अभी कॉल करें",
      btnWhatsapp: "व्हाट्सएप चैट",
      formTitle: "त्वरित संदेश भेजें",
      formName: "पूरा नाम",
      formPhone: "मोबाइल नंबर",
      formMessage: "आप क्या सिलवाना या सीखना चाहते हैं?",
      formSubmit: "व्हाट्सएप द्वारा भेजें",
      formSuccess: "पूछताछ तैयार! हम संदेश भेजने के लिए व्हाट्सएप खोल रहे हैं..."
    },
    footer: {
      desc: "रोज़ पेटल्स बुटीक और अकादमी चंचल उदय किराड़ के नेतृत्व में पुणे में कस्टम सिलाई और व्यावसायिक प्रशिक्षण का एक विश्वसनीय केंद्र है।",
      quickLinks: "त्वरित लिंक्स",
      rights: "© 2026 रोज़ पेटल्स बुटीक और अकादमी। सर्वाधिकार सुरक्षित।",
      disclaimer: "एस्ट्रो हिंदवी और शुभारंभ हीलिंग की सेवाएं समग्र आध्यात्मिक अभ्यास हैं। परिणाम व्यक्तिगत ऊर्जा के अनुसार भिन्न हो सकते हैं।"
    }
  },
  mr: {
    nav: {
      home: "मुख्य पृष्ठ",
      services: "बुटीक सेवा",
      classes: "टेलरिंग क्लासेस",
      about: "आमच्याबद्दल",
      gallery: "डिझाईन गॅलरी",
      healing: "हीलिंग सेंटर",
      faq: "नेहमीचे प्रश्न",
      contact: "संपर्क"
    },
    hero: {
      tagline: "प्रीमियम फॅशन बुटीक आणि व्यावसायिक टेलरिंग अकॅडमी",
      headline: "रोझ पेटल्स बुटीकसह आपली स्वतःची अनोखी शैली तयार करा",
      ctaBook: "अपॉइंटमेंट बुक करा",
      ctaClasses: "टेलरिंग क्लासेसमध्ये प्रवेश घ्या",
      ctaWhatsapp: "व्हाट्सएप चौकशी",
      features: [
        "प्रीमियम शिलाई काम",
        "डिझायनर ब्लाउज आणि आरी वर्क",
        "तज्ज्ञ टेलरिंग क्लासेस",
        "वैयक्तिक मार्गदर्शन"
      ]
    },
    about: {
      title: "आमची कथा",
      subtitle: "जिथे अभिजातता आणि कारागिरी एकत्र येतात",
      storyTitle: "रोझ पेटल्स बुटीक आणि अकॅडमी",
      storyText1: "रोझ पेटल्स बुटीक हे डिझायनर ब्लाउज शिलाई (Designer Blouse Stitching), डिझायनर लेहेंगा शिलाई (Designer Lehenga Stitching), ब्राइडल वेअर (Bridal Wear), आरी वर्क (Aari Work), कस्टमाइज्ड फॅशन डिझायनिंग आणि प्रोफेशनल शिलाई क्लासेसमध्ये (Shivan Classes) विशेष प्राविण्य राखते.",
      storyText2: "आम्ही आमच्या उत्कृष्ट कारागिरी आणि प्रीमियम दर्जासह २००० हून अधिक समाधानी ग्राहकांच्या ऑर्डर अभिमानाने पूर्ण केल्या आहेत.",
      ownerBadge: "चंचल उदय किराड (संस्थापक आणि मुख्य डिझायनर)",
      features: [
        { title: "प्रीमियम शिलाई", desc: "तुमच्या शरीराच्या अचूक मापानुसार दर्जेदार आणि कम्फर्टेबल शिलाई." },
        { title: "नवीनतम डिझाईन्स", desc: "नव्या फॅशन ट्रेंड्सनुसार सतत उत्कृष्ट आणि नाविन्यपूर्ण डिझाईन्स." },
        { title: "प्रॅक्टिकल ट्रेनिंग", desc: "प्रत्येक विद्यार्थ्यावर वैयक्तिक लक्ष आणि सखोल शिलाई सराव." },
        { title: "पूर्ण समाधान", desc: "उत्कृष्ट फिनिशिंग, अचूक गुणवत्ता नियंत्रण आणि वेळेवर डिलिव्हरी." }
      ]
    },
    services: {
      title: "बुटीक सेवा",
      subtitle: "तुमच्या खास सणांसाठी आणि लग्नसराईसाठी परिपूर्ण शिवलेली डिझायनर वस्त्रे",
      bookCta: "व्हाट्सएपवर चौकशी करा",
      items: [
        { id: "blouse", title: "डिझायनर ब्लाउज शिलाई", desc: "उत्कृष्ट फिटिंग, सुंदर गळ्याचे डिझाईन्स आणि तुमच्या आवडीनुसार कस्टमाइज्ड शिलाई काम.", image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=600" },
        { id: "aari", title: "आरी आणि जरदोजी हस्तकला", desc: "जरी, रेशीम आणि आकर्षक मोत्यांच्या सहाय्याने केलेले अत्यंत नाजूक व भव्य आरी भरतकाम.", image: "https://images.meesho.com/images/products/908156114/8xnqe_512.webp?width=512" },
        { id: "bridal", title: "ब्राइडल (Bridal) ब्लाउज", desc: "लग्नासाठी विशेष डिझाइन केलेले ब्लाउज - पैठणी काठ, भरगच्च आरी कढई आणि सुंदर लटकन.", image: "https://www.trendbuy.co.in/cdn/shop/files/elegant-designer-lehenga-choli-exquisite-sequins-embroidery-for-women-view-13.webp?v=1773065067" },
        { id: "fancy", title: "फॅन्सी ब्लाउज डिझाईन्स", desc: "हॉल्टर-नेक, बॅकलेस, पफ स्लीव्हज आणि आकर्षक पॅचवर्क जे साडीचे सौंदर्य द्विगुणित करते.", image: "https://saaisnehstore.com/cdn/shop/articles/ChatGPT_Image_Jun_5_2026_12_23_22_AM.png?v=1780599264" },
        { id: "punjabi", title: "पंजाबी ड्रेस आणि सलवार सूट", desc: "आरामदायी पतियाळा सूट, डिझायनर अनारकली आणि परफेक्ट फिटिंग असणारे सलवार कमीज सट्स.", image: "https://thenmozhidesigns.com/cdn/shop/files/3S2A9824.jpg" },
        { id: "kurti", title: "कस्टम कुर्ती शिलाई", desc: "ऑफिस आणि रोजच्या वापरासाठी विविध कॉलर डिझाईन्स आणि आकर्षक बाह्यांचे डिझाईन्स असणाऱ्या कुर्ती.", image: "https://i.pinimg.com/236x/41/34/2e/41342e071dcdf338e6d27fefbad17eda.jpg" },
        { id: "lehenga", title: "डिझायनर लेहेंगा आणि घाघरा", desc: "मिरवणुका आणि सणांसाठी सुंदर घेरदार लेहेंगा, आकर्षक वेस्टलाईन आणि मॅचिंग कस्टमाइज्ड ब्लाउज.", image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=600" },
        { id: "nineyard", title: "नऊवारी साडी शिलाई", desc: "शाही आणि पारंपरिक लूकमध्ये सोयीस्कर अशा शाही मस्तानी, ब्राह्मणी नऊवारी साड्यांची शिलाई.", image: "https://cdn.shopify.com/s/files/1/2542/7564/files/Kolhapuri_Nauvari_Saree.png?v=1745227897" },
        { id: "kids", title: "मुलांचे कपडे (Kids Wear)", desc: "लहान मुलांसाठी मऊ, आरामदायक आणि आकर्षक पारंपरिक झबले, परकर-पोलके आणि फ्रॉक.", image: "https://www.anantexports.in/cdn/shop/files/IMG-20240830-WA0174.jpg?v=1774812394&width=1500" },
        { id: "saree", title: "साडी फॉल, पिको आणि कुचू", desc: "उत्कृष्ट दर्जाचा सुती फॉल लावणे आणि अतिशय नाजूक पिको कडा तयार करण्याची तत्पर सेवा.", image: "https://m.media-amazon.com/images/I/81lp4cNiB9L._AC_UY350_.jpg" },
        { id: "alter", title: "परफेक्ट अल्टरेशन सर्व्हिसेस", desc: "तुमच्या जुन्या किंवा रेडिमेड महागड्या कपड्यांना अचूक आकार आणि उत्तम फिटिंग करून देणे.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIRx4bGuNIx0Ojgla38HgG_OP1Dv7hKbt7xA1cIzDP35joJ-Qv2qILkTU&s=10" },
        { id: "custom", title: "कस्टम फॅशन स्टिचिंग", desc: "Pinterest किंवा इंस्टाग्रामवरील कोणतीही डिझाईन आम्हाला दाखवा, आम्ही ती तशीच शिवून देऊ.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr8NrKNiy1_iWrMZ27sa0f8aXGf42PTKVqzxXwr-qP2psxJ1WATcjMMjQ&s=10" }
      ]
    },
    classes: {
      title: "टेलरिंग अकॅडमी",
      subtitle: "तुमच्या आवडीचे रूपांतर एका यशस्वी आणि फायदेशीर घरगुती व्यवसायात करा",
      timelineTitle: "शिकण्याची पद्धतशीर रचना",
      curriculumTitle: "अभ्यासक्रमाचे मुख्य भाग",
      admissionOpen: "नवीन बॅचेससाठी प्रवेश सुरू आहेत!",
      limitedSeats: "प्रत्येक विद्यार्थ्याला स्वतंत्रपणे शिकवता यावे म्हणून मर्यादित जागा उपलब्ध.",
      ctaJoin: "आजच तुमची जागा निश्चित करा",
      timingLabel: "क्लासची वेळ",
      timingValue: "दुपारी १२:०० ते २:०० वाजता दैनिक",
      levels: [
        { level: "टप्पा १", title: "नवशिक्या (Beginner): शिलाईचा पाया", desc: "शिलाई मशीन हाताळणे, बेसिक टाके, शरीराचे अचूक माप घेणे, कपड्यांचे रेखाचित्र व साध्या कुर्ती व स्कर्टची शिलाई शिकणे.", duration: "१ महिना" },
        { level: "टप्पा २", title: "मध्यम (Intermediate): ब्लाउज आणि सूट प्राविण्य", desc: "विविध प्रकारचे ब्लाउज (कटोरी, प्रिन्सेस कट, पॅडेड ब्लाउज), पंजाबी ड्रेसची कटिंग, अचूक टक्स आणि नाजूक लेस वर्क शिकणे.", duration: "२ महीने" },
        { level: "टप्पा ३", title: "प्रगत (Advanced): डिझायनर ब्लाउज आणि आरी", desc: "लग्नाचे शाही ब्राइडल ब्लाउज, डिझायनर गळे, नाजूक पॅचवर्क, सखोल आरी भरतकाम आणि बुटीक फॅशन शिलाई तंत्र.", duration: "२ महीने" }
      ],
      features: [
        "१००% प्रॅक्टिकल शिलाई मशीन ट्रेनिंग व सराव",
        "व्यावसायिक पॅटर्न मेकिंग आणि अचूक कटिंग सूत्रे",
        "पफ स्लीव्हज, डोरी, पॅच वर्क यासारख्या आधुनिक फॅशन डिझाईन्स",
        "घरगुती बुटीक सुरू करण्यासाठी व्यावसायिक व मार्केटिंग मार्गदर्शन",
        "कोर्स पूर्ण झाल्यावर अकॅडमीचे प्रमाणपत्र (पर्यायी)",
        "यशस्वी घरगुती व्यवसाय सुरू करण्याची उत्तम संधी"
      ]
    },
    whyUs: {
      title: "रोझ पेटल्स बुटीक का निवडावे?",
      subtitle: "अतुलनीय वैयक्तिक लक्ष देऊन डिझाईन्स आणि यशस्वी करिअर घडवणे",
      items: [
        { title: "१००% प्रॅक्टिकल ट्रेनिंग", desc: "कोणतीही निरस थिअरी नाही. पहिल्या दिवसापासूनच थेट कापडावर डिझाईन आणि शिलाई शिकायला मिळते." },
        { title: "अनुभवी शिक्षिका", desc: "अनेक वर्षांचा समृद्ध बुटीक अनुभव असलेल्या चंचल मॅम यांच्याकडून थेट सोप्या मराठीत शिका." },
        { title: "मर्यादित बॅच साईझ", desc: "प्रत्येक विद्यार्थ्यावर पूर्ण लक्ष देता यावे म्हणून आम्ही बॅचमध्ये कमी विद्यार्थी ठेवतो." },
        { title: "बुटीक बिझनेस गाईड", desc: "कपडा खरेदी, शिलाईचे दर ठरवणे आणि स्थानिक ग्राहक मिळवणे याबद्दल मोलाचे मार्गदर्शन." },
        { title: "प्रीमियम स्टिचिंग दर्जा", desc: "कपड्यांची टिकवण आणि फिनिशिंग उत्कृष्ट राहण्यासाठी आम्ही उच्च शिलाई मानके पाळतो." },
        { title: "लवचिक शिकण्याची गती", desc: "प्रत्येक विद्यार्थी स्वतःच्या वेगाने शिकतो. आम्ही तुमच्या कल्पकतेला पूर्ण वेळ देतो." }
      ]
    },
    healing: {
      title: "एस्ट्रो हिंदवी आणि शुभारंभ हीलिंग",
      tag: "समग्र कल्याण आणि अध्यात्मिक मार्गदर्शन",
      subtitle: "तुमची ऊर्जा संतुलित करा आणि जीवनातील अडचणींवर मात करा",
      intro: "चंचल उदय किराड यांच्याद्वारे संचलित, शुभारंभ हीलिंग सेंटर तुम्हाला मानसिक शांतता आणि समृद्धी मिळवून देण्यासाठी कटिबद्ध आहे. आम्ही तुमच्या प्रगतीसाठी प्राचीन अंकशास्त्र आणि ऊर्जा विज्ञानाचा योग्य वापर करतो.",
      ctaConsult: "अध्यात्मिक मार्गदर्शन बुक करा",
      services: [
        { title: "अंकशास्त्र आणि नाव सुधारणा", desc: "करिअर आणि यशासाठी तुमच्या जन्मतारखेनुसार नावाच्या इंग्रजी स्पेलिंगमध्ये अचूक सुधारणा करा." },
        { title: "स्वाक्षरी (Signature) विश्लेषण", desc: "तुमच्या स्वाक्षरीमध्ये सकारात्मक बदल करून आत्मविश्वास आणि यश वाढवा." },
        { title: "चक्र आणि अध्यात्मिक हीलिंग", desc: "शरीरातील ऊर्जा चक्र संतुलित करून नैराश्य, मानसिक ताण आणि शारीरिक थकवा दूर करा." },
        { title: "वास्तू ऊर्जा आणि नातेसंबंध हीलिंग", desc: "घरातील नकारात्मक ऊर्जा नष्ट करणे आणि कौटुंबिक संबंधांमध्ये मधुरता आणणे." },
        { title: "जीवन मार्गदर्शन आणि ताणतणाव मुक्ती", desc: "व्यवसाय, नोकरी आणि वैयक्तिक आयुष्यातील अडथळे दूर करण्यासाठी सोपे व सखोल आध्यात्मिक उपाय." }
      ]
    },
    testimonials: {
      title: "आमचे ग्राहक काय म्हणतात",
      subtitle: "पुण्यात २०० पेक्षा जास्त समाधानी ग्राहक आणि यशस्वी अकॅडमी पदवीधर",
      ratingText: "सत्यापित ग्राहकांच्या पुनरावलोकनांवर आधारित Google रेटिंग ४.५/५ स्टार्स",
      items: [
        { name: "प्रिया शर्मा", role: "बुटीक ग्राहक", text: "माझ्या लग्नाच्या ब्लाउजचे फिटिंग अप्रतिम होते! चंचल मॅमने आरी वर्क डिझाइनचे खूप छान पर्याय दिले. लग्नात सर्वांना तो खूप आवडला." },
        { name: "मीना देशमुख", role: "अकॅडमी पदवीधर", text: "मला शिवणकामाचा काहीच अनुभव नव्हता. ३ महिन्यांत मी एवढी प्रगती केली की आता मी स्वतः घरी शिवणकाम करून चांगली कमाई करते." },
        { name: "स्नेहल पाटील", role: "साडी ग्राहक", text: "मी माझी नऊवारी साडी इकडे शिवून घेतली. अतिशय सुबक आणि वेळेत शिवून मिळाली. नेसायलाही खूप सोपी आहे!" },
        { name: "अंजली जोशी", role: "हीलिंग आणि स्टाइलिंग ग्राहक", text: "मी चंचल मॅम कडून स्वाक्षरी आणि नाव दुरुस्ती करून घेतली. मला मानसिक शांतता तर मिळालीच सोबतच माझ्या व्यवसायात खूप प्रगती झाली." }
      ]
    },
    faq: {
      title: "सतत विचारले जाणारे प्रश्न",
      subtitle: "काही शंका आहेत? आम्ही तुमच्यासाठी महत्त्वाची उत्तरे संकलित केली आहेत.",
      items: [
        { q: "टेलरिंग क्लासेसच्या वेळा काय आहेत?", a: "अकॅडमीची बॅच दररोज दुपारी १२:०० ते २:०० या वेळेत चालते. या वेळेत शिलाईचा सखोल प्रॅक्टिकल सराव घेतला जातो." },
        { q: "क्लासमध्ये शिकण्यासाठी माझ्याकडे शिलाई मशीन असणे आवश्यक आहे का?", a: "नाही, अकॅडमीमध्ये शिकण्यासाठी आम्ही मशीन आणि मसुदा कागद पुरवतो. तुम्हाला फक्त तुमच्या सरावाचे कापड आणावे लागेल." },
        { q: "कोर्स पूर्ण झाल्यावर प्रमाणपत्र मिळते का?", a: "होय, आमचा प्रगत फॅशन डिझायनिंग आणि टेलरिंग कोर्स यशस्वीरित्या पूर्ण केल्यावर अकॅडमीचे प्रमाणपत्र दिले जाते." },
        { q: "बुटीक कपडे शिवण्यासाठी सामान्यतः किती दिवस लागतात?", a: "सामान्य शिलाई कामासाठी ५ ते ७ दिवस लागतात. लग्नाचा हेवी ब्लाउज किंवा आरी वर्कसाठी १० ते १४ दिवसांचा अवधी आवश्यक असतो." },
        { q: "मी इंस्टाग्राम किंवा पिंटरेस्टवरून मला हवी असलेली डिझाईन दाखवू शकते का?", a: "नक्कीच! आम्ही कस्टमाइज्ड डिझाईन्समध्ये पारंगत आहोत. तुम्ही आम्हाला कोणताही फोटो दाखवा, आम्ही तो तुम्हाला अचूक शिवून देऊ." },
        { q: "हीलिंग किंवा अंकशास्त्र सल्ला कसा बुक करावा?", a: "तुम्ही आमच्या वेबसाइटवरील 'अध्यात्मिक मार्गदर्शन' बटणावर क्लिक करून किंवा थेट ९५७९१७५२९६ या नंबरवर कॉल करून अपॉइंटमेंट बुक करू शकता." }
      ]
    },
    contact: {
      title: "आमच्याशी संपर्क साधा",
      subtitle: "पुण्यातील आमच्या बुटीक केंद्रला भेट द्या किंवा आजच अपॉइंटमेंट बुक करा",
      addressLabel: "पत्ता",
      address: "दुकान नंबर ४, गणेश विहार, अवताडवाडी हांडेवाडी, वर्धमान टाऊनशिप, सासाने नगर, हडपसर, पुणे, महाराष्ट्र ४११०२८",
      phoneLabel: "फोन नंबर",
      hoursLabel: "वेळ",
      hoursValue: "दररोज सकाळी ९:०० ते रात्री १०:०० पर्यंत उघडे",
      mapLabel: "आम्हाला गुगल मॅपवर शोधा",
      btnCall: "कॉल करा",
      btnWhatsapp: "व्हाट्सएप चॅट",
      formTitle: "जलद चौकशी पाठवा",
      formName: "पूर्ण नाव",
      formPhone: "मोबाईल नंबर",
      formMessage: "तुम्हाला काय शिलाई करायची आहे किंवा काय शिकायचे आहे?",
      formSubmit: "व्हाट्सएपद्वारे पाठवा",
      formSuccess: "चौकशी तयार! आम्ही संदेश पाठवण्यासाठी व्हाट्सएप उघडत आहोत..."
    },
    footer: {
      desc: "रोझ पेटल्स बुटीक आणि अकॅडमी हे चंचल उदय किराड यांच्या मार्गदर्शनाखाली पुण्यात डिझायनर सिलाई आणि शिवणकाम प्रशिक्षणाचे एक विश्वसनीय नाव आहे.",
      quickLinks: "द्रुत लिंक्स",
      rights: "© २०२६ रोझ पेटल्स बुटीक आणि अकॅडमी. सर्व हक्क राखीव.",
      disclaimer: "अस्ट्रो हिंदवी आणि शुभारंभ हीलिंग सेवा अध्यात्मिक व ऊर्जा उपचारांशी संबंधित आहेत. यांचे परिणाम व्यक्तीच्या श्रद्धेवर व ऊर्जेवर अवलंबून असतात."
    }
  }
};
