document.addEventListener('DOMContentLoaded', () => {
    const taglines = [
        "political scientist", 
        "avocado afficiado",
        "data journalist", 
        "critical thinker", 
        "vibe coder"
    ];
    const typedTaglineEl = document.getElementById('typed-tagline');
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
});