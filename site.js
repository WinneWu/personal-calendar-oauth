(() => {
  const year = String(new Date().getFullYear());
  document.querySelectorAll('[data-current-year]').forEach((el) => { el.textContent = year; });

  const host = window.location.hostname;
  if (!host.endsWith('.github.io')) return;
  const owner = host.slice(0, -'.github.io'.length);
  const firstPath = window.location.pathname.split('/').filter(Boolean)[0] || '';
  const isHtmlFile = /\.html?$/i.test(firstPath);
  const repository = (!firstPath || isHtmlFile) ? `${owner}.github.io` : firstPath;
  const issuesUrl = `https://github.com/${owner}/${repository}/issues`;

  document.querySelectorAll('[data-repo-issues]').forEach((link) => {
    link.href = issuesUrl;
    link.hidden = false;
  });
  document.querySelectorAll('[data-local-contact]').forEach((el) => { el.hidden = true; });
})();
