// Malatya Reklam - SEO Uzun Icerik Modulu
// Hedef anahtar kelimeler: "malatya web tasarim", "malatya tabela", "malatya reklam"
// Bu dosya [slug].astro tarafindan import edilir, slug eslesirse zengin SEO icerigi render edilir.

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface PricingFactor {
  factor: string;
  description: string;
}

export interface ExtendedFAQ {
  q: string;
  a: string;
}

export interface InternalLink {
  href: string;
  text: string;
}

export interface SeoContent {
  slug: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  introHtml: string;
  longContent: string;
  processSteps: ProcessStep[];
  pricingFactors: PricingFactor[];
  serviceAreas: string[];
  extendedFaqs: ExtendedFAQ[];
  relatedKeywords: string[];
  aggregateRating: { ratingValue: string; reviewCount: string };
  internalLinks: InternalLink[];
}

export const seoContents: Record<string, SeoContent> = {
  'web-tasarim': {
    slug: 'web-tasarim',
    h1: 'Malatya Web Tasarım Hizmeti',
    metaTitle: 'Malatya Web Tasarım | Profesyonel Kurumsal Web Sitesi & E-Ticaret | Malatya Reklam',
    metaDescription: 'Malatya web tasarım uzmanı ekibimizle hızlı, mobil uyumlu, SEO dostu kurumsal web siteleri ve e-ticaret çözümleri sunuyoruz. 12 yıllık deneyim, ücretsiz teklif.',
    introHtml: '<p>Malatya web tasarım hizmetimizle markanızı dijital dünyada güçlü, hızlı ve kullanıcı dostu bir web sitesiyle temsil ediyoruz. 12 yılı aşkın tecrübemiz, 500+ tamamlanmış proje ve 300+ memnun müşterimizle Malatya\'nın önde gelen web tasarım ajansıyız.</p>',
    longContent: `
<h2>Malatya'da Web Tasarımının Önemi</h2>
<p>Malatya'da bir işletme sahibiyseniz ve hâlâ profesyonel bir web siteniz yoksa, potansiyel müşterilerinizin %78'ini rakiplerinize kaptırıyorsunuz. Google verilerine göre tüketicilerin %93'ü bir hizmet veya ürün almadan önce online araştırma yapıyor. Malatya web tasarım hizmetimiz, işletmenizin bu dijital yarışta öne çıkmasını sağlar.</p>
<p>Malatya merkez, Battalgazi, Yeşilyurt, Doğanşehir, Akçadağ, Darende, Hekimhan, Arapgir ve diğer ilçelerde faaliyet gösteren işletmelere özel <strong>kurumsal web tasarım</strong>, <strong>e-ticaret web sitesi</strong>, <strong>landing page</strong> ve <strong>blog/haber sitesi</strong> tasarımı yapıyoruz. Her proje markanızın hikayesini, hedef kitlenizi ve iş hedeflerinizi merkeze alarak özgün biçimde geliştirilir.</p>

<h2>Profesyonel Malatya Web Tasarım Hizmetlerimiz</h2>
<p>Doğru bir Malatya web tasarımı; arama motorlarında bulunabilir, mobil cihazlarda kusursuz çalışan, hızlı yüklenen, dönüşüm odaklı kurgulanmış bir dijital varlık demektir. Sunduğumuz başlıca hizmetler:</p>
<ul>
<li><strong>Kurumsal Web Sitesi Tasarımı:</strong> Şirketinizin profesyonel kimliğini yansıtan, hizmet sayfaları, ekip, referanslar ve iletişim bölümleriyle eksiksiz site yapısı.</li>
<li><strong>E-Ticaret Web Sitesi:</strong> Shopify, WooCommerce, OpenCart ve özel altyapılarla satış odaklı, ödeme entegrasyonları tamamlanmış online mağazalar.</li>
<li><strong>Landing Page Tasarımı:</strong> Reklam kampanyalarınız için yüksek dönüşüm oranlı, A/B test uyumlu tek sayfa siteler.</li>
<li><strong>Blog ve Haber Sitesi:</strong> SEO uyumlu, kategori yönetimi gelişmiş, hızlı içerik girişi yapılabilen yayın platformları.</li>
<li><strong>WordPress Web Tasarım:</strong> Yönetimi kolay, esnek, eklenti ekosistemi geniş WordPress siteleri.</li>
<li><strong>Astro & Next.js Web Tasarım:</strong> Yeni nesil framework'lerle saniyenin altında yüklenen, Core Web Vitals şampiyonu siteler.</li>
<li><strong>Web Uygulaması Geliştirme:</strong> Müşteri paneli, randevu sistemi, üyelik altyapısı gibi özel fonksiyonlar.</li>
</ul>

<h2>Neden Malatya Reklam ile Web Tasarım?</h2>
<p>Biz sadece site yapan değil, sitenin iş sonuçları üretmesini hedefleyen bir ajansız. Bizi farklı kılan başlıca avantajlar:</p>
<h3>Core Web Vitals Optimizasyonu</h3>
<p>Google sıralamada artık sayfa hızını ve kullanıcı deneyimi metriklerini (LCP, INP, CLS) açıkça sıralama faktörü olarak kullanıyor. Tasarladığımız her site Lighthouse'da 90+ puan, mobilde 1 saniyenin altında ilk yüklenme hedefiyle geliştirilir.</p>
<h3>SEO Altyapısı Sıfırdan</h3>
<p>Sitenizi sadece tasarlamıyoruz; her sayfaya özgün <strong>title</strong>, <strong>meta description</strong>, <strong>schema.org JSON-LD</strong>, <strong>sitemap.xml</strong>, <strong>robots.txt</strong>, <strong>canonical</strong> ve <strong>OpenGraph</strong> etiketleri ekliyoruz.</p>
<h3>Mobil Öncelikli Tasarım</h3>
<p>Türkiye'de internet kullanıcılarının %82'si mobil cihazlardan giriş yapıyor. Tasarımlarımız önce mobilde çalışır, sonra masaüstüne uyarlanır.</p>
<h3>Cloudflare CDN ve Güvenlik</h3>
<p>Tüm sitelerimiz Cloudflare üzerinde host edilir; DDoS koruması, WAF, bot koruması ve global CDN ile hem hızlı hem güvenli olur.</p>
<h3>Yerel Destek</h3>
<p>Malatya'da fiziksel ofisimiz var. Sorununuz olduğunda mesai saatlerinde 1 saat içinde dönüş alıyorsunuz.</p>

<h2>Malatya Web Tasarım Süreci</h2>
<p>Her başarılı proje, planlı bir süreç gerektirir. 7 adımlı standart Malatya web tasarım sürecimiz aşağıda detaylandırılmıştır.</p>

<h2>Web Tasarım Fiyatları Malatya</h2>
<p>Malatya'da web tasarım fiyatları işin kapsamına göre 8.000 TL ile 250.000 TL arasında değişir. Tek sayfalık landing page'den özel yazılım e-ticaret sitesine kadar geniş bir yelpaze söz konusu. Net teklifi keşif görüşmesi sonrasında sunuyoruz; aşağıda fiyatı belirleyen ana faktörleri görebilirsiniz.</p>

<h2>Hangi Sektörlere Web Tasarım Yapıyoruz?</h2>
<p>Malatya'da hizmet verdiğimiz sektörler arasında kayısı ihracatçıları, tekstil üreticileri, inşaat ve emlak şirketleri, sağlık kuruluşları, avukatlar ve hukuk büroları, eğitim kurumları, restoran ve kafeler, otomotiv galerileri, oto servisleri, mobilya üreticileri, kuyumcular, butik mağazalar, e-ticaret işletmeleri, kuaförler, fitness merkezleri, dernek ve vakıflar bulunuyor.</p>

<h2>Malatya Web Tasarım için Bizimle Çalışmaya Hazır mısınız?</h2>
<p>İşletmenizin dijital dönüşümünü başlatmak için bugün bize ulaşın. <a href="/iletisim/">İletişim sayfamızdan</a> form doldurabilir veya WhatsApp hattımız üzerinden anında iletişime geçebilirsiniz. İlk keşif görüşmesi tamamen ücretsizdir.</p>
`,
    processSteps: [
      { step: 1, title: 'Keşif & Strateji', description: 'Markanızı, hedef kitlenizi ve iş hedeflerinizi anlamak için ücretsiz keşif görüşmesi yapıyoruz. Rakip analizi, anahtar kelime araştırması ve site mimarisi planlanır.' },
      { step: 2, title: 'Wireframe & UX', description: 'Sayfa şablonları ve kullanıcı yolculukları çiziliyor. Figma üzerinde düşük çözünürlüklü maketleri sizinle paylaşıyoruz.' },
      { step: 3, title: 'UI Tasarım', description: 'Marka kimliğinize uygun yüksek çözünürlüklü tasarımlar hazırlanıyor. Renk, tipografi, ikonografi ve illüstrasyon dili netleşir.' },
      { step: 4, title: 'Frontend Geliştirme', description: 'Astro, Next.js veya WordPress altyapısı seçimine göre kod geliştiriliyor. Mobil uyum, erişilebilirlik ve performans optimize edilir.' },
      { step: 5, title: 'İçerik & SEO', description: 'Tüm sayfalara özgün metinler, meta etiketler, görsel alt etiketleri, schema.org JSON-LD ekleniyor. Search Console ve Analytics kuruluyor.' },
      { step: 6, title: 'Test & QA', description: 'Tüm cihaz ve tarayıcılarda test ediliyor. Lighthouse, WebPageTest ve manuel test raporları sunuluyor.' },
      { step: 7, title: 'Yayın & Bakım', description: 'Site Cloudflare üzerinden canlıya alınıyor. İlk 12 ay ücretsiz teknik destek ve aylık bakım planı devreye giriyor.' }
    ],
    pricingFactors: [
      { factor: 'Sayfa Sayısı', description: 'Tek sayfalık landing page ile 50+ sayfalı kurumsal site arasında ciddi maliyet farkı vardır.' },
      { factor: 'Tasarım Özgünlüğü', description: 'Hazır şablon mu, sıfırdan özel tasarım mı? Özel tasarım daha pahalı ama markaya özgüdür.' },
      { factor: 'Altyapı Seçimi', description: 'WordPress en uygun maliyetli, Astro/Next.js orta segment, özel React/Node.js uygulama en üst segment.' },
      { factor: 'E-Ticaret Modülü', description: 'Ürün sayısı, ödeme entegrasyonları, kargo entegrasyonları ve pazaryeri bağlantıları fiyatı etkiler.' },
      { factor: 'İçerik Üretimi', description: 'Metin, görsel, video, fotoğraf çekimi gibi içerik üretimi ayrı kalemdir.' },
      { factor: 'SEO Kapsamı', description: 'Temel teknik SEO ücretsiz, gelişmiş SEO (anahtar kelime stratejisi, içerik takvimi, link inşası) ek pakettir.' },
      { factor: 'Bakım ve Hosting', description: 'İlk yıl ücretsiz, sonraki yıllar aylık bakım paketi ihtiyacınıza göre özelleştirilir.' }
    ],
    serviceAreas: ['Battalgazi','Yeşilyurt','Doğanşehir','Akçadağ','Darende','Hekimhan','Arapgir','Pütürge','Kuluncak','Kale','Yazıhan','Arguvan','Doğanyol'],
    extendedFaqs: [
      { q: 'Malatya web tasarım fiyatları ne kadar?', a: 'Malatya web tasarım fiyatlarımız 8.000 TL kurumsal landing page\'den başlayıp, kapsamlı kurumsal sitelerde 35.000 TL\'den itibaren, gelişmiş e-ticaret projelerinde 80.000 TL ve üzerine kadar değişir.' },
      { q: 'Web sitem kaç günde hazır olur?', a: 'Standart kurumsal sitelerimiz tasarım onayı sonrası 3-4 hafta, e-ticaret projeleri 6-8 hafta içinde teslim edilir.' },
      { q: 'Hosting ve domain dahil mi?', a: 'Evet, ilk yıl Cloudflare üzerinden domain (.com / .com.tr) ve premium hosting tamamen hediye.' },
      { q: 'Sitemi kendim yönetebilir miyim?', a: 'WordPress veya özel admin panelimizle ürün, blog yazısı, hizmet ve görsel ekleyip düzenleyebileceğiniz sezgisel bir arayüz kuruyoruz.' },
      { q: 'Mevcut sitemi yenileyebilir misiniz?', a: 'Evet. Mevcut sitenizi inceleyip içerik ve URL yapılarını koruyarak modern altyapıya taşıyoruz; SEO değerinin kaybolmaması için 301 yönlendirme uyguluyoruz.' },
      { q: 'SEO uyumlu mu?', a: 'Tüm sitelerimiz teknik SEO açısından sıfırdan optimize edilir: hızlı yükleme, mobil uyum, schema.org, sitemap, robots.txt, canonical, OG, Twitter Card standart pakette.' },
      { q: 'Sosyal medya entegrasyonu var mı?', a: 'Instagram, Facebook, X, TikTok, YouTube ve LinkedIn entegrasyonları, sosyal medya feed gösterimi, paylaşım butonları ve OG önizlemeleri standart eklenir.' },
      { q: 'WhatsApp ve canlı destek modülü ekleniyor mu?', a: 'Evet, WhatsApp Business butonu, canlı destek (Tawk.to, Crisp), e-posta formu ve callback modülleri talebinize göre kuruluyor.' },
      { q: 'Malatya dışındaki müşterilere de hizmet veriyor musunuz?', a: 'Evet, Türkiye genelinde ve yurt dışında çok sayıda müşterimiz var. Tüm görüşmeler online yürütülebiliyor.' },
      { q: 'Garanti süreniz var mı?', a: 'Yayına aldığımız her site için 12 ay teknik destek ve hata düzeltme garantisi veriyoruz.' }
    ],
    relatedKeywords: ['malatya web tasarım','malatya web tasarım fiyatları','malatya kurumsal web sitesi','malatya e-ticaret web tasarım','malatya web tasarım firması','malatya web tasarım ajansı','malatya web sitesi yapan firmalar','malatya seo uyumlu web tasarım','malatya wordpress web tasarım','malatyada web tasarım','profesyonel web tasarım malatya','ucuz web tasarım malatya','malatya web yazılım','malatya web sitesi tasarımı','malatya web tasarım yenileme'],
    aggregateRating: { ratingValue: '4.9', reviewCount: '187' },
    internalLinks: [
      { href: '/hizmetler/seo-hizmeti/', text: 'Malatya SEO Hizmeti' },
      { href: '/hizmetler/google-ads/', text: 'Google Ads Yönetimi' },
      { href: '/hizmetler/e-ticaret-cozumleri/', text: 'E-Ticaret Çözümleri' },
      { href: '/hizmetler/logo-tasarim/', text: 'Logo Tasarımı' },
      { href: '/hizmetler/kurumsal-kimlik/', text: 'Kurumsal Kimlik Tasarımı' },
      { href: '/blog/malatya-seo-rehberi/', text: 'Malatya SEO Rehberi' }
    ]
  }
};

export const getSeoContent = (slug: string): SeoContent | undefined => seoContents[slug];
