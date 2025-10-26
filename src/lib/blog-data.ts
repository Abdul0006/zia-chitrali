import { BlogPost, BlogCategory } from "@/src/types/blog";

// Mock data for blog posts
const mockBlogPosts: BlogPost[] = [
  {
    id: "1",
    title: "فلسطین کی تاریخ کا ایک اہم باب",
    content: "فلسطین کی تاریخ بہت قدیم ہے اور اس میں بہت سے اہم واقعات شامل ہیں جو ہمارے لیے سبق آموز ہیں۔ یہاں ہم فلسطین کی تاریخ کے اہم مواقع کا جائزہ لیتے ہیں جو آج کے دور کے حالات کو سمجھنے میں مددگار ثابت ہو سکتا ہے۔ 1948ء میں ہونے والے واقعات نے فلسطینیوں کی زندگیوں کو ہمیشہ کے لیے بدل دیا، جو اب بھی اپنی زمین کی آزادی کی جدوجہد جاری رکھے ہوئے ہیں۔ اس مضمون میں ہم 1948ء کے بعد کے واقعات، مہاجرین کی کہانیاں اور مختلف معاہدوں کا جائزہ لیں گے۔ ہم اس مسئلے کے عالمی پیمانے کو بھی سمجھنے کی کوشش کریں گے اور یہ بھی دیکھیں گے کہ عالمی برادری نے اس معاملے پر کیا کردار ادا کیا ہے۔",
    excerpt: "فلسطین کی تاریخ بہت قدیم ہے اور اس میں بہت سے اہم واقعات شامل ہیں جو ہمارے لیے سبق آموز ہیں۔",
    date: "15 مئی، 2025",
    author: "ضیاء چترالی",
    category: BlogCategory.HISTORY,
    thumbnail: "https://images.unsplash.com/photo-1614845452221-52a18f747f66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    slug: "palestine-history",
    tags: ["تاریخ", "فلسطین", "مشرق وسطی", "1948", "نکبہ"],
    featured: true,
    published: true,
    createdAt: new Date(2025, 4, 15),
    updatedAt: new Date(2025, 4, 15),
  },
  {
    id: "2",
    title: "غزہ کے عوام کی جدوجہد",
    content: "غزہ کے عوام کی روزانہ کی جدوجہد اور ان کی ہمت و بے مثال قربانیاں۔ یہ کہانیاں ہمیں یہ سکھاتی ہیں کہ امید ہمیشہ زندہ رہتی ہے چاہے سخت ترین حالات کیوں نہ ہوں۔ غزہ کی سرزمین پر زندہ رہنے کے لیے ہر روز ایک نئی جدوجہد ہے۔ بچوں کو تعلیم دینا، ڈاکٹروں کو اسپتال پہنچانا، کاشتکار کو اپنی زمین تک رسائی حاصل کرنا - ہر چھوٹی چیز ایک بڑی کامیابی ہے۔ اس مضمون میں ہم غزہ کے لوگوں کی امید کی کہانیوں، ان کے تئیں عالمی برادری کے رد عمل، اور ان کی ثقافت کو برقرار رکھنے کی کوششوں کا جائزہ لیں گے۔",
    excerpt: "غزہ کے عوام کی روزانہ کی جدوجہد اور ان کی ہمت و بے مثال قربانیاں۔",
    date: "10 مئی، 2025",
    author: "ضیاء چترالی",
    category: BlogCategory.STORIES,
    thumbnail: "https://images.unsplash.com/photo-1589365278144-c595844a82d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    slug: "gaza-struggle",
    tags: ["کہانیاں", "غزہ", "زندگی", "امید", "مقاومت"],
    featured: true,
    published: true,
    createdAt: new Date(2025, 4, 10),
    updatedAt: new Date(2025, 4, 10),
  },
  {
    id: "3",
    title: "مشرق وسطی میں حالیہ تبدیلیاں",
    content: "مشرق وسطی کے علاقے میں حالیہ تبدیلیوں اور ان کے اثرات کا جائزہ۔ ہم یہاں تجزیہ کرتے ہیں کہ کیسے حالیہ واقعات خطے کے مسلمانوں پر اثر انداز ہو رہے ہیں۔ حالیہ برسوں میں مشرق وسطی میں کئی اہم تبدیلیاں آئی ہیں جن میں عرب سپرینگ، مختلف معاہدوں کا سلسلہ، اور علاقائی تنازعات شامل ہیں۔ یہ تبدیلیاں فلسطین کے مسئلے پر بھی گہرے اثرات مرتب کر رہی ہیں۔ اس مضمون میں ہم مستقبل کے امکانات، عالمی سیاست کی تبدیلیوں، اور نئی نسل کے نظریے کا جائزہ لے رہے ہیں۔",
    excerpt: "مشرق وسطی کے علاقے میں حالیہ تبدیلیوں اور ان کے اثرات کا جائزہ۔",
    date: "5 مئی، 2025",
    author: "ضیاء چترالی",
    category: BlogCategory.UPDATES,
    thumbnail: "https://images.unsplash.com/photo-1566647387313-9fda80c7cfaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    slug: "middle-east-updates",
    tags: ["اپ ڈیٹس", "مشرق وسطی", "سیاست", "مستقبل", "علاقائی تبدیلیاں"],
    featured: false,
    published: true,
    createdAt: new Date(2025, 4, 5),
    updatedAt: new Date(2025, 4, 5),
  },
  {
    id: "4",
    title: "فلسطینی بچوں کی تعلیم کے مسائل",
    content: "فلسطین میں بچوں کی تعلیم کے حوالے سے چیلنجز اور اس کے باعد استحکام کی کہانی۔ نوجوان نسل کے مستقبل کے لیے امید کی کرنیں۔ تعلیم ہر معاشرے کی بنیاد ہے، لیکن فلسطین میں بچوں کو تعلیم حاصل کرنے میں بے شمار رکاوٹوں کا سامنا ہے۔ اسکولوں پر حملے، بنیادی سہولیات کا فقدان، اور روزانہ کی نقل و حمل کے مسائل صرف چند مسائل ہیں۔ اس مضمون میں ہم ان چیلنجز کا تفصیلی جائزہ لیں گے، اس کے ساتھ ساتھ ان حلول کی بھی تعریف کریں گے جو فلسطینی استاد اور والدین تعلیم کے استحکام کے لیے کر رہے ہیں۔ ہم نوجوان نسل کی کامیابیوں اور ان کے خوابوں کا بھی جائزہ لیں گے جو کہ امید کی کرنیں ہیں۔",
    excerpt: "فلسطین میں بچوں کی تعلیم کے حوالے سے چیلنجز اور اس کے باعد استحکام کی کہانی۔",
    date: "28 اپریل، 2025",
    author: "ضیاء چترالی",
    category: BlogCategory.STORIES,
    thumbnail: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    slug: "palestinian-children-education",
    tags: ["کہانیاں", "تعلیم", "بچے", "امید", "مستقبل"],
    featured: false,
    published: true,
    createdAt: new Date(2025, 3, 28),
    updatedAt: new Date(2025, 3, 28),
  },
  {
    id: "5",
    title: "1948 کا واقعہ اور اس کے اثرات",
    content: "1948 میں پیش آنے والے واقعات اور ان کے بعد کے اثرات کا تجزیہ۔ یہ ایک ایسا دور ہے جس کے اثرات آج بھی محسوس کیے جا رہے ہیں۔ 1948ء میں ہونے والے واقعات نے نہ صرف فلسطینیوں کی زندگیوں کو ہمیشہ کے لیے بدل دیا، بلکہ پورے خطے کا نقشہ بھی متاثر کیا۔ 'نکبہ' کے نام سے مشہور یہ واقعہ ایک بڑے تاریخی ٹرننگ پوائنٹ ثابت ہوا۔ اس مضمون میں ہم اس واقعے کے پیچھے کے سیاسی، معاشی اور سماجی عوامل کا تجزیہ کریں گے۔ ہم اس کے بعد کے اثرات، مہاجرین کی کہانیاں، اور مختلف معاہدوں کا بھی جائزہ لیں گے جو اس مسئلے کو حل کرنے کی کوشش میں کیے گئے۔",
    excerpt: "1948 میں پیش آنے والے واقعات اور ان کے بعد کے اثرات کا تجزیہ۔",
    date: "20 اپریل، 2025",
    author: "ضیاء چترالی",
    category: BlogCategory.HISTORY,
    thumbnail: "https://images.unsplash.com/photo-1589365278144-c595844a82d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    slug: "nakba-1948",
    tags: ["تاریخ", "نکبہ", "1948", "فلسطین", "تاریخی واقعات"],
    featured: true,
    published: true,
    createdAt: new Date(2025, 3, 20),
    updatedAt: new Date(2025, 3, 20),
  },
  {
    id: "6",
    title: "غزہ کے کسان اور زراعت کی جدوجہد",
    content: "غزہ کے کسان اپنی زمینوں تک رسائی کے لیے روزانہ کی جدوجہد کرتے ہیں۔ یہ کہانیاں ہمیں یہ سکھاتی ہیں کہ کس طرح ایک عام آدمی زمین کے ساتھ لگاؤ کو قائم رکھتا ہے۔ غزہ کے بعض علاقوں میں کاشتکاروں کو اپنی زمینوں تک پہنچنے میں بے شمار رکاوٹوں کا سامنا کرنا پڑتا ہے، لیکن وہ اپنے روایتی کام کو جاری رکھنے کے لیے ہر قربانی دینے کو تیار ہیں۔ اس مضمون میں ہم کچھ کامیاب کہانیوں، زراعت میں نئی تکنیکوں کے استعمال، اور چھوٹے پیمانے پر زراعت کے نتائج کا جائزہ لے رہے ہیں۔",
    excerpt: "غزہ کے کسانوں کی اپنی زمینوں تک رسائی کے لیے روزانہ کی جدوجہد",
    date: "18 اپریل، 2025",
    author: "ضیاء چترالی",
    category: BlogCategory.STORIES,
    thumbnail: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    slug: "gaza-farmers-struggle",
    tags: ["کہانیاں", "کسان", "زمین", "روایات", "جدوجہد"],
    featured: false,
    published: true,
    createdAt: new Date(2025, 3, 18),
    updatedAt: new Date(2025, 3, 18),
  },
  {
    id: "7",
    title: "فلسطین میں خواتین کی کردار اور جدوجہد",
    content: "فلسطین میں خواتین کا کردار اور ان کی جدوجہد بے مثال ہے۔ خواتین نہ صرف گھروں کی دیکھ بھال کرتی ہیں، بلکہ کاروبار، تعلیم، صحت کے شعبوں میں بھی نمایاں کردار ادا کرتی ہیں۔ یہ مضمون خواتین کی قائدانہ صلاحیتوں، ان کی تنظیموں، اور ان کی معاشرتی تبدیلیوں میں شراکت داری کا جائزہ لیتا ہے۔ ہم یہ بھی دیکھیں گے کہ کس طرح خواتین گھر کی دیکھ بھال کے ساتھ ساتھ ساتھ معاشرے میں اصلاح کا باعث بنتی ہیں۔",
    excerpt: "فلسطین میں خواتین کا کردار اور ان کی جدوجہد بے مثال ہے",
    date: "12 اپریل، 2025",
    author: "ضیاء چترالی",
    category: BlogCategory.STORIES,
    thumbnail: "https://images.unsplash.com/photo-1574362864873-9dc250a5a1a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    slug: "palestinian-women-role",
    tags: ["کہانیاں", "خواتین", "قیادت", "معاشرہ", "تبدیلی"],
    featured: true,
    published: true,
    createdAt: new Date(2025, 3, 12),
    updatedAt: new Date(2025, 3, 12),
  },
  {
    id: "8",
    title: "2007 کے بعد غزہ کی حکومت اور انتظامیہ",
    content: "2007 کے بعد سے غزہ کی حکومت کا انقلاب، اس کی انتظامیہ، اور اس کے نتائج کا تجزیہ۔ 2007 میں ہونے والے واقعات نے غزہ کے سیاسی منظرنامے کو ہمیشہ کے لیے تبدیل کر دیا۔ حماس کا غزہ پر قبضہ، اس کے بعد کے اقدامات، اور مختلف عالمی رد عمل کا جائزہ لینا ضروری ہے۔ اس مضمون میں ہم گزشتہ 18 سالوں میں غزہ کی سرکاری ساخت، انتظامی نظام، اور اس کے معاشرتی اثرات کا تجزیہ کریں گے۔ ہم یہ بھی دیکھیں گے کہ کس طرح اس نے عوامی خدمات، تعلیم، اور صحت کے نظام پر اثر ڈالا ہے۔",
    excerpt: "2007 کے بعد سے غزہ کی حکومت کا انقلاب، اس کی انتظامیہ، اور اس کے نتائج کا تجزیہ",
    date: "5 اپریل، 2025",
    author: "ضیاء چترالی",
    category: BlogCategory.HISTORY,
    thumbnail: "https://images.unsplash.com/photo-1589365278144-c595844a82d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    slug: "gaza-situation-after-2007",
    tags: ["تاریخ", "سیاست", "حماس", "غزہ", "حکومت"],
    featured: false,
    published: true,
    createdAt: new Date(2025, 3, 5),
    updatedAt: new Date(2025, 3, 5),
  },
  {
    id: "9",
    title: "یروشلم کا مقدس شہر اور اس کی اہمیت",
    content: "یروشلم ایک ایسا شہر ہے جو تینوں ابراهیمی مذاہب - اسلام، عیسائیت اور یہودیت - کے لیے مقدس ہے۔ اس کی تاریخ بہت قدیم ہے اور اس میں بہت سے اہم واقعات شامل ہیں جو مذہبی اور سیاسی دونوں اعتبار سے اہم ہیں۔ اس مضمون میں ہم یروشلم کی تاریخی اہمیت، اس کے مقدس مقامات، اور اس شہر کے متعلق جاری تنازعات کا جائزہ لیں گے۔ ہم یہ بھی دیکھیں گے کہ اسرائیلی اقتدار کے تحت اس شہر کی حیثیت کیسی ہے اور کیسے یہ مسئلہ عالمی توجہ کا مرکز بنا ہوا ہے۔ یروشلم کا مسئلہ صرف مذہبی نہیں، بلکہ سیاسی، ثقافتی اور انسانی حقوق کا بھی ایک بڑا مسئلہ ہے جو حل طلب ہے۔",
    excerpt: "یروشلم ایک ایسا شہر ہے جو تینوں ابراهیمی مذاہب - اسلام، عیسائیت اور یہودیت - کے لیے مقدس ہے۔",
    date: "25 مارچ، 2025",
    author: "ضیاء چترالی",
    category: BlogCategory.HISTORY,
    thumbnail: "https://images.unsplash.com/photo-1548803173-7a4a0c7dbe8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    slug: "jerusalem-holy-city-significance",
    tags: ["تاریخ", "یروشلم", "مقدس شہر", "اسلام", "عیسائیت", "یہودیت"],
    featured: true,
    published: true,
    createdAt: new Date(2025, 2, 25),
    updatedAt: new Date(2025, 2, 25),
  },
  {
    id: "10",
    title: "فلسطینیوں کی تعلیمی نظام کے چیلنجز",
    content: "فلسطین میں تعلیمی نظام کو متعدد چیلنجز کا سامنا ہے، جن میں اسرائیلی اقتدار کی جانب سے تحفظات، سرحدی پابندیاں، اور داخلی سیاسی تنازعات شامل ہیں۔ اس مضمون میں ہم فلسطینی تعلیمی نظام کے سامنے آنے والے چیلنجز، ان کے اثرات، اور ممکنہ حلول کا جائزہ لیں گے۔ ہم یہ بھی دیکھیں گے کہ فلسطینی یونیورسٹیاں اور کالج کس طرح کام کر رہے ہیں اور انہوں نے سرحدی پابندیوں کے باوجود کیسے اپنی خدمات جاری رکھی ہیں۔ تعلیم ایک بنیادی حق ہے، اور ہر بچے کو معیاری تعلیم حاصل کرنے کا حق ہے، لیکن فلسطین میں اس حق تک رسائی کے لیے بے شمار رکاوٹیں ہیں۔",
    excerpt: "فلسطین میں تعلیمی نظام کو متعدد چیلنجز کا سامنا ہے، جن میں اسرائیلی اقتدار کی جانب سے تحفظات شامل ہیں۔",
    date: "18 مارچ، 2025",
    author: "ضیاء چترالی",
    category: BlogCategory.STORIES,
    thumbnail: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    slug: "palestinian-educational-system-challenges",
    tags: ["تعلیم", "چیلنجز", "یونیورسٹیاں", "کالج", "تعمیر"],
    featured: false,
    published: true,
    createdAt: new Date(2025, 2, 18),
    updatedAt: new Date(2025, 2, 18),
  },
  {
    id: "11",
    title: "اکتوبر 2023 کے بعد فلسطینیوں کی جدوجہد",
    content: "اکتوبر 2023 کے بعد فلسطین میں حالات میں بڑا تبدیلی آئی ہے، جس نے نہ صرف مقامی عوام بلکہ پوری دنیا کو متاثر کیا ہے۔ اس مضمون میں ہم اکتوبر 2023 کے بعد فلسطینیوں کی جدوجہد، ان کی صبر و استقامت، اور بین الاقوامی سطح پر ان کے مسئلے کی تائید کا جائزہ لیں گے۔ ہم یہ بھی دیکھیں گے کہ کیسے فلسطینی عوام نے ظلم و ستم کے باوجود بھی اپنی زمین، اپنے حقوق، اور اپنی آزادی کے لیے لڑائی جاری رکھی ہے۔ اس وقت کے واقعات نے نہ صرف علاقائی سیاست کو متاثر کیا ہے، بلکہ بین الاقوامی سطح پر بھی بڑے تبدیلیاں لائی ہیں۔",
    excerpt: "اکتوبر 2023 کے بعد فلسطین میں حالات میں بڑا تبدیلی آئی ہے، جس نے نہ صرف مقامی عوام بلکہ پوری دنیا کو متاثر کیا ہے۔",
    date: "10 مارچ، 2025",
    author: "ضیاء چترالی",
    category: BlogCategory.UPDATES,
    thumbnail: "https://images.unsplash.com/photo-1588032588029-6b6d9f0bc8a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    slug: "palestinian-struggle-after-october-2023",
    tags: ["جدوجہد", "اکتوبر 2023", "واقعات", "عالمی رد فعل", "استقامت"],
    featured: true,
    published: true,
    createdAt: new Date(2025, 2, 10),
    updatedAt: new Date(2025, 2, 10),
  },
  {
    id: "12",
    title: "بیت لحم کا مقدس مقام اور اس کی اہمیت",
    content: "بیت لحم ایک ایسا مقدس مقام ہے جو عیسائیت، اسلام اور یہودیت تینوں مذہبوں کے لیے اہم ہے۔ یہاں عیسی علیہ السلام کی پیدائش ہوئی تھی، اور آج بھی یہ ایک اہم زیارت گاہ ہے۔ اس مضمون میں ہم بیت لحم کی تاریخی اہمیت، اس کے مقدس مقامات، اور اس شہر کے متعلق جاری تنازعات کا جائزہ لیں گے۔ ہم یہ بھی دیکھیں گے کہ اسرائیلی اقتدار کے تحت اس شہر کی حیثیت کیسی ہے اور کیسے یہ مسئلہ عالمی توجہ کا مرکز بنا ہوا ہے۔ بیت لحم کا مسئلہ صرف مذہبی نہیں، بلکہ سیاسی، ثقافتی اور انسانی حقوق کا بھی ایک بڑا مسئلہ ہے جو حل طلب ہے۔",
    excerpt: "بیت لحم ایک ایسا مقدس مقام ہے جو عیسائیت، اسلام اور یہودیت تینوں مذہبوں کے لیے اہم ہے۔",
    date: "5 مارچ، 2025",
    author: "ضیاء چترالی",
    category: BlogCategory.HISTORY,
    thumbnail: "https://images.unsplash.com/photo-1588032588029-6b6d9f0bc8a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    slug: "bethlehem-holy-place-significance",
    tags: ["تاریخ", "بیت لحم", "مقدس مقام", "عیسائیت", "اسلام", "یہودیت"],
    featured: false,
    published: true,
    createdAt: new Date(2025, 2, 5),
    updatedAt: new Date(2025, 2, 5),
  }
];

export const getAllBlogPosts = (): BlogPost[] => {
  return mockBlogPosts.filter(post => post.published);
};

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return mockBlogPosts.find(post => post.slug === slug && post.published);
};

export const getBlogPostsByCategory = (category: BlogCategory): BlogPost[] => {
  return mockBlogPosts.filter(post => post.category === category && post.published);
};

export const getFeaturedPosts = (): BlogPost[] => {
  return mockBlogPosts.filter(post => post.featured && post.published);
};

export const createBlogPost = (postData: Omit<BlogPost, 'id' | 'createdAt' | 'updatedAt'>): BlogPost => {
  const newPost: BlogPost = {
    ...postData,
    id: `post_${Date.now()}`, // Simple ID generation
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  
  mockBlogPosts.push(newPost);
  return newPost;
};

export const updateBlogPost = (id: string, postData: Partial<Omit<BlogPost, 'id' | 'createdAt' | 'updatedAt'>>): BlogPost | undefined => {
  const index = mockBlogPosts.findIndex(post => post.id === id);
  
  if (index === -1) {
    return undefined;
  }
  
  const updatedPost = {
    ...mockBlogPosts[index],
    ...postData,
    updatedAt: new Date()
  };
  
  mockBlogPosts[index] = updatedPost;
  return updatedPost;
};

export const deleteBlogPost = (id: string): boolean => {
  const initialLength = mockBlogPosts.length;
  const filteredPosts = mockBlogPosts.filter(post => post.id !== id);
  
  if (filteredPosts.length === initialLength) {
    return false; // Post was not found
  }
  
  mockBlogPosts.splice(0, mockBlogPosts.length, ...filteredPosts);
  return true;
};