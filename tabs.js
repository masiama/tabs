function tabs(root) {
  const pages = Array.from(root.querySelectorAll('.pages > .page'));
  const items = Array.from(root.querySelectorAll('.heading > .item'));

  let selected = Math.max(items.findIndex(c => c == document.querySelector('.heading .item.selected')), 0);
  items.forEach((item, idx) => item.addEventListener('click', () => {
    if (selected == idx) return;

    const prev = pages[selected];
    const page = pages[idx];

    items.map(i => i.classList.remove('selected'));
    item.classList.add('selected');

    page.style.transition = 'none';

    if (idx > selected) {
      page.style.left = '100vw';
      prev.style.left = '-100vw';
      prev.style.right = 'initial';
    }
    else {
      page.style.left = '-100vw';
      prev.style.left = 'initial';
      prev.style.right = '-100vw';
    }
    selected = idx;

    page.classList.add('shown');
    prev.classList.remove('shown');

    setTimeout(() => page.removeAttribute('style'), 0);
    setTimeout(() => prev.removeAttribute('style'), 400);
  }))
}
