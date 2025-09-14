// Portfolio Website JavaScript
class PortfolioApp {
    constructor() {
        this.data = {};
        this.init();
    }

    async init() {
        try {
            await this.loadData();
            this.setupEventListeners();
            this.populateContent();
            this.hideLoading();
            this.setupAnimations();
        } catch (error) {
            console.error('Error initializing app:', error);
            this.hideLoading();
        }
    }

    async loadData() {
        try {
            const [personal, skills, projects, experience, education, services, testimonials] = await Promise.all([
                fetch('./static/db/personal.json').then(r => r.json()),
                fetch('./static/db/skills.json').then(r => r.json()),
                fetch('./static/db/projects.json').then(r => r.json()),
                fetch('./static/db/experience.json').then(r => r.json()),
                fetch('./static/db/education.json').then(r => r.json()),
                fetch('./static/db/services.json').then(r => r.json()),
                fetch('./static/db/testimonials.json').then(r => r.json())
            ]);

            this.data = { personal, skills, projects, experience, education, services, testimonials };
        } catch (error) {
            console.error('Error loading data:', error);
        }
    }

    populateContent() {
        this.populatePersonalInfo();
        this.populateSkills();
        this.populateServices();
        this.populatePortfolio();
        this.populateTestimonials();
    }

    populatePersonalInfo() {
        const { personal } = this.data;
        if (!personal) return;

        // Hero section
        document.getElementById('hero-avatar').src = personal.avatar;
        document.getElementById('hero-name').textContent = personal.name;
        document.getElementById('hero-title').textContent = personal.subtitle;
        
        // Sidebar avatar
        document.getElementById('sidebar-avatar').src = personal.avatar;
        
        // Social links in hero
        document.getElementById('github-link').href = personal.github;
        document.getElementById('linkedin-link').href = personal.linkedin;
        document.getElementById('email-link').href = `mailto:${personal.email}`;

        // Sidebar social links
        document.getElementById('sidebar-github').href = personal.github;
        document.getElementById('sidebar-linkedin').href = personal.linkedin;
        document.getElementById('sidebar-email').href = `mailto:${personal.email}`;

        // About section
        document.getElementById('about-subtitle').textContent = personal.title;
        document.getElementById('about-name').textContent = personal.name;
        document.getElementById('about-email').href = `mailto:${personal.email}`;
        document.getElementById('about-email').textContent = personal.email;
        document.getElementById('about-phone').textContent = personal.phone;
        document.getElementById('about-location').textContent = personal.location;

        // About description
        const descContainer = document.getElementById('about-description');
        descContainer.innerHTML = `<p>${personal.about.description}</p>`;

        // Contact section
        document.getElementById('contact-location').textContent = personal.location;
        document.getElementById('contact-phone').href = `tel:${personal.phone.replace(/\s/g, '')}`;
        document.getElementById('contact-phone').textContent = personal.phone;
        document.getElementById('contact-email').href = `mailto:${personal.email}`;
        document.getElementById('contact-email').textContent = personal.email;
        document.getElementById('contact-github').href = personal.github;
        document.getElementById('contact-linkedin').href = personal.linkedin;

        // Download CV link
        document.getElementById('download-cv').href = './resume.pdf';
        document.getElementById('download-cv').download = 'Rabiul_Islam_Resume.pdf';
    }

    populateSkills() {
        const { skills } = this.data;
        if (!skills) return;

        const container = document.getElementById('skills-container');
        
        Object.entries(skills).forEach(([category, skillList]) => {
            const categoryCard = document.createElement('div');
            categoryCard.className = 'service-card animate-on-scroll';
            
            // Create an appropriate icon for each skill category
            const categoryIcons = {
                'supply_chain_management': '<i class="fas fa-truck text-primary-400"></i>',
                'procurement_optimization': '<i class="fas fa-shopping-cart text-primary-400"></i>',
                'logistics_management': '<i class="fas fa-shipping-fast text-primary-400"></i>',
                'inventory_optimization': '<i class="fas fa-boxes text-primary-400"></i>',
                'vendor_management': '<i class="fas fa-handshake text-primary-400"></i>',
                'cost_optimization': '<i class="fas fa-chart-line text-primary-400"></i>',
                'process_improvement': '<i class="fas fa-cogs text-primary-400"></i>',
                'data_analysis': '<i class="fas fa-chart-bar text-primary-400"></i>',
                'software_tools': '<i class="fas fa-laptop-code text-primary-400"></i>',
                'certifications': '<i class="fas fa-certificate text-primary-400"></i>',
                'languages': '<i class="fas fa-language text-primary-400"></i>',
                'technical_skills': '<i class="fas fa-tools text-primary-400"></i>'
            };
            
            const iconHtml = categoryIcons[category] || '<i class="fas fa-star text-primary-400"></i>';
            
            categoryCard.innerHTML = `
                <div class="service-icon mb-4">${iconHtml}</div>
                <h3 class="text-xl font-semibold text-dark-800 mb-4 capitalize">${category.replace(/_/g, ' ')}</h3>
                <ul class="skill-bullet-list text-left space-y-2">
                    ${skillList.map(skill => `
                        <li class="skill-bullet-item flex items-start">
                            <i class="fas fa-check-circle text-primary-400 mt-1 mr-3 flex-shrink-0"></i>
                            <span class="text-dark-700">${skill}</span>
                        </li>
                    `).join('')}
                </ul>
            `;
            
            container.appendChild(categoryCard);
        });
    }

    populateServices() {
        const { services } = this.data;
        if (!services) return;

        const container = document.getElementById('services-container');
        
        services.forEach(service => {
            const serviceCard = document.createElement('div');
            serviceCard.className = 'service-card animate-on-scroll';
            
            serviceCard.innerHTML = `
                <div class="service-icon mb-4">${service.icon}</div>
                <h3 class="text-xl font-semibold text-gray-900 mb-3">${service.title}</h3>
                <p class="text-gray-600">${service.description}</p>
            `;
            
            container.appendChild(serviceCard);
        });
    }

    populatePortfolio() {
        const { projects } = this.data;
        if (!projects) return;

        const container = document.getElementById('portfolio-container');
        
        projects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = `portfolio-item animate-on-scroll ${project.category.toLowerCase().replace(/\s+/g, '-')}`;
            
            projectCard.innerHTML = `
                <div class="relative group">
                    <img src="${project.image}" alt="${project.title}" class="w-full h-64 object-cover">
                    <div class="portfolio-overlay">
                        <div class="text-center text-white px-4">
                            <h3 class="text-2xl font-bold mb-3 drop-shadow-lg">${project.title}</h3>
                            <p class="text-base mb-4 drop-shadow-md leading-relaxed">${project.description.substring(0, 100)}...</p>
                            <div class="flex justify-center space-x-4">
                                ${project.github ? `<a href="${project.github}" target="_blank" class="bg-white text-primary-600 px-4 py-2 rounded-lg hover:bg-primary-50 transition-all font-semibold shadow-lg hover:shadow-xl transform hover:scale-105">
                                    <i class="fab fa-github mr-2"></i>View Details
                                </a>` : ''}
                                ${project.demo ? `<a href="${project.demo}" target="_blank" class="bg-white text-primary-600 px-4 py-2 rounded-lg hover:bg-primary-50 transition-all font-semibold shadow-lg hover:shadow-xl transform hover:scale-105">
                                    <i class="fas fa-external-link-alt mr-2"></i>View Project
                                </a>` : ''}
                                ${!project.github && !project.demo ? `<button class="bg-white text-primary-600 px-4 py-2 rounded-lg font-semibold shadow-lg">
                                    <i class="fas fa-info-circle mr-2"></i>Learn More
                                </button>` : ''}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="p-6">
                    <h3 class="text-xl font-bold text-gray-900 mb-3">${project.title}</h3>
                    <p class="text-gray-600 mb-4 leading-relaxed">${project.description}</p>
                    <div class="flex flex-wrap gap-2 mb-4">
                        ${project.technologies.map(tech => `
                            <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">${tech}</span>
                        `).join('')}
                    </div>
                    <div class="flex justify-between items-center text-sm text-gray-500 pt-3 border-t border-gray-700">
                        <span class="font-semibold"><i class="fas fa-building mr-2 text-primary-400"></i>${project.client}</span>
                        <span class="font-semibold"><i class="far fa-calendar mr-2 text-primary-400"></i>${project.date}</span>
                    </div>
                    ${project.results ? `<div class="mt-3 pt-3 border-t border-gray-700">
                        <p class="text-sm text-gray-700 italic"><i class="fas fa-check-circle mr-2 text-green-400"></i>${project.results}</p>
                    </div>` : ''}
                </div>
            `;
            
            container.appendChild(projectCard);
        });

        this.setupPortfolioFilters();
    }

    setupPortfolioFilters() {
        const filters = document.querySelectorAll('.portfolio-filter');
        const items = document.querySelectorAll('.portfolio-item');

        filters.forEach(filter => {
            filter.addEventListener('click', () => {
                // Update active filter
                filters.forEach(f => f.classList.remove('active', 'bg-primary-600', 'text-white'));
                filters.forEach(f => f.classList.add('bg-gray-200', 'text-gray-700'));
                
                filter.classList.remove('bg-gray-200', 'text-gray-700');
                filter.classList.add('active', 'bg-primary-600', 'text-white');

                // Filter items
                const category = filter.dataset.filter;
                
                items.forEach(item => {
                    if (category === 'all' || item.classList.contains(category)) {
                        item.style.display = 'block';
                        item.style.animation = 'fadeIn 0.5s ease';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }

    populateTestimonials() {
        const { testimonials } = this.data;
        if (!testimonials) return;

        const container = document.getElementById('testimonials-container');
        
        testimonials.forEach(testimonial => {
            const testimonialCard = document.createElement('div');
            testimonialCard.className = 'testimonial-card animate-on-scroll';
            
            testimonialCard.innerHTML = `
                <div class="flex items-center mb-4">
                    ${Array.from({length: testimonial.rating}, () => '⭐').join('')}
                </div>
                <p class="text-gray-600 mb-6 italic">"${testimonial.testimonial}"</p>
                <div class="flex items-center">
                    <img src="${testimonial.avatar}" alt="${testimonial.name}" class="w-12 h-12 rounded-full mr-4">
                    <div>
                        <h4 class="font-semibold text-gray-900">${testimonial.name}</h4>
                        <p class="text-sm text-gray-500">${testimonial.position}</p>
                    </div>
                </div>
            `;
            
            container.appendChild(testimonialCard);
        });
    }

    setupEventListeners() {
        // Mobile sidebar toggle
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const sidebar = document.getElementById('sidebar');
        const sidebarOverlay = document.getElementById('sidebar-overlay');

        // Toggle sidebar on mobile
        mobileMenuButton.addEventListener('click', () => {
            this.toggleSidebar();
        });

        // Close sidebar when clicking overlay
        sidebarOverlay.addEventListener('click', () => {
            this.closeSidebar();
        });

        // Close sidebar when clicking on a link (mobile)
        document.querySelectorAll('#sidebar .nav-link').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth < 1024) {
                    this.closeSidebar();
                }
            });
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    const offsetTop = target.offsetTop - 20; // Small offset for better viewing
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Active navigation highlighting on scroll
        window.addEventListener('scroll', this.handleScroll.bind(this));

        // Contact form submission
        const contactForm = document.getElementById('contact-form');
        contactForm.addEventListener('submit', this.handleContactForm.bind(this));

        // Resize handler for responsive adjustments
        window.addEventListener('resize', this.handleResize.bind(this));

        // Close sidebar on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeSidebar();
            }
        });
    }

    toggleSidebar() {
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('sidebar-overlay');
        
        sidebar.classList.toggle('-translate-x-full');
        overlay.classList.toggle('hidden');
    }

    closeSidebar() {
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('sidebar-overlay');
        
        sidebar.classList.add('-translate-x-full');
        overlay.classList.add('hidden');
    }

    handleScroll() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('#sidebar .nav-link');
        
        let current = '';
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        // Update active navigation link
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    handleContactForm(e) {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        
        // Create mailto link with form data
        const subject = encodeURIComponent(data.subject || 'Contact from Portfolio');
        const body = encodeURIComponent(`
Name: ${data.name}
Email: ${data.email}

Message:
${data.message}
        `);
        
        const mailtoLink = `mailto:${this.data.personal.email}?subject=${subject}&body=${body}`;
        window.location.href = mailtoLink;
        
        // Show success message
        this.showNotification('Message composed! Your email client should open.');
        
        // Reset form
        e.target.reset();
    }

    handleResize() {
        // Close sidebar on desktop resize
        if (window.innerWidth >= 1024) {
            this.closeSidebar();
        }
    }

    setupAnimations() {
        // Intersection Observer for scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, observerOptions);

        // Observe all elements with animate-on-scroll class
        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            observer.observe(el);
        });

        // Add typing animation to hero title
        this.typeWriter();
    }

    typeWriter() {
        const element = document.getElementById('hero-title');
        if (!element || !this.data.personal) return;

        const text = this.data.personal.subtitle;
        element.textContent = '';
        let i = 0;

        const timer = setInterval(() => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(timer);
            }
        }, 50);
    }

    showNotification(message, type = 'success') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `fixed top-20 right-4 z-50 p-4 rounded-lg shadow-lg transition-all duration-300 transform translate-x-full ${
            type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
        }`;
        notification.textContent = message;

        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.classList.remove('translate-x-full');
        }, 100);

        // Remove after 3 seconds
        setTimeout(() => {
            notification.classList.add('translate-x-full');
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }

    hideLoading() {
        const loading = document.getElementById('loading');
        if (loading) {
            loading.style.opacity = '0';
            setTimeout(() => {
                loading.style.display = 'none';
            }, 500);
        }
    }
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new PortfolioApp();
});

// Add smooth scrolling for all internal links
document.addEventListener('click', (e) => {
    if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});

// Preload critical images
function preloadImages() {
    const images = [
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop&crop=face'
    ];
    
    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Call preload function
preloadImages();

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // This is now handled in the main class
    }
});

// Performance optimization: Lazy load images
function setupLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Setup lazy loading when DOM is ready
document.addEventListener('DOMContentLoaded', setupLazyLoading);

// Add error handling for failed image loads
document.addEventListener('error', (e) => {
    if (e.target.tagName === 'IMG') {
        e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIG5vdCBhdmFpbGFibGU8L3RleHQ+PC9zdmc+';
    }
}, true);
