// ── Inicialización ─────────────────────────────────────────────
window.addEventListener('DOMContentLoaded', () => {
  listarProductos();
  checkHealth();
});

// ── Init ──────────────────────────────────────────────────────
checkHealth();
setInterval(checkHealth, 30000);


