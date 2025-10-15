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

    // ===== TYPING TAGLINES (only on index.html) =====
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
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Basic validation
    if (!name || !email || !message) {
        alert('Please fill in all required fields.');
        return;
    }
    
    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    
    // If validation passes, you can submit the form
    // For now, just show a success message
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
    
    // To actually submit the form, uncomment this:
    // this.submit();
});
});
