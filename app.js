// Portfolio data for Kumara Vijay M G
const portfolioData = {
  "personalInfo": {
    "name": "Kumara Vijay M G",
    "title": "Data Analyst | Python | SQL | Machine Learning",
    "location": "Chennai, India",
    "email": "kumaravijay2626@gmail.com",
    "phone": "+91 63826 66767",
    "linkedin": "https://linkedin.com/in/kumaravijay2626",
    "summary": "I'm Kumara Vijay M G, a recent B.E. Electronics and Communication Engineering graduate from R.M.K. Engineering College. I have hands-on experience in Python, SQL, and data analysis, and I'm currently completing my PGP in Data Science from Great Lakes, which will conclude in June 2025. I'm passionate about leveraging data to solve real-world problems and aspire to drive business value as a Data Analyst by delivering clear, actionable insights."
  },
  "education": [
    {
      "institution": "Great Lakes Institute of Management",
      "degree": "PGP in Data Science and Engineering",
      "duration": "Jan 2025 – June 2025",
      "coursework": "DBMS, Python for Problem Solving, EDA, ETL, Statistics"
    },
    {
      "institution": "R.M.K. Engineering College",
      "degree": "B.E. in Electronics and Communication Engineering",
      "duration": "June 2020 – April 2024",
      "gpa": "8.39/10.00"
    }
  ],
  "skills": {
    "technical": ["Python", "SQL", "Exploratory Data Analysis", "Machine Learning", "Statistics", "ETL"],
    "libraries": ["Numpy", "Pandas", "Matplotlib", "Plotly", "Seaborn", "Cudf"],
    "tools": ["MySQL Workbench", "Tableau Software"]
  },
  "projects": [
    {
      "title": "IPL Bidding & Match Analytics System",
      "description": "Built an analytical SQL system using IPL MySQL data to evaluate bidder performance, player stats, and match outcomes. Developed complex queries involving joins, aggregations, and text parsing to extract actionable insights.",
      "tools": ["MySQL", "SQL Workbench", "Data Analysis", "Joins", "Subqueries"]
    },
    {
      "title": "Data Preprocessing Workflow for Ames Housing Price Prediction",
      "description": "Performed end-to-end EDA, feature engineering, handling of missing values, and scaling to prepare a clean, model-ready dataset for house price prediction using regression techniques. Applied log transformations, temporal feature derivation, and rare label encoding to enhance predictive performance and model robustness.",
      "tools": ["Python", "Numpy", "Pandas", "Seaborn", "Matplotlib"]
    },
    {
      "title": "Exploring Obesity Factors through EDA and Hypothesis Testing",
      "description": "This project analyzes key factors contributing to obesity, focusing on age, weight, hereditary factors, and High Calorie Food Intake Frequency (HCFIF). Through EDA and statistical tests (Shapiro, Levene's, Pearson, T-test, ANOVA, Tukey HSD), the study identifies significant predictors of BMI and their impact on obesity.",
      "tools": ["Pandas", "NumPy", "Matplotlib", "Seaborn", "SciPy"]
    },
    {
      "title": "Public Service Helpdesk Analytics and Optimization System",
      "description": "Analyzed public sector helpdesk ticket data to identify resolution delays, agent workload issues, and service gaps. Translated stakeholder pain points into KPIs and recommended data-driven operational improvements. Conducted trend analysis, satisfaction segmentation, and queuing insights to propose automation for repetitive requests and dynamic staffing models for peak hours.",
      "tools": ["Python", "Pandas", "Matplotlib", "Tableau", "SQL"]
    },
    {
      "title": "Customer Churn Analysis and Retention Strategy",
      "description": "Performed churn behavior analysis on telecom customer data using exploratory statistics and segmentation. Identified key churn indicators such as tenure, contract type, service usage, and customer support interaction patterns. Created churn-risk scoring and recommended targeted retention campaigns and service plan adjustments to reduce attrition rates.",
      "tools": ["Python", "Pandas", "Seaborn", "SQL", "Tableau", "Scikit-learn"]
    }
  ],
  "experience": [
    {
      "company": "Aadhav Intech",
      "position": "Intern",
      "duration": "July 2023 – July 2023",
      "description": "Researched electronic faults in finished systems, applying diagnostic tests to detect and correct hardware and software malfunctions"
    },
    {
      "company": "Chennai Petroleum Corporation Limited",
      "position": "Intern",
      "duration": "Aug 2022 – Aug 2022",
      "description": "Assisted in the maintenance and troubleshooting of equipment used in the refinery, gaining hands-on experience in industrial electrical engineering."
    }
  ],
  "certifications": [
    {
      "name": "Microsoft Certified: Azure Fundamentals (AZ-900)",
      "issuer": "Microsoft",
      "description": "Demonstrated foundational knowledge of cloud services, core Azure services, security, compliance, pricing, and support in Microsoft Azure.",
      "credentialId": "22A7BD497EC4D1DE",
      "verificationLink": "https://learn.microsoft.com/api/credentials"
    }
  ]
};

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  initializeNavigation();
  initializeThemeToggle();
  initializeScrollReveal();
  populateSkills();
  populateProjects();
  populateExperience();
  populateCertifications();
  initializeFormValidation();
  setCurrentYear();
  initializeScrollSpy();
  initializeSmoothScrolling();
});

// Initialize smooth scrolling for all anchor links
function initializeSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);
      
      if (target) {
        // Close mobile menu if open
        const navToggle = document.getElementById('navToggle');
        const navLinks = document.getElementById('navLinks');
        if (navToggle) {
          navToggle.classList.remove('active');
          navLinks.classList.remove('active');
        }
        
        // Scroll to target with offset for fixed header
        const headerHeight = 80;
        const targetPosition = target.offsetTop - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Mobile navigation toggle
function initializeNavigation() {
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function(e) {
      e.stopPropagation();
      navToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.addEventListener('click', function(e) {
      if (e.target.classList.contains('nav-link')) {
        navToggle.classList.remove('active');
        navLinks.classList.remove('active');
      }
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
        navToggle.classList.remove('active');
        navLinks.classList.remove('active');
      }
    });
  }
}

// Theme toggle functionality
function initializeThemeToggle() {
  const themeToggle = document.getElementById('themeToggle');
  
  if (themeToggle) {
    const html = document.documentElement;
    const themeIcon = themeToggle.querySelector('i');
    
    themeToggle.addEventListener('click', function() {
      const currentTheme = html.getAttribute('data-color-scheme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      html.setAttribute('data-color-scheme', newTheme);
      if (themeIcon) {
        themeIcon.className = newTheme === 'dark' ? 'fa fa-sun' : 'fa fa-moon';
      }
    });
  }
}

// Scroll reveal animations
function initializeScrollReveal() {
  const revealElements = document.querySelectorAll('[data-reveal]');
  
  function revealOnScroll() {
    revealElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < window.innerHeight - elementVisible) {
        element.classList.add('reveal', 'active');
      }
    });
  }
  
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll(); // Initial check
}

// Scroll spy for navigation
function initializeScrollSpy() {
  const sections = document.querySelectorAll('.section');
  const navLinksArray = document.querySelectorAll('.nav-link');
  
  function updateActiveLink() {
    let currentSection = '';
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    });
    
    navLinksArray.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  }
  
  window.addEventListener('scroll', updateActiveLink);
  updateActiveLink(); // Initial check
}

// Populate skills section
function populateSkills() {
  const technicalSkills = document.getElementById('technicalSkills');
  const librariesSkills = document.getElementById('librariesSkills');
  const toolsSkills = document.getElementById('toolsSkills');
  
  if (technicalSkills) {
    portfolioData.skills.technical.forEach(skill => {
      const skillTag = document.createElement('span');
      skillTag.className = 'skill-tag';
      skillTag.textContent = skill;
      technicalSkills.appendChild(skillTag);
    });
  }
  
  if (librariesSkills) {
    portfolioData.skills.libraries.forEach(skill => {
      const skillTag = document.createElement('span');
      skillTag.className = 'skill-tag';
      skillTag.textContent = skill;
      librariesSkills.appendChild(skillTag);
    });
  }
  
  if (toolsSkills) {
    portfolioData.skills.tools.forEach(skill => {
      const skillTag = document.createElement('span');
      skillTag.className = 'skill-tag';
      skillTag.textContent = skill;
      toolsSkills.appendChild(skillTag);
    });
  }
}

// Populate projects section
function populateProjects() {
  const projectsGrid = document.getElementById('projectsGrid');
  
  if (projectsGrid) {
    portfolioData.projects.forEach(project => {
      const projectCard = document.createElement('div');
      projectCard.className = 'project-card';
      
      const tagsHTML = project.tools.map(tool => `<span class="project-tag">${tool}</span>`).join('');
      
      projectCard.innerHTML = `
        <div class="project-card__content">
          <h3 class="project-card__title">${project.title}</h3>
          <p class="project-card__description">${project.description}</p>
          <div class="project-card__tags">
            ${tagsHTML}
          </div>
        </div>
      `;
      
      projectsGrid.appendChild(projectCard);
    });
  }
}

// Populate experience section
function populateExperience() {
  const experienceContent = document.getElementById('experienceContent');
  
  if (experienceContent) {
    portfolioData.experience.forEach(experience => {
      const experienceItem = document.createElement('div');
      experienceItem.className = 'experience-item';
      
      experienceItem.innerHTML = `
        <h3>${experience.position}</h3>
        <p class="company">${experience.company}</p>
        <p class="duration">${experience.duration}</p>
        <p class="description">${experience.description}</p>
      `;
      
      experienceContent.appendChild(experienceItem);
    });
  }
}

// Populate certifications section
function populateCertifications() {
  const certificationsContent = document.getElementById('certificationsContent');
  
  if (certificationsContent) {
    portfolioData.certifications.forEach(certification => {
      const certificationItem = document.createElement('div');
      certificationItem.className = 'certification-item';
      
      certificationItem.innerHTML = `
        <h3>${certification.name}</h3>
        <p class="issuer">${certification.issuer}</p>
        <p class="description">${certification.description}</p>
        <p class="credential">Credential ID: ${certification.credentialId}</p>
        <a href="${certification.verificationLink}" class="verify-link" target="_blank" rel="noopener">
          <i class="fa fa-external-link-alt"></i> Verify Credential
        </a>
      `;
      
      certificationsContent.appendChild(certificationItem);
    });
  }
}

// Form validation and submission
function initializeFormValidation() {
  const contactForm = document.getElementById('contactForm');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      let isValid = true;
      
      // Remove previous error messages
      const existingErrors = document.querySelectorAll('.form-error');
      existingErrors.forEach(error => error.remove());
      
      // Validate name
      if (nameInput && nameInput.value.trim().length < 2) {
        showFieldError(nameInput, 'Name must be at least 2 characters long');
        isValid = false;
      }
      
      // Validate email
      if (emailInput) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
          showFieldError(emailInput, 'Please enter a valid email address');
          isValid = false;
        }
      }
      
      // Validate message
      if (messageInput && messageInput.value.trim().length < 10) {
        showFieldError(messageInput, 'Message must be at least 10 characters long');
        isValid = false;
      }
      
      if (isValid) {
        // Show success message and reset form
        showSuccessMessage('Thank you! Your message has been sent successfully.');
        contactForm.reset();
      }
    });
  }
}

function showFieldError(field, message) {
  const errorDiv = document.createElement('div');
  errorDiv.className = 'form-error';
  errorDiv.textContent = message;
  field.parentNode.appendChild(errorDiv);
}

function showSuccessMessage(message) {
  const contactForm = document.getElementById('contactForm');
  const existingSuccess = document.querySelector('.form-success');
  
  if (existingSuccess) {
    existingSuccess.remove();
  }
  
  const successDiv = document.createElement('div');
  successDiv.className = 'form-success';
  successDiv.textContent = message;
  
  if (contactForm) {
    contactForm.parentNode.insertBefore(successDiv, contactForm);
    
    // Remove success message after 5 seconds
    setTimeout(() => {
      successDiv.remove();
    }, 5000);
  }
}

// Set current year in footer
function setCurrentYear() {
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
  // ESC key closes mobile menu
  if (e.key === 'Escape') {
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    if (navToggle && navLinks) {
      navToggle.classList.remove('active');
      navLinks.classList.remove('active');
    }
  }
});

// Enhanced scroll animations for skill tags
function enhanceSkillAnimations() {
  const skillTags = document.querySelectorAll('.skill-tag');
  
  if (skillTags.length > 0) {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animationDelay = `${Math.random() * 0.5}s`;
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);
    
    skillTags.forEach(tag => {
      observer.observe(tag);
    });
  }
}

// Add stagger animation to project cards
function addProjectStaggerAnimation() {
  const projectCards = document.querySelectorAll('.project-card');
  
  projectCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
  });
}

// Initialize enhanced animations with delay
setTimeout(() => {
  enhanceSkillAnimations();
  addProjectStaggerAnimation();
}, 100);

// Error handling and logging
window.addEventListener('error', function(e) {
  console.error('JavaScript Error:', e.error);
});

// Preload critical resources
console.log('Kumara Vijay M G Portfolio loaded successfully');