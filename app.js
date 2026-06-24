/* ═══════════════════════════════════════════════════════════════
   TERANGA SHEIN — app.js · Accessoires Femme
   ═══════════════════════════════════════════════════════════════ */

const WA = '221775399584';
const WAVE_NUM = '77 539 95 84';
const OM_NUM   = '77 539 95 84';

/* ─── DONNÉES PRODUITS (catalogue réel) ─── */
/*
  CATÉGORIES : 'Sacs' | 'Bijoux' | 'Lunettes'
  BADGES     : 'new' | 'sale' | 'hot' | null
  imgs[]     : galerie (plusieurs angles) — la 1re image est la principale
  stock      : quantité disponible
*/
const prods = [
  // ════════ LUNETTES ════════
  {id:1, name:'Lunettes Square Deux Pièces', cat:'Lunettes', price:3000, old:null, stock:1,
   imgs:['images/lunettes-square.jpg'], badge:'hot',
   colors:['#1C1C1C','#6B4226'], stars:4.7, rev:32,
   desc:"Lunettes carrées tendance vendues en duo — une monture noire et une écaille de tortue. Style affirmé et moderne, parfaites pour un look statement."},

  {id:2, name:'Lunettes Frame Patchwork', cat:'Lunettes', price:3500, old:null, stock:2,
   imgs:['images/lunettes-patchwork-1.jpg','images/lunettes-patchwork-2.jpg'], badge:'new',
   colors:['#D8C0C8','#C9A96E'], stars:4.6, rev:21,
   desc:"Monture cat-eye au design patchwork élégant, branches dorées fines. Un mélange de couleurs raffiné qui illumine le regard. Verres anti-lumière bleue."},

  {id:3, name:'Lunettes Black Oval', cat:'Lunettes', price:3000, old:null, stock:2,
   imgs:['images/lunettes-blackoval-1.jpg','images/lunettes-blackoval-2.jpg'], badge:null,
   colors:['#1C1C1C'], stars:4.5, rev:44,
   desc:"Lunettes de soleil ovales noires au détail doré sur les branches. Look rétro-chic intemporel, protection UV. Idéales pour toutes les occasions."},

  {id:4, name:'Lunettes Y2K', cat:'Lunettes', price:2000, old:null, stock:3,
   imgs:['images/lunettes-y2k.jpg'], badge:'sale',
   colors:['#1C1C1C'], stars:4.4, rev:67,
   desc:"Grande monture carrée style Y2K, noir brillant. Tendance streetwear et audacieuse, verres transparents anti-lumière bleue. La pièce mode du moment."},

  {id:5, name:'Lunettes Rétro Cat', cat:'Lunettes', price:3500, old:null, stock:2,
   imgs:['images/lunettes-retrocat.jpg'], badge:null,
   colors:['#1C1C1C'], stars:4.8, rev:38,
   desc:"Lunettes cat-eye rétro noires avec détail doré sur les branches. Forme féline élégante qui structure le visage. Protection UV400, allure glamour."},

  {id:6, name:'Lunettes Cat Eye', cat:'Lunettes', price:3000, old:null, stock:2,
   imgs:['images/lunettes-cateye-1.jpg','images/lunettes-cateye-2.jpg'], badge:null,
   colors:['#1C1C1C'], stars:4.6, rev:29,
   desc:"Lunettes cat-eye noires aux verres fumés, monture épaisse et galbée. Un classique sophistiqué qui ne se démode jamais. Protection solaire optimale."},

  {id:7, name:'Lunettes Cat Eye Cute', cat:'Lunettes', price:3500, old:null, stock:1,
   imgs:['images/lunettes-cateyecute.jpg'], badge:'hot',
   colors:['#F0E0C8'], stars:4.7, rev:18,
   desc:"Lunettes cat-eye beige aux verres teintés ambrés, finition crème douce. Élégance discrète et féminine, parfaites pour sublimer un look estival."},

  // ════════ BIJOUX ════════
  {id:8, name:'Boucles Summer Fleurs', cat:'Bijoux', price:3500, old:null, stock:4,
   imgs:['images/bijou-summer.jpg'], badge:'new',
   colors:['#FFFFFF','#1C1C1C'], stars:4.8, rev:25,
   desc:"Boucles d'oreilles pendantes fleurs en tissu, cascade florale élégante sur tige dorée. Disponibles en deux couleurs : noir et blanc. Légères et romantiques."},

  {id:9, name:'Boucles Fashional Fleurs', cat:'Bijoux', price:3000, old:null, stock:1,
   imgs:['images/bijou-fashional-1.jpg','images/bijou-fashional-2.jpg'], badge:'hot',
   colors:['#6B1A2C','#C9A96E'], stars:4.9, rev:14,
   desc:"Boucles d'oreilles fleurs bordeaux en tissu sur support doré ajouré. Triple fleur effet bouquet, raffinées et tendance. Une pièce forte pour vos soirées."},

  {id:10, name:'Bagues 3 Pièces Géométriques', cat:'Bijoux', price:2000, old:null, stock:1,
   imgs:['images/bijou-bagues-geome.jpg'], badge:'sale',
   colors:['#D4AF37'], stars:4.5, rev:31,
   desc:"Set de 3 bagues dorées géométriques : carré bombé, dôme rond et anneaux multiples. Look moderne et statement, métal doré brillant anti-allergique."},

  {id:11, name:"Set Boucles d'Oreilles (12 paires)", cat:'Bijoux', price:3500, old:null, stock:2,
   imgs:['images/bijou-boucles-set.jpg'], badge:'new',
   colors:['#D4AF37','#FFFFFF'], stars:4.7, rev:52,
   desc:"Coffret de 12 paires de boucles d'oreilles dorées assorties : perles, créoles torsadées, puces, cœurs, carrés. Un set complet pour varier chaque jour."},

  {id:12, name:'Set Bagues Fashion', cat:'Bijoux', price:2500, old:null, stock:2,
   imgs:['images/bijou-bagues-serpent.jpg'], badge:null,
   colors:['#D4AF37'], stars:4.6, rev:23,
   desc:"Set de bagues dorées aux formes organiques fluides et ondulées. Design contemporain et élégant, à empiler sur plusieurs doigts pour un effet tendance."},

  // ════════ SACS ════════
  {id:13, name:'Ensemble Sac Deux Pièces', cat:'Sacs', price:10000, old:null, stock:2,
   imgs:['images/sac-ensemble-marron.jpg'], badge:'hot',
   colors:['#5B3A29'], stars:4.8, rev:41,
   desc:"Grand cabas marron en cuir vegan + pochette assortie incluse. Foulard satiné décoratif offert. Spacieux et chic, parfait pour le quotidien comme le bureau."},

  {id:14, name:'Sac Low Tea Noeud', cat:'Sacs', price:8000, old:null, stock:2,
   imgs:['images/sac-lowtea-1.jpg','images/sac-lowtea-2.jpg'], badge:'new',
   colors:['#6B1A2C'], stars:4.9, rev:19,
   desc:"Sac à main bordeaux effet noeud avec anneau doré signature. Cuir vegan souple, forme tendance et féminine. Élégance moderne pour vos sorties."},

  {id:15, name:'Brown Handbag Noeud', cat:'Sacs', price:8000, old:null, stock:2,
   imgs:['images/sac-brown-handbag.jpg'], badge:null,
   colors:['#F0EBE0','#6B4226'], stars:4.6, rev:27,
   desc:"Sac cabas écru en toile tissée avec finitions cuir marron et noeud décoratif. Look bohème chic et naturel, idéal pour un style estival raffiné."},

  {id:16, name:'Handbag Coach Léopard', cat:'Sacs', price:9000, old:null, stock:2,
   imgs:['images/sac-coach-leopard.jpg'], badge:'hot',
   colors:['#6B4226'], stars:4.7, rev:35,
   desc:"Sac à main boston marron motif léopard avec bandoulière amovible. Cuir vegan premium, format polyvalent. L'accessoire tendance qui complète toute tenue."},

  {id:17, name:'Sac Winter Matelassé', cat:'Sacs', price:11500, old:null, stock:1,
   imgs:['images/sac-winter.jpg'], badge:'new',
   colors:['#6B1A2C'], stars:4.9, rev:12,
   desc:"Sac vanity bordeaux matelassé avec anse rigide et chaîne dorée entrelacée. Détails dorés luxueux, format structuré. Une pièce d'exception très raffinée."},

  {id:18, name:'Sac Contrast MX Chic', cat:'Sacs', price:12000, old:null, stock:2,
   imgs:['images/sac-contrast-1.jpg','images/sac-contrast-2.jpg'], badge:'hot',
   colors:['#FFFFFF','#6B4226'], stars:4.8, rev:22,
   desc:"Sac seau bicolore blanc et marron avec détails dorés et bandoulière. Forme cylindrique tendance, finitions soignées. Chic et original, look couture."},

  {id:19, name:'Sac Rond Paille', cat:'Sacs', price:6500, old:null, stock:3,
   imgs:['images/sac-rond-paille.jpg'], badge:'sale',
   colors:['#C9A96E','#6B4226'], stars:4.5, rev:48,
   desc:"Sac rond en paille tressée avec finitions cuir marron et bandoulière. Esprit estival et naturel, format compact idéal plage ou ville. Indémodable."},

  {id:20, name:'Lunettes Aviateur Oval Gold', cat:'Lunettes', price:4500, old:null, stock:2,
   imgs:['images/lunettes-aviateur-or-1.jpg','images/lunettes-aviateur-or-2.jpg','images/lunettes-aviateur-or-3.jpg'], badge:'new',
   colors:['#D4AF37'], stars:4.8, rev:6,
   desc:"Lunettes aviateur ovales monture entièrement dorée, verres teintés ambrés légèrement rosés. Ultra légères et confortables. Look glamour et raffiné, réf. Astou."},

  {id:21, name:'Lunettes Square Rouge Oversize', cat:'Lunettes', price:3500, old:null, stock:2,
   imgs:['images/lunettes-square-rouge-1.jpg','images/lunettes-square-rouge-2.jpg'], badge:'new',
   colors:['#8B0000','#6B4226'], stars:4.7, rev:4,
   desc:"Grande monture carrée oversize rouge bordeaux avec détails écaille et charnières dorées. Verres légèrement teintés rosés. Style bold et fashion pour un regard qui marque."},

  {id:22, name:'Lunettes Red Frame', cat:'Lunettes', price:3000, old:null, stock:1,
   imgs:['images/lunettes-red-frame.jpg'], badge:'hot',
   colors:['#8B0000'], stars:4.6, rev:9,
   desc:"Lunettes de soleil oversize monture bordeaux brillante avec pont argenté signature. Verres dégradés teintés rosés, protection UV400. Look statement et audacieux."},

  {id:23, name:'Lunettes Men Square', cat:'Lunettes', price:3000, old:null, stock:3,
   imgs:['images/lunettes-men-square.jpg'], badge:'new',
   colors:['#1C1C1C'], stars:4.7, rev:11,
   desc:"Lunettes carrées noires style premium, monture épaisse et verres fumés miroir. Allure urbaine et sophistiquée. Unisexe — parfaites pour hommes et femmes."},
];

const cats = [
  {name:'Nouveautés', img:'images/lunettes-patchwork-1.jpg', nav:'pg-new'},
  {name:'Sacs',       img:'images/sac-lowtea-1.jpg',         nav:'pg-sacs'},
  {name:'Bijoux',     img:'images/bijou-summer.jpg',         nav:'pg-bijoux'},
  {name:'Lunettes',   img:'images/lunettes-cateyecute.jpg',  nav:'pg-lunettes'},
  {name:'Promo',      img:'images/sac-rond-paille.jpg',      nav:'pg-promo'},
]

/* ─── STATE ─── */
let cart = [], wish = [], asz = null, heroIdx = 0;

/* ─── INIT ─── */
document.addEventListener('DOMContentLoaded', () => {
  loadCart();
  renderCats();
  renderHome();
  buildHeroDots();
  setInterval(() => heroGo(1), 6000);
});

/* ════════════════════════════════════════════
   HERO SLIDER
   ════════════════════════════════════════════ */
function buildHeroDots() {
  const total = document.querySelectorAll('#hslides .slide').length;
  document.getElementById('hero-dots').innerHTML =
    Array.from({length:total}, (_,i) =>
      `<button class="sdot${i===0?' on':''}" onclick="heroGo2(${i})"></button>`
    ).join('');
}
function heroGo(d) {
  heroIdx = (heroIdx + d + document.querySelectorAll('#hslides .slide').length) % document.querySelectorAll('#hslides .slide').length;
  heroUpdate();
}
function heroGo2(i) { heroIdx = i; heroUpdate(); }
function heroUpdate() {
  document.getElementById('hslides').style.transform = `translateX(-${heroIdx*100}%)`;
  document.querySelectorAll('#hslides .slide').forEach((s,i) => s.classList.toggle('active', i===heroIdx));
  document.querySelectorAll('.sdot').forEach((d,i) => d.classList.toggle('on', i===heroIdx));
  document.getElementById('hero-cn').textContent = heroIdx + 1;
}

/* ════════════════════════════════════════════
   CATÉGORIES
   ════════════════════════════════════════════ */
function renderCats() {
  document.getElementById('catcards').innerHTML = cats.map(c => {
    const cnt = c.name === 'Nouveautés' ? prods.filter(p => p.badge === 'new').length
              : c.name === 'Promo'      ? prods.filter(p => p.old).length
              : prods.filter(p => p.cat === c.name).length;
    return `<button class="cat-circle" onclick="navTo('${c.nav}')">
      <div class="cc-img"><img src="${c.img}" alt="${c.name}" loading="lazy"></div>
      <div class="cc-name">${c.name}</div>
      <div class="cc-cnt">${cnt} articles</div>
    </button>`;
  }).join('');
}

/* ════════════════════════════════════════════
   GRILLES PRODUITS
   ════════════════════════════════════════════ */
function renderGrid(gridId, list) {
  const g = document.getElementById(gridId);
  if (!g) return;
  if (!list.length) {
    g.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:5rem 1rem">
      <div style="font-size:48px;margin-bottom:1rem;opacity:.3">🔍</div>
      <p style="color:var(--inkmu);font-size:14px">Aucun article dans cette sélection.</p>
    </div>`;
    return;
  }
  g.innerHTML = list.map(p => {
    const off = p.old ? Math.round((1 - p.price / p.old) * 100) : 0;
    const inW = wish.includes(p.id);
    return `<div class="pcard" onclick="openP(${p.id})">
      <div class="pcimg">
        <img src="${p.imgs[0]}" alt="${p.name}" loading="lazy">
        <div class="pcbadges">
          ${p.badge==='new'  ? '<span class="pb pb-new">Nouveau</span>'    : ''}
          ${p.badge==='sale' ? '<span class="pb pb-sale">Promo</span>'     : ''}
          ${p.badge==='hot'  ? '<span class="pb pb-hot">🔥 Top vente</span>' : ''}
        </div>
        ${p.imgs.length>1 ? `<span class="pcgallery">📷 ${p.imgs.length}</span>` : ''}
        <button class="pcwish${inW?' on':''}" onclick="tgWish(event,${p.id})">${inW?'♥':'♡'}</button>
        <button class="pcquick" onclick="event.stopPropagation();addCart(${p.id},null)">Ajouter au panier</button>
      </div>
      <div class="pcinfo">
        <div class="pccat">${p.cat}</div>
        <div class="pcname">${p.name}</div>
        <div class="pcstars">
          <span class="stars">${'★'.repeat(Math.floor(p.stars))}</span>
          <span class="starcnt">${p.stars} (${p.rev})</span>
        </div>
        ${p.colors.length
          ? `<div class="pccolors">${p.colors.map(c=>`<div class="cdot" style="background:${c}"></div>`).join('')}</div>`
          : '<div style="height:20px"></div>'}
        <div class="pcprice">
          <span class="pnow">${p.price.toLocaleString('fr-FR')} FCFA</span>
          ${p.old ? `<span class="pwas">${p.old.toLocaleString('fr-FR')}</span><span class="poff">-${off}%</span>` : ''}
        </div>
        <button class="addbtn" onclick="event.stopPropagation();addCart(${p.id},null)">+ Ajouter au panier</button>
      </div>
    </div>`;
  }).join('');
}

function renderHome() {
  renderGrid('pgrid-home', prods.filter(p => p.badge === 'new').slice(0, 4));
}

/* ─── TRI par catégorie ─── */
function sortCat(slug, by) {
  let list;
  if      (slug === 'new')     list = prods.filter(p => p.badge === 'new');
  else if (slug === 'promo')   list = prods.filter(p => p.old);
  else if (slug === 'top')     list = prods.filter(p => p.badge === 'hot' || p.stars >= 4.6);
  else list = prods.filter(p => p.cat === slug.charAt(0).toUpperCase() + slug.slice(1));
  if (by === 'price-asc')  list.sort((a,b) => a.price - b.price);
  if (by === 'price-desc') list.sort((a,b) => b.price - a.price);
  if (by === 'stars')      list.sort((a,b) => b.stars - a.stars);
  renderGrid('pgrid-' + slug, list);
}

/* ════════════════════════════════════════════
   NAVIGATION
   ════════════════════════════════════════════ */
function navTo(pgId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('on'));
  const pg = document.getElementById(pgId);
  if (!pg) return;
  pg.classList.add('on');
  window.scrollTo(0, 0);
  // Active nav link
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('act'));
  const navMap = {
    'pg-home':'nh','pg-new':'nnew','pg-sacs':'nsacs',
    'pg-bijoux':'nbij','pg-lunettes':'nlun',
    'pg-promo':'npromo','pg-top':'ntop','pg-apropos':'nap'
  };
  if (navMap[pgId]) { const el = document.getElementById(navMap[pgId]); if (el) el.classList.add('act'); }
  // Render content
  const renders = {
    'pg-new': () => {
      const list = prods.filter(p => p.badge === 'new');
      const lbl = document.getElementById('lbl-new');
      if (lbl) lbl.textContent = list.length + ' article' + (list.length>1?'s':'');
      renderGrid('pgrid-new', list);
    },
    'pg-sacs': () => {
      const list = prods.filter(p => p.cat === 'Sacs');
      const lbl = document.getElementById('lbl-sacs');
      if (lbl) lbl.textContent = list.length + ' article' + (list.length>1?'s':'');
      renderGrid('pgrid-sacs', list);
    },
    'pg-bijoux': () => {
      const list = prods.filter(p => p.cat === 'Bijoux');
      const lbl = document.getElementById('lbl-bijoux');
      if (lbl) lbl.textContent = list.length + ' article' + (list.length>1?'s':'');
      renderGrid('pgrid-bijoux', list);
    },
    'pg-lunettes': () => {
      const list = prods.filter(p => p.cat === 'Lunettes');
      const lbl = document.getElementById('lbl-lunettes');
      if (lbl) lbl.textContent = list.length + ' article' + (list.length>1?'s':'');
      renderGrid('pgrid-lunettes', list);
    },
    'pg-promo': () => {
      const list = prods.filter(p => p.old);
      const lbl = document.getElementById('lbl-promo');
      if (lbl) lbl.textContent = list.length + ' article' + (list.length>1?'s':'') + ' en promo';
      renderGrid('pgrid-promo', list);
    },
    'pg-top': () => {
      const list = prods.filter(p => p.badge === 'hot' || p.stars >= 4.6).sort((a,b) => b.stars-a.stars);
      const lbl = document.getElementById('lbl-top');
      if (lbl) lbl.textContent = list.length + ' articles sélectionnés';
      renderGrid('pgrid-top', list);
    },
    'pg-wish': renderWish,
    'pg-home': renderHome,
  };
  if (renders[pgId]) renders[pgId]();
  // Animations
  if (window._animReady) {
    if (window._lenis) window._lenis.scrollTo(0, {immediate:true});
    requestAnimationFrame(() => {
      if (window.ScrollTrigger) ScrollTrigger.refresh();
      initScrollReveals();
      motionEntrance(pg);
    });
  }
}
function goHome() { navTo('pg-home'); }

/* ════════════════════════════════════════════
   MODAL PRODUIT
   ════════════════════════════════════════════ */
function openP(id) {
  const p = prods.find(x => x.id === id);
  asz = null;
  const off = p.old ? Math.round((1 - p.price / p.old) * 100) : 0;
  // Galerie : image principale + miniatures si plusieurs photos
  document.getElementById('pmimgs').innerHTML = `
    <div class="pmgal">
      <div class="pmgal-main"><img id="pmMainImg" src="${p.imgs[0]}" alt="${p.name}"></div>
      ${p.imgs.length>1 ? `<div class="pmgal-thumbs">
        ${p.imgs.map((src,i)=>`<button class="pmthumb${i===0?' on':''}" onclick="swapPmImg('${src}',this)"><img src="${src}" alt=""></button>`).join('')}
      </div>` : ''}
    </div>`;
  const stockTxt = p.stock<=1 ? `<span class="pmstock low">⚠ Dernière pièce disponible</span>`
                 : p.stock<=2 ? `<span class="pmstock low">⚠ Plus que ${p.stock} en stock</span>`
                 : `<span class="pmstock">✓ En stock (${p.stock} disponibles)</span>`;
  document.getElementById('pmbody').innerHTML = `
    <div class="pmbrand">${p.cat}</div>
    <div class="pmname">${p.name}</div>
    <div class="pmpr">
      <span class="pmprice">${p.price.toLocaleString('fr-FR')} FCFA</span>
      ${p.old ? `<span class="pmold">${p.old.toLocaleString('fr-FR')} FCFA</span><span class="pmdisc">-${off}%</span>` : ''}
    </div>
    <div class="pcstars" style="margin-bottom:.6rem">
      <span class="stars">${'★'.repeat(Math.floor(p.stars))}</span>
      <span class="starcnt">${p.stars} (${p.rev} avis)</span>
    </div>
    ${stockTxt}
    ${p.colors.length ? `
      <div class="pmlbl" style="margin-top:1rem">Coloris disponibles</div>
      <div style="display:flex;gap:8px;margin-bottom:1rem">
        ${p.colors.map(c=>`<div style="width:22px;height:22px;border-radius:50%;background:${c};border:2px solid rgba(0,0,0,.12)"></div>`).join('')}
      </div>` : ''}
    <div class="pmlbl" style="margin-top:.5rem">Description</div>
    <p class="pmdesc">${p.desc}</p>
    <div class="pm-delivery">
      <span>📦 Livraison 10–20 jours</span>
      <span>💵 1$ = 650 FCFA</span>
    </div>
    <button class="pmadd" onclick="addCart(${p.id},null);closePM()">🛍 Ajouter au panier</button>
    <button class="pmwa" onclick="qWA(${p.id})"><span style="font-size:17px">💬</span> Commander sur WhatsApp</button>`;
  document.getElementById('pmod').classList.add('on');
  document.body.style.overflow = 'hidden';
  if (window.motionOne) {
    try { window.motionOne.animate('#pmbox', {opacity:[0,1],transform:['scale(.96)','scale(1)']}, {duration:.3,easing:[.22,1,.36,1]}); } catch(e) {}
  }
}
function swapPmImg(src, el) {
  document.getElementById('pmMainImg').src = src;
  document.querySelectorAll('.pmthumb').forEach(t => t.classList.remove('on'));
  el.classList.add('on');
}
function closePM() { document.getElementById('pmod').classList.remove('on'); document.body.style.overflow = ''; }
function closePMout(e) { if (e.target.id === 'pmod') closePM(); }
function qWA(id) {
  const p = prods.find(x => x.id === id);
  const msg = `🛍 *Commande TERANGA SHEIN*\n\n📦 *${p.name}*\n🏷 Catégorie: ${p.cat}\n💰 ${p.price.toLocaleString('fr-FR')} FCFA\n\nBonjour, je souhaite commander cet article. Merci de confirmer la disponibilité.`;
  window.open(`https://wa.me/${WA}?text=${encodeURIComponent(msg)}`, '_blank');
  closePM();
}

/* ════════════════════════════════════════════
   PANIER
   ════════════════════════════════════════════ */
function addCart(id, sz) {
  const p = prods.find(x => x.id === id);
  const key = `${id}`;
  const ex = cart.find(i => i._k === key);
  if (ex) { ex.qty++; toast(`Quantité → ${ex.qty}`); }
  else { cart.push({...p, qty:1, sel:'', _k: key}); toast(`✓ ${p.name} ajouté !`); }
  saveCart(); updCart();
}
function updCart() {
  const cnt = cart.reduce((a,i) => a+i.qty, 0);
  document.getElementById('cbadge').textContent = cnt;
  const b = document.getElementById('cbody'), f = document.getElementById('cfoot');
  if (!cart.length) {
    b.innerHTML = `<div class="cempty">
      <div class="cemptyicon">🛍</div>
      <p style="font-size:13.5px;color:var(--inkmu);margin-bottom:1.5rem">Votre panier est vide</p>
      <button class="btn btn-dark" onclick="closeCart();navTo('pg-new')">Voir les nouveautés →</button>
    </div>`;
    f.style.display = 'none';
    document.getElementById('chdcnt').textContent = '0 article';
    return;
  }
  f.style.display = 'block';
  const sub = cart.reduce((a,i) => a+i.price*i.qty, 0);
  document.getElementById('chdcnt').textContent = `${cnt} article${cnt>1?'s':''}`;
  b.innerHTML = cart.map(it => `
    <div class="citem">
      <div class="citemimg"><img src="${it.imgs[0]}" alt="${it.name}" loading="lazy"></div>
      <div class="citeminfo">
        <div class="citemname">${it.name}</div>
        <div class="citemmeta">${it.cat}</div>
        <div class="citemrow">
          <span class="citemprice">${(it.price*it.qty).toLocaleString('fr-FR')} FCFA</span>
          <div style="display:flex;align-items:center">
            <div class="qty">
              <button onclick="chQ('${it._k}',-1)">−</button>
              <span>${it.qty}</span>
              <button onclick="chQ('${it._k}',1)">+</button>
            </div>
            <button class="cdel" onclick="dlIt('${it._k}')">🗑</button>
          </div>
        </div>
      </div>
    </div>`).join('');
  document.getElementById('fsmsg').textContent = '💵 Taux fixe 1$ = 650 FCFA · Sans frais de commande';
  document.getElementById('crowsarea').innerHTML = `
    <div class="crow"><span>Sous-total</span><span>${sub.toLocaleString('fr-FR')} FCFA</span></div>
    <div class="crow total"><span>Total</span><span>${sub.toLocaleString('fr-FR')} FCFA</span></div>`;
}
function chQ(k, d) { const i = cart.find(x=>x._k===k); if(!i)return; i.qty+=d; if(i.qty<1)cart=cart.filter(x=>x._k!==k); saveCart(); updCart(); }
function dlIt(k) { cart=cart.filter(x=>x._k!==k); saveCart(); updCart(); toast('Article retiré'); }
function toggleCart() {
  document.getElementById('covl').classList.toggle('on');
  document.body.style.overflow = document.getElementById('covl').classList.contains('on') ? 'hidden' : '';
  if (window.motionOne && document.getElementById('covl').classList.contains('on')) {
    try { window.motionOne.animate('#covl .cpanel', {transform:['translateX(24px)','translateX(0)'],opacity:[0,1]}, {duration:.38,easing:[.22,1,.36,1]}); } catch(e) {}
  }
}
function closeCart() { document.getElementById('covl').classList.remove('on'); document.body.style.overflow = ''; }
function hdlOvl(e) { if (e.target.id==='covl') closeCart(); }
function saveCart() { try { localStorage.setItem('ts_cart', JSON.stringify(cart)); } catch(e) {} }
function loadCart() { try { const s=localStorage.getItem('ts_cart'); if(s){cart=JSON.parse(s);updCart();} } catch(e) {} }

/* ════════════════════════════════════════════
   WAVE
   ════════════════════════════════════════════ */
function openWave() { if(!cart.length){toast('Panier vide !');return;} closeCart(); renderWrecap(); document.getElementById('wmod').classList.add('on'); document.body.style.overflow='hidden'; }
function closeWave() { document.getElementById('wmod').classList.remove('on'); document.body.style.overflow=''; }
function renderWrecap() {
  const sub = cart.reduce((a,i)=>a+i.price*i.qty,0);
  document.getElementById('wrecap').innerHTML = `
    <div class="recap-t">📋 Récapitulatif</div>
    ${cart.map(i=>`<div class="ri"><span>${i.name} ×${i.qty}</span><span>${(i.price*i.qty).toLocaleString('fr-FR')} FCFA</span></div>`).join('')}
    <div class="rtotal"><span>TOTAL</span><span>${sub.toLocaleString('fr-FR')} FCFA</span></div>`;
}
async function processWave() {
  const fn=document.getElementById('wfn').value.trim(), ln=document.getElementById('wln').value.trim();
  const ph=document.getElementById('wph').value.trim(), adr=document.getElementById('wadr').value.trim();
  const cit=document.getElementById('wcit').value;
  if(!fn||!ln){alert('Veuillez entrer votre prénom et nom.');return;}
  if(!ph){alert('Veuillez entrer votre numéro Wave.');return;}
  if(!adr){alert('Veuillez entrer votre adresse de livraison.');return;}
  const sub=cart.reduce((a,i)=>a+i.price*i.qty,0);
  const btn=document.getElementById('wsubbtn');
  btn.classList.add('loading'); btn.textContent='⏳ Traitement...';
  await new Promise(r=>setTimeout(r,1800));
  btn.classList.remove('loading');
  closeWave();
  document.getElementById('succmsg').innerHTML = `Merci <b>${fn} ${ln}</b> !<br>Commande de <b>${sub.toLocaleString('fr-FR')} FCFA</b> enregistrée.<br><br>📦 Livraison : <b>${adr}, ${cit}</b><br>📱 Wave : <b>${ph}</b><br><br>Notre équipe vous contacte sous 30 min.`;
  document.getElementById('succmod').classList.add('on');
  let msg=`🆕 *COMMANDE WAVE — TERANGA SHEIN*\n━━━━━━━━━━━━━━━━━━━━\n👤 ${fn} ${ln}\n📞 Wave: ${ph}\n📍 ${adr}, ${cit}\n\n`;
  cart.forEach(i=>msg+=`• ${i.name} ×${i.qty} = ${(i.price*i.qty).toLocaleString('fr-FR')} FCFA\n`);
  msg+=`\n💳 TOTAL: ${sub.toLocaleString('fr-FR')} FCFA`;
  window.open(`https://wa.me/${WA}?text=${encodeURIComponent(msg)}`,'_blank');
  cart=[]; saveCart(); updCart();
}
/* ════════════════════════════════════════════
   ORANGE MONEY
   ════════════════════════════════════════════ */
function openOM() { if(!cart.length){toast('Panier vide !');return;} closeCart(); renderOMrecap(); document.getElementById('ommod').classList.add('on'); document.body.style.overflow='hidden'; }
function closeOM() { document.getElementById('ommod').classList.remove('on'); document.body.style.overflow=''; }
function renderOMrecap() {
  const sub = cart.reduce((a,i)=>a+i.price*i.qty,0);
  document.getElementById('omrecap').innerHTML = `
    <div class="recap-t">📋 Récapitulatif</div>
    ${cart.map(i=>`<div class="ri"><span>${i.name} ×${i.qty}</span><span>${(i.price*i.qty).toLocaleString('fr-FR')} FCFA</span></div>`).join('')}
    <div class="rtotal"><span>TOTAL</span><span>${sub.toLocaleString('fr-FR')} FCFA</span></div>`;
}
async function processOM() {
  const fn=document.getElementById('omfn').value.trim(), ln=document.getElementById('omln').value.trim();
  const ph=document.getElementById('omph').value.trim(), adr=document.getElementById('omadr').value.trim();
  const cit=document.getElementById('omcit').value;
  if(!fn||!ln){alert('Veuillez entrer votre prénom et nom.');return;}
  if(!ph){alert('Veuillez entrer votre numéro Orange Money.');return;}
  if(!adr){alert('Veuillez entrer votre adresse de livraison.');return;}
  const sub=cart.reduce((a,i)=>a+i.price*i.qty,0);
  const btn=document.getElementById('omsubbtn');
  btn.classList.add('loading'); btn.textContent='⏳ Traitement...';
  await new Promise(r=>setTimeout(r,1800));
  btn.classList.remove('loading'); btn.textContent='Confirmer le paiement';
  closeOM();
  document.getElementById('succmsg').innerHTML = `Merci <b>${fn} ${ln}</b> !<br>Commande de <b>${sub.toLocaleString('fr-FR')} FCFA</b> enregistrée.<br><br>📦 Livraison : <b>${adr}, ${cit}</b><br>📱 Orange Money : <b>${ph}</b><br><br>Notre équipe vous contacte sous 30 min.`;
  document.getElementById('succmod').classList.add('on');
  let msg=`🆕 *COMMANDE ORANGE MONEY — TERANGA SHEIN*\n━━━━━━━━━━━━━━━━━━━━\n👤 ${fn} ${ln}\n📞 OM: ${ph}\n📍 ${adr}, ${cit}\n\n`;
  cart.forEach(i=>msg+=`• ${i.name} ×${i.qty} = ${(i.price*i.qty).toLocaleString('fr-FR')} FCFA\n`);
  msg+=`\n🟠 TOTAL: ${sub.toLocaleString('fr-FR')} FCFA`;
  window.open(`https://wa.me/${WA}?text=${encodeURIComponent(msg)}`,'_blank');
  cart=[]; saveCart(); updCart();
}

function sendWA() {
  if(!cart.length){toast('Panier vide !');return;}
  const sub=cart.reduce((a,i)=>a+i.price*i.qty,0);
  let msg=`🛍 *COMMANDE — TERANGA SHEIN*\n━━━━━━━━━━━━━━━━━━━━\n\n📦 *ARTICLES*\n`;
  cart.forEach(i=>msg+=`${i.name} ×${i.qty} · ${i.cat}\n   ${(i.price*i.qty).toLocaleString('fr-FR')} FCFA\n`);
  msg+=`\n*💳 TOTAL: ${sub.toLocaleString('fr-FR')} FCFA*\n💵 1$=650 FCFA · Sans frais · Livraison 10–20j`;
  window.open(`https://wa.me/${WA}?text=${encodeURIComponent(msg)}`,'_blank');
  closeCart();
}

/* ════════════════════════════════════════════
   FAVORIS
   ════════════════════════════════════════════ */
function tgWish(e, id) {
  e.stopPropagation();
  const btn = e.currentTarget;
  if (wish.includes(id)) { wish=wish.filter(x=>x!==id); btn.textContent='♡'; btn.classList.remove('on'); toast('Retiré des favoris'); }
  else { wish.push(id); btn.textContent='♥'; btn.classList.add('on'); toast('♥ Ajouté aux favoris !'); }
}
function renderWish() {
  const g = document.getElementById('wgrid');
  if (!wish.length) {
    g.innerHTML=`<div style="grid-column:1/-1;text-align:center;padding:5rem 1rem">
      <div style="font-size:48px;margin-bottom:1rem;opacity:.3">♡</div>
      <p style="color:var(--inkmu);font-size:14px;margin-bottom:1.5rem">Aucun favori pour l'instant</p>
      <button class="btn btn-dark" onclick="navTo('pg-new')">Voir les nouveautés →</button>
    </div>`;
    return;
  }
  renderGrid('wgrid', prods.filter(p=>wish.includes(p.id)));
}

/* ════════════════════════════════════════════
   RECHERCHE
   ════════════════════════════════════════════ */
function openS() { document.getElementById('sovl').classList.add('on'); setTimeout(()=>document.getElementById('sinput').focus(),80); }
function closeS() { document.getElementById('sovl').classList.remove('on'); }
function closeSout(e) { if(e.target.id==='sovl') closeS(); }
function doSearch(q) {
  const r=document.getElementById('sres');
  if(!q.trim()){r.innerHTML='';return;}
  const found=prods.filter(p=>p.name.toLowerCase().includes(q.toLowerCase())||p.cat.toLowerCase().includes(q.toLowerCase()));
  if(!found.length){r.innerHTML=`<div class="sno">Aucun résultat pour "${q}"</div>`;return;}
  r.innerHTML=found.map(p=>`
    <div class="sitem" onclick="closeS();openP(${p.id})">
      <div class="sitemimg"><img src="${p.imgs[0]}" alt="${p.name}" loading="lazy"></div>
      <div><div class="sitemname">${p.name}</div><div class="sitemcat">${p.cat}</div></div>
      <span class="sitemprice">${p.price.toLocaleString('fr-FR')} FCFA</span>
    </div>`).join('');
}

/* ════════════════════════════════════════════
   DIVERS
   ════════════════════════════════════════════ */
function toggleMenu() {
  ['mobileMenu','menuOverlay','burgerBtn'].forEach(id=>document.getElementById(id).classList.toggle('on'));
  document.body.style.overflow=document.getElementById('mobileMenu').classList.contains('on')?'hidden':'';
}
function subNL() {
  const v=document.getElementById('nlem').value.trim();
  if(!v||!v.includes('@')){toast('Adresse email invalide.');return;}
  document.getElementById('nlem').value='';
  toast('✓ Inscrite ! Vous recevrez nos prochaines offres 🎉');
}
function sendContact() {
  const n=document.getElementById('cfname').value.trim(), m=document.getElementById('cfmsg').value.trim();
  if(!n||!m){toast('Veuillez remplir au moins votre nom et message.');return;}
  const e=document.getElementById('cfemail').value.trim(), s=document.getElementById('cfsubj').value;
  const msg=`💬 *Message via TERANGA SHEIN*\n\n👤 ${n}\n✉ ${e||'Non fourni'}\n📋 ${s}\n\n${m}`;
  window.open(`https://wa.me/221775399584?text=${encodeURIComponent(msg)}`,'_blank');
  toast('✓ Message envoyé sur WhatsApp !');
}

let _toastT;
function toast(msg) {
  const el=document.getElementById('toast');
  el.textContent=msg; el.classList.add('on');
  clearTimeout(_toastT); _toastT=setTimeout(()=>el.classList.remove('on'),3200);
}

/* ════════════════════════════════════════════
   ANIMATIONS (Lenis + GSAP + Motion One)
   ════════════════════════════════════════════ */
window._lenis=null; window._animReady=false;
try {
  if(typeof Lenis!=='undefined'){
    window._lenis=new Lenis({duration:1.15,easing:t=>Math.min(1,1.001-Math.pow(2,-10*t)),smoothWheel:true});
    (function raf(t){window._lenis.raf(t);requestAnimationFrame(raf);})(0);
  }
} catch(e){}
try {
  if(typeof gsap!=='undefined'&&typeof ScrollTrigger!=='undefined'){
    gsap.registerPlugin(ScrollTrigger);
    if(window._lenis){window._lenis.on('scroll',ScrollTrigger.update);gsap.ticker.add(t=>window._lenis.raf(t*1000));gsap.ticker.lagSmoothing(0);}
    window._animReady=true;
  }
} catch(e){}

document.documentElement.classList.add('js-ready');

function initScrollReveals(scope) {
  if(!window._animReady)return;
  const root=scope||document;
  root.querySelectorAll('.sec,.pcard,.trust-item,.val-card,.step-row,.info-card,.about-grid,.cat-circle,.foot-col').forEach(el=>{
    if(el.dataset.revealed)return;
    el.dataset.revealed='1';
    gsap.fromTo(el,{opacity:0,y:28},{opacity:1,y:0,duration:.7,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 90%',once:true}});
  });
}
if(window._animReady){
  initScrollReveals();
  document.querySelectorAll('.slide-bg').forEach(bg=>{
    gsap.to(bg,{yPercent:10,ease:'none',scrollTrigger:{trigger:bg.closest('.slide'),start:'top top',end:'bottom top',scrub:true}});
  });
  const fs=document.querySelector('#hslides .slide.active');
  if(fs){
    gsap.fromTo(fs.querySelector('.slide-tag'),{opacity:0,y:16},{opacity:1,y:0,duration:.6,delay:.15,ease:'power2.out'});
    gsap.fromTo(fs.querySelector('.slide-title'),{opacity:0,y:28},{opacity:1,y:0,duration:.75,delay:.3,ease:'power3.out'});
    gsap.fromTo(fs.querySelector('.slide-sub'),{opacity:0,y:18},{opacity:1,y:0,duration:.65,delay:.48,ease:'power2.out'});
    gsap.fromTo(fs.querySelector('.slide-ctas'),{opacity:0,y:18},{opacity:1,y:0,duration:.65,delay:.62,ease:'power2.out'});
  }
}
function motionEntrance(scope) {
  if(!window.motionOne)return;
  try{
    const{animate,stagger}=window.motionOne,root=scope||document;
    const cards=root.querySelectorAll('.pcard:not([data-mo]),.step-row:not([data-mo]),.val-card:not([data-mo])');
    if(!cards.length)return;
    cards.forEach(c=>c.dataset.mo='1');
    animate(cards,{opacity:[0,1],transform:['translateY(18px)','translateY(0)']},{delay:stagger(.05),duration:.5,easing:[.22,1,.36,1]});
  }catch(e){}
}
document.addEventListener('mouseenter',e=>{
  if(!window.motionOne)return;
  const c=e.target.closest&&e.target.closest('.pcard');
  if(c)try{window.motionOne.animate(c,{transform:'translateY(-4px)'},{duration:.25,easing:[.22,1,.36,1]});}catch(ex){}
},true);
document.addEventListener('mouseleave',e=>{
  if(!window.motionOne)return;
  const c=e.target.closest&&e.target.closest('.pcard');
  if(c)try{window.motionOne.animate(c,{transform:'translateY(0)'},{duration:.25,easing:[.22,1,.36,1]});}catch(ex){}
},true);
const _tc=toggleCart;
toggleCart=function(){_tc();if(window.motionOne&&document.getElementById('covl').classList.contains('on'))try{window.motionOne.animate('#covl .cpanel',{transform:['translateX(24px)','translateX(0)'],opacity:[0,1]},{duration:.38,easing:[.22,1,.36,1]});}catch(e){}};
const _op=openP;
openP=function(id){_op(id);if(window.motionOne)try{window.motionOne.animate('#pmbox',{opacity:[0,1],transform:['scale(.96)','scale(1)']},{duration:.3,easing:[.22,1,.36,1]});}catch(e){}};
motionEntrance(document.getElementById('pg-home'));
