document.addEventListener("DOMContentLoaded", () => {
    const projects = document.querySelectorAll('.project');

    // Apply initial slide-in animation to projects
    projects.forEach((project, index) => {
        project.style.animation = `slideIn 0.5s forwards ${index * 0.2}s`;
    });

    // Smooth scrolling for links with hashes
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Scroll animations for projects
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    });

    projects.forEach(project => {
        observer.observe(project);
    });
});

// Keyframe animations for projects
const style = document.createElement('style');
style.textContent = `
@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.project {
    opacity: 0; /* Set initial opacity for fadeIn */
    transition: opacity 0.6s ease; /* Smooth transition for opacity */
}

.project.visible {
    opacity: 1; /* Set final opacity for visible class */
}
`;

document.head.appendChild(style);
