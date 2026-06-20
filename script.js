// Subtle parallax: obstacles drift slightly based on scroll, and cursor tilts product cards
document.addEventListener('DOMContentLoaded', () => {

  // Cursor-based 3D tilt on product cards
  document.querySelectorAll('.product-inner').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const rotateX = ((y - cy) / cy) * -8;
      const rotateY = ((x - cx) / cx) * 8;
      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'rotateX(0deg) rotateY(0deg) translateY(0)';
    });
  });

  // Random slight horizontal drift per obstacle so they don't feel mechanical
  document.querySelectorAll('.obstacle').forEach(ob => {
    const drift = (Math.random() * 80 - 40) + 'px';
    ob.style.setProperty('--drift', drift);
  });

  // Pause hero animation if tab not visible (perf)
  document.addEventListener('visibilitychange', () => {
    const scene = document.querySelector('.scene');
    if (document.hidden) {
      scene.style.animationPlayState = 'paused';
    }
  });

});
