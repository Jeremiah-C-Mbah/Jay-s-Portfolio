// Navigation and scroll handling
let isScrolled = false;
let isMobileMenuOpen = false;
let currentRoleIndex = 0;

// Project data
const projects = [
  {
    id: 0,
    title: "E-commerce Platform",
    description:
      "A comprehensive e-commerce solution built with modern web technologies. Features include user authentication, product catalog, shopping cart, secure payment processing, and an admin dashboard for inventory management.",
    longDescription:
      "This full-stack e-commerce platform demonstrates advanced web development skills with a focus on user experience and security. The application handles complex state management, real-time inventory updates, and integrates with multiple payment gateways.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe API", "JWT", "Redux"],
    features: [
      "User authentication and authorization",
      "Product catalog with advanced filtering",
      "Shopping cart and wishlist functionality",
      "Secure payment processing with Stripe",
      "Admin dashboard for inventory management",
      "Real-time order tracking",
      "Responsive design for all devices",
    ],
    image: "src/assets/project-ecommerce.jpg",
    liveDemo: "https://example-ecommerce.com",
    github: "https://github.com/yourusername/ecommerce-platform",
  },
  {
    id: 1,
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, team collaboration features, and advanced project tracking capabilities.",
    longDescription:
      "This application showcases real-time collaboration features using WebSocket technology. Teams can create projects, assign tasks, track progress, and communicate effectively within the platform.",
    technologies: [
      "Vue.js",
      "Firebase",
      "WebSocket",
      "Vuex",
      "PWA",
      "Chart.js",
    ],
    features: [
      "Real-time collaboration with WebSocket",
      "Project and task management",
      "Team member assignment and tracking",
      "Progress visualization with charts",
      "File sharing and comments",
      "Progressive Web App (PWA) support",
      "Offline functionality",
    ],
    image: "src/assets/project-taskmanager.jpg",
    liveDemo: "https://example-taskmanager.com",
    github: "https://github.com/yourusername/task-manager",
  },
  {
    id: 2,
    title: "Security Audit Tool",
    description:
      "An automated security scanning tool for web applications that identifies vulnerabilities, generates detailed reports, and provides remediation recommendations.",
    longDescription:
      "This cybersecurity tool demonstrates expertise in application security testing. It performs comprehensive vulnerability assessments and provides actionable insights for developers and security teams.",
    technologies: [
      "Python",
      "Django",
      "PostgreSQL",
      "Celery",
      "Docker",
      "OWASP ZAP",
    ],
    features: [
      "Automated vulnerability scanning",
      "OWASP Top 10 compliance checking",
      "Detailed security reports",
      "Risk assessment and prioritization",
      "Integration with CI/CD pipelines",
      "Custom rule engine",
      "Multi-target scanning capabilities",
    ],
    image: "src/assets/project-security.jpg",
    liveDemo: "https://example-security-tool.com",
    github: "https://github.com/yourusername/security-audit-tool",
  },
];

// Role animation
const roles = ["Web Developer", "Security Analyst", "Designer"];

// Initialize the application
document.addEventListener("DOMContentLoaded", function () {
  initializeNavigation();
  initializeRoleAnimation();
  initializeContactForm();
  initializeMobileMenu();
});

// Navigation functionality
function initializeNavigation() {
  window.addEventListener("scroll", handleScroll);
}

function handleScroll() {
  const scrollPosition = window.scrollY;
  const navigation = document.getElementById("navigation");

  if (scrollPosition > 50 && !isScrolled) {
    isScrolled = true;
    navigation.classList.add("scrolled");
  } else if (scrollPosition <= 50 && isScrolled) {
    isScrolled = false;
    navigation.classList.remove("scrolled");
  }
}

function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
  closeMobileMenu();
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Mobile menu functionality
function initializeMobileMenu() {
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  mobileMenuBtn.addEventListener("click", toggleMobileMenu);
}

function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobile-menu");
  isMobileMenuOpen = !isMobileMenuOpen;

  if (isMobileMenuOpen) {
    mobileMenu.classList.remove("hidden");
    mobileMenu.classList.add("block");
  } else {
    mobileMenu.classList.add("hidden");
    mobileMenu.classList.remove("block");
  }
}

function closeMobileMenu() {
  const mobileMenu = document.getElementById("mobile-menu");
  isMobileMenuOpen = false;
  mobileMenu.classList.add("hidden");
  mobileMenu.classList.remove("block");
}

// Role animation functionality
function initializeRoleAnimation() {
  setInterval(() => {
    currentRoleIndex = (currentRoleIndex + 1) % roles.length;
    const roleElement = document.getElementById("current-role");
    if (roleElement) {
      roleElement.textContent = roles[currentRoleIndex];
    }
  }, 3000);
}

// Project modal functionality
function openProject(projectId) {
  const project = projects.find((p) => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById("project-modal");
  const modalBody = document.getElementById("modal-body");

  modalBody.innerHTML = `
        <div class="p-8">
            <img src="${project.image}" alt="${
    project.title
  }" class="w-full h-64 object-cover rounded-lg mb-6">
            <h2 class="text-3xl font-bold mb-4">${project.title}</h2>
            <p class="text-lg text-muted-foreground mb-6">${
              project.longDescription
            }</p>
            
            <div class="mb-6">
                <h3 class="text-xl font-semibold mb-3">Key Features</h3>
                <ul class="list-disc list-inside space-y-2 text-muted-foreground">
                    ${project.features
                      .map((feature) => `<li>${feature}</li>`)
                      .join("")}
                </ul>
            </div>
            
            <div class="mb-6">
                <h3 class="text-xl font-semibold mb-3">Technologies Used</h3>
                <div class="flex flex-wrap gap-2">
                    ${project.technologies
                      .map((tech) => `<span class="tech-tag">${tech}</span>`)
                      .join("")}
                </div>
            </div>
            
            <div class="flex flex-col sm:flex-row gap-4">
                <a href="${
                  project.liveDemo
                }" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
                    View Live Demo
                </a>
                <a href="${
                  project.github
                }" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
                    View on GitHub
                </a>
            </div>
        </div>
    `;

  modal.classList.remove("hidden");
  modal.classList.add("flex");
  document.body.style.overflow = "hidden";
}

function closeProject() {
  const modal = document.getElementById("project-modal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
  document.body.style.overflow = "auto";
}

// Contact form functionality
function initializeContactForm() {
  const form = document.getElementById("contact-form");
  form.addEventListener("submit", handleFormSubmit);
}

async function handleFormSubmit(e) {
  e.preventDefault();

  const submitBtn = document.getElementById("submit-btn");
  const originalText = submitBtn.textContent;

  // Disable button and show loading state
  submitBtn.disabled = true;
  submitBtn.textContent = "Sending...";

  // Get form data
  const formData = new FormData(e.target);
  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  try {
    // Simulate form submission (replace with actual API call)
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Show success message
    showToast("Message sent successfully!");

    // Reset form
    e.target.reset();
  } catch (error) {
    showToast("Failed to send message. Please try again.", "error");
  } finally {
    // Re-enable button
    submitBtn.disabled = false;
    submitBtn.textContent = originalText;
  }
}
async function handleFormSubmit(e) {
  e.preventDefault();

  const submitBtn = document.getElementById("submit-btn");
  const originalText = submitBtn.textContent;

  // Disable button and show loading state
  submitBtn.disabled = true;
  submitBtn.textContent = "Sending...";

  const form = e.target;

  try {
    await emailjs.sendForm(
      "service_592yhob",
      "template_ngnb6ls",
      form,
      "xbqywI14Ld5RyFhu-"
    );

    showToast("Message sent successfully!");
    form.reset();
  } catch (error) {
    showToast("Failed to send message. Please try again.", "error");
    console.error("EmailJS Error:", error);
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = originalText;
  }
}

// Toast notification functionality
function showToast(message, type = "success") {
  const toast = document.getElementById("toast");
  const toastMessage = document.getElementById("toast-message");

  toastMessage.textContent = message;
  toast.classList.remove("hidden");
  toast.classList.add("show");

  // Hide toast after 3 seconds
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => {
      toast.classList.add("hidden");
    }, 300);
  }, 3000);
}

// Close modal when clicking outside
document.addEventListener("click", function (e) {
  const modal = document.getElementById("project-modal");
  if (e.target === modal) {
    closeProject();
  }
});

// Handle escape key for modal
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeProject();
  }
});

// Smooth scroll polyfill for older browsers
if (!("scrollBehavior" in document.documentElement.style)) {
  const smoothScroll = function (target) {
    const targetElement = document.querySelector(target);
    if (targetElement) {
      const targetPosition = targetElement.offsetTop;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 1000;
      let start = null;

      const step = function (timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const progressPercentage = Math.min(progress / duration, 1);
        const ease = easeInOutCubic(progressPercentage);

        window.scrollTo(0, startPosition + distance * ease);

        if (progress < duration) {
          window.requestAnimationFrame(step);
        }
      };

      window.requestAnimationFrame(step);
    }
  };

  const easeInOutCubic = function (t) {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  };
}

// Add loading animation to page
window.addEventListener("load", function () {
  document.body.classList.add("loaded");
});

// Performance optimization: Intersection Observer for animations
if ("IntersectionObserver" in window) {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-fade-in-up");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe elements for animation
  document.addEventListener("DOMContentLoaded", function () {
    const animatedElements = document.querySelectorAll(
      ".skill-card, .project-card, .contact-info"
    );
    animatedElements.forEach(function (el) {
      observer.observe(el);
    });
  });
}
