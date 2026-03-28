document.addEventListener('DOMContentLoaded', () => {
    // ===== THEME TOGGLE =====
    const themeSwitch = document.getElementById('theme-switch');
    const savedTheme = localStorage.getItem('theme');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

    // Only run theme toggle if switch exists on page
    if (themeSwitch) {
        if (savedTheme === 'dark' || (!savedTheme && prefersDarkScheme.matches)) {
            document.body.classList.add('dark-mode');
            themeSwitch.checked = true;
        }

        themeSwitch.addEventListener('change', () => {
            document.body.classList.toggle('dark-mode');

            // Save theme preference
            const isDark = document.body.classList.contains('dark-mode');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });
    }

    // ===== TYPING TAGLINES =====
    const typedTaglineEl = document.getElementById('typed-tagline');
    if (typedTaglineEl) {
        const taglines = [
            "political scientist", 
            "avocado afficianado",
            "data journalist", 
            "higher education researcher",
            "critical thinker", 
            "vibe coder", 
            "writer", 
            "web developer", 
            "tech policy researcher", 
            "data scientist", 
            "whimsical dreamer"
        ];
        let taglineIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function typeTagline() {
            const currentTagline = taglines[taglineIndex];
            
            if (!isDeleting) {
                typedTaglineEl.textContent = currentTagline.slice(0, charIndex + 1);
                charIndex++;

                if (charIndex === currentTagline.length) {
                    isDeleting = true;
                    setTimeout(typeTagline, 2000);
                } else {
                    setTimeout(typeTagline, 100);
                }
            } else {
                typedTaglineEl.textContent = currentTagline.slice(0, charIndex);
                charIndex--;

                if (charIndex === 0) {
                    isDeleting = false;
                    taglineIndex = (taglineIndex + 1) % taglines.length;
                    setTimeout(typeTagline, 500);
                } else {
                    setTimeout(typeTagline, 50);
                }
            }
        }

        typeTagline();
    }

    // ===== FORM SUBMISSION =====
    document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    if (!name || !email || !message) {
        alert('please fill in all required fields so i know how to reach you!');
        return;
    }
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('please enter a valid email address T_T');
        return;
    }
    

    alert('thank you for reaching out, i\'ll be in touch <3');
    this.reset();
    
    this.submit();

    
});
});

// ── smooth page transitions ──────────────────────────────
document.querySelectorAll('a[href]').forEach(link => {
  const href = link.getAttribute('href');

  // only intercept internal .html links (not anchors, mailto, external)
  if (!href || href.startsWith('#') || href.startsWith('mailto') || href.startsWith('http')) return;

  link.addEventListener('click', e => {
    e.preventDefault();
    document.body.classList.add('fade-out');
    setTimeout(() => { window.location.href = href; }, 260);
  });
});

// ── staggered .fi fade-in on page load ───────────────────
document.querySelectorAll('.fi').forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(16px)';
  el.style.animation = `fadeUp 0.45s ease forwards ${i * 0.05}s`;
});

// ── active nav link highlight ────────────────────────────
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-right a').forEach(a => {
  if (a.getAttribute('href') === currentPage) {
    a.style.color = 'var(--accent-color)';
    a.style.fontWeight = '700';
  }
});

function toggleSection(header) {
  const body = header.nextElementSibling;
  const isOpen = body.classList.contains('open');

  header.classList.toggle('open', !isOpen);
  body.classList.toggle('open', !isOpen);
}

// // ── theme toggle ─────────────────────────────────────────
// const toggle = document.getElementById('theme-switch');
// const saved  = localStorage.getItem('theme');

// if (saved === 'dark') {
//   document.body.classList.add('dark-mode');
//   if (toggle) toggle.checked = true;
// }

// if (toggle) {
//   toggle.addEventListener('change', () => {
//     document.body.classList.toggle('dark-mode');
//     localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
//   });
// }
