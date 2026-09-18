/* ==========================================================================
   BIKRAM GORAI — MAIN APPLICATION LOGIC
   Scroll Reveals, Navigation Highlight, Marquee Duplication & Initialization
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 0. Initialize Lucide Icons Pack
  if (window.lucide) {
    lucide.createIcons();
  }

  // 1. Marquee Content Duplication for Infinite Seamless Loop
  const marqueeContent = document.getElementById('marquee-content-track');
  if (marqueeContent) {
    marqueeContent.innerHTML += marqueeContent.innerHTML;
  }

  // 2. Scroll Reveal Animations (IntersectionObserver)
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // 3. Active Nav Link Scroll Spy
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPosition = window.scrollY + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // 4. Systems Perspective "Behind The Interface" Floating Glassmorphism Expander
  const perspectiveWrap = document.getElementById('perspective-interactive-wrap');
  const perspectiveBtn = document.getElementById('perspective-expand-btn');
  const perspectiveBtnText = document.getElementById('perspective-btn-text');
  const perspectiveBtnIcon = document.getElementById('perspective-btn-icon');

  if (perspectiveWrap && perspectiveBtn) {
    perspectiveBtn.addEventListener('click', () => {
      const isExpanded = perspectiveWrap.classList.toggle('expanded');
      perspectiveBtn.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');

      if (isExpanded) {
        if (perspectiveBtnText) perspectiveBtnText.textContent = 'Close Breakdown';
        if (perspectiveBtnIcon) perspectiveBtnIcon.innerHTML = '<i data-lucide="chevron-up" style="width: 16px; height: 16px; stroke-width: 2.5;"></i>';
      } else {
        if (perspectiveBtnText) perspectiveBtnText.textContent = 'Behind The Interface';
        if (perspectiveBtnIcon) perspectiveBtnIcon.innerHTML = '<i data-lucide="chevron-down" style="width: 16px; height: 16px; stroke-width: 2.5;"></i>';

        // When collapsing, smoothly scroll back to the perspective section header
        const perspectiveSection = document.getElementById('perspective');
        if (perspectiveSection) {
          const headerOffset = 80;
          const elementPosition = perspectiveSection.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }

      if (window.lucide) {
        lucide.createIcons();
      }

      // Notify window resize & ScrollTrigger so Mjolnir rope widget & GSAP recalc page bounds
      window.dispatchEvent(new Event('resize'));
      window.dispatchEvent(new Event('scroll'));
      if (typeof ScrollTrigger !== 'undefined') {
        setTimeout(() => ScrollTrigger.refresh(), 350);
      }
    });
  }

  // 5. Clean Return from External Tabs / PDF Links (Prevent stuck hover/focus translation)
  document.querySelectorAll('a[target="_blank"]').forEach(link => {
    link.addEventListener('click', function() {
      const self = this;
      self.blur();
      setTimeout(() => self.blur(), 50);
    });
  });

  window.addEventListener('focus', () => {
    if (document.activeElement && (document.activeElement.tagName === 'A' || document.activeElement.tagName === 'BUTTON')) {
      document.activeElement.blur();
    }
  });

  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
      if (document.activeElement && (document.activeElement.tagName === 'A' || document.activeElement.tagName === 'BUTTON')) {
        document.activeElement.blur();
      }
    }
  });

  // 6. Dual-Snake Competitive GitHub Contribution Simulation Engine
  const canvas = document.getElementById('github-dual-snake-canvas');
  const snakeCard = document.querySelector('.github-snake-card');
  const snakeGraphLink = document.querySelector('.github-snake-graph-link');
  const snakeViewport = document.getElementById('github-snake-viewport');
  const cellTooltip = document.getElementById('github-cell-tooltip');

  if (canvas && snakeCard) {
    const ctx = canvas.getContext('2d');
    const COLS = 53;
    const ROWS = 7;
    const CELL_PITCH = 16;
    const CELL_SIZE = 12;
    const CELL_RADIUS = 2.5;
    const OFFSET_X = 2;
    const OFFSET_Y = 2;
    const BASE_WIDTH = COLS * CELL_PITCH + 4; // 852
    const BASE_HEIGHT = ROWS * CELL_PITCH + 4; // 116

    // High-DPI Retina backing canvas
    const dpr = window.devicePixelRatio || 2;
    canvas.width = BASE_WIDTH * dpr;
    canvas.height = BASE_HEIGHT * dpr;
    ctx.scale(dpr, dpr);

    // Color tokens matching GitHub contribution greens and dual snakes
    const COLORS = {
      c0: '#ebedf0', // GitHub empty / digested background
      c1: '#9be9a8', // Level 1 (GitHub authentic light green)
      c2: '#40c463', // Level 2 (GitHub authentic medium green)
      c3: '#30a14e', // Level 3 (GitHub authentic bold green)
      c4: '#216e39', // Level 4 (GitHub authentic deep forest green)
      border: 'rgba(27, 31, 35, 0.08)',
      rustHead: '#B24726',
      rustBody: '#D96B43',
      blueHead: '#2563EB',
      blueBody: '#3B82F6'
    };

    // Exact commit counts store (bundled snapshot + live API sync)
    let commitCountMap = Object.assign({}, (window.PORTFOLIO_DATA && window.PORTFOLIO_DATA.githubCommitCounts) || {});

    // Compute accurate calendar date and ISO date string for any (col, row) in the 53-week grid
    function getCellDateInfo(col, row) {
      const now = new Date();
      const currentSunday = new Date(now.getFullYear(), now.getMonth(), now.getDate() - now.getDay());
      const cellDate = new Date(currentSunday.getTime() + ((col - 52) * 7 + row) * 86400000);
      const year = cellDate.getFullYear();
      const month = String(cellDate.getMonth() + 1).padStart(2, '0');
      const day = String(cellDate.getDate()).padStart(2, '0');
      const iso = `${year}-${month}-${day}`;
      const formatted = cellDate.toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      });
      return { iso, formatted };
    }

    let originalGrid = [];
    let currentGrid = [];
    let totalFoodCount = 0;
    let eatenCount = 0;
    let isRunning = false;
    let isFinished = false;
    let isVisible = false;
    let animFrameId = null;
    let resetTimer = null;
    let lastStepTime = 0;
    let pendingEats = [];
    const STEP_INTERVAL = 180; // ms per grid step (smooth continuous 60fps glide)

    function isMobileScreen() {
      return window.innerWidth <= 768;
    }

    let snakeA = null; // Rust Snake
    let snakeB = null; // Cobalt Snake
    let roundIndex = 0;

    function initSnakeState() {
      if (resetTimer) {
        clearTimeout(resetTimer);
        resetTimer = null;
      }

      // Alternate start positions across rounds for dynamic variety
      const startAtLeft = (roundIndex % 2 === 0);

      // Start with 4 continuous connected segments facing forward
      snakeA = {
        name: 'Rust Snake',
        body: startAtLeft
          ? [
              { c: 3, r: 0, prevC: 3, prevR: 0 },
              { c: 2, r: 0, prevC: 2, prevR: 0 },
              { c: 1, r: 0, prevC: 1, prevR: 0 },
              { c: 0, r: 0, prevC: 0, prevR: 0 }
            ]
          : [
              { c: 49, r: 0, prevC: 49, prevR: 0 },
              { c: 50, r: 0, prevC: 50, prevR: 0 },
              { c: 51, r: 0, prevC: 51, prevR: 0 },
              { c: 52, r: 0, prevC: 52, prevR: 0 }
            ],
        growth: 0,
        score: 0,
        dir: startAtLeft ? { dc: 1, dr: 0 } : { dc: -1, dr: 0 },
        color: COLORS.rustHead,
        bodyColor: COLORS.rustBody
      };

      snakeB = {
        name: 'Cobalt Snake',
        body: startAtLeft
          ? [
              { c: 3, r: 6, prevC: 3, prevR: 6 },
              { c: 2, r: 6, prevC: 2, prevR: 6 },
              { c: 1, r: 6, prevC: 1, prevR: 6 },
              { c: 0, r: 6, prevC: 0, prevR: 6 }
            ]
          : [
              { c: 49, r: 6, prevC: 49, prevR: 6 },
              { c: 50, r: 6, prevC: 50, prevR: 6 },
              { c: 51, r: 6, prevC: 51, prevR: 6 },
              { c: 52, r: 6, prevC: 52, prevR: 6 }
            ],
        growth: 0,
        score: 0,
        dir: startAtLeft ? { dc: 1, dr: 0 } : { dc: -1, dr: 0 },
        color: COLORS.blueHead,
        bodyColor: COLORS.blueBody
      };

      currentGrid = originalGrid.map(cell => ({ ...cell }));
      eatenCount = 0;
      pendingEats = [];
      isFinished = false;
      lastStepTime = 0;
      render(1);
      alignSnakeViewportRight();
    }

    let userHasScrolledViewport = false;
    if (snakeViewport) {
      snakeViewport.addEventListener('scroll', () => {
        userHasScrolledViewport = true;
      }, { passive: true });
    }

    // Automatically align scroll viewport to right on mobile so latest contributions are front & center
    function alignSnakeViewportRight(force = false) {
      if (snakeViewport && isMobileScreen()) {
        if (force || !userHasScrolledViewport) {
          requestAnimationFrame(() => {
            snakeViewport.scrollLeft = snakeViewport.scrollWidth - snakeViewport.clientWidth;
          });
        }
      }
    }

    window.addEventListener('resize', () => {
      if (isMobileScreen()) {
        alignSnakeViewportRight();
      }
      render();
    });

    function scheduleAutoReset() {
      if (resetTimer) clearTimeout(resetTimer);
      resetTimer = setTimeout(() => {
        if (isVisible) {
          roundIndex++;
          initSnakeState();
        }
      }, 1600); // Brief 1.6s pause after eating all contributions, then restarts fresh!
    }

    // Pathfinding step for single snake
    function moveSnake(snake, otherSnake) {
      if (isFinished) return;
      const head = snake.body[0];

      // Collect remaining active food cells
      const remainingFood = [];
      currentGrid.forEach(cell => {
        if (cell.level > 0) {
          const myDist = Math.abs(head.c - cell.col) + Math.abs(head.r - cell.row);
          remainingFood.push({ ...cell, myDist });
        }
      });

      if (remainingFood.length === 0) {
        if (!isFinished) {
          isFinished = true;
          scheduleAutoReset();
        }
        return;
      }

      // Stochastic candidate selection: probabilistic proximity targeting
      remainingFood.forEach(f => {
        f.priority = f.myDist + (Math.random() * 4.5);
      });
      remainingFood.sort((a, b) => a.priority - b.priority);
      const target = remainingFood[0];

      const dirs = [
        { dc: 0, dr: -1 },
        { dc: 0, dr: 1 },
        { dc: -1, dr: 0 },
        { dc: 1, dr: 0 }
      ];

      // Filter out immediate reverse
      const validDirs = dirs.filter(d => !(d.dc === -snake.dir.dc && d.dr === -snake.dir.dr));
      const moves = [];

      validDirs.forEach(d => {
        const nc = head.c + d.dc;
        const nr = head.r + d.dr;
        if (nc >= 0 && nc < COLS && nr >= 0 && nr < ROWS) {
          const hitsSelf = snake.body.slice(0, -1).some(b => b.c === nc && b.r === nr);
          const hitsOther = otherSnake.body.some(b => b.c === nc && b.r === nr);
          let dist = Math.abs(nc - target.col) + Math.abs(nr - target.row);
          let score = dist + (hitsSelf ? 30 : 0) + (hitsOther ? 15 : 0) + (Math.random() * 0.8);
          moves.push({ d, nc, nr, score });
        }
      });

      if (moves.length === 0) return;
      moves.sort((a, b) => a.score - b.score);
      const best = moves[0];

      snake.dir = best.d;
      const oldPositions = snake.body.map(seg => ({ c: seg.c, r: seg.r }));
      const newHead = {
        c: best.nc,
        r: best.nr,
        prevC: oldPositions[0].c,
        prevR: oldPositions[0].r
      };

      const newBody = [newHead];
      for (let i = 0; i < oldPositions.length; i++) {
        const prev = (i + 1 < oldPositions.length) ? oldPositions[i + 1] : oldPositions[i];
        newBody.push({
          c: oldPositions[i].c,
          r: oldPositions[i].r,
          prevC: prev.c,
          prevR: prev.r
        });
      }

      // Check if food eaten
      const targetIndex = currentGrid.findIndex(c => c.col === newHead.c && c.row === newHead.r);
      if (targetIndex !== -1 && currentGrid[targetIndex].level > 0) {
        const lvl = currentGrid[targetIndex].level;
        snake.score += (lvl * 10) + Math.floor(Math.random() * 4);
        // Grow up to 5 segments like Platane reference
        if (newBody.length < 5) {
          snake.growth += 1;
        }
        pendingEats.push({ targetIndex });
        eatenCount++;
      }

      if (snake.growth > 0) {
        snake.growth--;
      } else {
        newBody.pop();
      }

      snake.body = newBody;

      // Check completion and trigger automatic cycle reset
      if (eatenCount >= totalFoodCount) {
        if (!isFinished) {
          isFinished = true;
          scheduleAutoReset();
        }
      }
    }

    function stepEngine() {
      if (isFinished) return;

      // Ensure any pending digestions from previous step are applied
      if (pendingEats.length > 0) {
        pendingEats.forEach(item => {
          if (currentGrid[item.targetIndex]) {
            currentGrid[item.targetIndex].level = 0;
          }
        });
        pendingEats = [];
      }

      // Fair stochastic turn order
      if (Math.random() < 0.5) {
        moveSnake(snakeA, snakeB);
        moveSnake(snakeB, snakeA);
      } else {
        moveSnake(snakeB, snakeA);
        moveSnake(snakeA, snakeB);
      }
    }

    function drawRoundedRect(x, y, w, h, r) {
      ctx.beginPath();
      ctx.moveTo(x + r, y);
      ctx.arcTo(x + w, y, x + w, y + h, r);
      ctx.arcTo(x + w, y + h, x, y + h, r);
      ctx.arcTo(x, y + h, x, y, r);
      ctx.arcTo(x, y, x + w, y, r);
      ctx.closePath();
    }

    function getCenter(seg) {
      return {
        x: OFFSET_X + seg.c * CELL_PITCH + CELL_SIZE / 2,
        y: OFFSET_Y + seg.r * CELL_PITCH + CELL_SIZE / 2
      };
    }

    function render(progress = 1) {
      ctx.clearRect(0, 0, BASE_WIDTH, BASE_HEIGHT);

      // On mobile screens (<= 768px), display the full intact contribution graph without snakes
      const isMobile = isMobileScreen();
      const gridToDraw = isMobile ? originalGrid : currentGrid;

      // 1. Draw contribution grid cells
      gridToDraw.forEach(cell => {
        const x = OFFSET_X + cell.col * CELL_PITCH;
        const y = OFFSET_Y + cell.row * CELL_PITCH;
        const lvlKey = `c${cell.level}`;
        const fillColor = COLORS[lvlKey] || COLORS.c0;

        drawRoundedRect(x, y, CELL_SIZE, CELL_SIZE, CELL_RADIUS);
        ctx.fillStyle = fillColor;
        ctx.fill();
        ctx.strokeStyle = COLORS.border;
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // 2. Snake animation ONLY enabled on desktop screens (> 768px)
      if (!isMobile) {
        // Clear pending eats midway through the step as the head enters the target cell
        if (progress >= 0.55 && pendingEats.length > 0) {
          pendingEats.forEach(item => {
            if (currentGrid[item.targetIndex]) {
              currentGrid[item.targetIndex].level = 0;
            }
          });
          pendingEats = [];
        }

        [snakeA, snakeB].forEach(snake => {
          if (!snake || snake.body.length === 0) return;
          const len = snake.body.length;
          const body = snake.body;

          // Draw from tail to head so larger head sits on top
          for (let i = len - 1; i >= 0; i--) {
            const seg = body[i];
            const curC = (seg.prevC !== undefined)
              ? seg.prevC + (seg.c - seg.prevC) * progress
              : seg.c;
            const curR = (seg.prevR !== undefined)
              ? seg.prevR + (seg.r - seg.prevR) * progress
              : seg.r;

            const cx = OFFSET_X + curC * CELL_PITCH + CELL_SIZE / 2;
            const cy = OFFSET_Y + curR * CELL_PITCH + CELL_SIZE / 2;

            // Exact Platane dimensions: Head 14.4px (rx 4.5) down to Tail 9.9px (rx 3.3)
            const t = len > 1 ? i / (len - 1) : 0;
            const size = 14.4 - t * 4.5;
            const rx = 4.5 - t * 1.2;

            const x = cx - size / 2;
            const y = cy - size / 2;

            drawRoundedRect(x, y, size, size, rx);
            ctx.fillStyle = (i === 0) ? snake.color : (snake.bodyColor || snake.color);
            ctx.fill();
          }
        });
      }
    }

    function gameLoop(now) {
      // Snake simulation engine runs exclusively on desktop screens
      if (isRunning && isVisible && !isFinished && !isMobileScreen()) {
        if (!lastStepTime) {
          lastStepTime = now;
        }
        const elapsed = now - lastStepTime;

        if (elapsed > STEP_INTERVAL * 2) {
          // Tab restored from background inactivity
          lastStepTime = now;
        } else if (elapsed >= STEP_INTERVAL) {
          stepEngine();
          lastStepTime = now;
        }
      }

      // Compute smooth interpolation progress [0..1]
      const progress = (!isFinished && isRunning && lastStepTime)
        ? Math.min(1, Math.max(0, (now - lastStepTime) / STEP_INTERVAL))
        : 1;

      render(progress);
      animFrameId = requestAnimationFrame(gameLoop);
    }

    // Tooltip interaction
    canvas.addEventListener('mousemove', (e) => {
      if (!cellTooltip) return;
      const rect = canvas.getBoundingClientRect();
      const scaleX = BASE_WIDTH / rect.width;
      const scaleY = BASE_HEIGHT / rect.height;
      const x = (e.clientX - rect.left) * scaleX;
      const y = (e.clientY - rect.top) * scaleY;

      const col = Math.floor((x - OFFSET_X) / CELL_PITCH);
      const row = Math.floor((y - OFFSET_Y) / CELL_PITCH);

      if (col >= 0 && col < COLS && row >= 0 && row < ROWS) {
        const orig = originalGrid.find(c => c.col === col && c.row === row);
        const dateInfo = orig ? { iso: orig.dateIso, formatted: orig.dateFormatted } : getCellDateInfo(col, row);
        const count = (orig && typeof orig.count === 'number') ? orig.count : (commitCountMap[dateInfo.iso] || 0);

        const statusStr = count > 0 ? `· ${count} ${count === 1 ? 'commit' : 'commits'}` : '· No commits';

        cellTooltip.textContent = `${dateInfo.formatted} ${statusStr}`;
        cellTooltip.classList.add('visible');

        const parentRect = snakeGraphLink.getBoundingClientRect();
        cellTooltip.style.left = `${e.clientX - parentRect.left}px`;
        cellTooltip.style.top = `${e.clientY - parentRect.top - 14}px`;
      } else {
        cellTooltip.classList.remove('visible');
      }
    });

    canvas.addEventListener('mouseleave', () => {
      if (cellTooltip) cellTooltip.classList.remove('visible');
    });

    // Viewport IntersectionObserver
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.15) {
            isVisible = true;
            isRunning = true;
            alignSnakeViewportRight();
          } else if (!entry.isIntersecting || entry.intersectionRatio < 0.05) {
            isVisible = false;
            isRunning = false;
            roundIndex = 0;
            userHasScrolledViewport = false;
            if (resetTimer) {
              clearTimeout(resetTimer);
              resetTimer = null;
            }
            if (originalGrid.length > 0) {
              initSnakeState();
            }
          }
        });
      }, { threshold: [0, 0.05, 0.15] });

      observer.observe(snakeCard);
    } else {
      isVisible = true;
      isRunning = true;
    }

    // Fetch and parse real GitHub contributions
    const snakeUrl = 'https://raw.githubusercontent.com/Bikram-Gorai/Bikram-Gorai/output/github-snake.svg';
    fetch(snakeUrl)
      .then(res => {
        if (!res.ok) throw new Error('Failed to load GitHub SVG');
        return res.text();
      })
      .then(svgText => {
        const rects = [];
        const re = /<rect class="([^"]+)" x="([^"]+)" y="([^"]+)"/g;
        let m;
        while ((m = re.exec(svgText)) !== null) {
          if (m[1].includes('c')) {
            rects.push({ cls: m[1], x: parseFloat(m[2]), y: parseFloat(m[3]) });
          }
        }

        const style = (svgText.match(/<style>([\s\S]*?)<\/style>/) || [])[1] || '';
        const colorLevels = {};
        const ruleRe = /\.c\.([a-zA-Z0-9_\-]+)\s*\{fill:\s*var\((--c[0-4])\)/g;
        while ((m = ruleRe.exec(style)) !== null) {
          colorLevels[m[1]] = parseInt(m[2].replace('--c', ''), 10);
        }

        originalGrid = [];
        rects.forEach(r => {
          const col = Math.round((r.x - 2) / 16);
          const row = Math.round((r.y - 2) / 16);
          const parts = r.cls.split(' ');
          const subCls = parts.find(p => p !== 'c' && p.startsWith('c'));
          let level = (subCls && colorLevels[subCls]) ? colorLevels[subCls] : 0;

          const dateInfo = getCellDateInfo(col, row);
          const realCount = commitCountMap[dateInfo.iso] || 0;
          if (realCount > 0 && level === 0) {
            level = 1;
          }

          originalGrid.push({
            col,
            row,
            level,
            count: realCount,
            dateIso: dateInfo.iso,
            dateFormatted: dateInfo.formatted
          });
        });

        totalFoodCount = originalGrid.filter(c => c.level > 0).length;

        // Initialize simulation
        initSnakeState();
        alignSnakeViewportRight(true);
        if (window.lucide) window.lucide.createIcons();
        animFrameId = requestAnimationFrame(gameLoop);

        // Asynchronously sync with live GitHub contributions API for real-time accuracy
        const contribApiUrl = 'https://github-contributions-api.jogruber.de/v4/BIKRAM-GORAI';
        fetch(contribApiUrl)
          .then(res => res.ok ? res.json() : null)
          .then(apiData => {
            if (apiData && Array.isArray(apiData.contributions)) {
              apiData.contributions.forEach(item => {
                if (item.count > 0) {
                  commitCountMap[item.date] = item.count;
                }
              });

              // Update grid cells with fresh live counts and levels
              originalGrid.forEach(cell => {
                if (cell.dateIso && commitCountMap[cell.dateIso] !== undefined) {
                  cell.count = commitCountMap[cell.dateIso];
                  if (cell.count > 0 && cell.level === 0) {
                    cell.level = 1;
                  }
                }
              });

              currentGrid.forEach(cell => {
                const orig = originalGrid.find(o => o.col === cell.col && o.row === cell.row);
                if (orig) {
                  cell.count = orig.count;
                }
              });

              totalFoodCount = originalGrid.filter(c => c.level > 0).length;
            }
          })
          .catch(() => {
            // Bundled fallback remains active
          });
      })
      .catch(() => {
        const fallbackImg = document.getElementById('github-snake-fallback-img');
        if (fallbackImg) fallbackImg.style.display = 'block';
        if (canvas) canvas.style.display = 'none';
      });
  }
});

/* ==========================================================================
   4. Background Asset Preloader (Low Priority Post-Landing Cache)
   Ensures hero loads instantly, then caches all secondary images in background
   ========================================================================== */
(function preloadPortfolioAssets() {
  const assetsToPreload = [
    'assets/images/projects/consistency-daily.png',
    'assets/images/projects/eventix.png',
    'assets/images/projects/anya.png',
    'assets/images/photography/bg1.png',
    'assets/images/photography/bg4.png',
    'assets/images/send-message.svg'
  ];

  function cacheImages() {
    assetsToPreload.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }

  if (document.readyState === 'complete') {
    cacheImages();
  } else {
    window.addEventListener('load', () => {
      if ('requestIdleCallback' in window) {
        requestIdleCallback(cacheImages, { timeout: 2000 });
      } else {
        setTimeout(cacheImages, 200);
      }
    });
  }
})();
