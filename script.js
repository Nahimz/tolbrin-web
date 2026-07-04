// ============================================
// Tolbrín Norte Chico — catálogo y WhatsApp
// Este mismo archivo se incluye en todas las páginas del sitio.
// ============================================

// 👉 Cambia este número por el WhatsApp real del asesor
const WA_NUMBER = "51940048764";

// 👉 Cada categoría tiene su ícono (se reutiliza también como imagen
//    de reemplazo mientras no subas la foto real del producto).
const categories = [
  { slug: "lavavajillas", name: "Lavavajillas",
    icon: '<path d="M12 3v4M8 5l1.5 2.5M16 5l-1.5 2.5"/><ellipse cx="12" cy="15" rx="8" ry="5"/><path d="M4 15c0 2.76 3.58 5 8 5s8-2.24 8-5"/>' },
  { slug: "cocina", name: "Limpieza de cocina",
    icon: '<path d="M12 3c3 4 5 6.5 5 10a5 5 0 0 1-10 0c0-3.5 2-6 5-10z"/>' },
  { slug: "superficies", name: "Cuidado de superficies",
    icon: '<rect x="5" y="4" width="14" height="16" rx="1"/><path d="M9 8l6 8M9 16l6-8" opacity=".5"/>' },
  { slug: "desincrustantes", name: "Desincrustantes",
    icon: '<path d="M12 21a9 9 0 1 0-6.36-2.64"/><path d="M5 15v4h4"/>' },
  { slug: "desinfeccion", name: "Desinfección",
    icon: '<path d="M12 3l7 3v6c0 5-3 8-7 9-4-1-7-4-7-9V6l7-3z"/><path d="M9 12l2 2 4-4"/>' },
  { slug: "desatoradores", name: "Desatoradores",
    icon: '<path d="M6 4v6a4 4 0 0 0 4 4h4a4 4 0 0 1 4 4v3"/><circle cx="6" cy="4" r="1.6"/><circle cx="18" cy="21" r="1.6"/>' },
  { slug: "cuidado-personal", name: "Cuidado personal",
    icon: '<path d="M9 2h6v3H9z"/><path d="M7 5h10v15a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V5z"/><path d="M12 11v6"/>' },
];

// 👉 Coloca cada foto en images/products/ con el nombre indicado en "image".
const products = [
  // ---- Lavavajillas ----
  { name:"Lavavajilla líquida 300 ml", category:"lavavajillas", image:"images/products/lavavajilla-liquida-300ml.jpg",
    desc:"Presentación práctica para el día a día, ideal para hogares y negocios pequeños." },
  { name:"Lavavajilla líquida 1 litro", category:"lavavajillas", image:"images/products/lavavajilla-liquida-1l.jpg",
    desc:"Mayor rendimiento para cocinas con uso constante." },
  { name:"Lavavajilla en pasta 1.2 kg", category:"lavavajillas", image:"images/products/lavavajilla-pasta-1-2kg.jpg",
    desc:"Formato en pasta de alto rendimiento, ideal para restaurantes y negocios." },
  { name:"Lavavajilla 4 litros", category:"lavavajillas", image:"images/products/lavavajilla-liquida-4l.jpg",
    desc:"Presentación grande para uso intensivo en cocinas y comedores." },
  { name:"Lavavajilla en pasta 400 gramos", category:"lavavajillas", image:"images/products/lavavajilla-pasta-400gr.jpg",
    desc:"Buen rendimiento para cocinas con uso constante." },

  // ---- Limpieza de cocina ----
  { name:"Sacagrasa", category:"cocina", image:"images/products/sacagrasa.jpg",
    desc:"Desengrasante potente para cocinas, campanas extractoras y superficies difíciles." },
  { name:"Desengrasante", category:"cocina", image:"images/products/desengrasante.jpg",
    desc:"Remueve grasa acumulada en superficies de cocina y equipos." },
  { name:"Limpiador multiusos en espuma", category:"cocina", image:"images/products/limpiador-multiusos-espuma.jpg",
    desc:"Espuma activa que limpia superficies sin necesidad de enjuague inmediato." },
  { name:"Limpiatodo 900 ml", category:"cocina", image:"images/products/limpiatodo-900ml.jpg",
    desc:"Limpieza rápida de superficies del hogar en presentación compacta." },
  { name:"Limpiatodo galón", category:"cocina", image:"images/products/limpiatodo-galon.jpg",
    desc:"Mismo poder de limpieza en formato grande para uso frecuente." },

  // ---- Cuidado de superficies ----
  { name:"Limpiavidrios", category:"superficies", image:"images/products/limpiavidrios.jpg",
    desc:"Deja vidrios y espejos brillantes, sin manchas ni residuos." },
  { name:"Limpia tapiz", category:"superficies", image:"images/products/limpia-tapiz.jpg",
    desc:"Limpieza específica para tapices y muebles tapizados." },
  { name:"Brilla muebles Cherry Canela", category:"superficies", image:"images/products/brilla-muebles-cherry-canela.jpg",
    desc:"Renueva el brillo de la madera con aroma a cereza y canela." },
  { name:"Brilla muebles flor de naranjo", category:"superficies", image:"images/products/brilla-muebles-flor-naranjo.jpg",
    desc:"Abrillantador de muebles con fragancia floral duradera." },
  { name:"Brilla muebles neutral", category:"superficies", image:"images/products/brilla-muebles-neutral.jpg",
    desc:"Abrillantador de muebles sin fragancia añadida, para todo tipo de acabado." },
  { name:"Silicona 120 ml", category:"superficies", image:"images/products/silicona-120ml.jpg",
    desc:"Protege y da brillo a tableros, muebles y superficies del hogar." },
  { name:"Silicona 300 ml", category:"superficies", image:"images/products/silicona-300ml.jpg",
    desc:"Mismo protector en presentación de mayor rendimiento." },
  { name:"Súper preservante de madera", category:"superficies", image:"images/products/super-preservante-madera.jpg",
    desc:"Protege y conserva superficies de madera expuestas al uso diario." },

  // ---- Desincrustantes ----
  { name:"Sacatodóxido", category:"desincrustantes", image:"images/products/sacatodoxido.jpg",
    desc:"Remueve manchas de óxido en superficies metálicas y sanitarios." },
  { name:"Quitamanchas antibacterial", category:"desincrustantes", image:"images/products/quitamanchas-antibacterial.jpg",
    desc:"Elimina manchas difíciles y desinfecta la superficie tratada." },

  // ---- Desinfección ----
  { name:"Lejía", category:"desinfeccion", image:"images/products/lejia.jpg",
    desc:"Blanquea, desinfecta y elimina manchas en ropa, pisos y superficies." },
  { name:"Antihongos y antibacterial", category:"desinfeccion", image:"images/products/antihongos-antibacterial.jpg",
    desc:"Elimina hongos y bacterias en baños, paredes y superficies húmedas." },
  { name:"Alcohol Isopropílico", category:"desinfeccion", image:"images/products/alcohol-isopropilico.jpg",
    desc:"Desinfección de superficies y equipos que requieren mayor cuidado." },
  { name:"Alcohol Isopropílico 1 galón", category:"desinfeccion", image:"images/products/alcohol-isopropilico-galon.jpg",
    desc:"Mismo poder desinfectante en presentación de mayor volumen." },

  // ---- Desatoradores ----
  { name:"Desatorador para baños", category:"desatoradores", image:"images/products/desatorador-banos.jpg",
    desc:"Destapa tuberías y desagües de inodoros y duchas." },
  { name:"Desatorador para cocina", category:"desatoradores", image:"images/products/desatorador-cocina.jpg",
    desc:"Formulado para destapar desagües con grasa acumulada." },

  // ---- Cuidado personal ----
  { name:"Jabón líquido antibacterial", category:"cuidado-personal", image:"images/products/jabon-liquido-antibacterial.jpg",
    desc:"Limpieza de manos con acción antibacterial." },
  { name:"Jabón líquido frutos rojos", category:"cuidado-personal", image:"images/products/jabon-liquido-frutos-rojos.jpg",
    desc:"Jabón líquido para manos con fragancia a frutos rojos." },
  { name:"Jabón líquido lavanda", category:"cuidado-personal", image:"images/products/jabon-liquido-lavanda.jpg",
    desc:"Jabón líquido para manos con fragancia relajante a lavanda." },
  { name:"Jabón líquido manzana", category:"cuidado-personal", image:"images/products/jabon-liquido-manzana.jpg",
    desc:"Jabón líquido para manos con fragancia fresca a manzana." },
];

let currentFilter = "todos";

function waLink(message) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

function categoryBySlug(slug) {
  return categories.find(c => c.slug === slug);
}

// ---- Barra de filtros + grilla (solo existen en productos.html) ----
function renderFilterBar() {
  const bar = document.getElementById("filterBar");
  if (!bar) return;

  const allBtn = `<button class="filter-btn active" data-filter="todos">Todos</button>`;
  const catBtns = categories.map(c => `
    <button class="filter-btn" data-filter="${c.slug}">
      <svg viewBox="0 0 24 24" stroke="currentColor" fill="none">${c.icon}</svg>
      ${c.name}
    </button>`).join("");

  bar.innerHTML = allBtn + catBtns;

  bar.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      bar.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.getAttribute("data-filter");
      renderGrid();
    });
  });
}

function renderGrid() {
  const grid = document.getElementById("prodGrid");
  if (!grid) return;
  grid.innerHTML = "";

  const list = currentFilter === "todos"
    ? products
    : products.filter(p => p.category === currentFilter);

  list.forEach(p => {
    const cat = categoryBySlug(p.category);
    const card = document.createElement("a");
    card.className = "prod-card";
    card.href = waLink(`Hola, quiero cotizar: ${p.name} Tolbrín`);
    card.target = "_blank";
    card.rel = "noopener";

    card.innerHTML = `
      <div class="prod-photo" data-fallback="true">
        <div class="prod-icon"><svg viewBox="0 0 24 24">${cat.icon}</svg></div>
        <img src="${p.image}" alt="${p.name} Tolbrín" loading="lazy">
      </div>
      <div class="prod-body">
        <span class="prod-tag">${cat.name}</span>
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
        <span class="prod-cta">
          Cotizar por WhatsApp
          <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="2.4"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        </span>
      </div>`;

    const img = card.querySelector("img");
    img.addEventListener("error", () => { img.style.display = "none"; });

    grid.appendChild(card);
  });
}

// ---- Vitrina de categorías del home (index.html) ----
function renderCategoryShowcase() {
  const box = document.getElementById("catShowcase");
  if (!box) return;
  box.innerHTML = categories.map(c => `
    <a class="cat-card" href="productos.html">
      <div class="ic"><svg viewBox="0 0 24 24" stroke="currentColor" fill="none">${c.icon}</svg></div>
      <span>${c.name}</span>
    </a>`).join("");
}

// ---- Cualquier botón/enlace con data-wa-message se vuelve un link de WhatsApp ----
function wireWhatsAppButtons() {
  document.querySelectorAll("[data-wa-message]").forEach(el => {
    el.href = waLink(el.getAttribute("data-wa-message"));
  });
}

// ---- Imágenes con fallback: si la foto no existe, se oculta y queda el ícono/degradado ----
function wireImageFallbacks() {
  document.querySelectorAll("img[data-optional]").forEach(img => {
    img.addEventListener("error", () => { img.style.display = "none"; });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderFilterBar();
  renderGrid();
  renderCategoryShowcase();
  wireWhatsAppButtons();
  wireImageFallbacks();
});
