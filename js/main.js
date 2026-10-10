/* ==========================================================================
   NEXUS PC & TECH LAB - Main UI & Interactivity (Professional)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  renderProducts('all');
  initCatalogFilters();
  initCatalogSearch();
  initModal();
  initOrderTracker();
  initFaqAccordion();
  initContactForm();
});

/* --------------------------------------------------------------------------
   1. Navbar & Mobile Drawer
   -------------------------------------------------------------------------- */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const mobileToggle = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  // Sticky Navbar on Scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navLinks.style.display === 'flex';
      navLinks.style.display = isOpen ? 'none' : 'flex';
      if (!isOpen) {
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '100%';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = '#ffffff';
        navLinks.style.padding = '1.5rem';
        navLinks.style.borderBottom = '1px solid #cbd5e1';
        navLinks.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
      }
    });

    // Close mobile menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          navLinks.style.display = 'none';
        }
      });
    });
  }
}

/* --------------------------------------------------------------------------
   2. Product Catalog Rendering & Filtering
   -------------------------------------------------------------------------- */
let activeCategory = 'all';
let searchQuery = '';

function renderProducts(category = 'all', query = '') {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  grid.innerHTML = '';

  const filtered = PRODUCTS_DATA.filter(prod => {
    const matchesCategory = category === 'all' || prod.category === category;
    const matchesQuery = query === '' || 
      prod.title.toLowerCase().includes(query.toLowerCase()) ||
      prod.specs.some(s => s.toLowerCase().includes(query.toLowerCase()));
    return matchesCategory && matchesQuery;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 3.5rem 1rem; background: #ffffff; border: 1px solid #e2e8f0; border-radius: var(--radius-md);">
        <p style="font-size: 1.1rem; color: var(--text-muted); margin-bottom: 1rem;">No se encontraron productos que coincidan con tu búsqueda.</p>
        <button class="btn btn-outline" onclick="resetFilters()">Restablecer filtros</button>
      </div>
    `;
    return;
  }

  filtered.forEach(prod => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <div class="product-img-box">
        <span class="product-badge ${prod.badgeClass}">${prod.badge}</span>
        <img src="${prod.image}" alt="${prod.title}" loading="lazy">
      </div>
      <div class="product-content">
        <div class="product-category">${prod.category}</div>
        <h3 class="product-title">${prod.title}</h3>
        <div class="product-specs">
          ${prod.specs.slice(0, 3).map(s => `<span class="spec-tag">${s}</span>`).join('')}
        </div>
        <div class="product-footer">
          <div class="product-price-box">
            <span class="product-price-old">$${prod.oldPrice} USD</span>
            <span class="product-price-current">$${prod.price} <small style="font-size: 0.8rem; font-weight: 600; color: var(--text-dim);">USD</small></span>
          </div>
          <div class="product-action-btns">
            <button class="btn-icon" title="Ver especificaciones técnicas" onclick="openProductModal(${prod.id})">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
            </button>
            <button class="btn btn-primary" style="padding: 0.5rem 1rem; font-size: 0.85rem;" onclick="buyProductWhatsApp(${prod.id})">
              Consultar
            </button>
          </div>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

function initCatalogFilters() {
  const tabs = document.querySelectorAll('.filter-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeCategory = tab.getAttribute('data-filter');
      renderProducts(activeCategory, searchQuery);
    });
  });
}

function initCatalogSearch() {
  const searchInput = document.getElementById('catalogSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim();
      renderProducts(activeCategory, searchQuery);
    });
  }
}

window.resetFilters = function() {
  activeCategory = 'all';
  searchQuery = '';
  const searchInput = document.getElementById('catalogSearchInput');
  if (searchInput) searchInput.value = '';
  document.querySelectorAll('.filter-tab').forEach((t, i) => {
    if (i === 0) t.classList.add('active');
    else t.classList.remove('active');
  });
  renderProducts('all');
};

/* --------------------------------------------------------------------------
   3. Product Modal Details
   -------------------------------------------------------------------------- */
function initModal() {
  const overlay = document.getElementById('productModal');
  const closeBtn = document.getElementById('modalCloseBtn');

  if (closeBtn && overlay) {
    closeBtn.addEventListener('click', () => {
      overlay.classList.remove('active');
    });

    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.classList.remove('active');
      }
    });
  }
}

window.openProductModal = function(id) {
  const prod = PRODUCTS_DATA.find(p => p.id === id);
  if (!prod) return;

  const overlay = document.getElementById('productModal');
  const title = document.getElementById('modalTitle');
  const body = document.getElementById('modalBody');

  if (title) title.textContent = prod.title;
  if (body) {
    body.innerHTML = `
      <div style="margin-bottom: 1.5rem;">
        <img src="${prod.image}" alt="${prod.title}" style="width: 100%; max-height: 250px; object-fit: cover; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
      </div>
      <p style="margin-bottom: 1.5rem; font-size: 0.95rem; color: var(--text-muted); line-height: 1.6;">${prod.description}</p>
      <h4 style="font-size: 1rem; margin-bottom: 0.85rem; color: var(--text-main); font-weight: 700;">Especificaciones Técnicas:</h4>
      <ul style="list-style: none; margin-bottom: 1.5rem; display: flex; flex-direction: column; gap: 0.55rem;">
        ${prod.specs.map(s => `
          <li style="display: flex; align-items: center; gap: 0.6rem; font-size: 0.9rem; color: var(--text-muted);">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
            ${s}
          </li>
        `).join('')}
      </ul>
      <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 1.25rem; border-top: 1px solid var(--border-subtle);">
        <div>
          <span style="font-size: 0.85rem; color: var(--text-dim); text-decoration: line-through;">$${prod.oldPrice} USD</span>
          <div style="font-size: 1.8rem; font-weight: 800; color: var(--text-main);">$${prod.price} <small style="font-size: 0.9rem; font-weight: 600; color: var(--text-dim);">USD</small></div>
        </div>
        <button class="btn btn-primary" onclick="buyProductWhatsApp(${prod.id})">
          Solicitar Disponibilidad
        </button>
      </div>
    `;
  }

  if (overlay) overlay.classList.add('active');
};

window.buyProductWhatsApp = function(id) {
  const prod = PRODUCTS_DATA.find(p => p.id === id);
  if (!prod) return;

  const phone = "593999999999";
  const msg = `Estimados NEXUS PC, deseo consultar disponibilidad y precio del producto: *${prod.title}* ($${prod.price} USD). Agradezco detalles para compra y entrega.`;
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank');
};

/* --------------------------------------------------------------------------
   4. Repair Order Tracker
   -------------------------------------------------------------------------- */
function initOrderTracker() {
  const form = document.getElementById('orderTrackerForm');
  const input = document.getElementById('orderCodeInput');
  const resultCard = document.getElementById('orderTrackerResult');

  if (form && input && resultCard) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const code = input.value.trim().toUpperCase();

      if (!code) {
        showToast('Por favor introduzca su número de orden (ej: NX-4821)', 'warning');
        return;
      }

      const order = MOCK_ORDERS[code] || {
        client: "Cliente Registrado",
        device: "Equipo en Mantenimiento",
        issue: "Revisión técnica de laboratorio",
        stage: 2,
        stageLabel: "En Diagnóstico Técnico por Especialista",
        technician: "Ing. Especialista Asignado",
        date: "Hoy",
        statusBadge: "En Proceso"
      };

      resultCard.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-subtle); padding-bottom: 1rem; flex-wrap: wrap; gap: 0.8rem;">
          <div>
            <span style="font-size: 0.8rem; text-transform: uppercase; color: var(--primary-light); font-weight: 700; letter-spacing: 0.05em;">Orden Oficial #${code}</span>
            <h4 style="font-size: 1.25rem; color: var(--text-main); margin-top: 0.2rem;">${order.device}</h4>
            <p style="font-size: 0.85rem; color: var(--text-dim);">Cliente: ${order.client} | Técnico Responsable: ${order.technician}</p>
          </div>
          <span class="badge-live">${order.statusBadge}</span>
        </div>

        <div style="margin: 1.25rem 0; padding: 0.9rem 1.2rem; background: var(--primary-subtle); border-left: 4px solid var(--primary-light); border-radius: 4px;">
          <strong style="color: var(--primary-light); font-size: 0.9rem;">Estado actual:</strong>
          <span style="font-size: 0.9rem; color: var(--text-main);"> ${order.stageLabel}</span>
        </div>

        <div class="status-timeline">
          <div class="timeline-step ${order.stage >= 1 ? 'completed' : ''}">
            <div class="timeline-dot">1</div>
            <div class="timeline-label">Recepción</div>
          </div>
          <div class="timeline-step ${order.stage > 2 ? 'completed' : (order.stage === 2 ? 'current' : '')}">
            <div class="timeline-dot">2</div>
            <div class="timeline-label">Diagnóstico</div>
          </div>
          <div class="timeline-step ${order.stage > 3 ? 'completed' : (order.stage === 3 ? 'current' : '')}">
            <div class="timeline-dot">3</div>
            <div class="timeline-label">Reparación</div>
          </div>
          <div class="timeline-step ${order.stage > 4 ? 'completed' : (order.stage === 4 ? 'current' : '')}">
            <div class="timeline-dot">4</div>
            <div class="timeline-label">Control Calidad</div>
          </div>
          <div class="timeline-step ${order.stage === 5 ? 'completed current' : ''}">
            <div class="timeline-dot">5</div>
            <div class="timeline-label">Listo Entrega</div>
          </div>
        </div>
      `;

      resultCard.classList.add('active');
      showToast(`Orden #${code} localizada correctamente.`);
    });
  }
}

/* --------------------------------------------------------------------------
   5. FAQ Accordion
   -------------------------------------------------------------------------- */
function initFaqAccordion() {
  const items = document.querySelectorAll('.faq-item');
  items.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        items.forEach(i => i.classList.remove('open'));
        if (!isOpen) {
          item.classList.add('open');
        }
      });
    }
  });
}

/* --------------------------------------------------------------------------
   6. Contact Form
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contactName')?.value;
      const email = document.getElementById('contactEmail')?.value;
      const message = document.getElementById('contactMessage')?.value;

      if (!name || !email || !message) {
        showToast('Por favor complete todos los campos obligatorios.', 'warning');
        return;
      }

      showToast(`Gracias ${name}. Su mensaje ha sido enviado al equipo técnico.`);
      form.reset();
    });
  }
}

/* --------------------------------------------------------------------------
   7. Toast Notification Utility (Clean Vectors)
   -------------------------------------------------------------------------- */
window.showToast = function(message, type = 'success') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  
  const iconSvg = type === 'warning' 
    ? `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#d97706" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`
    : `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`;

  toast.innerHTML = `${iconSvg} <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
};
