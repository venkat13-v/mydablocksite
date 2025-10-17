/**
 * EDS blocks: decorate() runs client-side to enhance semantic HTML
 * generated from the model. Keep it lean for performance.
 * @see https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/edge-delivery/overview
 */
export default function decorate(block) {
  // The block's semantic HTML is rendered by EDS/UE based on the model.
  // Normalize DOM for styling and enrich behavior.

  // Expect structure: title, body (richtext), optional image, CTA text+link.
  const titleEl = block.querySelector('h2, h1, .title');
  if (titleEl) titleEl.classList.add('promo-title');

  // Body: wrap in a class for CSS
  const bodyEl = block.querySelector('p, div, section');
  if (bodyEl) bodyEl.classList.add('promo-body');

  // Image: convert first <img> into .promo-image if present
  const img = block.querySelector('img');
  if (img) img.classList.add('promo-image');

  // CTA: find first link and give it a class (or build a button)
  const ctaLink = block.querySelector('a[href]');
  if (ctaLink) ctaLink.classList.add('promo-cta');

  // Example: add ARIA roles or attributes if needed
  block.setAttribute('role', 'region');
  block.setAttribute('aria-label', titleEl?.textContent?.trim() || 'Promotion');

  // Optional: analytics hook or lazy behaviors go here
}
