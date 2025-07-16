document.querySelectorAll('.ramo').forEach((ramo) => {
  ramo.addEventListener('click', () => {
    if (!ramo.classList.contains('activado')) {
      ramo.classList.add('activado');
      const next = ramo.dataset.next?.split(" ") || [];
      next.forEach(id => {
        const nextRamo = document.querySelector(`[data-id="${id}"]`);
        if (nextRamo) nextRamo.classList.add('activado');
      });
    }
  });
});
