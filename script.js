document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("menu-toggle");
    const nav = document.getElementById("menu");

    toggle.addEventListener("click", () => {
        nav.classList.toggle("open");
    });

    // Scroll suave para âncoras
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 60,
                    behavior: "smooth"
                });
            }
        });
    });

    // SLIDER
    const slides = document.querySelectorAll(".slide");
    const prevBtn = document.querySelector(".nav.prev");
    const nextBtn = document.querySelector(".nav.next");
    const dotsContainer = document.querySelector(".dots");

    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle("active", i === index);
        });
        updateDots(index);
    }

    function updateDots(index) {
        const dots = document.querySelectorAll(".dots span");
        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === index);
        });
    }

    function createDots() {
        slides.forEach((_, i) => {
            const dot = document.createElement("span");
            if (i === 0) dot.classList.add("active");
            dot.addEventListener("click", () => {
                currentSlide = i;
                showSlide(currentSlide);
            });
            dotsContainer.appendChild(dot);
        });
    }

    prevBtn.addEventListener("click", () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    });

    nextBtn.addEventListener("click", () => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    });

    createDots();
    showSlide(currentSlide);

    setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }, 5000);
});


document.addEventListener("DOMContentLoaded", function () {
    // Menu Toggle para Mobile
    const toggle = document.getElementById("menu-toggle");
    const nav = document.getElementById("menu");

    if (toggle && nav) {
        toggle.addEventListener("click", () => {
            nav.classList.toggle("open");
        });
    }

    // Scroll suave para âncoras
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 60,
                    behavior: "smooth"
                });
            }
        });
    });

    // Animação de entrada dos elementos
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Animação especial para timeline items
                if (entry.target.classList.contains('timeline-item')) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateX(0)';
                    }, 200);
                }
            }
        });
    }, observerOptions);

    // Observar elementos para animação
    document.querySelectorAll('.timeline-item, .comparison-card, .evolution-section').forEach(el => {
        observer.observe(el);
    });

    // Configurar posição inicial dos timeline items
    document.querySelectorAll('.timeline-item').forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transition = 'all 0.8s ease-out';
        
        if (index % 2 === 0) {
            item.style.transform = 'translateX(-50px)';
        } else {
            item.style.transform = 'translateX(50px)';
        }
    });

    // Efeito de hover nos cards de comparação
    document.querySelectorAll('.comparison-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-15px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Animação das tags com delay
    document.querySelectorAll('.tag').forEach((tag, index) => {
        tag.style.animationDelay = `${index * 0.1}s`;
        
        tag.addEventListener('click', () => {
            tag.style.animation = 'none';
            setTimeout(() => {
                tag.style.animation = 'pulse 0.5s ease-out';
            }, 10);
        });
    });

    // Efeito parallax suave na hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero-section');
        
        if (hero) {
            const rate = scrolled * -0.5;
            hero.style.transform = `translateY(${rate}px)`;
        }
    });

    // Animação contador para anos
    function animateCounter(element, start, end, duration) {
        let startTime = null;
        
        function animate(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            
            const currentValue = Math.floor(progress * (end - start) + start);
            element.textContent = currentValue;
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        }
        
        requestAnimationFrame(animate);
    }

    // Ativar contador quando os elementos ficarem visíveis
    const yearMarkers = document.querySelectorAll('.year-marker');
    yearMarkers.forEach(marker => {
        observer.observe(marker);
        marker.addEventListener('animateIn', () => {
            const year = parseInt(marker.dataset.year);
            animateCounter(marker, year - 10, year, 2000);
        });
    });

    // Adicionar efeito de brilho nas ilustrações dos carros
    function addGlowEffect() {
        const illustrations = document.querySelectorAll('.car-illustration');
        
        illustrations.forEach(illustration => {
            illustration.addEventListener('

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: "smooth"
      });
    }
  });
});