export function markdownToHtml(raw: string) {
  let html = raw
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  html = html.replace(
    /```([\s\S]*?)```/g,
    (_, code) => `<pre><code>${code.trim()}</code></pre>`,
  );
  html = html
    .replace(/^### (.+)$/gm, "<h3>$1</h3>")
    .replace(/^## (.+)$/gm, "<h2>$1</h2>")
    .replace(/^# (.+)$/gm, "<h1>$1</h1>");
  html = html
    .replace(/^> (.+)$/gm, "<blockquote>$1</blockquote>")
    .replace(
      /^\*\*Status:\*\* (.+)$/gm,
      '<p class="status-line"><strong>Status</strong><span>$1</span></p>',
    )
    .replace(
      /^\*\*Category:\*\* (.+)$/gm,
      '<p class="status-line"><strong>Area</strong><span>$1</span></p>',
    );
  html = html
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/^- (.*)$/gm, "<li>$1</li>");
  html = html.replace(/(?:<li>.*<\/li>\n?)+/gs, (list) => `<ul>${list}</ul>`);
  return html
    .split(/\n\s*\n/)
    .map((block) =>
      /^<(h\d|ul|pre|blockquote|p|div)/.test(block.trim())
        ? block
        : `<p>${block.replace(/\n/g, "<br>")}</p>`,
    )
    .join("");
}
