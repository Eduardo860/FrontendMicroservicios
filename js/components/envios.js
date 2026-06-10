// ── Envíos ────────────────────────────────────────────────────
async function listarEnvios() {
  show('resp-envios', 'Cargando...');
  try {
    const { ok, data } = await brokerReq('GET', '/ordenes/envios');
    if (ok && data && data.data && Array.isArray(data.data)) {
      if (data.data.length === 0) return show('resp-envios', 'Sin envíos registrados');
      const rows = data.data.map(e => `
        <tr>
          <td>${escHtml(e.id)}</td>
          <td>${escHtml(e.orderId)}</td>
          <td>${escHtml(e.customerEmail)}</td>
          <td>${escHtml(e.status)}</td>
          <td>${escHtml(e.nextRunAt || e.sentAt || '')}</td>
        </tr>
      `).join('');
      const html = `<table><thead><tr><th>ID</th><th>Orden ID</th><th>Email</th><th>Estatus</th><th>Fecha</th></tr></thead><tbody>${rows}</tbody></table>`;
      const el = document.getElementById('resp-envios');
      el.className = 'response success';
      el.innerHTML = html;
    } else {
      show('resp-envios', data.data || data, !ok);
    }
  } catch (err) {
    show('resp-envios', 'Error al cargar envíos: ' + err.message, true);
  }
}


