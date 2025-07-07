document.addEventListener("DOMContentLoaded", () => {
  // Testimonials slider
  const testimonials = document.querySelectorAll(".testimonial");
  let currentIndex = 0;

  function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
      testimonial.classList.add("hidden");
      if (i === index) {
        testimonial.classList.remove("hidden");
      }
    });
  }

  showTestimonial(currentIndex);

  document.getElementById("next-btn").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
  });

  document.getElementById("prev-btn").addEventListener("click", () => {
    currentIndex =
      (currentIndex - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentIndex);
  });

  // Smooth scroll
  const smoothLinks = document.querySelectorAll('a[href^="#"]');

  smoothLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Scroll fade-in effect
  const faders = document.querySelectorAll(".fade-in-section");
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  faders.forEach((section) => {
    observer.observe(section);
  });

  // Typewriter effect
  const text = "Grow Your Business with Stunning Web Experiences";
  const typewriterElement = document.getElementById("typewriter-text");
  let charIndex = 0;

  function typeNextChar() {
    if (charIndex < text.length) {
      typewriterElement.textContent += text.charAt(charIndex);
      charIndex++;
      setTimeout(typeNextChar, 50);
    }
  }

  typeNextChar();
});
