import { useState, useEffect } from "react";
import homeBg from "./assets/home.jpg";
import pdLogo from "./assets/pd logo.jpeg";
import {
  Calendar,
  MapPin,
  Phone,
  Mail,
  Star,
  Menu,
  X,
  ArrowLeft,
  Heart,
  Camera,
  Music,
  Utensils,
  Sparkles,
  Globe,
  Lock,
  Trash2,
  Plus,
  Quote,
  Edit3,
} from "lucide-react";
import vivahaMandap from "./assets/vivaha madap.jpg";
import haldi1 from "./assets/haldi 1.jpg";
import eng1 from "./assets/eng1.jpg";
import reception1 from "./assets/reception1.jpg";

export default function PremiumEventOrganizerWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedEventDetail, setSelectedEventDetail] = useState(null);
  const [language, setLanguage] = useState("EN");
  const [isAdmin, setIsAdmin] = useState(false);
  const [featuredImageIdx, setFeaturedImageIdx] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    description: "",
  });

  const translations = {
    EN: {
      home: "Home", events: "Events", services: "Services", gallery: "Gallery", contact: "Contact", back: "Back",
      heroSub: "Premium Traditional Event Organizer",
      heroTitle1: "Crafting Divine",
      heroTitleHighlight: " Kalyanam & Celebrations ",
      heroTitle2: "For Every Occasion",
      heroDesc: "From grand traditional Vivaha to unforgettable celebrations, we create premium event experiences rooted in our culture with elegance and perfection.",
      bookBtn: "Book Your Muhurtham",
      exploreBtn: "View Gallery",
      stats: ["Successful Events", "Years Experience", "Client Satisfaction", "Luxury Venues"],
      sectionEvents: "Our Events", sectionEventsTitle: "Premium Event Collections",
      sectionServices: "Our Services", sectionServicesTitle: "Complete Event Solutions",
      sectionGallery: "Gallery", sectionGalleryTitle: "Captured Divine Moments",
      sectionTestimonials: "Testimonials", sectionTestimonialsTitle: "What Clients Say",
      sectionContact: "Contact Us", sectionContactTitle: "Let’s Plan Your Dream Celebration",
      catAll: "All", catWedding: "Wedding", catHaldi: "Haldi", catSangeeth: "Sangeeth", catEngagement: "Engagement", catReception: "Reception", catBirthday: "Birthday",
      eventsList: [
        { title: "Vivaha Mandapam", desc: "Traditional wedding planning with premium mandap setups, luxury decor, and divine experiences." },
        { title: "Haldi Celebration", desc: "Traditional haldi decor with floral themes and vibrant celebrations." },
        { title: "Sangeeth Night", desc: "Entertainment-filled sangeeth night with lighting, music, and dance performances." },
        { title: "Engagement Ceremony", desc: "Elegant engagement setups designed with modern luxury aesthetics." },
        { title: "Grand Reception",  desc: "Luxury reception event management with stage setup and live entertainment." },
        { title: "Birthday Celebration", desc: "Creative birthday party themes with decorations and entertainment." }
      ],
      viewMore: "View More",
      servicesList: [
        { title: "Luxury Decoration", desc: "Premium quality services designed to make every event memorable and luxurious." },
        { title: "Photography", desc: "Capture every beautiful moment with our professional photography and videography services." },
        { title: "Entertainment & DJ", desc: "Live music, DJ, and cultural performances to keep your guests entertained all night." },
        { title: "Premium Catering", desc: "Delicious traditional and modern cuisines prepared by top-tier chefs for your guests." }
      ],
      testimonialsList: [
        { name: "Rahul & Priya", review: "The wedding planning was absolutely perfect. Every detail was luxurious and beautifully managed." },
        { name: "Arjun Family", review: "Amazing decorations and event coordination. Highly recommended for premium celebrations." },
        { name: "Karthik & Sneha", review: "Our engagement event looked magical. Guests loved every moment." }
      ],
      location: "Itikyala(V), Jagadevpur(M), Siddiper(D), Telangana 502279",
      availability: "Available for Destination Events",
      formName: "Full Name",
      formEmail: "Email Address",
      formPhone: "Phone Number",
      formSelectEvent: "Select Event Type",
      formEventWedding: "Vivaha (Wedding)",
      formEventHaldi: "Haldi",
      formEventSangeeth: "Sangeeth",
      formEventEngagement: "Engagement",
      formEventReception: "Reception",
      formDescribe: "Describe Your Event",
      formSubmit: "Submit Inquiry",
      footerDesc: "Premium Traditional Event Organizer for Vivaha, Haldi, Engagement, Sangeeth & Celebrations.",
      footerRights: "© 2026 ShubhEvents Studio. All Rights Reserved."
    },
    TE: {
      home: "హోమ్", events: "ఈవెంట్స్", services: "సేవలు", gallery: "గ్యాలరీ", contact: "సంప్రదించండి", back: "వెనుకకు",
      heroSub: "ప్రీమియం సాంప్రదాయ ఈవెంట్ ఆర్గనైజర్",
      heroTitle1: "దివ్యమైన",
      heroTitleHighlight: " కళ్యాణం & వేడుకలు ",
      heroTitle2: "ప్రతి సందర్భానికి",
      heroDesc: "సాంప్రదాయ వివాహాల నుండి మరుపురాని వేడుకల వరకు, మేము సంస్కృతి మరియు చక్కదనంతో ప్రీమియం ఈవెంట్ అనుభవాలను సృష్టిస్తాము.",
      bookBtn: "మీ ముహూర్తాన్ని బుక్ చేసుకోండి",
      exploreBtn: "గ్యాలరీ చూడండి",
      stats: ["విజయవంతమైన ఈవెంట్స్", "సంవత్సరాల అనుభవం", "క్లయింట్ సంతృప్తి", "లగ్జరీ వేదికలు"],
      sectionEvents: "మా ఈవెంట్స్", sectionEventsTitle: "ప్రీమియం ఈవెంట్ కలెక్షన్స్",
      sectionServices: "మా సేవలు", sectionServicesTitle: "పూర్తి ఈవెంట్ పరిష్కారాలు",
      sectionGallery: "గ్యాలరీ", sectionGalleryTitle: "బంధించిన దివ్య క్షణాలు",
      sectionTestimonials: "ప్రశంసలు", sectionTestimonialsTitle: "క్లయింట్లు ఏమంటున్నారు",
      sectionContact: "మమ్మల్ని సంప్రదించండి", sectionContactTitle: "మీ కలల వేడుకను ప్లాన్ చేద్దాం",
      catAll: "అన్నీ", catWedding: "వివాహం", catHaldi: "పసుపు", catSangeeth: "సంగీత్", catEngagement: "నిశ్చితార్థం", catReception: "రిసెప్షన్", catBirthday: "పుట్టినరోజు",
      eventsList: [
        { title: "రాజకళ్యాణం", desc: "ప్రీమియం మండప సెటప్‌లు, లగ్జరీ డెకర్ మరియు దివ్య అనుభవాలతో సాంప్రదాయ వివాహ ప్రణాళిక." },
        { title: "హల్దీ వేడుక", desc: "పూల థీమ్‌లు మరియు ఉత్సాహభరితమైన వేడుకలతో సాంప్రదాయ పసుపు డెకర్." },
        { title: "సంగీత్ రాత్రి", desc: "లైటింగ్, సంగీతం మరియు నృత్య ప్రదర్శనలతో వినోదభరితమైన సంగీత్ రాత్రి." },
        { title: "ప్రీమియం నిశ్చితార్థం", desc: "ఆధునిక లగ్జరీ సౌందర్యంతో రూపొందించబడిన సొగసైన నిశ్చితార్థ సెటప్‌లు." },
        { title: "గ్రాండ్ రిసెప్షన్", desc: "స్టేజ్ సెటప్ మరియు లైవ్ ఎంటర్‌టైన్‌మెంట్‌తో లగ్జరీ రిసెప్షన్ ఈవెంట్ మేనేజ్‌మెంట్." },
        { title: "పుట్టినరోజు వేడుక", desc: "అలంకరణలు మరియు వినోదంతో సృజనాత్మక పుట్టినరోజు పార్టీ థీమ్‌లు." }
      ],
      viewMore: "మరింత చూడండి",
      servicesList: [
        { title: "లగ్జరీ అలంకరణ", desc: "ప్రతి ఈవెంట్‌ను మరుపురానిదిగా మరియు విలాసవంతమైనదిగా చేయడానికి ప్రీమియం నాణ్యత సేవలు." },
        { title: "ఫోటోగ్రఫీ", desc: "మా వృత్తిపరమైన ఫోటోగ్రఫీ మరియు వీడియోగ్రఫీ సేవలతో ప్రతి అందమైన క్షణాన్ని బంధించండి." },
        { title: "వినోదం & DJ", desc: "మీ అతిథులను రాత్రంతా అలరించడానికి లైవ్ మ్యూజిక్, DJ మరియు సాంస్కృతిక ప్రదర్శనలు." },
        { title: "ప్రీమియం క్యాటరింగ్", desc: "మీ అతిథుల కోసం అగ్రశ్రేణి చెఫ్‌లచే తయారు చేయబడిన రుచికరమైన సాంప్రదాయ మరియు ఆధునిక వంటకాలు." }
      ],
      testimonialsList: [
        { name: "రాహుల్ & ప్రియ", review: "వివాహ ప్రణాళిక ఖచ్చితంగా ఉంది. ప్రతి వివరాలు విలాసవంతమైనవి మరియు అందంగా నిర్వహించబడ్డాయి." },
        { name: "అర్జున్ కుటుంబం", review: "అద్భుతమైన అలంకరణలు మరియు ఈవెంట్ కోఆర్డినేషన్. ప్రీమియం వేడుకల కోసం సిఫార్సు చేయబడింది." },
        { name: "కార్తీక్ & స్నేహ", review: "మా నిశ్చితార్థం అద్భుతంగా అనిపించింది. అతిథులు ప్రతి క్షణాన్ని ఇష్టపడ్డారు." }
      ],
      location: "ఇటిక్యాల (గ్రామం), జగదేవ్‌పూర్ (మండలం), సిద్ధిపేట (జిల్లా), తెలంగాణ - 502279",
      availability: "డెస్టినేషన్ ఈవెంట్స్ కోసం అందుబాటులో ఉంది",
      formName: "పూర్తి పేరు",
      formEmail: "ఇమెయిల్ చిరునామా",
      formPhone: "ఫోన్ నంబర్",
      formSelectEvent: "ఈవెంట్ రకాన్ని ఎంచుకోండి",
      formEventWedding: "వివాహం",
      formEventHaldi: "పసుపు",
      formEventSangeeth: "సంగీత్",
      formEventEngagement: "నిశ్చితార్థం",
      formEventReception: "రిసెప్షన్",
      formDescribe: "మీ ఈవెంట్‌ను వివరించండి",
      formSubmit: "విచారణ సమర్పించండి",
      footerDesc: "వివాహం, పసుపు, నిశ్చితార్థం, సంగీత్ & వేడుకల కోసం ప్రీమియం సాంప్రదాయ ఈవెంట్ ఆర్గనైజర్.",
      footerRights: "© 2026 ShubhEvents Studio. సర్వ హక్కులు ప్రత్యేకించబడినవి."
    },
    HI: {
      home: "होम", events: "आयोजन", services: "सेवाएं", gallery: "गैलरी", contact: "संपर्क", back: "वापस",
      heroSub: "प्रीमियम पारंपरिक इवेंट ऑर्गनाइज़र",
      heroTitle1: "भव्य",
      heroTitleHighlight: " विवाह और समारोह ",
      heroTitle2: "हर अवसर के लिए",
      heroDesc: "पारंपरिक विवाह से लेकर अविस्मरणीय समारोहों तक, हम लालित्य और पूर्णता के साथ प्रीमियम इवेंट अनुभव बनाते हैं।",
      bookBtn: "अपना मुहूर्त बुक करें",
      exploreBtn: "गैलरी देखें",
      stats: ["सफल आयोजन", "वर्षों का अनुभव", "ग्राहक संतुष्टि", "लक्जरी स्थान"],
      sectionEvents: "हमारे आयोजन", sectionEventsTitle: "प्रीमियम इवेंट कलेक्शंस",
      sectionServices: "हमारी सेवाएं", sectionServicesTitle: "संपूर्ण इवेंट समाधान",
      sectionGallery: "गैलरी", sectionGalleryTitle: "कैप्चर किए गए दिव्य पल",
      sectionTestimonials: "प्रशंसापत्र", sectionTestimonialsTitle: "ग्राहक क्या कहते हैं",
      sectionContact: "संपर्क करें", sectionContactTitle: "आइए आपके सपनों के जश्न की योजना बनाएं",
      catAll: "सभी", catWedding: "विवाह", catHaldi: "हल्दी", catSangeeth: "संगीत", catEngagement: "सगाई", catReception: "रिसेप्शन", catBirthday: "जन्मदिन",
      eventsList: [
        { title: "शाही विवाह", desc: "प्रीमियम मंडप सेटअप, लक्जरी सजावट और दिव्य अनुभवों के साथ पारंपरिक विवाह योजना।" },
        { title: "हल्दी समारोह", desc: "पुष्प विषयों और जीवंत समारोहों के साथ पारंपरिक हल्दी सजावट।" },
        { title: "संगीत की रात", desc: "प्रकाश व्यवस्था, संगीत और नृत्य प्रदर्शन के साथ मनोरंजन से भरी संगीत रात।" },
        { title: "प्रीमियम सगाई", desc: "आधुनिक लक्जरी सौंदर्यशास्त्र के साथ डिज़ाइन किए गए सुरुचिपूर्ण सगाई सेटअप।" },
        { title: "ग्रैंड रिसेप्शन", desc: "मंच सेटअप और लाइव मनोरंजन के साथ लक्जरी रिसेप्शन इवेंट प्रबंधन।" },
        { title: "जन्मदिन समारोह",  desc: "सजावट और मनोरंजन के साथ रचनात्मक जन्मदिन पार्टी थीम।" }
      ],
      viewMore: "और देखें",
      servicesList: [
        { title: "लक्जरी सजावट", desc: "हर घटना को यादगार और शानदार बनाने के लिए डिज़ाइन की गई प्रीमियम गुणवत्ता सेवाएँ।" },
        { title: "फोटोग्राफी", desc: "हमारी पेशेवर फोटोग्राफी और वीडियोग्राफी सेवाओं के साथ हर खूबसूरत पल को कैद करें।" },
        { title: "मनोरंजन और डीजे", desc: "पूरी रात आपके मेहमानों का मनोरंजन करने के लिए लाइव संगीत, डीजे और सांस्कृतिक प्रदर्शन।" },
        { title: "प्रीमियम कैटरिंग", desc: "आपके मेहमानों के लिए शीर्ष रसोइयों द्वारा तैयार स्वादिष्ट पारंपरिक और आधुनिक व्यंजन।" }
      ],
      testimonialsList: [
        { name: "राहुल और प्रिया", review: "शादी की योजना बिल्कुल सही थी। हर विवरण शानदार और खूबसूरती से प्रबंधित किया गया था।" },
        { name: "अर्जुन परिवार", review: "अद्भुत सजावट और इवेंट समन्वय। प्रीमियम समारोहों के लिए अत्यधिक अनुशंसित।" },
        { name: "कार्तिक और स्नेहा", review: "हमारा सगाई समारोह जादुई लग रहा था। मेहमानों को हर पल पसंद आया।" }
      ],
      location: "इतिक्याला (गांव), जगदेवपुर (मंडल), सिद्धिपेट (जिला), तेलंगाना - 502279",
      availability: "डेस्टिनेशन इवेंट्स के लिए उपलब्ध",
      formName: "पूरा नाम",
      formEmail: "ईमेल पता",
      formPhone: "फोन नंबर",
      formSelectEvent: "इवेंट का प्रकार चुनें",
      formEventWedding: "विवाह",
      formEventHaldi: "हल्दी",
      formEventSangeeth: "संगीत",
      formEventEngagement: "सगाई",
      formEventReception: "रिसेप्शन",
      formDescribe: "अपने इवेंट का वर्णन करें",
      formSubmit: "पूछताछ सबमिट करें",
      footerDesc: "विवाह, हल्दी, सगाई, संगीत और समारोहों के लिए प्रीमियम पारंपरिक इवेंट ऑर्गनाइज़र।",
      footerRights: "© 2026 Pramod Event Decors. सर्वाधिकार सुरक्षित।"
    }
  };

  const t = translations[language];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevents the page from refreshing
    
    const message = `*New Event Inquiry 🌟*

*Name:* ${formData.name}
*Email:* ${formData.email || 'Not provided'}
*Phone:* ${formData.phone}
*Event Type:* ${formData.eventType}

*Details:*
${formData.description}`;

    const whatsappUrl = `https://wa.me/919676850606?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    
    // Clear the form after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      eventType: "",
      description: "",
    });
  };

  const events = [
    {
      title: t.eventsList[0].title,
      categoryKey: "Wedding",
      categoryDisplay: t.catWedding,
      price: t.eventsList[0].price,
      images: [
        vivahaMandap,
        eng1,
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop",
      ],
      description: t.eventsList[0].desc,
    },
    {
      title: t.eventsList[1].title,
      categoryKey: "Haldi",
      categoryDisplay: t.catHaldi,
      price: t.eventsList[1].price,
      images: [
        haldi1,
        "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=800&auto=format&fit=crop",
      ],
      description: t.eventsList[1].desc,
    },
    {
      title: t.eventsList[2].title,
      categoryKey: "Sangeeth",
      categoryDisplay: t.catSangeeth,
      price: t.eventsList[2].price,
      images: [
        "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?q=80&w=800&auto=format&fit=crop",
      ],
      description: t.eventsList[2].desc,
    },
    {
      title: t.eventsList[3].title,
      categoryKey: "Engagement",
      categoryDisplay: t.catEngagement,
      price: t.eventsList[3].price,
      images: [
        eng1,
        "https://images.unsplash.com/photo-1544465544-1b71aee9fd46?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=800&auto=format&fit=crop",
      ],
      description: t.eventsList[3].desc,
    },
    {
      title: t.eventsList[4].title,
      categoryKey: "Reception",
      categoryDisplay: t.catReception,
      price: t.eventsList[4].price,
      images: [
        reception1,
        "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=800&auto=format&fit=crop",
      ],
      description: t.eventsList[4].desc,
    },
    {
      title: t.eventsList[5].title,
      categoryKey: "Birthday",
      categoryDisplay: t.catBirthday,
      price: t.eventsList[5].price,
      images: [
        "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1563294860076-26fc54041b6f?q=80&w=800&auto=format&fit=crop",
      ],
      description: t.eventsList[5].desc,
    },
  ];

  const testimonials = t.testimonialsList;

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith("#event-")) {
        const key = hash.replace("#event-", "");
        const event = events.find((e) => e.categoryKey === key);
        if (event) {
          setSelectedEventDetail(event);
          setFeaturedImageIdx(0);
          window.scrollTo(0, 0);
        }
      } else {
        setSelectedEventDetail(null);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [language]);

  if (selectedEventDetail) {
    return (
      <div className="bg-[#090909] text-white min-h-screen overflow-x-hidden font-sans scroll-smooth">
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
            <img 
              src={pdLogo} 
              alt="PD Events Logo" 
              className="h-8 md:h-12 w-auto cursor-pointer rounded"
              onClick={() => window.location.hash = ""}
            />
            <button
              onClick={() => {
                if (window.history.length > 1) {
                  window.history.back();
                } else {
                  window.location.hash = "";
                }
              }}
              className="text-[#D4AF37] border border-[#D4AF37]/50 px-5 py-2 rounded-full hover:bg-[#D4AF37] hover:text-black transition flex items-center gap-2"
            >
            <ArrowLeft size={18} /> {t.back}
            </button>
          </div>
        </nav>

        <section className="pt-24 md:pt-32 pb-8 md:pb-12 px-4 md:px-16 max-w-7xl mx-auto text-center relative group">
          {isAdmin && (
            <div className="absolute top-28 right-0 md:right-8 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
              <button
                onClick={() => alert("Backend integration required to edit event title, description, and pricing.")}
                className="bg-black/80 border border-white/10 hover:bg-[#D4AF37] hover:text-black p-3.5 rounded-full text-white backdrop-blur-sm shadow-lg transition"
                title="Edit Event Content"
              >
                <Edit3 size={20} />
              </button>
              <button
                onClick={() => alert("Backend integration required to delete this entire event.")}
                className="bg-red-600/80 hover:bg-red-600 p-3.5 rounded-full text-white backdrop-blur-sm shadow-lg transition"
                title="Delete Event Package"
              >
                <Trash2 size={20} />
              </button>
            </div>
          )}

          <p className="uppercase tracking-[6px] text-[#D4AF37] mb-4 font-semibold">
            {selectedEventDetail.categoryDisplay}
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            {selectedEventDetail.title}
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-base md:text-lg leading-relaxed mb-6">
            {selectedEventDetail.description}
          </p>
          <p className="text-[#D4AF37] font-bold text-xl inline-block border border-[#D4AF37]/30 px-6 py-3 rounded-full bg-[#D4AF37]/5">
            {selectedEventDetail.price}
          </p>
        </section>

        <section className="pb-16 md:pb-24 px-4 md:px-16 max-w-7xl mx-auto">
          {/* Featured Large Image */}
          <div className="relative w-full h-[40vh] md:h-[60vh] lg:h-[70vh] rounded-3xl md:rounded-[40px] overflow-hidden shadow-2xl mb-4 md:mb-6 group border border-white/10">
            <img 
              src={selectedEventDetail.images[featuredImageIdx]} 
              alt={selectedEventDetail.title} 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
            />
            {isAdmin && (
              <button
                onClick={() => alert("Backend integration required to delete image.")}
                className="absolute top-6 right-6 bg-red-600/80 hover:bg-red-600 p-4 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm shadow-lg"
                title="Remove Image"
              >
                <Trash2 size={24} />
              </button>
            )}
          </div>

          {/* Thumbnails Row */}
          <div className="flex gap-3 md:gap-4 overflow-x-auto pb-6 hide-scrollbar justify-start md:justify-center">
            {selectedEventDetail.images.map((img, idx) => (
              <div 
                key={idx} 
                onClick={() => setFeaturedImageIdx(idx)}
                className={`relative flex-shrink-0 w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-2xl overflow-hidden cursor-pointer border-2 transition-all duration-300 ${featuredImageIdx === idx ? 'border-[#D4AF37] scale-105 shadow-[0_0_15px_rgba(212,175,55,0.4)]' : 'border-transparent opacity-60 hover:opacity-100 hover:scale-105'}`}
              >
                <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
              </div>
            ))}
            {/* Admin Upload Thumbnail */}
            {isAdmin && (
              <div 
                onClick={() => alert("Backend integration required to upload new images.")}
                className="flex-shrink-0 w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 flex flex-col items-center justify-center border-2 border-dashed border-[#D4AF37]/50 rounded-2xl hover:bg-[#D4AF37]/10 transition duration-300 cursor-pointer shadow-lg"
              >
                <Plus size={24} className="text-[#D4AF37] mb-1" />
                <span className="text-[#D4AF37] text-xs font-medium">Add</span>
              </div>
            )}
          </div>

          <div className="mt-8 md:mt-12 text-center">
            <button 
               onClick={() => {
                 const eventTypeMap = {
                   "Wedding": "Vivaha (Wedding)",
                   "Haldi": "Haldi",
                   "Sangeeth": "Sangeeth",
                   "Engagement": "Engagement",
                   "Reception": "Reception",
                   "Birthday": "Birthday"
                 };
                 setFormData(prev => ({
                   ...prev,
                   eventType: eventTypeMap[selectedEventDetail.categoryKey] || "",
                   description: `I am interested in the ${selectedEventDetail.title} package.\n\nPackage Details: ${selectedEventDetail.description}\nPrice: ${selectedEventDetail.price}\n\nPlease contact me with more information.`
                 }));
                 window.location.hash = "contact";
                 setTimeout(() => { document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }, 100);
               }}
               className="bg-[#D4AF37] text-black px-8 py-3 md:px-10 md:py-4 rounded-full font-bold hover:scale-105 transition duration-300 shadow-[0_0_20px_rgba(212,175,55,0.4)]"
            >
              {t.bookBtn}
            </button>
          </div>
        </section>

        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/919676850606"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-[100] bg-[#25D366] text-white p-3.5 rounded-full shadow-lg shadow-black/50 hover:scale-110 transition-transform duration-300 flex items-center justify-center"
          aria-label="Chat on WhatsApp"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
          </svg>
        </a>
      </div>
    );
  }

  return (
    <div className="bg-[#090909] text-white min-h-screen overflow-x-hidden font-sans scroll-smooth">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
          <div>
            <img src={pdLogo} alt="PD Events Logo" className="h-8 md:h-12 w-auto rounded" />
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#home" className="hover:text-[#D4AF37] transition">
              {t.home}
            </a>
            <a href="#events" className="hover:text-[#D4AF37] transition">
              {t.events}
            </a>
            <a href="#services" className="hover:text-[#D4AF37] transition">
              {t.services}
            </a>
            <a href="#gallery" className="hover:text-[#D4AF37] transition">
              {t.gallery}
            </a>
            <a href="#contact" className="hover:text-[#D4AF37] transition">
              {t.contact}
            </a>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 bg-black/50 border border-[#D4AF37]/30 rounded-full px-3 py-1">
              <Globe size={14} className="text-[#D4AF37]" />
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="bg-transparent text-[#D4AF37] text-sm outline-none cursor-pointer appearance-none pl-1"
              >
                <option value="EN" className="bg-black">EN</option>
                <option value="TE" className="bg-black">TE</option>
                <option value="HI" className="bg-black">HI</option>
              </select>
            </div>
            
            <button
              className="md:hidden text-[#D4AF37]"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-black border-t border-white/10 px-6 py-6 flex flex-col gap-5 text-sm">
            <a href="#home" onClick={() => setMenuOpen(false)}>{t.home}</a>
            <a href="#events" onClick={() => setMenuOpen(false)}>{t.events}</a>
            <a href="#services" onClick={() => setMenuOpen(false)}>{t.services}</a>
            <a href="#gallery" onClick={() => setMenuOpen(false)}>{t.gallery}</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>{t.contact}</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center text-center px-6 overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] hover:scale-105"
          style={{ backgroundImage: `url(${homeBg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-[#090909]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#090909_120%)]"></div>
        </div>

        <div className="relative z-10 max-w-5xl flex flex-col items-center mt-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="hidden md:block h-[1px] w-12 bg-gradient-to-r from-transparent to-[#D4AF37]"></div>
            <Sparkles className="text-[#D4AF37]" size={18} />
            <p className="uppercase tracking-[4px] md:tracking-[8px] text-[#D4AF37] text-xs md:text-sm font-semibold text-center">
              {t.heroSub}
            </p>
            <Sparkles className="text-[#D4AF37]" size={18} />
            <div className="hidden md:block h-[1px] w-12 bg-gradient-to-l from-transparent to-[#D4AF37]"></div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-8xl font-black leading-tight mb-6 md:mb-8 tracking-tight">
            {t.heroTitle1}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FFF1B8] to-[#D4AF37] drop-shadow-2xl pb-2">
              {t.heroTitleHighlight}
            </span>
            {t.heroTitle2}
          </h1>

          <p className="text-base md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10 md:mb-12 font-light">
            {t.heroDesc}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center w-full sm:w-auto">
            <button 
              onClick={() => document.getElementById("events")?.scrollIntoView({ behavior: "smooth" })}
              className="group relative px-8 py-3 md:px-10 md:py-4 bg-[#D4AF37] text-black rounded-full font-bold overflow-hidden shadow-[0_0_40px_rgba(212,175,55,0.3)] hover:shadow-[0_0_60px_rgba(212,175,55,0.5)] transition-all duration-300"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {t.bookBtn}
              </span>
              <div className="absolute inset-0 h-full w-0 bg-white/40 group-hover:w-full transition-all duration-500 ease-out skew-x-12 -ml-4"></div>
            </button>

            <button 
              onClick={() => document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-3 md:px-10 md:py-4 rounded-full font-semibold border border-[#D4AF37]/50 text-[#D4AF37] hover:bg-[#D4AF37]/10 backdrop-blur-sm transition-all duration-300"
            >
              {t.exploreBtn}
            </button>
          </div>
        </div>

        
      </section>

      {/* Stats */}
      <section className="py-12 md:py-16 px-4 md:px-6 bg-[#111111] border-y border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
          {[
            ["500+", t.stats[0]],
            ["10+", t.stats[1]],
            ["100%", t.stats[2]],
            ["50+", t.stats[3]],
          ].map((item, index) => (
            <div
              key={index}
              className="bg-black/40 rounded-2xl md:rounded-3xl p-4 md:p-8 border border-white/10"
            >
              <h2 className="text-2xl md:text-4xl font-bold text-[#D4AF37] mb-1 md:mb-2">
                {item[0]}
              </h2>
              <p className="text-gray-400 text-xs md:text-sm lg:text-base">{item[1]}</p>
            </div>
          ))}

          {/* Admin Add New Event Package Card */}
          {isAdmin && (
            <div 
              onClick={() => alert("Backend integration required to create a new event package and write its content.")}
              className="flex flex-col items-center justify-center border-2 border-dashed border-[#D4AF37]/50 rounded-[30px] min-h-[420px] hover:bg-[#D4AF37]/10 transition duration-300 cursor-pointer shadow-lg"
            >
              <Plus size={40} className="text-[#D4AF37] mb-3" />
              <span className="text-[#D4AF37] font-medium tracking-wide">Add New Event Package</span>
            </div>
          )}
        </div>
      </section>

      {/* Events */}
      <section id="events" className="py-16 md:py-24 px-4 md:px-16">
        <div className="text-center mb-10 md:mb-14">
          <p className="uppercase tracking-[4px] md:tracking-[6px] text-[#D4AF37] mb-2 md:mb-4 text-sm font-semibold">
            {t.sectionEvents}
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold">
            {t.sectionEventsTitle}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {events.map((event, index) => (
            <div
              key={index}
              onClick={() => {
                window.location.hash = `event-${event.categoryKey}`;
              }}
              className="cursor-pointer bg-[#131313] rounded-[30px] overflow-hidden border border-white/10 hover:border-[#D4AF37]/40 hover:-translate-y-3 transition duration-500 shadow-2xl"
            >
              <div className="h-56 md:h-72 overflow-hidden relative">
                <img src={event.images[0]} alt={event.title} className="w-full h-full object-cover hover:scale-110 transition duration-700" />
                <div className="absolute inset-0 bg-black/20 hover:bg-transparent transition duration-500"></div>
              </div>

              <div className="px-5 py-5 md:px-8 md:py-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-[#D4AF37] text-sm uppercase tracking-[3px] font-semibold">
                    {event.categoryDisplay}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold mb-2">{event.title}</h3>

                <div className="flex items-center justify-between mt-3 md:mt-4">
                  <p className="text-gray-400 font-medium text-sm md:text-base">
                    {event.price}
                  </p>
                  <button className="text-[#D4AF37] hover:text-white transition duration-300 font-medium flex items-center gap-2">
                    {t.viewMore} →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="py-16 md:py-24 px-4 md:px-16 bg-[#111111]"
      >
        <div className="text-center mb-10 md:mb-16">
          <p className="uppercase tracking-[4px] md:tracking-[6px] text-[#D4AF37] mb-2 md:mb-4 text-sm font-semibold">
            {t.sectionServices}
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold">
            {t.sectionServicesTitle}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {[
            {
              ...t.servicesList[0],
              icon: <Sparkles size={40} />,
            },
            {
              ...t.servicesList[1],
              icon: <Camera size={40} />,
            },
            {
              ...t.servicesList[2],
              icon: <Music size={40} />,
            },
            {
              ...t.servicesList[3],
              icon: <Utensils size={40} />,
            },
          ].map((service, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] border border-white/10 rounded-[30px] md:rounded-[40px] p-6 md:p-10 text-center hover:border-[#D4AF37]/50 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_10px_40px_rgba(212,175,55,0.15)] overflow-hidden"
            >
              {/* Decorative background glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-[#D4AF37]/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="mx-auto w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#D4AF37]/20 to-transparent border border-[#D4AF37]/30 mb-6 md:mb-8 group-hover:scale-110 group-hover:bg-[#D4AF37]/30 transition-all duration-500 text-[#D4AF37] shadow-lg">
                  {service.icon}
                </div>

                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white tracking-wide">
                  {service.title}
                </h3>

                <p className="text-gray-400 leading-relaxed font-light text-sm md:text-base">
                  {service.desc}
                </p>
              </div>

              {/* Admin Overlay */}
              {isAdmin && (
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity z-20">
                  <button
                    onClick={() => alert("Backend integration required to edit service.")}
                    className="bg-black/80 border border-white/10 hover:bg-[#D4AF37] hover:text-black p-2.5 rounded-full text-white backdrop-blur-sm shadow-lg transition"
                    title="Edit Service"
                  >
                    <Edit3 size={16} />
                  </button>
                  <button
                    onClick={() => alert("Backend integration required to delete service.")}
                    className="bg-red-600/80 hover:bg-red-600 p-2.5 rounded-full text-white backdrop-blur-sm shadow-lg transition"
                    title="Remove Service"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              )}
            </div>
          ))}

          {/* Admin Add Service Card */}
          {isAdmin && (
            <div 
              onClick={() => alert("Backend integration required to add a new service.")}
              className="flex flex-col items-center justify-center border-2 border-dashed border-[#D4AF37]/50 rounded-[40px] p-10 hover:bg-[#D4AF37]/10 transition duration-300 cursor-pointer shadow-lg min-h-[320px]"
            >
              <Plus size={40} className="text-[#D4AF37] mb-3" />
              <span className="text-[#D4AF37] font-medium tracking-wide">Add New Service</span>
            </div>
          )}
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-16 md:py-24 px-4 md:px-16">
        <div className="text-center mb-10 md:mb-16">
          <p className="uppercase tracking-[4px] md:tracking-[6px] text-[#D4AF37] mb-2 md:mb-4 text-sm font-semibold">
            {t.sectionGallery}
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold">
            {t.sectionGalleryTitle}
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 max-w-7xl mx-auto">
          {[
            eng1,
            haldi1,
            reception1,
            "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=800&auto=format&fit=crop",
          ].map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl md:rounded-[30px] h-48 md:h-72 border border-white/10 group shadow-lg"
            >
              <img
                src={image}
                alt="Gallery"
                className="w-full h-full object-cover hover:scale-110 transition duration-700"
              />
              
              {/* Admin Remove Button */}
              {isAdmin && (
                <button
                  onClick={() => alert("Backend integration required to delete image.")}
                  className="absolute top-4 right-4 bg-red-600/80 hover:bg-red-600 p-3 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm shadow-lg"
                  title="Remove Image"
                >
                  <Trash2 size={20} />
                </button>
              )}
            </div>
          ))}

          {/* Admin Upload Card */}
          {isAdmin && (
            <div 
              onClick={() => alert("Backend integration required to upload new gallery images.")}
              className="flex flex-col items-center justify-center border-2 border-dashed border-[#D4AF37]/50 rounded-[30px] h-72 hover:bg-[#D4AF37]/10 transition duration-300 cursor-pointer shadow-lg"
            >
              <Plus size={40} className="text-[#D4AF37] mb-3" />
              <span className="text-[#D4AF37] font-medium tracking-wide">Add to Gallery</span>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 px-4 md:px-16 bg-[#111111]">
        <div className="text-center mb-10 md:mb-16">
          <p className="uppercase tracking-[4px] md:tracking-[6px] text-[#D4AF37] mb-2 md:mb-4 text-sm font-semibold">
            {t.sectionTestimonials}
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold">
            {t.sectionTestimonialsTitle}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="relative group bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] border border-white/10 hover:border-[#D4AF37]/50 rounded-[30px] md:rounded-[40px] p-6 md:p-12 transition-all duration-500 shadow-2xl hover:shadow-[0_10px_40px_rgba(212,175,55,0.15)]"
            >
              <Quote className="absolute top-6 right-6 md:top-8 md:right-8 text-[#D4AF37] opacity-10 transition-opacity duration-500 group-hover:opacity-20 w-12 h-12 md:w-20 md:h-20" />

              <div className="flex gap-1 text-[#D4AF37] mb-4 md:mb-8 relative z-10">
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
              </div>

              <p className="text-gray-300 leading-relaxed mb-6 md:mb-8 text-base md:text-lg font-light italic relative z-10">
                "{item.review}"
              </p>

              <div className="flex items-center gap-4 relative z-10">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#8a7222] flex items-center justify-center text-black font-bold text-lg md:text-xl shadow-lg">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-bold text-white text-base md:text-lg tracking-wide">{item.name}</h3>
                  <span className="text-[#D4AF37] text-sm">Verified Client</span>
                </div>
              </div>

              {/* Admin Overlay */}
              {isAdmin && (
                <div className="absolute top-6 right-6 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity z-20">
                  <button
                    onClick={() => alert("Backend integration required to edit testimonial.")}
                    className="bg-black/80 border border-white/10 hover:bg-[#D4AF37] hover:text-black p-3 rounded-full text-white backdrop-blur-sm shadow-lg transition"
                    title="Edit Testimonial"
                  >
                    <Edit3 size={18} />
                  </button>
                  <button
                    onClick={() => alert("Backend integration required to delete testimonial.")}
                    className="bg-red-600/80 hover:bg-red-600 p-3 rounded-full text-white backdrop-blur-sm shadow-lg transition"
                    title="Remove Testimonial"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              )}
            </div>
          ))}

          {/* Admin Add Testimonial Card */}
          {isAdmin && (
            <div 
              onClick={() => alert("Backend integration required to add a new testimonial.")}
              className="flex flex-col items-center justify-center border-2 border-dashed border-[#D4AF37]/50 rounded-[40px] p-12 hover:bg-[#D4AF37]/10 transition duration-300 cursor-pointer shadow-lg min-h-[320px]"
            >
              <Plus size={40} className="text-[#D4AF37] mb-3" />
              <span className="text-[#D4AF37] font-medium tracking-wide">Add New Testimonial</span>
            </div>
          )}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 md:py-24 px-4 md:px-16">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div>
            <p className="uppercase tracking-[4px] md:tracking-[6px] text-[#D4AF37] mb-2 md:mb-4 text-sm font-semibold">
              {t.sectionContact}
            </p>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 leading-tight">
              {t.sectionContactTitle}
            </h2>

            <div className="space-y-4 md:space-y-6 text-gray-300 text-sm md:text-base">
              <div className="flex items-center gap-4">
                <Phone className="text-[#D4AF37]" />
                <span>+91 9676850606</span>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="text-[#D4AF37]" />
                <span>contact@royalevents.com</span>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="text-[#D4AF37]" />
                <span>{t.location}</span>
              </div>

              <div className="flex items-center gap-4">
                <Calendar className="text-[#D4AF37]" />
                <span>{t.availability}</span>
              </div>
            </div>
          </div>

          <div className="bg-[#111111] border border-white/10 rounded-3xl md:rounded-[40px] p-6 md:p-10 shadow-2xl">
            <form onSubmit={handleFormSubmit} className="grid gap-4 md:gap-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder={t.formName}
                className="bg-black/40 border border-white/10 rounded-full px-5 md:px-6 py-3 md:py-4 outline-none focus:border-[#D4AF37] text-white text-sm md:text-base"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                pattern="^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$"
                title="Please enter a valid email address (e.g., name@example.com)"
                placeholder={t.formEmail}
                className="bg-black/40 border border-white/10 rounded-full px-5 md:px-6 py-3 md:py-4 outline-none focus:border-[#D4AF37] text-white text-sm md:text-base"
              />

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                pattern="[6-9][0-9]{9}"
                maxLength="10"
                title="Please enter a valid 10-digit phone number starting with 6-9"
                placeholder={t.formPhone}
                className="bg-black/40 border border-white/10 rounded-full px-5 md:px-6 py-3 md:py-4 outline-none focus:border-[#D4AF37] text-white text-sm md:text-base"
              />

              <select 
                name="eventType"
                value={formData.eventType}
                onChange={handleInputChange}
                required
                className="bg-black/40 border border-white/10 rounded-full px-5 md:px-6 py-3 md:py-4 outline-none focus:border-[#D4AF37] text-gray-400 text-sm md:text-base"
              >
                <option value="" disabled className="bg-black text-white">{t.formSelectEvent}</option>
                <option value="Vivaha (Wedding)" className="bg-black text-white">{t.formEventWedding}</option>
                <option value="Haldi" className="bg-black text-white">{t.formEventHaldi}</option>
                <option value="Sangeeth" className="bg-black text-white">{t.formEventSangeeth}</option>
                <option value="Engagement" className="bg-black text-white">{t.formEventEngagement}</option>
                <option value="Reception" className="bg-black text-white">{t.formEventReception}</option>
                <option value="Birthday" className="bg-black text-white">{t.catBirthday}</option>
              </select>

              <textarea
                rows="5"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
                placeholder={t.formDescribe}
                className="bg-black/40 border border-white/10 rounded-3xl px-5 md:px-6 py-4 outline-none focus:border-[#D4AF37] text-white text-sm md:text-base"
              ></textarea>

              <button type="submit" className="bg-[#D4AF37] text-black py-3 md:py-4 rounded-full font-bold hover:scale-105 transition duration-300 text-sm md:text-base">
                {t.formSubmit}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 md:py-10 text-center text-gray-500">
        <div className="flex justify-center mb-3 md:mb-4">
          <img src={pdLogo} alt="PD Events Logo" className="h-10 md:h-16 w-auto rounded" />
        </div>

        <p className="mb-4 text-xs md:text-sm">
          {t.footerDesc}
        </p>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-5 text-xs md:text-sm">
          <a href="#home" className="hover:text-[#D4AF37]">
            {t.home}
          </a>
          <a href="#events" className="hover:text-[#D4AF37]">
            {t.events}
          </a>
          <a href="#services" className="hover:text-[#D4AF37]">
            {t.services}
          </a>
          <a href="#gallery" className="hover:text-[#D4AF37]">
            {t.gallery}
          </a>
        </div>

        <div className="flex justify-center items-center gap-4 text-xs md:text-sm mt-6 md:mt-8">
          <p>{t.footerRights}</p>
          <button 
            onClick={() => {
              if (isAdmin) setIsAdmin(false);
              else {
                if (prompt("Enter Admin Password:") === "admin123") setIsAdmin(true);
                else alert("Incorrect password!");
              }
            }} 
            className="text-gray-700 hover:text-[#D4AF37] flex items-center gap-1 transition"
          >
            <Lock size={12}/> {isAdmin ? "Logout" : "Admin"}
          </button>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919676850606"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[100] bg-[#25D366] text-white p-3 md:p-3.5 rounded-full shadow-lg shadow-black/50 hover:scale-110 transition-transform duration-300 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 md:w-7 md:h-7">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
        </svg>
      </a>
    </div>
  );
}
