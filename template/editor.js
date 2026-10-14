(() => {
  const portfolio = document.querySelector('.bb.refined');
  const controls = document.getElementById('template-editor');
  const status = document.getElementById('edit-status');
  const editable = portfolio.querySelectorAll('.monogram span, .tag, .hero h1, .hero-bottom p, .cta, .ribbon, .section-label, .work h2, .project-list strong');
  const accent = document.getElementById('accent-color');
  const paper = document.getElementById('paper-color');
  const mode = document.getElementById('edit-mode');
  accent.value = getComputedStyle(portfolio).getPropertyValue('--accent').trim();
  paper.value = getComputedStyle(portfolio).getPropertyValue('--paper').trim();
  const updateMode = () => {
    editable.forEach(element => element.contentEditable = mode.checked ? 'true' : 'false');
    status.textContent = mode.checked ? 'Click the headline, introduction, ribbon, or project titles to edit. Download to save.' : 'Preview mode. Menu and project controls work.';
  };
  updateMode();
  mode.addEventListener('change', updateMode);
  accent.addEventListener('input', () => portfolio.style.setProperty('--accent', accent.value));
  paper.addEventListener('input', () => portfolio.style.setProperty('--paper', paper.value));
  portfolio.addEventListener('click', event => {
    if (mode.checked && event.target.closest('[contenteditable="true"]')) event.stopImmediatePropagation();
  }, true);
  document.getElementById('download-template').addEventListener('click', () => {
    const clone = document.documentElement.cloneNode(true);
    clone.querySelectorAll('[contenteditable]').forEach(element => element.setAttribute('contenteditable', 'false'));
    clone.querySelector('#edit-mode').removeAttribute('checked');
    clone.querySelectorAll('.detail, .nav-panel').forEach(element => element.hidden = true);
    clone.querySelector('.menu').setAttribute('aria-expanded', 'false');
    const file = new Blob(['<!doctype html>\n' + clone.outerHTML], {type: 'text/html;charset=utf-8'});
    const address = URL.createObjectURL(file);
    const link = document.createElement('a');
    link.href = address;
    link.download = 'refined-builder.html';
    link.click();
    setTimeout(() => URL.revokeObjectURL(address), 1000);
    status.textContent = 'Edited template downloaded. Replace the saved template file to keep your changes.';
  });
})();
