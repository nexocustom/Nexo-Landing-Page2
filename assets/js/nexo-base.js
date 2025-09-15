// === Nexo Base JS ===
export function setYear(sel = '#year'){
  const el = document.querySelector(sel);
  if(el) el.textContent = new Date().getFullYear();
}

export function tickClock(sel = '#clock'){
  const el = document.querySelector(sel);
  if(!el) return;
  const update = () => el.textContent = new Date().toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'});
  update(); setInterval(update, 1000);
}
