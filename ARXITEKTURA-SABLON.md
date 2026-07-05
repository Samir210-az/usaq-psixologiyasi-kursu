# Kurs Saytı — Arxitektura və Struktur Şablonu

> Bu sənəd, `koqnitiv_kurs` və `usaq-psixologiyasi-kursu` layihələrində istifadə olunan **standart arxitekturanı** təsvir edir. Yeni bir kurs saytı yaradarkən **yalnız rəng sxemi, loqo/mövzu adı və məzmun** dəyişir — bütün struktur, fayl sistemi, JS mühərriki və dizayn qanunauyğunluqları **eynilə** saxlanılır.

---

## 1. Ümumi Layihə Fəlsəfəsi

- Hər kurs saytı: **AN Psixoloji Dəstək və Reabilitasiya Mərkəzi** brendi altında, Samir (@s_akhundoff) tərəfindən idarə olunur.
- Məzmun 5 mütəxəssis perspektivindən yazılır: **Psixoloq, Erqoterapevt, Sensor İnteqrasiya mütəxəssisi, Loqoped, Psixopedaqoq.**
- Hər mövzu formatı: **əvvəlcə elmi/klinik izah → sonra sadə dildə izah → konkret nümunələr → tam detallı seanslar.**
- Heç bir bölmə səthi yazılmır — hər seansda 3 fazalı (Giriş/Əsas hissə/Bağlanış) real dialoqlar olur.

---

## 2. Fayl Strukturu (Hər Repoda Eyni)

```
repo-adı/
├── .nojekyll                  ← BOŞ fayl, repo yaradılan kimi əlavə olunmalı
├── index.html                 ← Ana səhifə (mövzu kartları grid-i)
├── 01-movzu-adi.html          ← Hər mövzu üçün ayrı HTML fayl (ASCII adlar)
├── 02-movzu-adi.html
├── ...
├── styles.css                 ← Ortaq dizayn sistemi (bütün səhifələr paylaşır)
├── engine.js                  ← Seans render mühərriki (bütün səhifələr paylaşır)
├── protect.js                 ← Konsol qorunması / brendinq mesajı
├── pwa.js                     ← PWA install prompt məntiqi
├── manifest.json              ← PWA manifest
├── service-worker.js          ← Keşləmə strategiyası (network-first HTML üçün!)
├── logo.png                   ← Mərkəzin loqosu
├── icon-192.png               ← PWA ikonu (kiçik)
└── icon-512.png               ← PWA ikonu (böyük)
```

**Fayl adlandırma qaydası:** Azərbaycan hərfləri ASCII-yə çevrilir (`ə→e, ğ→gh, ı→i, ş→sh` və s. sadələşdirilir, adətən sadəcə `ə→e, ş→s, ç→c, ğ→g, ı→i, ö→o, ü→u` şəklində). Məsələn: `Yuxu və Yemək` → `05-yuxu-yemek-pozuntusu.html`.

---

## 3. Ana Səhifə (`index.html`) Strukturu

1. `<head>`: manifest, apple-touch-icon, PWA meta teqləri, Google Fonts (`Playfair Display` + `Inter`), `styles.css` **DEYİL** — index.html-də CSS `<style>` daxilində yazılır (unikal grid dizaynı üçün).
2. `<header>`: loqo + mərkəz adı, eyebrow etiket, H1 başlıq (kursun adı), alt mətn, statistika bloku (neçə mövzu/seans/mütəxəssis).
3. `<main><div class="grid" id="grid"></div></main>`: JS ilə dinamik doldurulan kartlar (`lessons` massivi → hər kart: nömrə, ikon, başlıq, təsvir, href, active).
4. `<footer>`: **© illik hüquq qeydi + `By @s_akhundoff` + Instagram linki (mütləq!)**
5. JS: kartların "cursor-follow" işıq effekti, scroll-da görünmə animasiyası (IntersectionObserver), fon "blob"larının parallax hərəkəti (mouse + scroll).

---

## 4. Hər Mövzu Səhifəsinin Sabit Strukturu

Bütün `NN-movzu-adi.html` faylları **eyni ardıcıllıqla** bu bölmələrdən ibarətdir:

| # | Bölmə | Təsvir |
|---|-------|--------|
| — | `<head>` | manifest, ikonlar, fontlar, `styles.css`, unikal `:root{--acc:...}` rəng override |
| — | `.topbar` | loqo + mərkəz adı (sol), Menyu linki + "Mövzu N/15" pill (sağ) |
| — | `.hero` | tag etiketi, H1 başlıq, alt mətn |
| 1 | **Elmi tərif** | `.sci-box` (klinik/DSM-5 tərif) + `.simple-box` (sadə analogiya) + `.lead` (əlavə vurğu) |
| 2 | **Simptomların/aspektlərin təsnifatı** | `.grid-3` → 3 ədəd `.symptom-card` |
| 3 | **Multidisiplinar baxış** | 5 ədəd `.card` (Psixoloji, Erqoterapevt, Sensor İnteqrasiya, Loqoped, Psixopedaqoji) |
| 4 | **Yaş qruplarına görə fokus** | `.age-grid` → 3 ədəd `.age-card` (child/teen/adult class-ları) |
| 5 | **Əsas model/texnika** | Mövzuya uyğun vizual: `.worksheet table`, `.abc-flow`, `.sta-flow`, `.grid-2` (`.dist-card`), `.thermo-wrap`, `.breathe-wrap` və s. |
| 6 | **Seans-seans proqram** | `.session-plan` (JS ilə doldurulur, bax Bölmə 5) |
| 7 | **Praktik iş dəftəri** | `.worksheet table` — doldurulacaq boş cədvəl |
| 8 | **Valideyn tövsiyələri** | `.parent-tips` → 3 ədəd `.tip-card` |
| — | `.quote` | Bir mütəxəssis/mütəfəkkir sitatı |
| — | `.summary-box` | 4 bəndlik yekun siyahı |
| — | `.nav-bottom` | Əvvəlki/Növbəti mövzu düymələri |
| — | `.modal-overlay` + `.modal-box` | Seans popup-ı üçün boş konteyner (JS doldurur) |
| — | `<footer>` | © + `By @s_akhundoff` + Instagram |

---

## 5. Seans Popup Sistemi (`engine.js`) — DƏYİŞMƏZ HİSSƏ

Hər səhifədə `<script>` daxilində belə JS massivı olur:

```js
const TOTAL_SESSIONS = N;
const SESSIONS = [
  {
    "num": 1,
    "title": "Seansın adı",
    "about": "Metod/vasitə haqqında elmi kontekst (tarixçə, müəllif, nəzəri əsas).",
    "goal": "Bu seansın/testin məqsədi — nəyi müəyyən etmək üçündür.",
    "structure": "(Yalnız TESTLƏR üçün) Neçə bölmə/sual, hansı yarımhissələr.",
    "administrator": "Kim tətbiq edə bilər (sertifikatlı psixoloq, loqoped və s.).",
    "materials": ["Material 1", "Material 2"],
    "phases": [
      {"name":"🟢 Giriş (X dəq)","text":["..."],"dialog":[["T","..."],["Uşaq","..."]]},
      {"name":"🔵 Əsas hissə (X dəq)","text":["..."],"dialog":[["T","..."],["Uşaq","..."]]},
      {"name":"🟣 Bağlanış (X dəq)","text":["..."],"dialog":[["T","..."],["Uşaq","..."]]}
    ],
    "scoring": "(Yalnız TESTLƏR üçün) Bal aralıqları və şərh diapazonları.",
    "homework": "Ev tapşırığı və ya 'Yoxdur'."
  },
  ...
];
```

**Popup-da göstərilmə ardıcıllığı** (`engine.js`-in `renderSession()` funksiyası):
1. Seans nömrəsi/başlığı
2. ℹ️ **Haqqında** (`about` — varsa)
3. 🎯 **Keçirilmə məqsədi** (`goal` — həmişə)
4. 🧱 **Struktur** (`structure` — varsa, əsasən testlərdə)
5. 🎓 **Kim tətbiq edə bilər** (`administrator` — varsa)
6. 🧰 **Materiallar** (`materials`)
7. 📋 **Tətbiq qaydası A-dan Z-yə** (`phases` — 3 fazalı, hər fazada real dialoq)
8. 📊 **Xallandırma və Şərh** (`scoring` — varsa, əsasən testlərdə)
9. Ev tapşırığı (`homework`)

> ⚠️ **Vacib qayda:** `engine.js`, `styles.css`, `protect.js`, `pwa.js`, `manifest.json`, `service-worker.js` faylları **YENİ SAYTLARDA DƏYİŞDİRİLMİR** (yalnız marka adı/keş adı kimi kiçik mətn fərqləri istisna olmaqla) — birbaşa köhnə repodan köçürülür.

---

## 6. Dizayn Sistemi (`styles.css`) — Rəng Dəyişkənləri

Hər mövzu səhifəsi öz aksent rəngini `<head>` daxilində override edir:

```html
<style>:root{ --acc:#38bdf8; --acc-soft:rgba(56,189,248,0.16); --acc-rgb:56,189,248; }</style>
```

**Yeni sayt yaradarkən dəyişən yeganə şey budur** — hər mövzuya fərqli, bir-birindən vizual olaraq seçilən rəng verilir (məs. sky, amber, emerald, rose, indigo, violet, cyan, orange, teal, fuchsia, yellow, blue, purple). Fon "blob"ları (`--bg-1`, `--bg-2`) və əsas mətn rəngləri (`--text-1/2/3`) əsas `styles.css`-də sabit qalır, dəyişdirilmir.

**Şrift sistemi (dəyişməz):**
- Başlıqlar: `Playfair Display` (serif, 700-800 çəki)
- Mətn: `Inter` (sans-serif, 300-800 çəki)

**Animasiya prinsipləri (dəyişməz):**
- Fon "blob"ları mouse hərəkətinə görə parallax edir
- Kartlar scroll ilə `IntersectionObserver` vasitəsilə fade-in olur
- Kart üzərində "cursor-follow" işıq effekti (`--mx`, `--my` CSS dəyişənləri)
- Popup modal: fade + scale animasiyası

---

## 7. PWA və Keşləmə Qaydaları

- `manifest.json`: `name`, `short_name`, `description`, `id` sahələri hər yeni sayt üçün yenilənir.
- `service-worker.js`: `CACHE_NAME` hər yeni saytda unikal olmalıdır (məs. `"uyp-kurs-v1"`).
- **HTML səhifələr üçün MÜTLƏQ network-first strategiya** istifadə olunur (əvvəlcə internetdən yoxla, yalnız offline-da keşi göstər) — əks halda istifadəçilər yenilikləri görməyəcək.
- CSS/JS/şəkillər üçün stale-while-revalidate (keşdən sürətli göstər, arxada yenilə) qalır.

---

## 8. GitHub Deployment İş Axını

1. Yeni repo yarat: `POST /user/repos` (`auto_init: true`)
2. Pages aktivləşdir: `POST /repos/{repo}/pages` (`branch: main`, `path: /`)
3. `.nojekyll` faylını **dərhal** əlavə et (boş məzmunla)
4. Köhnə repodan ortaq faylları (`styles.css`, `engine.js`, `protect.js`, `pwa.js`, `manifest.json`, `service-worker.js`, `logo.png`, `icon-192.png`, `icon-512.png`) köçür, marka-spesifik mətnləri (kurs adı, cache adı) yenilə
5. `index.html` və bütün mövzu fayllarını hazırla
6. Hər yükləmədən əvvəl JS sintaksisini `node --check` ilə yoxla
7. Böyük fayllar (loqo və s.) üçün `curl` yox, Python `urllib.request` istifadə et (bash ARG_MAX limiti)
8. Bütün fayllar yükləndikdən sonra **TƏK BİR DƏFƏ** `POST /repos/{repo}/pages/builds` çağır
9. Statusu `/repos/{repo}/pages` ilə yoxla (15 saniyəlik fasilələrlə, "errored" ilk cavab ola bilər — normaldır, təkrar yoxla)

---

## 9. Məzmun Yazma Standartları (Dəyişməz Qaydalar)

- ✅ Hər bölmə **əvvəlcə elmi/klinik**, **sonra sadə dillə** izah olunur, **konkret nümunə** ilə bağlanır.
- ✅ Hər test/vəsait üçün: haqqında + məqsəd + struktur (neçə sual/bölmə) + kim tətbiq edə bilər + materiallar + A-dan-Z tətbiq qaydası + xallandırma diapazonları.
- ✅ Hər terapevtik seans üçün: haqqında (metodun elmi əsası) + məqsəd + kim tətbiq edə bilər + materiallar + 3 fazalı (Giriş/Əsas/Bağlanış) real dialoq + ev tapşırığı.
- ✅ 5 mütəxəssis perspektivi HƏR mövzuda ayrı-ayrı kartlarda verilir.
- ✅ Çox böyük seans sayı olan mövzularda (20+): 10-15 seans tam interaktiv + qalanlar struktur cədvəl şəklində icmal.
- ❌ Heç vaxt tək cümləlik, səthi izahlarla kifayətlənmə.
- ❌ Heç vaxt "damğalayıcı" dil işlətmə (məs. "xəstəlik", "problemli uşaq") — həmişə "dəstək", "fərqlilik", "inkişaf sahəsi" kimi ifadələr.

---

## 10. Footer Standartı (Hər Səhifədə Məcburi)

```html
<footer>
  <p>© 2026 [Kurs Adı] · Mövzu N/15</p>
  <p style="margin-top:8px;">By <a href="https://instagram.com/s_akhundoff" target="_blank" rel="noopener">@s_akhundoff</a></p>
</footer>
```

---

## 11. Yeni Sayt Yaradarkən Yoxlama Siyahısı

- [ ] Repo adı seçildi, GitHub token təmin olundu
- [ ] Repo yaradıldı, Pages aktivləşdirildi, `.nojekyll` əlavə olundu
- [ ] Ortaq fayllar köhnə repodan köçürüldü və marka adları yeniləndi
- [ ] `service-worker.js`-də `CACHE_NAME` unikal edildi
- [ ] `manifest.json`-da ad/təsvir/`id` yeniləndi
- [ ] Mövzu siyahısı və hər birinə unikal aksent rəng təyin olundu
- [ ] Hər mövzu: elmi+sadə izah, 5 mütəxəssis kartı, yaş qrupları, əsas model, tam seanslar, iş dəftəri, valideyn tövsiyələri, sitat, xülasə
- [ ] Hər fayl yükləmədən əvvəl `node --check` ilə yoxlanıldı
- [ ] `index.html`-də bütün kartlar düzgün fayl adlarına bağlandı
- [ ] Footer-də `By @s_akhundoff` + Instagram linki hər səhifədə var
- [ ] Pages tək dəfəlik build edildi və status "built" olana qədər gözlənildi
- [ ] Bütün linklər istifadəçiyə təqdim olundu

---

*Bu sənəd `usaq-psixologiyasi-kursu` layihəsinin tam memarlığını əks etdirir və gələcək kurs saytları üçün istinad nöqtəsidir. Yalnız rənglər, fon aksentləri, mövzu adları və məzmun dəyişir — struktur həmişə eynidir.*
