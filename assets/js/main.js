// Theme functionality
class NomadTheme {
  constructor() {
    this.init();
  }

  init() {
    this.setupNavigation();
    this.setupParticles();
    this.setupAccessibility();
    this.setupTouchGestures();
    this.setupThemeToggle();
    this.setupSearch();
  }

  // Navigation
  setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-links a');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinksContainer = document.querySelector('.nav-links');

    // Mobile menu toggle
    if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener('click', () => {
        navLinksContainer.classList.toggle('active');
        const isOpen = navLinksContainer.classList.contains('active');
        mobileMenuBtn.setAttribute('aria-expanded', isOpen);
        mobileMenuBtn.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
      });
    }

    // Navigation links - no SPA behavior, just mobile menu handling
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        // Close mobile menu on navigation
        navLinksContainer.classList.remove('active');
        if (mobileMenuBtn) {
          mobileMenuBtn.setAttribute('aria-expanded', 'false');
        }
      });
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        navLinksContainer.classList.remove('active');
        if (mobileMenuBtn) {
          mobileMenuBtn.setAttribute('aria-expanded', 'false');
        }
      }
    });
  }

  showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section, .hero');
    
    sections.forEach(section => {
      section.classList.remove('active');
      section.style.display = 'none';
      section.setAttribute('aria-hidden', 'true');
    });
    
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      if (sectionId === 'home') {
        targetSection.style.display = 'flex';
      } else {
        targetSection.style.display = 'block';
        targetSection.classList.add('active');
      }
      targetSection.setAttribute('aria-hidden', 'false');
      
      // Focus management
      const firstFocusable = targetSection.querySelector('a, button, input, [tabindex]:not([tabindex="-1"])');
      if (firstFocusable) {
        firstFocusable.focus();
      }
    }
  }

  updateActiveNav(activeLink) {
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.classList.remove('active');
      link.setAttribute('aria-current', 'false');
    });
    activeLink.classList.add('active');
    activeLink.setAttribute('aria-current', 'page');
  }

  // Lazy-loaded particles
  setupParticles() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;

    // Intersection Observer for lazy loading
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.createParticles();
          observer.disconnect();
        }
      });
    });

    observer.observe(document.querySelector('.hero'));
  }

  createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = window.innerWidth < 768 ? 25 : 50; // Fewer on mobile
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 6 + 's';
      particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
      particlesContainer.appendChild(particle);
    }
  }

  // Accessibility improvements
  setupAccessibility() {
    // Skip link
    const skipLink = document.createElement('a');
    skipLink.href = '#main';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
      position: absolute;
      top: -40px;
      left: 6px;
      background: var(--primary-color);
      color: white;
      padding: 8px;
      text-decoration: none;
      border-radius: 4px;
      z-index: 1001;
      transition: top 0.3s;
    `;
    
    skipLink.addEventListener('focus', () => {
      skipLink.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', () => {
      skipLink.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);

    // ARIA labels for interactive elements
    document.querySelectorAll('.category-btn').forEach(btn => {
      btn.setAttribute('role', 'button');
      btn.setAttribute('aria-pressed', btn.classList.contains('active'));
    });

    // Live region for dynamic content
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.style.cssText = `
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    `;
    document.body.appendChild(liveRegion);
    this.liveRegion = liveRegion;
  }

  // Touch gestures for mobile
  setupTouchGestures() {
    let startX = 0;
    let startY = 0;
    
    document.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    }, { passive: true });
    
    document.addEventListener('touchend', (e) => {
      if (!startX || !startY) return;
      
      const endX = e.changedTouches[0].clientX;
      const endY = e.changedTouches[0].clientY;
      
      const diffX = startX - endX;
      const diffY = startY - endY;
      
      // Horizontal swipe detection
      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
        if (diffX > 0) {
          // Swipe left - next section
          this.navigateSection('next');
        } else {
          // Swipe right - previous section
          this.navigateSection('prev');
        }
      }
      
      startX = 0;
      startY = 0;
    }, { passive: true });
  }

  navigateSection(direction) {
    const sections = ['home', 'social', 'blog', 'portfolio'];
    const currentSection = document.querySelector('.hero:not([style*="display: none"]), .content-section.active');
    const currentId = currentSection ? currentSection.id : 'home';
    const currentIndex = sections.indexOf(currentId);
    
    let nextIndex;
    if (direction === 'next') {
      nextIndex = (currentIndex + 1) % sections.length;
    } else {
      nextIndex = (currentIndex - 1 + sections.length) % sections.length;
    }
    
    this.showSection(sections[nextIndex]);
    
    // Update live region
    if (this.liveRegion) {
      this.liveRegion.textContent = `Navigated to ${sections[nextIndex]} section`;
    }
  }

  // Blog post filtering
  filterPosts(category) {
    const posts = document.querySelectorAll('.blog-post');
    const buttons = document.querySelectorAll('.category-btn');
    
    buttons.forEach(btn => {
      btn.classList.remove('active');
      btn.setAttribute('aria-pressed', 'false');
    });
    
    event.target.classList.add('active');
    event.target.setAttribute('aria-pressed', 'true');
    
    let visibleCount = 0;
    posts.forEach(post => {
      const categories = post.dataset.categories;
      if (category === 'all' || categories.includes(category)) {
        post.style.display = 'block';
        visibleCount++;
      } else {
        post.style.display = 'none';
      }
    });
    
    // Update live region
    if (this.liveRegion) {
      this.liveRegion.textContent = `Filtered to ${category} category, showing ${visibleCount} posts`;
    }
  }

  // Theme toggle functionality
  setupThemeToggle() {
    const themeToggle = document.querySelector('.theme-toggle');
    const themeIcon = themeToggle?.querySelector('.action-icon');
    
    if (!themeToggle || !themeIcon) return;

    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    this.applyTheme(savedTheme);
    this.updateThemeIcon(themeIcon, savedTheme);

    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      this.applyTheme(newTheme);
      this.updateThemeIcon(themeIcon, newTheme);
      localStorage.setItem('theme', newTheme);
    });
  }

  applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    
    // Update CSS variables for light theme
    if (theme === 'light') {
      document.documentElement.style.setProperty('--bg-primary', '#f8f9fa');
      document.documentElement.style.setProperty('--bg-secondary', '#ffffff');
      document.documentElement.style.setProperty('--text-primary', '#333333');
      document.documentElement.style.setProperty('--text-secondary', '#666666');
      document.documentElement.style.setProperty('--glass-bg', 'rgba(0, 0, 0, 0.05)');
      document.documentElement.style.setProperty('--glass-border', 'rgba(0, 0, 0, 0.1)');
      document.documentElement.style.setProperty('--nav-bg', 'rgba(255, 255, 255, 0.95)');
    } else {
      // Dark theme (default)
      document.documentElement.style.setProperty('--bg-primary', '#0a0a0a');
      document.documentElement.style.setProperty('--bg-secondary', '#1a1a2e');
      document.documentElement.style.setProperty('--text-primary', '#ffffff');
      document.documentElement.style.setProperty('--text-secondary', '#888888');
      document.documentElement.style.setProperty('--glass-bg', 'rgba(255, 255, 255, 0.05)');
      document.documentElement.style.setProperty('--glass-border', 'rgba(255, 255, 255, 0.1)');
      document.documentElement.style.setProperty('--nav-bg', 'rgba(26, 26, 46, 0.95)');
    }
  }

  updateThemeIcon(iconElement, theme) {
    if (theme === 'light') {
      iconElement.textContent = '☀️';
      iconElement.setAttribute('aria-label', 'Switch to dark mode');
    } else {
      iconElement.textContent = '🌙';
      iconElement.setAttribute('aria-label', 'Switch to light mode');
    }
  }

  // Search functionality
  setupSearch() {
    const searchBtn = document.querySelector('.search-btn');
    if (!searchBtn) return;

    searchBtn.addEventListener('click', () => {
      this.showSearchModal();
    });

    // Add keyboard shortcut (Ctrl+K or Cmd+K)
    document.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        this.showSearchModal();
      }
    });
  }

  showSearchModal() {
    // Create search modal
    const modal = document.createElement('div');
    modal.className = 'search-modal';
    modal.innerHTML = `
      <div class="search-modal-content">
        <div class="search-header">
          <h3>Search</h3>
          <button class="close-search" aria-label="Close search">×</button>
        </div>
        <div class="search-input-container">
          <input type="text" 
                 class="search-input" 
                 placeholder="Search posts, projects, or pages..." 
                 aria-label="Search input">
          <span class="search-icon">🔍</span>
        </div>
        <div class="search-results"></div>
        <div class="search-hint">
          <kbd>Ctrl</kbd> + <kbd>K</kbd> to open search
        </div>
      </div>
    `;

    // Add styles
    const styles = document.createElement('style');
    styles.textContent = `
      .search-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        backdrop-filter: blur(10px);
        display: flex;
        align-items: flex-start;
        justify-content: center;
        padding-top: 100px;
        z-index: 2000;
      }
      
      .search-modal-content {
        background: var(--bg-secondary);
        border-radius: 15px;
        width: 90%;
        max-width: 600px;
        padding: 2rem;
        border: 1px solid var(--glass-border);
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
      }
      
      .search-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.5rem;
      }
      
      .search-header h3 {
        color: var(--text-primary);
        font-size: 1.5rem;
        margin: 0;
      }
      
      .close-search {
        background: none;
        border: none;
        color: var(--text-primary);
        font-size: 2rem;
        cursor: pointer;
        padding: 0;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: var(--transition);
      }
      
      .close-search:hover {
        background: var(--glass-bg);
      }
      
      .search-input-container {
        position: relative;
        margin-bottom: 1rem;
      }
      
      .search-input {
        width: 100%;
        padding: 1rem 1rem 1rem 3rem;
        border: 2px solid var(--glass-border);
        border-radius: 10px;
        background: var(--glass-bg);
        color: var(--text-primary);
        font-size: 1rem;
        font-family: inherit;
        transition: var(--transition);
      }
      
      .search-input:focus {
        outline: none;
        border-color: var(--primary-color);
        box-shadow: 0 0 0 3px rgba(0, 212, 255, 0.2);
      }
      
      .search-icon {
        position: absolute;
        left: 1rem;
        top: 50%;
        transform: translateY(-50%);
        color: var(--text-secondary);
      }
      
      .search-results {
        min-height: 200px;
        max-height: 400px;
        overflow-y: auto;
        margin-bottom: 1rem;
      }
      
      .search-hint {
        color: var(--text-secondary);
        font-size: 0.9rem;
        text-align: center;
      }
      
      kbd {
        background: var(--glass-bg);
        border: 1px solid var(--glass-border);
        border-radius: 4px;
        padding: 2px 6px;
        font-size: 0.8rem;
        font-family: monospace;
      }
    `;

    document.head.appendChild(styles);
    document.body.appendChild(modal);

    // Focus on input
    const searchInput = modal.querySelector('.search-input');
    searchInput.focus();

    // Close modal
    const closeBtn = modal.querySelector('.close-search');
    closeBtn.addEventListener('click', () => {
      document.body.removeChild(modal);
      document.head.removeChild(styles);
    });

    // Close on escape
    modal.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        document.body.removeChild(modal);
        document.head.removeChild(styles);
      }
    });

    // Close on background click
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        document.body.removeChild(modal);
        document.head.removeChild(styles);
      }
    });

    // Simple search functionality (can be extended)
    searchInput.addEventListener('input', (e) => {
      this.performSearch(e.target.value, modal.querySelector('.search-results'));
    });
  }

  performSearch(query, resultsContainer) {
    // This is a basic search implementation
    // In a real site, you would search through your content
    const results = [
      { title: 'About Me', url: '/about/', type: 'Page' },
      { title: 'Portfolio Projects', url: '/portfolio/', type: 'Page' },
      { title: 'Blog', url: '/posts/', type: 'Page' },
      { title: 'Academic Timeline', url: '/travel/', type: 'Page' },
      { title: 'Social Media', url: '/social/', type: 'Page' }
    ];

    const filteredResults = results.filter(result => 
      result.title.toLowerCase().includes(query.toLowerCase()) ||
      result.type.toLowerCase().includes(query.toLowerCase())
    );

    if (query.trim() === '') {
      resultsContainer.innerHTML = '<p class="search-placeholder">Type to start searching...</p>';
      return;
    }

    if (filteredResults.length === 0) {
      resultsContainer.innerHTML = `<p class="search-no-results">No results found for "${query}"</p>`;
      return;
    }

    resultsContainer.innerHTML = filteredResults.map(result => `
      <a href="${result.url}" class="search-result-item">
        <div class="search-result-content">
          <h4>${result.title}</h4>
          <span class="search-result-type">${result.type}</span>
        </div>
        <span class="search-result-arrow">→</span>
      </a>
    `).join('');

    // Add result item styles
    const resultStyles = document.createElement('style');
    resultStyles.textContent = `
      .search-result-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        border-radius: 8px;
        background: var(--glass-bg);
        border: 1px solid var(--glass-border);
        margin-bottom: 0.5rem;
        text-decoration: none;
        color: var(--text-primary);
        transition: var(--transition);
      }
      
      .search-result-item:hover {
        background: rgba(0, 212, 255, 0.1);
        border-color: var(--primary-color);
        transform: translateX(5px);
      }
      
      .search-result-content h4 {
        margin: 0 0 0.3rem 0;
        font-size: 1rem;
      }
      
      .search-result-type {
        color: var(--text-secondary);
        font-size: 0.8rem;
        background: rgba(0, 212, 255, 0.1);
        padding: 2px 8px;
        border-radius: 10px;
      }
      
      .search-result-arrow {
        color: var(--primary-color);
        font-size: 1.2rem;
      }
      
      .search-placeholder, .search-no-results {
        color: var(--text-secondary);
        text-align: center;
        padding: 2rem;
      }
    `;

    if (!document.querySelector('#search-result-styles')) {
      resultStyles.id = 'search-result-styles';
      document.head.appendChild(resultStyles);
    }
  }
}

// Initialize theme when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.nomadTheme = new NomadTheme();
});

// Global function for template compatibility
function toggleMobileMenu() {
  window.nomadTheme?.setupNavigation();
}

function showSection(sectionId) {
  window.nomadTheme?.showSection(sectionId);
}

function filterPosts(category) {
  window.nomadTheme?.filterPosts(category);
}

// 打字机效果
function initTypewriter() {
  const subtitleEl = document.querySelector('.subtitle');
  if (!subtitleEl) return;
  
  const originalText = subtitleEl.textContent.trim();
  const text = originalText;
  
  // 清空内容
  subtitleEl.textContent = '';
  subtitleEl.classList.add('typewriter-container');
  
  // 创建打字机文本元素
  const typewriterText = document.createElement('span');
  typewriterText.className = 'typewriter-text';
  subtitleEl.appendChild(typewriterText);
  
  // 创建光标元素
  const cursor = document.createElement('span');
  cursor.className = 'typewriter-cursor';
  cursor.textContent = '';
  subtitleEl.appendChild(cursor);
  
  let charIndex = 0;
  const typingSpeed = 80; // 毫秒每字符
  const pauseBetweenWords = 300; // 单词间暂停
  
  function typeCharacter() {
    if (charIndex < text.length) {
      const char = text.charAt(charIndex);
      typewriterText.textContent += char;
      charIndex++;
      
      // 如果是分隔符（•），增加暂停时间
      const delay = char === '•' ? pauseBetweenWords : typingSpeed;
      setTimeout(typeCharacter, delay);
    } else {
      // 打字完成，开始光标闪烁
      cursor.style.animation = 'blink 1s infinite';
    }
  }
  
  // 开始打字
  setTimeout(typeCharacter, 500); // 初始延迟
}

// 初始化打字机效果
document.addEventListener('DOMContentLoaded', initTypewriter);