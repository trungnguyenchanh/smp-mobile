// SMP Mobile — App Controller

(function() {

  function getMode() {
    const params = new URLSearchParams(window.location.search);
    const mode = params.get('mode');
    if (mode === 'customer' || mode === 'technician') return mode;
    return null;
  }

  function isMobileViewport() {
    return window.innerWidth <= 600;
  }

  function renderTabs(mode, currentScreen, target) {
    const tabs = SMP.tabs[mode];
    const cls = mode === 'technician' ? 'tab tech' : 'tab';
    target.innerHTML = tabs.map(t => `
      <div class="${cls} ${t.id === currentScreen ? 'active' : ''}" data-go="${t.id}">
        <i class="ti ti-${t.icon}"></i>
        ${t.label}
      </div>
    `).join('');
  }

  function renderQuickJumps(mode, target, side) {
    const jumps = SMP.quickJumps[mode];
    target.innerHTML = jumps.map(s => `
      <button class="nav-pill" data-${side}-jump="${s}" title="${SMP.screenNames[mode][s]}">
        <i class="ti ti-${SMP.quickJumpIcons[s]}"></i>
      </button>
    `).join('');
  }

  // State for mobile fullscreen mode
  const state = {
    mobile: { mode: getMode() || 'customer', screen: 'home' },
    cust: { screen: 'home' },
    tech: { screen: 'home' },
  };

  function renderMobile() {
    const mode = state.mobile.mode;
    const screen = state.mobile.screen;
    const renderFn = SMP[mode][screen] || SMP[mode].home;
    const screenEl = document.getElementById('mobile-screen');
    const tabbarEl = document.getElementById('mobile-tabbar');
    screenEl.innerHTML = renderFn();
    const tabIds = SMP.tabs[mode].map(t => t.id);
    const activeTab = tabIds.includes(screen) ? screen : 'home';
    renderTabs(mode, activeTab, tabbarEl);
    screenEl.scrollTop = 0;
  }

  function renderDevice() {
    // Customer slot
    const custScreen = state.cust.screen;
    const custRenderFn = SMP.customer[custScreen] || SMP.customer.home;
    document.getElementById('cust-screen').innerHTML = custRenderFn();
    const custTabIds = SMP.tabs.customer.map(t => t.id);
    const custActiveTab = custTabIds.includes(custScreen) ? custScreen : 'home';
    renderTabs('customer', custActiveTab, document.getElementById('cust-tabbar'));
    document.getElementById('cust-screen').scrollTop = 0;
    document.getElementById('cust-screen-name').textContent = SMP.screenNames.customer[custScreen] || 'Trang chủ';

    // Technician slot
    const techScreen = state.tech.screen;
    const techRenderFn = SMP.technician[techScreen] || SMP.technician.home;
    document.getElementById('tech-screen').innerHTML = techRenderFn();
    const techTabIds = SMP.tabs.technician.map(t => t.id);
    const techActiveTab = techTabIds.includes(techScreen) ? techScreen : 'home';
    renderTabs('technician', techActiveTab, document.getElementById('tech-tabbar'));
    document.getElementById('tech-screen').scrollTop = 0;
    document.getElementById('tech-screen-name').textContent = SMP.screenNames.technician[techScreen] || 'Trang chủ';

    // Quick jump nav
    renderQuickJumps('customer', document.getElementById('cust-nav'), 'cust');
    renderQuickJumps('technician', document.getElementById('tech-nav'), 'tech');
  }

  function decideLayout() {
    const mode = getMode();
    const deviceEl = document.getElementById('device-frame');
    const mobileEl = document.getElementById('mobile-app');

    if (mode) {
      // Direct mobile mode (via URL ?mode=customer)
      deviceEl.classList.add('hidden');
      mobileEl.classList.remove('hidden');
      state.mobile.mode = mode;
      renderMobile();
    } else if (isMobileViewport()) {
      // No mode set but viewport is mobile → default to customer
      deviceEl.classList.add('hidden');
      mobileEl.classList.remove('hidden');
      renderMobile();
    } else {
      // Desktop showcase
      deviceEl.classList.remove('hidden');
      mobileEl.classList.add('hidden');
      renderDevice();
    }
  }

  // ============ EVENT HANDLING ============

  document.addEventListener('click', (e) => {
    const target = e.target.closest('[data-go], [data-cust-jump], [data-tech-jump]');
    if (!target) return;

    e.preventDefault();

    // Mobile fullscreen navigation
    if (!document.getElementById('mobile-app').classList.contains('hidden')) {
      const goto = target.dataset.go;
      if (goto) {
        state.mobile.screen = goto;
        renderMobile();
      }
      return;
    }

    // Desktop device frame
    const inCust = target.closest('#cust-screen, #cust-tabbar');
    const inTech = target.closest('#tech-screen, #tech-tabbar');
    const custJump = target.dataset.custJump;
    const techJump = target.dataset.techJump;

    if (custJump) {
      state.cust.screen = custJump;
      renderDevice();
    } else if (techJump) {
      state.tech.screen = techJump;
      renderDevice();
    } else if (inCust) {
      state.cust.screen = target.dataset.go;
      renderDevice();
    } else if (inTech) {
      state.tech.screen = target.dataset.go;
      renderDevice();
    }
  });

  // Switch mode within mobile fullscreen
  window.smpSwitchMode = function(mode) {
    if (mode === 'customer' || mode === 'technician') {
      state.mobile.mode = mode;
      state.mobile.screen = 'home';
      const url = new URL(window.location);
      url.searchParams.set('mode', mode);
      window.history.replaceState({}, '', url);
      renderMobile();
    }
  };

  // Re-evaluate layout on resize
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(decideLayout, 150);
  });

  // Initial render
  decideLayout();
})();
