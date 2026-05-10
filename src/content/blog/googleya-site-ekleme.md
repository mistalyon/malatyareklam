---
title: "Google'a Site Ekleme 2026: Search Console + Indexing Adım Adım Rehber"
excerpt: "Yeni siteyi Google'a nasıl eklersiniz? Search Console doğrulama, sitemap, indexleme talebi, sık karşılaşılan hatalar ve hızlı görünür olma teknikleri — sıfırdan zirveye."
date: 2026-05-10
category: "SEO"
readTime: "13 dk"
coverEmoji: "🔍"
author: "Malatya Reklam"
seoTitle: "Google'a Site Ekleme Rehberi 2026: Search Console, Sitemap, Index"
seoDescription: "Google'a site nasıl eklenir? Search Console doğrulama yöntemleri, sitemap.xml gönderme, URL inceleme aracı, indexleme problemleri çözümü 2026 rehberi."
keywords: "googleya site ekleme, google'a site ekleme, search console site ekleme, google indexleme, sitemap gönderme, google'a sayfa ekleme"
---

## Google'a Site Eklemek Neden Önemli?

Yeni bir site kurduktan sonra Google'ın siteyi "kendi kendine" bulması haftalar hatta aylar alabilir. Search Console üzerinden manuel ekleme yaparsanız bu süre **24-72 saate** iniyor. 2026 itibarıyla Google sıralamada görünmeyen bir sayfa sıfırdan farksız — bu yazıda yeni siteyi sıfırdan Google'a tanıtmanın 5 adımını ve sık karşılaşılan tüm hataları bulacaksınız.

> **Önemli:** "Google'a site ekleme" demek "ön sıralara çıkma" demek değildir. Eklenince site **bulunabilir** olur; ön sıralara çıkması SEO çalışması ister. Detaylar için [Malatya İşletmeleri İçin SEO Rehberi](/blog/malatya-seo-rehberi/) yazımıza bakabilirsiniz.

## Adım 1: Google Search Console Hesabı Oluştur

1. [search.google.com/search-console](https://search.google.com/search-console) adresine git.
2. Google hesabınla giriş yap (kurumsal e-posta tercih edilir, kişisel Gmail değil).
3. "Mülk ekle" butonuna tıkla.
4. İki seçenek karşına çıkar: **Domain** ve **URL ön eki**.

### Domain mı, URL Ön Eki mi?

- **Domain (önerilen):** Tüm alt domainleri (www, blog, shop) ve protokolleri (http, https) tek bir mülkte birleştirir. DNS doğrulaması gerektirir.
- **URL ön eki:** Sadece tek bir alt domain için (örn: https://www.malatyareklam.com/). Hızlı doğrulama yapılabilir.

**Profesyonel öneri:** Domain mülkü ekleyin; alt domain bazlı raporları sonradan filtrelemek mümkün.

## Adım 2: Site Sahipliğini Doğrula

Google 5 farklı doğrulama yöntemi sunuyor:

### A) HTML Dosya Yükleme (URL ön eki için en hızlı)
1. Google'ın verdiği `googleXXXXXX.html` dosyasını indir.
2. Sitenin kök dizinine yükle (yourdomain.com/googleXXXXXX.html erişilebilmeli).
3. "Doğrula" butonuna bas.

### B) HTML Etiket (Tema editörüne erişim varsa)
`<head>` etiketine `<meta name="google-site-verification" content="XXXXX">` satırını ekle.

### C) DNS TXT Kaydı (Domain mülkü için zorunlu)
1. Verilen TXT kaydını kopyala.
2. Domain sağlayıcının (GoDaddy, Natro, İsim Tescil vb.) DNS panelinde "TXT kaydı ekle" → değer kısmına yapıştır.
3. 5-15 dakika bekle (bazı sağlayıcılarda 24 saat).
4. "Doğrula" butonuna bas.

### D) Google Analytics
Sitenizde Google Analytics 4 etiketi varsa otomatik doğrulama mümkün.

### E) Google Tag Manager
GTM container kodu yüklüyse otomatik doğrulama yapılır.

## Adım 3: Sitemap.xml Oluştur ve Gönder

Sitemap, sitenizdeki tüm URL'lerin Google'a topluca tanıtılmasını sağlar. WordPress'te Yoast/RankMath otomatik üretir (`yoursite.com/sitemap.xml`). Astro/Next.js'de `astro-sitemap` veya `next-sitemap` paketleri kullanılır.

**Sitemap kontrolü:**
1. Tarayıcıda `yoursite.com/sitemap.xml` adresine gir.
2. URL listesi açılıyorsa hazır.
3. Search Console → Sol menü → "Site haritaları" → URL'yi yapıştır → "Gönder".
4. Durum **"Başarılı"** yazmalı, "Keşfedilen URL'ler" sayısı artıyorsa olay tamam.

## Adım 4: URL İnceleme Aracı ile Hızlı Index

Önemli sayfaları (anasayfa, ana hizmetler) tek tek hızlıca indeksletmek için:

1. Search Console üst arama çubuğuna URL'yi yapıştır (ör: `https://malatyareklam.com/hizmetler/web-tasarim/`).
2. Google sistemde tarayacak ve "URL Google'da değil" / "URL Google'da" durumlarından biri çıkacak.
3. "Dizine ekleme isteğinde bulun" butonuna bas.
4. 1-3 dakika tarama, ardından kuyruğa alınma. 24-72 saat içinde index oluyor.

> **Günlük kota:** Tek mülk için günde **10-15 URL** indexleme talebi. Bu yüzden öncelikli sayfalardan başlayın.

## Adım 5: Robots.txt Doğru Ayarla

Yanlışlıkla siteyi tamamen Google'a kapatabilirsiniz. Doğru robots.txt:

```
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /panel/
Sitemap: https://yoursite.com/sitemap.xml
```

**Kontrol:** `yoursite.com/robots.txt` adresinde içerik görünmeli ve `Disallow: /` (slash sonrası boş) **olmamalı** — bu site komple kapalı demektir.

## Sık Karşılaşılan Hatalar ve Çözümleri

### "URL Google'da değil — Tarama: Başarısız"
**Sebep:** Robots.txt engelliyor, site yavaş veya sunucu hata veriyor.
**Çözüm:** Robots.txt kontrol et, Lighthouse hız testi yap (90+ olmalı), hosting durumu kontrol et.

### "URL Google'da — Ancak yönlendirilmiş URL'de"
**Sebep:** Canonical etiketi farklı bir sayfayı işaret ediyor.
**Çözüm:** Sayfanın `<link rel="canonical" href="...">` etiketini doğru URL'e çevir.

### "Bulundu — şu an dizine eklenmedi"
**Sebep:** Google sayfayı gördü ama "kalitesiz" buldu (ince içerik, tekrar, 404 link var).
**Çözüm:** İçeriği genişlet (1.000+ kelime), 5+ iç bağlantı ekle, başlık ve meta açıklama optimize et.

### "Ekleme talebine rağmen 1 hafta geçti, hâlâ index olmadı"
**Sebep:** Yeni domain (90 gün altı) Google'a daha temkinli yaklaşır.
**Çözüm:** Sosyal medyadan paylaş, başka sitelerden 1-2 backlink al, 7 gün daha bekle.

## Hızlı Görünür Olma İçin 7 Profesyonel İpucu

1. **Backlink:** Forumlarda, dizinlerde, partnerlerde linkinizi paylaşın — Google bot oradan gelir.
2. **Sosyal medya paylaşımı:** Twitter/X, LinkedIn linkleri Google'ın bot ziyareti için sinyal.
3. **Internal linking:** Anasayfadan tüm önemli sayfalara link verin.
4. **Schema.org markup:** Organization, LocalBusiness, BreadcrumbList ekleyin.
5. **Site hızı:** LCP < 2.5sn, CLS < 0.1 hedefleyin.
6. **Mobil uyumluluk:** Search Console'da "Mobil Kullanılabilirlik" raporunda hata olmamalı.
7. **HTTPS zorunlu:** SSL'siz site 2026'da indekslenmiyor.

## Bing ve Yandex'i de Unutmayın

Türkiye'de aramaların %93'ü Google'da olsa da Yandex (Rusya pazarı) ve Bing (yapay zeka motorlarına veri besler) ihmal edilmemeli.

- **Bing Webmaster Tools:** [bing.com/webmasters](https://www.bing.com/webmasters) — Search Console'dan otomatik içe aktarma var.
- **Yandex Webmaster:** [webmaster.yandex.com](https://webmaster.yandex.com) — özellikle ihracat yapan markalar için kritik.

## ChatGPT ve AI Motorlarına Site Ekleme (GEO)

2026 itibarıyla [GEO (Generative Engine Optimization)](/blog/geo-seo-yapay-zeka) yapay zeka motorlarında görünür olma sürecidir. ChatGPT, Perplexity, Claude gibi modeller siteyi doğrudan "eklenmiş" olarak değil, web crawl üzerinden öğrenir. Bu yüzden:
- Sitenizin schema.org yapısı kusursuz olmalı.
- "Hakkında" sayfanız ve "Kim olduğunuz" net olmalı.
- Wikidata, Wikipedia gibi otoriter kaynaklarda işletme adınız geçmeli.

## Sıkça Sorulan Sorular

**1) Site ekledikten kaç saat sonra Google'da görünür?**
Search Console'a sitemap gönderilirse 24-72 saatte indexlenir. Sıralamada görünmesi içerik kalitesi ve rekabete bağlı (1 hafta-3 ay).

**2) Search Console ücretli mi?**
Hayır, tamamen ücretsiz.

**3) Eski site URL'lerimi nasıl Google'dan kaldırırım?**
"Kaldırmalar" sekmesinden geçici (6 ay) kaldırma talep edebilirsiniz. Kalıcı için sayfayı 404/410 yapın veya canonical ile başka URL'e yönlendirin.

**4) Site içerisindeki tüm sayfaları tek tek indexlemem gerekir mi?**
Hayır. Sitemap üzerinden Google tüm URL'leri keşfediyor. Sadece **öncelikli** ve "manuel push" istediğiniz sayfalar için URL inceleme aracını kullanın.

**5) Site ekledim ama hâlâ "Bulundu — index edilmedi" diyor.**
İçeriği zenginleştir (1.000+ kelime, 3+ görsel, internal linkler), 7-14 gün bekle, tekrar talep gönder.

## Sonuç

Google'a site ekleme 5 dakikalık bir işlem; ama doğru yapılmazsa aylar boyunca trafik kayıplarına yol açar. Yukarıdaki 5 adımı sırasıyla uygularsanız siteniz 72 saat içinde Google haritasında olacaktır. SEO yönetimini biz devralalım derseniz [iletişim sayfasından](/iletisim/) teklif alabilir veya [WhatsApp'tan](https://wa.me/905446732202?text=Merhaba%2C%20SEO%20hizmeti%20i%C3%A7in%20teklif%20almak%20istiyorum.) hızlı görüşme planlayabilirsiniz.

**İlgili Yazılar:**
- [Google My Business Rehberi](/blog/google-my-business-rehberi/)
- [Hosting Önerileri 2026](/blog/hosting-onerileri-2026/)
- [Domain Alma Rehberi](/blog/domain-alma-rehberi/)
