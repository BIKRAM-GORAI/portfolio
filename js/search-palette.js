/* ==========================================================================
   BIKRAM GORAI — COMMAND PALETTE SEARCH MODAL (Ctrl+K)
   Interactive Quick Search & Navigation Modal with Keyboard Navigation
   ========================================================================== */

function initSearchPalette() {
  const triggerBtn = document.getElementById('search-palette-trigger');
  const paletteOverlay = document.getElementById('search-palette-modal');
  const searchInput = document.getElementById('palette-search-input');
  const resultsContainer = document.getElementById('palette-results-list');
  const closeBtn = document.getElementById('palette-close-btn');

  if (!paletteOverlay || !searchInput || !resultsContainer) return;

  let currentItems = [];
  let selectedIndex = 0;

  function openPalette() {
    paletteOverlay.classList.add('open');
    searchInput.value = '';
    currentItems = PORTFOLIO_DATA.searchPaletteItems || [];
    selectedIndex = 0;
    renderResults(currentItems);
    setTimeout(() => searchInput.focus(), 100);
  }

  function closePalette() {
    paletteOverlay.classList.remove('open');
  }

  function updateSelectedState() {
    const listItems = resultsContainer.querySelectorAll('.palette-item');
    listItems.forEach((li, idx) => {
      if (idx === selectedIndex) {
        li.classList.add('selected');
        li.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      } else {
        li.classList.remove('selected');
      }
    });
  }

  function executeItem(item) {
    if (!item) return;
    closePalette();
    if (item.url.startsWith('#')) {
      const target = document.querySelector(item.url);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.open(item.url, '_blank');
    }
  }

  function renderResults(items) {
    resultsContainer.innerHTML = '';
    currentItems = items;
    selectedIndex = 0;

    if (items.length === 0) {
      resultsContainer.innerHTML = `<li style="padding:1.5rem; text-align:center; color:var(--text-muted); font-family:var(--font-mono); font-size:0.8rem;">No matching items found</li>`;
      return;
    }

    items.forEach((item, index) => {
      const li = document.createElement('li');
      li.className = `palette-item ${index === selectedIndex ? 'selected' : ''}`;
      li.innerHTML = `
        <span class="item-title">${item.title}</span>
        <span class="item-category">${item.category}</span>
      `;
      li.addEventListener('click', () => {
        executeItem(item);
      });
      li.addEventListener('mouseenter', () => {
        selectedIndex = index;
        updateSelectedState();
      });
      resultsContainer.appendChild(li);
    });
  }

  // Event Listeners
  if (triggerBtn) {
    triggerBtn.addEventListener('click', openPalette);
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closePalette);
  }

  paletteOverlay.addEventListener('click', (e) => {
    if (e.target === paletteOverlay) closePalette();
  });

  // Keyboard Shortcuts & Arrow Key Navigation
  window.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      paletteOverlay.classList.contains('open') ? closePalette() : openPalette();
      return;
    }

    if (!paletteOverlay.classList.contains('open')) return;

    if (e.key === 'Escape') {
      closePalette();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (currentItems.length > 0) {
        selectedIndex = (selectedIndex + 1) % currentItems.length;
        updateSelectedState();
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (currentItems.length > 0) {
        selectedIndex = (selectedIndex - 1 + currentItems.length) % currentItems.length;
        updateSelectedState();
      }
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (currentItems.length > 0 && currentItems[selectedIndex]) {
        executeItem(currentItems[selectedIndex]);
      }
    }
  });

  // Filter input typing
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    const filtered = PORTFOLIO_DATA.searchPaletteItems.filter(item => 
      item.title.toLowerCase().includes(query) || item.category.toLowerCase().includes(query)
    );
    renderResults(filtered);
  });
}

document.addEventListener('DOMContentLoaded', initSearchPalette);
