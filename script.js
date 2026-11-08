/**
 * Next Level Home Services (PacificFix)
 * Modern Interactive Frontend Logic
 */

document.addEventListener('DOMContentLoaded', function () {
  // 1. Mobile Navigation Toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-toggle');
  const mainNav = document.querySelector('.main-nav');

  if (mobileMenuBtn && mainNav) {
    mobileMenuBtn.addEventListener('click', function () {
      const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
      mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
      mainNav.classList.toggle('nav-open');
    });

    // Close menu when clicking navigation links
    mainNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        mainNav.classList.remove('nav-open');
      });
    });
  }

  // 2. Service Card "Request This Service" Handlers
  const serviceButtons = document.querySelectorAll('.service-request-btn');
  const serviceSelect = document.getElementById('service-type');
  const messageTextarea = document.getElementById('message');

  serviceButtons.forEach(btn => {
    btn.addEventListener('click', function (e) {
      const serviceName = this.getAttribute('data-service');
      if (serviceSelect && serviceName) {
        serviceSelect.value = serviceName;
      }
      if (messageTextarea && !messageTextarea.value.trim()) {
        messageTextarea.value = `Hi Alex, I'd like an estimate for ${serviceName}. `;
      }
    });
  });

  // 3. Interactive FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');
        // Close other items
        faqItems.forEach(other => {
          if (other !== item) other.classList.remove('active');
        });
        item.classList.toggle('active', !isOpen);
      });
    }
  });

  // 4. Interactive 6-Album Portfolio System
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
        }
      ]
    },
    plumbing: {
      title: "Plumbing Services",
      badge: "🔧 Plumbing",
      badgeClass: "badge-plumbing",
      photos: [
        {
          src: "./portfolio/plumbing/plumbing-01.jpg",
          title: "Before & After: Kitchen Sink & Faucet",
          desc: "Full upgrade from worn stained basin to modern dual-bowl stainless steel sink with high-arc pull-down faucet."
        },
        {
          src: "./portfolio/plumbing/plumbing-03.jpg",
          title: "Horow Smart Bidet Toilet Installation",
          desc: "Luxury tankless smart toilet with integrated bidet, digital touchscreen display, and sealed flange on marble hexagon tile."
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
          src: "./portfolio/caulking/caulking-03.jpg",
          title: "Marble Shower Bench Joint Sealing",
          desc: "Immaculate crisp white silicone joint between solid quartz bench slab and polished marble wall tiles."
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
        },
        {
          src: "./portfolio/tv-mounting/mounting-06.jpg",
          title: "TV & Soundbar Mounting",
          desc: "Centered dual mount for large LED TV with companion soundbar bracket and concealed in-wall cable kit."
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
        }
      ]
    }
  };

  let currentAlbumKey = null;
  let currentPhotoIndex = 0;

  const lightbox = document.getElementById('lightbox-modal');
  const lightboxAlbumTitle = document.getElementById('lightbox-album-title');
  const lightboxBadge = document.getElementById('lightbox-badge');
  const lightboxCounter = document.getElementById('lightbox-counter');
  const lightboxImg = document.getElementById('lightbox-image');
  const lightboxCaptionTitle = document.getElementById('lightbox-caption-title');
  const lightboxCaptionDesc = document.getElementById('lightbox-caption-desc');
  const lightboxThumbsStrip = document.getElementById('lightbox-thumbnails');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxPrev = document.getElementById('lightbox-prev');
  const lightboxNext = document.getElementById('lightbox-next');

  // Album card click listeners
  document.querySelectorAll('.album-card').forEach((card) => {
    const albumKey = card.getAttribute('data-album');
    card.addEventListener('click', (e) => {
      e.preventDefault();
      openAlbum(albumKey, 0);
    });
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openAlbum(albumKey, 0);
      }
    });
  });

  function openAlbum(albumKey, startIndex = 0) {
    if (!lightbox || !portfolioData[albumKey]) return;
    currentAlbumKey = albumKey;
    currentPhotoIndex = startIndex;
    renderThumbnails();
    updatePhotoView();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  function renderThumbnails() {
    if (!lightboxThumbsStrip || !currentAlbumKey) return;
    const album = portfolioData[currentAlbumKey];
    lightboxThumbsStrip.innerHTML = '';
    album.photos.forEach((photo, idx) => {
      const thumb = document.createElement('div');
      thumb.className = `thumb-item ${idx === currentPhotoIndex ? 'active' : ''}`;
      thumb.setAttribute('tabindex', '0');
      thumb.setAttribute('aria-label', `Thumbnail ${idx + 1}: ${photo.title}`);
      thumb.innerHTML = `<img src="${photo.src}" alt="${photo.title}">`;
      thumb.addEventListener('click', () => {
        currentPhotoIndex = idx;
        updatePhotoView();
      });
      lightboxThumbsStrip.appendChild(thumb);
    });
  }

  function updatePhotoView() {
    if (!currentAlbumKey || !portfolioData[currentAlbumKey]) return;
    const album = portfolioData[currentAlbumKey];
    const photo = album.photos[currentPhotoIndex];
    if (!photo) return;

    if (lightboxAlbumTitle) lightboxAlbumTitle.textContent = album.title;
    if (lightboxBadge) {
      lightboxBadge.textContent = album.badge;
      lightboxBadge.className = `lightbox-category-badge ${album.badgeClass}`;
    }
    if (lightboxCounter) {
      lightboxCounter.textContent = `${currentPhotoIndex + 1} / ${album.photos.length}`;
    }

    if (lightboxImg) {
      lightboxImg.style.opacity = '0.3';
      lightboxImg.src = photo.src;
      lightboxImg.alt = photo.title;
      lightboxImg.onload = () => {
        lightboxImg.style.opacity = '1';
      };
    }

    if (lightboxCaptionTitle) lightboxCaptionTitle.textContent = photo.title;
    if (lightboxCaptionDesc) lightboxCaptionDesc.textContent = photo.desc;

    // Update active thumb
    if (lightboxThumbsStrip) {
      const thumbs = lightboxThumbsStrip.querySelectorAll('.thumb-item');
      thumbs.forEach((t, i) => {
        t.classList.toggle('active', i === currentPhotoIndex);
      });
      const activeThumb = thumbs[currentPhotoIndex];
      if (activeThumb) {
        activeThumb.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    }
  }

  function showNextPhoto() {
    if (!currentAlbumKey) return;
    const count = portfolioData[currentAlbumKey].photos.length;
    currentPhotoIndex = (currentPhotoIndex + 1) % count;
    updatePhotoView();
  }

  function showPrevPhoto() {
    if (!currentAlbumKey) return;
    const count = portfolioData[currentAlbumKey].photos.length;
    currentPhotoIndex = (currentPhotoIndex - 1 + count) % count;
    updatePhotoView();
  }

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

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!lightbox || !lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') showNextPhoto();
    if (e.key === 'ArrowLeft') showPrevPhoto();
  });

  // Mobile Touch Swipe support
  let touchStartX = 0;
  let touchEndX = 0;
  const stage = document.querySelector('.lightbox-stage');
  if (stage) {
    stage.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    stage.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });
  }

  function handleSwipe() {
    const diff = touchEndX - touchStartX;
    if (Math.abs(diff) > 45) {
      if (diff < 0) {
        showNextPhoto();
      } else {
        showPrevPhoto();
      }
    }
  }

  // 5. Back to Top Button & Sticky Nav Scroll State
  const backToTopBtn = document.querySelector('.back-to-top');
  const header = document.querySelector('.site-header');

  window.addEventListener('scroll', function () {
    const scrollY = window.scrollY;

    // Header shadow on scroll
    if (header) {
      if (scrollY > 20) {
        header.classList.add('header-scrolled');
      } else {
        header.classList.remove('header-scrolled');
      }
    }

    // Back to top visibility
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
