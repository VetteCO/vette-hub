document.addEventListener('DOMContentLoaded', () => {
  const copyButton = document.querySelector('[data-copy-email]');
  const feedback = document.querySelector('.copy-feedback');
  if (!copyButton || !feedback) return;
  copyButton.addEventListener('click', async () => {
    const email = copyButton.getAttribute('data-copy-email');
    try {
      if (!navigator.clipboard || typeof navigator.clipboard.writeText !== 'function') {
        throw new Error('Clipboard API unavailable');
      }
      await navigator.clipboard.writeText(email);
      feedback.textContent = 'E-mail copiado! Agora é só colar onde preferir.';
      copyButton.textContent = 'Copiado ✓';
    } catch (error) {
      feedback.textContent = 'Copie o endereço acima manualmente.';
      copyButton.textContent = 'Copiar e-mail';
    }
  });
});
