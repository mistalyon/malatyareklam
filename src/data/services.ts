export type ServiceCategory = 'reklam' | 'dijital' | 'yeni-nesil';

export interface FAQ {
  q: string;
  a: string;
}

export interface Service {
  slug: string;
  category: ServiceCategory;
  title: string;
  shortDesc: string;
  longDesc: string;
  icon: string;
  benefits: string[];
  faqs: FAQ[];
  keywords: string[];
}

export const categoryLabels: Record<ServiceCategory, string> = {
  'reklam': 'Reklam Hizmetleri',
  'dijital': 'Dijital Pazarlama',
  'yeni-nesil': 'Yeni Nesil Hizmetler',
};

export const services: Service[] = [
  {
    "slug": "acikhava-reklam",
    "category": "reklam",
    "title": "Açıkhava Reklam",
    "shortDesc": "Billboard, raket ve LED ekran ile Malatya genelinde yüksek erişim.",
    "longDesc": "Malatya’nın en stratejik noktalarında billboard, megalight ve raket sistemleriyle markanızı görünür kılıyoruz. İnönü Caddesi, Turgut Özal Bulvarı ve AVM çevreleri başta olmak üzere şehrin en yoğun lokasyonlarında konumlanıyoruz.",
    "icon": "megaphone",
    "benefits": [
      "Şehrin en yoğun noktalarında konumlanma",
      "7/24 görünürlük ve yüksek erişim",
      "Profesyonel tasarım ve baskı",
      "Aylık performans raporlaması"
    ],
    "faqs": [
      {
        "q": "Malatya'da en etkili billboard konumları nerelerdir?",
        "a": "İnönü Caddesi, Turgut Özal Bulvarı ve Malatya Park AVM çevresi en yüksek trafiğe sahip lokasyonlardır."
      },
      {
        "q": "Kampanya süresi nedir?",
        "a": "Standart süre 15 veya 30 gündür, özel planlamalar mümkündür."
      }
    ],
    "keywords": [
      "malatya billboard",
      "malatya açıkhava reklam",
      "billboard kiralama malatya"
    ]
  },
  {
    "slug": "kurumsal-kimlik",
    "category": "reklam",
    "title": "Kurumsal Kimlik",
    "shortDesc": "Logo, kartvizit ve tüm marka materyallerini kapsayan bütünsel kimlik.",
    "longDesc": "Markanızın hikayesini anlatan kurumsal kimlik tasarımları üretiyoruz. Logodan ofis dokümanlarına, dijital varlıklardan basılı materyallere kadar tutarlı bir görsel dil oluşturuyoruz.",
    "icon": "palette",
    "benefits": [
      "Profesyonel marka rehberi",
      "Logo, renk paleti, tipografi",
      "Kartvizit, antetli kağıt, zarf",
      "Sosyal medya kit ve şablonlar"
    ],
    "faqs": [
      {
        "q": "Kurumsal kimlik ne kadar sürer?",
        "a": "Kapsama göre 2-4 hafta içinde tamamlanır."
      },
      {
        "q": "Mevcut logomu yenileyebilir misiniz?",
        "a": "Evet, rebrand çalışmaları yapıyoruz."
      }
    ],
    "keywords": [
      "malatya kurumsal kimlik",
      "marka kimliği malatya",
      "kurumsal tasarım malatya"
    ]
  },
  {
    "slug": "logo-tasarim",
    "category": "reklam",
    "title": "Logo Tasarımı",
    "shortDesc": "Özgün, akılda kalıcı ve zamana meydan okuyan logo tasarımları.",
    "longDesc": "Markanızı ifade eden özel logo konseptleri hazırlıyoruz. Sektörünüzü, hedef kitlenizi ve değerlerinizi araştırarak size özel tasarımlar üretiyoruz.",
    "icon": "sparkles",
    "benefits": [
      "3 farklı konsept seçeneği",
      "Sınırsız revizyon hakkı",
      "Vektörel formatlar (AI, SVG, PDF, PNG)",
      "Logo kullanım kılavuzu"
    ],
    "faqs": [
      {
        "q": "Logo tasarımı kaç günde teslim edilir?",
        "a": "İlk konseptler 5-7 iş günü, toplam süreç ortalama 2 hafta."
      },
      {
        "q": "Vektörel kaynak dosyalarımı alır mıyım?",
        "a": "Evet, tüm kaynak dosyaları sizinle paylaşılır."
      }
    ],
    "keywords": [
      "malatya logo tasarım",
      "logo tasarımcısı malatya",
      "profesyonel logo malatya"
    ]
  },
  {
    "slug": "matbaa-baski",
    "category": "reklam",
    "title": "Matbaa & Baskı",
    "shortDesc": "Kartvizit, broşür, katalog ve tüm baskı işleri.",
    "longDesc": "Dijital ve ofset baskı ile her ölçekte kaliteli matbaa hizmeti sunuyoruz. Kartvizitten kataloğa, broşürden afişe kadar geniş ürün yelpazesi.",
    "icon": "printer",
    "benefits": [
      "Dijital ve ofset baskı",
      "Kuşe, mat, gofre kağıt seçenekleri",
      "UV lak, selefon, gofraj uygulamaları",
      "Hızlı teslimat"
    ],
    "faqs": [
      {
        "q": "Minimum sipariş adedi var mı?",
        "a": "Dijital baskıda minimum yoktur, ofset için 500 adet ve üzeri uygundur."
      },
      {
        "q": "Tasarım hizmeti veriyor musunuz?",
        "a": "Evet, baskı öncesi profesyonel tasarım hizmeti sunuyoruz."
      }
    ],
    "keywords": [
      "malatya matbaa",
      "malatya baskı",
      "kartvizit baskı malatya",
      "broşür baskı malatya"
    ]
  },
  {
    "slug": "tabela-uygulamalari",
    "category": "reklam",
    "title": "Tabela Uygulamaları",
    "shortDesc": "Işıklı, ışıksız ve dijital tüm tabela çözümleri.",
    "longDesc": "Mağaza tabelası, kutu harf, ışıklı kutu, totem ve yönlendirme tabelaları üretiyoruz. Her sektöre uygun, dayanıklı ve estetik çözümler.",
    "icon": "signpost",
    "benefits": [
      "Kutu harf, ışıklı tabela, totem",
      "LED ve neon aydınlatma",
      "Dış mekana dayanıklı malzemeler",
      "Montaj ve servis dahil"
    ],
    "faqs": [
      {
        "q": "Tabelam ne kadar sürede hazır olur?",
        "a": "Tasarım onayından sonra 7-15 gün içinde teslim edilir."
      },
      {
        "q": "Garanti veriyor musunuz?",
        "a": "LED ve elektronik parçalarda 2 yıl garanti."
      }
    ],
    "keywords": [
      "malatya tabela",
      "malatya ışıklı tabela",
      "kutu harf tabela malatya"
    ]
  },
  {
    "slug": "seo-hizmeti",
    "category": "dijital",
    "title": "SEO Hizmeti",
    "shortDesc": "Googleda üst sıralara çıkmanızı sağlayan profesyonel SEO.",
    "longDesc": "Teknik SEO, içerik SEOsu ve link inşası ile sitenizi Googleın ilk sayfasına taşıyoruz. Anahtar kelime analizi, rakip analizi ve aylık raporlama dahil.",
    "icon": "search",
    "benefits": [
      "Teknik SEO denetimi ve düzeltmeleri",
      "Anahtar kelime ve rakip analizi",
      "İçerik optimizasyonu",
      "Aylık detaylı raporlama"
    ],
    "faqs": [
      {
        "q": "SEO sonuçları ne zaman görülür?",
        "a": "İlk iyileşmeler 2-3 ayda, kalıcı sonuçlar 6 ayda görülür."
      },
      {
        "q": "Garanti veriyor musunuz?",
        "a": "Googlea kimse %100 garanti veremez ancak metodolojik bir yaklaşımla sonuç odaklı çalışıyoruz."
      }
    ],
    "keywords": [
      "malatya seo",
      "seo hizmeti malatya",
      "google seo malatya",
      "seo uzmanı malatya"
    ]
  },
  {
    "slug": "google-ads",
    "category": "dijital",
    "title": "Google Ads",
    "shortDesc": "Hedefli reklamlarla anında trafik ve dönüşüm.",
    "longDesc": "Arama, görüntülü, YouTube ve alışveriş kampanyaları ile doğru kitleye doğru zamanda ulaşıyoruz. ROI odaklı bütçe yönetimi.",
    "icon": "target",
    "benefits": [
      "Arama, display, YouTube kampanyaları",
      "Anahtar kelime araştırması",
      "Hedefleme ve remarketing",
      "Haftalık optimizasyon"
    ],
    "faqs": [
      {
        "q": "Minimum reklam bütçesi nedir?",
        "a": "Aylık 3.000 TLden başlayan bütçelerle çalışıyoruz."
      },
      {
        "q": "Hangi sektörlere uygun?",
        "a": "E-ticaret, hizmet, B2B dahil tüm sektörlere uygundur."
      }
    ],
    "keywords": [
      "malatya google ads",
      "google reklam malatya",
      "adwords malatya"
    ]
  },
  {
    "slug": "sosyal-medya-yonetimi",
    "category": "dijital",
    "title": "Sosyal Medya Yönetimi",
    "shortDesc": "Instagram, Facebook, TikTok ve LinkedIn yönetimi.",
    "longDesc": "İçerik üretimi, topluluk yönetimi, reklam kampanyaları ve raporlama ile sosyal medyada güçlü varlık oluşturuyoruz.",
    "icon": "share",
    "benefits": [
      "Aylık içerik takvimi ve üretim",
      "Profesyonel görsel ve video",
      "Topluluk yönetimi",
      "Sponsorlu reklam yönetimi"
    ],
    "faqs": [
      {
        "q": "Hangi platformlarda hizmet veriyorsunuz?",
        "a": "Instagram, Facebook, TikTok, LinkedIn, X ve YouTube."
      },
      {
        "q": "Aylık kaç içerik üretiyorsunuz?",
        "a": "Pakete göre haftalık 4-12 içerik arasında değişir."
      }
    ],
    "keywords": [
      "malatya sosyal medya",
      "sosyal medya yönetimi malatya",
      "instagram yönetimi malatya"
    ]
  },
  {
    "slug": "web-tasarim",
    "category": "dijital",
    "title": "Web Tasarım",
    "shortDesc": "Modern, hızlı ve mobil uyumlu kurumsal web siteleri.",
    "longDesc": "Astro, Next.js ve WordPress ile yüksek performanslı, SEO uyumlu web siteleri tasarlıyoruz. Hız ve estetik bir arada.",
    "icon": "globe",
    "benefits": [
      "Mobil uyumlu responsive tasarım",
      "Hızlı yükleme (Core Web Vitals)",
      "SEO altyapısı",
      "Kolay yönetilen panel"
    ],
    "faqs": [
      {
        "q": "Web sitem kaç günde hazır olur?",
        "a": "Kurumsal site 3-4 hafta, e-ticaret 6-8 hafta."
      },
      {
        "q": "Hosting dahil mi?",
        "a": "İlk yıl hosting ve domain hediye."
      }
    ],
    "keywords": [
      "malatya web tasarım",
      "malatya web sitesi",
      "kurumsal web sitesi malatya"
    ]
  },
  {
    "slug": "e-ticaret-cozumleri",
    "category": "dijital",
    "title": "E-Ticaret Çözümleri",
    "shortDesc": "Shopify, WooCommerce ve özel altyapılarla satış odaklı siteler.",
    "longDesc": "Pazaryeri entegrasyonları, kargo ve ödeme sistemleri, mobil uygulama desteği ile uçtan uca e-ticaret çözümleri sunuyoruz.",
    "icon": "shopping-cart",
    "benefits": [
      "Shopify, WooCommerce, Ideasoft",
      "Trendyol, Hepsiburada, n11 entegrasyonu",
      "Sanal POS ve kargo entegrasyonu",
      "Mobil uyumlu ve hızlı"
    ],
    "faqs": [
      {
        "q": "Hangi altyapıyı önerirsiniz?",
        "a": "İhtiyaca göre Shopify, WooCommerce veya özel yazılım önerisi yapıyoruz."
      },
      {
        "q": "Komisyon alıyor musunuz?",
        "a": "Hayır, sabit kurulum ve aylık bakım ücreti modeli."
      }
    ],
    "keywords": [
      "malatya e-ticaret",
      "e-ticaret sitesi malatya",
      "shopify malatya",
      "woocommerce malatya"
    ]
  },
  {
    "slug": "geo-hizmeti",
    "category": "yeni-nesil",
    "title": "GEO (Generative Engine Optimization)",
    "shortDesc": "ChatGPT, Gemini ve AI motorlarında görünürlük.",
    "longDesc": "Yapay zeka tabanlı arama motorlarının (ChatGPT, Perplexity, Gemini, Claude) markanızı bilmesi ve önermesi için içerik ve veri yapılarınızı optimize ediyoruz. SEOnun yeni nesli.",
    "icon": "brain",
    "benefits": [
      "llms.txt ve AI uyumlu içerik yapısı",
      "Schema.org JSON-LD optimizasyonu",
      "Konuşma diline uygun içerik",
      "AI motor görünürlük raporları"
    ],
    "faqs": [
      {
        "q": "GEO nedir, SEOdan farkı ne?",
        "a": "SEO Google için, GEO ise yapay zeka motorları için optimizasyondur. ChatGPT/Perplexityde markanızın çıkması için yapılır."
      },
      {
        "q": "Ne kadar sürede sonuç alınır?",
        "a": "İçerik ve veri yapısı çalışmaları sonrası 4-8 hafta içinde AI motorlarında görünürlük artar."
      }
    ],
    "keywords": [
      "malatya geo",
      "generative engine optimization",
      "ai seo malatya",
      "chatgpt seo",
      "perplexity optimizasyon"
    ]
  },
  {
    "slug": "malatya-yazilim",
    "category": "yeni-nesil",
    "title": "Malatya Yazılım",
    "shortDesc": "Kurumsal yazılım, ERP, CRM ve özel web uygulamaları.",
    "longDesc": "Malatyada işletmenize özel yazılım çözümleri geliştiriyoruz. Stok yönetimi, müşteri ilişkileri, raporlama panelleri ve sektörel ERPler.",
    "icon": "code",
    "benefits": [
      "Özel web ve mobil uygulamalar",
      "ERP, CRM, stok yönetim sistemleri",
      "API geliştirme ve entegrasyonlar",
      "Bulut ve on-premise dağıtım"
    ],
    "faqs": [
      {
        "q": "Hangi teknolojileri kullanıyorsunuz?",
        "a": "Node.js, Python, .NET, React, Next.js, Astro ve Cloudflare altyapısı."
      },
      {
        "q": "Yazılım ne kadar sürede teslim edilir?",
        "a": "Kapsama göre 2-6 ay arasında değişir, MVP yaklaşımıyla erken sürümler de mümkündür."
      }
    ],
    "keywords": [
      "malatya yazılım",
      "malatya yazılım firması",
      "özel yazılım malatya",
      "erp yazılımı malatya"
    ]
  },
  {
    "slug": "malatya-eticaret",
    "category": "yeni-nesil",
    "title": "Malatya E-Ticaret",
    "shortDesc": "Yerel işletmelere özel e-ticaret çözümleri.",
    "longDesc": "Malatyalı işletmelerin online satışa geçmesi için sıfırdan e-ticaret altyapısı, ürün fotoğrafçılığı, kargo entegrasyonu ve dijital pazarlama desteği sunuyoruz.",
    "icon": "store",
    "benefits": [
      "Sıfırdan e-ticaret kurulumu",
      "Ürün fotoğrafı ve içerik üretimi",
      "Kargo ve ödeme entegrasyonları",
      "Pazaryeri başlangıç desteği"
    ],
    "faqs": [
      {
        "q": "E-ticarete yeni başlıyorum, nereden başlamalıyım?",
        "a": "Önce hedef kitle ve ürün stratejisi, ardından platform seçimi ve sistem kurulumu yapıyoruz."
      },
      {
        "q": "Yerel ürünler için pazaryeri öneriniz?",
        "a": "Trendyol, Hepsiburada ve Amazon Türkiye en güçlü kanallar."
      }
    ],
    "keywords": [
      "malatya e-ticaret",
      "malatya online satış",
      "kayısı e-ticaret",
      "yerel ürün e-ticaret malatya"
    ]
  },
  {
    "slug": "ai-icerik-uretimi",
    "category": "yeni-nesil",
    "title": "AI İçerik Üretimi",
    "shortDesc": "Yapay zeka destekli blog, sosyal medya ve ürün içerikleri.",
    "longDesc": "OpenAI, Claude ve Gemini gibi yapay zeka modelleriyle hızlı, SEO uyumlu ve özgün içerikler üretiyoruz. İnsan editöryal kontrolü ile kalite garantili.",
    "icon": "sparkles",
    "benefits": [
      "Blog, ürün açıklaması, sosyal medya",
      "SEO ve GEO uyumlu içerik",
      "İnsan editör kontrolü",
      "Toplu içerik üretimi"
    ],
    "faqs": [
      {
        "q": "Üretilen içerikler özgün mü?",
        "a": "Evet, AI ile üretilip insan editör tarafından gözden geçirilmiş, plagiarism kontrollü içerikler."
      },
      {
        "q": "Hangi konularda içerik üretebilirsiniz?",
        "a": "Hemen her sektörde - e-ticaret, hizmet, kurumsal, lokal işletme."
      }
    ],
    "keywords": [
      "ai içerik üretimi",
      "yapay zeka içerik",
      "seo içerik malatya",
      "blog yazımı malatya"
    ]
  }
];

export const getServicesByCategory = (category: ServiceCategory): Service[] =>
  services.filter(s => s.category === category);

export const getServiceBySlug = (slug: string): Service | undefined =>
  services.find(s => s.slug === slug);
