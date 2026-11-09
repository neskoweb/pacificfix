/**
 * Next Level Home Services (PacificFix)
 * Modern Interactive Frontend Logic
 */

// 1. GLOBAL PORTFOLIO DATA (All 6 Albums, 54 verified photos)
const portfolioData = {
    electrical: {
      title: "Electrical & Lighting",
      badge: "⚡ Electrical",
      badgeClass: "badge-electrical",
      photos: [
        {
          src: "./portfolio/electrical/electrical-05.jpg",
          title: "Modern Dual-Ring LED Chandelier",
          desc: "Architectural two-tier circular pendant installation with calibrated cable suspension overlooking panoramic bay views."
        },
        {
          src: "./portfolio/electrical/electrical-10.jpg",
          title: "Living Room Recessed Pot Lights",
          desc: "Precision laser-aligned canless LED downlights installed across open-concept living ceiling for uniform warm illumination."
        },
        {
          src: "./portfolio/electrical/electrical-12.jpg",
          title: "Under-Cabinet Kitchen LED Lighting",
          desc: "Warm ambient task lighting highlighting marble backsplash and stone countertops with completely concealed wiring."
        },
        {
          src: "./portfolio/electrical/electrical-11.jpg",
          title: "Under-Cabinet Fixture & Channel Wiring",
          desc: "Low-profile LED fixture installation and neat conduit routing neatly tucked beneath upper kitchen cabinetry."
        },
        {
          src: "./portfolio/electrical/electrical-01.jpg",
          title: "Aerodynamic Wood Ceiling Fan",
          desc: "Balanced ceiling fan mounting on high vaulted ceiling with remote control receiver integration for silent airflow."
        },
        {
          src: "./portfolio/electrical/electrical-07.jpg",
          title: "Enclosed Halo Fandelier with LED Ring",
          desc: "Modern flush-mount hybrid fan and circular ambient LED light fixture with multi-speed wall control."
        },
        {
          src: "./portfolio/electrical/electrical-08.jpg",
          title: "Sculptural Bentwood Ribbon Chandelier",
          desc: "Designer curved wood ribbon dining fixture with reinforced ceiling junction box and height customization."
        },
        {
          src: "./portfolio/electrical/electrical-09.jpg",
          title: "Architectural Ribbon Pendant Light",
          desc: "Center-aligned installation casting multidirectional warm glow through natural bentwood curves."
        },
        {
          src: "./portfolio/electrical/electrical-13.jpg",
          title: "Minimalist Halo Ring Pendant",
          desc: "Suspended circular LED chandelier anchored securely to ceiling joists in corner dining nook."
        },
        {
          src: "./portfolio/electrical/electrical-14.jpg",
          title: "Up & Down Brass Cylinder Wall Sconce",
          desc: "Architectural modern brass sconce producing dramatic dual light cones up and down the hallway wall."
        },
        {
          src: "./portfolio/electrical/electrical-02.jpg",
          title: "Recessed Square Ceiling Light Fixture",
          desc: "Clean square flush LED fixture centered in painted alcove with smooth trim integration."
        },
        {
          src: "./portfolio/electrical/electrical-03.jpg",
          title: "Wall-Mounted Digital Electric Convector",
          desc: "Dedicated circuit connection and secure drywall anchor mounting for high-efficiency digital space heater."
        },
        {
          src: "./portfolio/electrical/electrical-04.jpg",
          title: "Bathroom Ventilation Exhaust Fan",
          desc: "High-CFM quiet exhaust fan installation in skylight shaft with sealed exterior ducting."
        },
        {
          src: "./Photo1.JPEG",
          title: "Kitchen Recessed Can Light Upgrade",
          desc: "Replacement of outdated ceiling fixtures with bright, energy-efficient 3000K recessed LED retrofits."
        },
        {
          src: "./portfolio/electrical/electrical-15.jpg",
          title: "Walnut & Matte Black Dual-Ring LED Pendant",
          desc: "Contemporary suspended circular LED chandelier with wood-grain outer ring and precision-balanced 3-cable ceiling canopy."
        },
        {
          src: "./portfolio/electrical/electrical-16.jpg",
          title: "Tiered Coastal Fringe Flush-Mount Chandelier",
          desc: "Artisanal multi-tier woven and wood-drop drum ceiling fixture casting warm patterned ambient light in nursery bedroom."
        },
        {
          src: "./portfolio/electrical/electrical-17.jpg",
          title: "6-Light Linear Matte Black Cage Chandelier",
          desc: "Modern farmhouse open-frame rectangular dining pendant with dual chain suspension and warm filament Edison LED bulbs."
        },
        {
          src: "./portfolio/electrical/electrical-18.jpg",
          title: "Dual LED Backlit & Front-Lit Vanity Mirrors",
          desc: "Hardwired installation of twin smart illuminated bathroom mirrors with touch dimmer controls, anti-fog heating, and perimeter halo glow."
        }
      ]
    },
    plumbing: {
      title: "Plumbing Services",
      badge: "🔧 Plumbing",
      badgeClass: "badge-plumbing",
      photos: [
        {
          src: "./portfolio/plumbing/plumbing-03.jpg",
          title: "Horow Smart Bidet Toilet Installation",
          desc: "Luxury tankless smart toilet with integrated bidet, digital touchscreen display, and sealed flange on marble hexagon tile."
        },
        {
          src: "./portfolio/plumbing/plumbing-01.jpg",
          title: "Before & After: Kitchen Sink & Faucet",
          desc: "Full upgrade from worn stained basin to modern dual-bowl stainless steel sink with high-arc pull-down faucet."
        },
        {
          src: "./portfolio/plumbing/plumbing-08.jpg",
          title: "Modern One-Piece Skirted Toilet",
          desc: "Flawless level placement, new braided stainless supply line, and anti-microbial silicone perimeter base seal."
        },
        {
          src: "./portfolio/plumbing/plumbing-05.jpg",
          title: "Matte Black Pull-Down & RO Faucet Set",
          desc: "Undermount stainless workstation sink with matching matte black gooseneck faucet and dedicated purified water tap."
        },
        {
          src: "./portfolio/plumbing/plumbing-02.jpg",
          title: "Waterdrop RO Tankless Filtration System",
          desc: "Compact under-sink reverse osmosis water purification unit paired with disposal drain and dedicated supply lines."
        },
        {
          src: "./portfolio/plumbing/plumbing-06.jpg",
          title: "3-Stage Waterdrop Quick-Change Filter",
          desc: "Wall-mounted multi-stage sediment and carbon block filtration unit with leak-free push-fit connections."
        },
        {
          src: "./portfolio/plumbing/plumbing-07.jpg",
          title: "Commercial Spring Pre-Rinse Faucet",
          desc: "Heavy-duty brushed nickel pull-down sprayer faucet installed on custom quartz countertop with soap dispenser."
        },
        {
          src: "./portfolio/plumbing/plumbing-04.jpg",
          title: "High-Efficiency Two-Piece Toilet",
          desc: "Standard dual-flush toilet replacement with new wax ring, closet bolts, and leak-tested shutoff valve."
        }
      ]
    },
    appliances: {
      title: "Appliance Installation & Repair",
      badge: "🧰 Appliances",
      badgeClass: "badge-appliance",
      photos: [
        {
          src: "./portfolio/appliances/appliance-01.jpg",
          title: "Midea U-Shaped Inverter Window AC",
          desc: "Acoustically isolated U-channel window bracket mounting allowing window to open and close freely."
        },
        {
          src: "./portfolio/appliances/appliance-10.jpg",
          title: "Stainless Steel Built-In Dishwasher",
          desc: "Flush-mount under quartz counter with sound insulation, leak-tested supply lines, and high-loop drain connection."
        },
        {
          src: "./portfolio/appliances/appliance-03.jpg",
          title: "KitchenAid Top-Control Dishwasher",
          desc: "Integrated installation with custom cabinetry alignment, moisture barrier tape, and dedicated electrical hookup."
        },
        {
          src: "./portfolio/appliances/appliance-05.jpg",
          title: "Custom Glass-Panel Dishwasher",
          desc: "Precision level installation seamlessly aligned with adjoining white shaker kitchen cabinetry."
        },
        {
          src: "./portfolio/appliances/appliance-02.jpg",
          title: "InSinkErator 1/2 HP Garbage Disposal",
          desc: "Vibration-damped sink flange mount with watertight P-trap drain plumbing and direct electrical connection."
        },
        {
          src: "./portfolio/appliances/appliance-07.jpg",
          title: "InSinkErator Badger 500 Disposal",
          desc: "Direct replacement of failing disposal with unknocked dishwasher inlet and reinforced discharge elbow."
        },
        {
          src: "./portfolio/appliances/appliance-04.jpg",
          title: "LG Window Air Conditioner Exterior",
          desc: "Secure sill-mounted support bracket, weatherproof accordion side insulation, and proper condensate drainage angle."
        },
        {
          src: "./portfolio/appliances/appliance-06.jpg",
          title: "Heavy-Duty Exterior AC Wall Bracket",
          desc: "Reinforced cantilever steel support bracket securely lagged into exterior wall studs for maximum safety."
        },
        {
          src: "./portfolio/appliances/appliance-08.jpg",
          title: "Built-In Glass Ceramic Electric Cooktop",
          desc: "Countertop cutout precision drop-in with heat-resistant perimeter seal and 240V high-amperage junction connection."
        },
        {
          src: "./portfolio/appliances/appliance-09.jpg",
          title: "Through-The-Wall PTAC Climate Unit",
          desc: "Sleeve-mounted commercial heat pump and air conditioner with insulated wall sleeve and weather grille."
        }
      ]
    },
    caulking: {
      title: "Silicone & Caulking",
      badge: "🛡️ Silicone & Sealing",
      badgeClass: "badge-caulking",
      photos: [
        {
          src: "./portfolio/caulking/caulking-03.jpg",
          title: "Marble Shower Bench Joint Sealing",
          desc: "Immaculate crisp white silicone joint between solid quartz bench slab and polished marble wall tiles."
        },
        {
          src: "./portfolio/caulking/caulking-ba-faucet.jpg",
          title: "Before & After: Bathtub Spout Joint",
          desc: "Complete removal of failing moldy caulk, sanitary cleaning, and razor-sharp waterproof silicone bead tooling."
        },
        {
          src: "./portfolio/caulking/caulking-ba-corner.jpg",
          title: "Before & After: Bathtub Wall Corner",
          desc: "Sealing old cracked corner gap with premium 100% mold-resistant silicone along acrylic tub and subway tile."
        },
        {
          src: "./portfolio/caulking/caulking-04.jpg",
          title: "Shower Pan & Linear Drain Perimeter",
          desc: "Watertight expansion joint caulking surrounding linear trench drain and textured non-slip floor tile."
        },
        {
          src: "./portfolio/caulking/caulking-01.jpg",
          title: "Bathtub Perimeter Bead Alignment",
          desc: "Smooth continuous transition bead between tub flange and white horizontal subway tiles."
        },
        {
          src: "./portfolio/caulking/caulking-02.jpg",
          title: "Vertical Tile Corner Seam Seal",
          desc: "Uniform tooling of 90-degree internal corner seam preventing moisture penetration into backer board."
        },
        {
          src: "./portfolio/caulking/caulking-05.jpg",
          title: "Bathroom Vanity Sink & Backsplash",
          desc: "Anti-microbial silicone seal sealing mirror backsplash and white porcelain undermount vanity bowl."
        },
        {
          src: "./portfolio/caulking/caulking-06.jpg",
          title: "Shower Floor & Tub Transition",
          desc: "Waterproof silicone barrier sealing tub apron to tiled shower floor around square decorative drain."
        },
        {
          src: "./portfolio/caulking/caulking-07.jpg",
          title: "Tub Mixer Valve & Apron Joint",
          desc: "Watertight perimeter seal around diverter valve trim plate and tub-to-floor junction."
        }
      ]
    },
    "tv-mounting": {
      title: "TV Mounting & Assembly",
      badge: "📺 TV & Mounting",
      badgeClass: "badge-mounting",
      photos: [
        {
          src: "./portfolio/tv-mounting/mounting-06.jpg",
          title: "TV & Soundbar Mounting",
          desc: "Centered dual mount for large LED TV with companion soundbar bracket and concealed in-wall cable kit."
        },
        {
          src: "./portfolio/tv-mounting/mounting-01.jpg",
          title: "75\" Flush TV & Console Setup",
          desc: "Ultra-slim low-profile wall mount into wooden wall studs with completely hidden cabling above media console."
        },
        {
          src: "./portfolio/tv-mounting/mounting-02.jpg",
          title: "OLED / Frame TV Precision Leveling",
          desc: "Laser-calibrated bracket mounting, initial screen power-up, and smart remote configuration."
        },
        {
          src: "./portfolio/tv-mounting/mounting-04.jpg",
          title: "Legrand / Sanus In-Wall Media Box",
          desc: "Recessed drywall enclosure with integrated 120V outlet and low-voltage pass-through behind the TV."
        },
        {
          src: "./portfolio/tv-mounting/mounting-07.jpg",
          title: "Samsung One Connect In-Wall Housing",
          desc: "Concealed Samsung One Connect box neatly stowed inside the in-wall enclosure with zero visible cords."
        },
        {
          src: "./portfolio/tv-mounting/mounting-03.jpg",
          title: "Surfboard Floating Record Player Shelf",
          desc: "Heavy-duty custom shelf mounting into wall studs supporting vintage turntable and framed vinyl artwork."
        },
        {
          src: "./portfolio/tv-mounting/mounting-05.jpg",
          title: "RealFlame Electric Fireplace Assembly",
          desc: "Complete structural assembly of decorative white wood mantel surround with built-in realistic flame heater."
        }
      ]
    },
    "smart-home": {
      title: "Smart Home & Everyday Handyman",
      badge: "📱 Smart Home & More",
      badgeClass: "badge-smarthome",
      photos: [
        {
          src: "./portfolio/smart-home/smarthome-01.jpg",
          title: "Ecobee Smart Thermostat Setup",
          desc: "Multi-stage HVAC wiring with C-wire power adapter, level mounting, and Wi-Fi mobile app pairing."
        },
        {
          src: "./portfolio/smart-home/smarthome-02.jpg",
          title: "Ring Floodlight Camera Installation",
          desc: "Exterior junction box mounting with weatherproof conduit and motion-activated security camera setup."
        },
        {
          src: "./portfolio/smart-home/handyman-03.jpg",
          title: "Designer Entryway Mirror & Sconces",
          desc: "Precision heavy-mirror anchor installation flanked by matching marble and brass wall lighting fixtures."
        },
        {
          src: "./portfolio/smart-home/handyman-02.jpg",
          title: "Cabinet Hardware & Matte Black Hooks",
          desc: "Template-drilled cabinet bar pulls and laser-aligned row of heavy-duty coat and backpack hooks."
        },
        {
          src: "./portfolio/smart-home/handyman-04.jpg",
          title: "Minimalist Brass Wall Peg Hooks",
          desc: "Modern architectural solid brass wall pegs anchored into wall studs along sunlit hallway alcove."
        },
        {
          src: "./portfolio/smart-home/handyman-05.jpg",
          title: "Mid-Century Modern Art Coat Rack",
          desc: "Multi-point geometric wall sculpture installation with brass peg ends beneath sphere sconce light."
        },
        {
          src: "./portfolio/smart-home/handyman-01.jpg",
          title: "Flooring Transition & Trim Upgrade",
          desc: "Seamless threshold and baseboard transition between hardwood and newly laid carpeting."
        },
        {
          src: "./portfolio/smart-home/smarthome-03.jpg",
          title: "Reolink Dual-Lens Floodlight Security Camera",
          desc: "Exterior brick masonry mounting of panoramic dual-lens 180-degree smart floodlight camera with motion-triggered LEDs."
        },
        {
          src: "./portfolio/smart-home/smarthome-04.jpg",
          title: "Reolink PoE Turret Dome Camera Installation",
          desc: "Clean ceiling-mounted PoE security camera with concealed Cat6 wiring above entry door for 24/7 high-definition perimeter monitoring."
        },
        {
          src: "./portfolio/smart-home/smarthome-06.jpg",
          title: "Ring Video Doorbell Masonry Installation",
          desc: "Venetian bronze Ring smart video doorbell securely anchored to exterior brick entryway with low-voltage chime wiring and smartphone alerts."
        },
        {
          src: "./portfolio/smart-home/smarthome-05.jpg",
          title: "Whole-Home NVR Surveillance Setup & Calibration",
          desc: "Structured media panel installation with PoE network video recorder (NVR), Cat6 routing, and 16-channel camera calibration for full-property security coverage."
        },
        {
          src: "./portfolio/smart-home/handyman-06.jpg",
          title: "Retractable Double French Patio Screen Door",
          desc: "Custom-fitted sliding retractable mosquito mesh screen door installed on backyard exit doors for continuous fresh air flow and insect protection."
        }
      ]
    }
  };

// 2. PORTFOLIO STATE & VIEWER FUNCTIONS (Global scope for 100% reliability)
let currentAlbumKey = null;
let currentPhotoIndex = 0;

function openAlbum(albumKey, startIndex) {
  if (typeof startIndex === 'undefined') startIndex = 0;
  const modal = document.getElementById('lightbox-modal');
  if (!modal || !portfolioData || !portfolioData[albumKey]) {
    console.warn('Album not found or data missing:', albumKey);
    return;
  }
  currentAlbumKey = albumKey;
  currentPhotoIndex = startIndex;
  renderThumbnails();
  updatePhotoView();
  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const modal = document.getElementById('lightbox-modal');
  if (!modal) return;
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function renderThumbnails() {
  const thumbsStrip = document.getElementById('lightbox-thumbnails');
  if (!thumbsStrip || !currentAlbumKey) return;
  const album = portfolioData[currentAlbumKey];
  thumbsStrip.innerHTML = '';
  album.photos.forEach((photo, idx) => {
    const thumb = document.createElement('div');
    thumb.className = 'thumb-item ' + (idx === currentPhotoIndex ? 'active' : '');
    thumb.setAttribute('tabindex', '0');
    thumb.setAttribute('aria-label', 'Thumbnail ' + (idx + 1) + ': ' + photo.title);
    thumb.innerHTML = '<img src="' + photo.src + '" alt="' + photo.title + '">';
    thumb.onclick = function (e) {
      e.stopPropagation();
      currentPhotoIndex = idx;
      updatePhotoView();
    };
    thumbsStrip.appendChild(thumb);
  });
}

function updatePhotoView() {
  if (!currentAlbumKey || !portfolioData[currentAlbumKey]) return;
  const album = portfolioData[currentAlbumKey];
  const photo = album.photos[currentPhotoIndex];
  if (!photo) return;

  const albumTitleEl = document.getElementById('lightbox-album-title');
  const badgeEl = document.getElementById('lightbox-badge');
  const counterEl = document.getElementById('lightbox-counter');
  const imgEl = document.getElementById('lightbox-image');
  const capTitleEl = document.getElementById('lightbox-caption-title');
  const capDescEl = document.getElementById('lightbox-caption-desc');
  const thumbsStrip = document.getElementById('lightbox-thumbnails');

  if (albumTitleEl) albumTitleEl.textContent = album.title;
  if (badgeEl) {
    badgeEl.textContent = album.badge;
    badgeEl.className = 'lightbox-category-badge ' + album.badgeClass;
  }
  if (counterEl) {
    counterEl.textContent = (currentPhotoIndex + 1) + ' / ' + album.photos.length;
  }

  if (imgEl) {
    imgEl.src = photo.src;
    imgEl.alt = photo.title;
    imgEl.style.opacity = '1';
  }

  if (capTitleEl) capTitleEl.textContent = photo.title;
  if (capDescEl) capDescEl.textContent = photo.desc;

  // Update active thumbnail
  if (thumbsStrip) {
    const thumbs = thumbsStrip.querySelectorAll('.thumb-item');
    thumbs.forEach((t, i) => {
      t.classList.toggle('active', i === currentPhotoIndex);
    });
    const activeThumb = thumbs[currentPhotoIndex];
    if (activeThumb && typeof activeThumb.scrollIntoView === 'function') {
      activeThumb.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }
}

let lastNavTimestamp = 0;

function showNextPhoto(e) {
  if (e && e.stopPropagation) e.stopPropagation();
  const now = Date.now();
  if (now - lastNavTimestamp < 150) return;
  lastNavTimestamp = now;

  if (!currentAlbumKey || !portfolioData[currentAlbumKey]) return;
  const count = portfolioData[currentAlbumKey].photos.length;
  currentPhotoIndex = (currentPhotoIndex + 1) % count;
  updatePhotoView();
}

function showPrevPhoto(e) {
  if (e && e.stopPropagation) e.stopPropagation();
  const now = Date.now();
  if (now - lastNavTimestamp < 150) return;
  lastNavTimestamp = now;

  if (!currentAlbumKey || !portfolioData[currentAlbumKey]) return;
  const count = portfolioData[currentAlbumKey].photos.length;
  currentPhotoIndex = (currentPhotoIndex - 1 + count) % count;
  updatePhotoView();
}

// Global exposure for inline onclick attributes and debugging
window.portfolioData = portfolioData;
window.openAlbum = openAlbum;
window.closeLightbox = closeLightbox;
window.showNextPhoto = showNextPhoto;
window.showPrevPhoto = showPrevPhoto;

// Universal document click delegation: clicking ANY album card opens it
document.addEventListener('click', function (e) {
  const card = e.target.closest('.album-card');
  if (card) {
    const key = card.getAttribute('data-album');
    if (key) {
      openAlbum(key, 0);
    }
  }
});

// 3. DOMCONTENTLOADED EVENT LISTENERS (UI Controls & Navigation)
document.addEventListener('DOMContentLoaded', function () {
  // Mobile Navigation Toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-toggle');
  const mainNav = document.querySelector('.main-nav');

  if (mobileMenuBtn && mainNav) {
    mobileMenuBtn.addEventListener('click', function () {
      const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
      mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
      mainNav.classList.toggle('nav-open');
    });

    mainNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        mainNav.classList.remove('nav-open');
      });
    });
  }

  // Service Card "Request This Service" Handlers
  const serviceButtons = document.querySelectorAll('.service-request-btn');
  const serviceSelect = document.getElementById('service-type');
  const messageTextarea = document.getElementById('message');

  serviceButtons.forEach(btn => {
    btn.addEventListener('click', function () {
      const serviceName = this.getAttribute('data-service');
      if (serviceSelect && serviceName) {
        serviceSelect.value = serviceName;
      }
      if (messageTextarea && !messageTextarea.value.trim()) {
        messageTextarea.value = "Hi Alex, I'd like an estimate for " + serviceName + ". ";
      }
    });
  });

  // Interactive FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');
        faqItems.forEach(other => {
          if (other !== item) other.classList.remove('active');
        });
        item.classList.toggle('active', !isOpen);
      });
    }
  });

  // Keyboard navigation for album cards (Enter / Space)
  document.querySelectorAll('.album-card').forEach((card) => {
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const key = card.getAttribute('data-album');
        if (key) openAlbum(key, 0);
      }
    });
  });

  // Lightbox Modal Controls
  const lightbox = document.getElementById('lightbox-modal');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxPrev = document.getElementById('lightbox-prev');
  const lightboxNext = document.getElementById('lightbox-next');

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxNext) lightboxNext.addEventListener('click', showNextPhoto);
  if (lightboxPrev) lightboxPrev.addEventListener('click', showPrevPhoto);

  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target.classList.contains('lightbox-overlay') || e.target === lightbox) {
        closeLightbox();
      }
    });
  }

  // Keyboard navigation for open lightbox
  document.addEventListener('keydown', (e) => {
    const modal = document.getElementById('lightbox-modal');
    if (!modal || !modal.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') showNextPhoto();
    if (e.key === 'ArrowLeft') showPrevPhoto();
  });

  // Mobile Touch Swipe support on Lightbox stage
  let touchStartX = 0;
  let touchEndX = 0;
  const stage = document.querySelector('.lightbox-stage');
  if (stage) {
    stage.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    stage.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const diff = touchEndX - touchStartX;
      if (Math.abs(diff) > 45) {
        if (diff < 0) {
          showNextPhoto();
        } else {
          showPrevPhoto();
        }
      }
    }, { passive: true });
  }

  // Back to Top Button & Sticky Nav Scroll State
  const backToTopBtn = document.querySelector('.back-to-top');
  const header = document.querySelector('.site-header');

  window.addEventListener('scroll', function () {
    const scrollY = window.scrollY;
    if (header) {
      if (scrollY > 20) {
        header.classList.add('header-scrolled');
      } else {
        header.classList.remove('header-scrolled');
      }
    }
    if (backToTopBtn) {
      if (scrollY > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }
  }, { passive: true });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
