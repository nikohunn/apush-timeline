/**
 * app.js — APUSH Timeline renderer
 * Reads the UNITS array from data.js and builds the DOM.
 * Each event card toggles open/closed on click.
 */

(function () {
  const root = document.getElementById('timeline-root');
  if (!root) { console.error('Missing #timeline-root element'); return; }
  if (typeof UNITS === 'undefined') { console.error('data.js not loaded'); return; }

  UNITS.forEach(function (unit, unitIndex) {
    // Section wrapper
    const section = document.createElement('section');
    section.className = 'unit-section ' + unit.id;
    section.setAttribute('aria-label', unit.label);

    // Unit pill label
    const label = document.createElement('div');
    label.className = 'unit-label';
    label.textContent = unit.label;
    section.appendChild(label);

    // Timeline track
    const track = document.createElement('div');
    track.className = 'timeline';

    unit.events.forEach(function (ev, evIndex) {
      const evWrapper = document.createElement('div');
      evWrapper.className = 'event';

      // Stagger the fade-up animation
      evWrapper.style.animationDelay = (unitIndex * 0.05 + evIndex * 0.04) + 's';

      const card = document.createElement('div');
      card.className = 'event-card';
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', '0');
      card.setAttribute('aria-expanded', 'false');

      // Top row: year + title + chevron
      const top = document.createElement('div');
      top.className = 'event-top';

      const year = document.createElement('span');
      year.className = 'event-year';
      year.textContent = ev.year;

      const title = document.createElement('span');
      title.className = 'event-title';
      title.textContent = ev.title;

      const chevron = document.createElement('span');
      chevron.className = 'chevron';
      chevron.setAttribute('aria-hidden', 'true');
      chevron.textContent = '⌄';

      top.appendChild(year);
      top.appendChild(title);
      top.appendChild(chevron);

      // Note (hidden until expanded)
      const note = document.createElement('div');
      note.className = 'event-note';
      note.textContent = ev.note;

      card.appendChild(top);
      card.appendChild(note);

      // Toggle on click
      function toggle() {
        const isOpen = card.classList.toggle('open');
        card.setAttribute('aria-expanded', String(isOpen));
      }

      card.addEventListener('click', toggle);
      // Also allow keyboard activation
      card.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggle();
        }
      });

      evWrapper.appendChild(card);
      track.appendChild(evWrapper);
    });

    section.appendChild(track);
    root.appendChild(section);
  });
})();
