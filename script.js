document.addEventListener("DOMContentLoaded", function () {
  // GSAP Animation for hero title
  gsap.from(".hero-title .title", {
    opacity: 0,
    y: 20,
    duration: 1.5,
    ease: "power3.out",
    onComplete: function () {
      // Automatically transition to description slide after title animation completes
      setTimeout(() => {
        document.getElementById("hero-section").style.display = "none";
        document.getElementById("description-section").style.display = "flex";

        // Animate description words
        gsap.from(".animated-description", {
          opacity: 0,
          y: 20,
          stagger: 0.15,
          duration: 1,
          ease: "power3.out",
          onComplete: function () {
            // Animate corner images to appear with opacity fade
            gsap.to(".corner-image", {
              opacity: 0.5,
              duration: 0.8,
              stagger: 0.2,
              ease: "power2.out",
            });
          }
        });
      }, 1500);
    }
  });

  // Particle.js Initialization for hero section
  particlesJS("particles-js", {
    particles: {
      number: { value: 80 },
      size: { value: 3 },
    },
    interactivity: {
      events: {
        onhover: { enable: true, mode: "repulse" },
      },
    },
  });

  // Particle.js Initialization for description section
  particlesJS("particles-js-2", {
    particles: {
      number: { value: 80 },
      size: { value: 3 },
    },
    interactivity: {
      events: {
        onhover: { enable: true, mode: "repulse" },
      },
    },
  });
});
