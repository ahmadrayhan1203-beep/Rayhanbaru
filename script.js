// Smooth scrolling for anchors (if used)
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function(e){
    const href = this.getAttribute('href');
    if(href.length > 1 && href.startsWith('#')){
      e.preventDefault();
      document.querySelector(href).scrollIntoView({behavior: 'smooth'});
    }
  });
});

// Fade-in on scroll
const faders = document.querySelectorAll('.fade-in');
const options = {threshold: 0.12};
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
    }
  });
}, options);
faders.forEach(f => observer.observe(f));

// Lightbox
const thumbs = document.querySelectorAll('.thumb');
const lb = document.getElementById('lightbox');
const lbImage = document.getElementById('lbImage');
const lbCaption = document.getElementById('lbCaption');
const lbClose = document.getElementById('lbClose');
if(thumbs && lb){
  thumbs.forEach(t => {
    t.addEventListener('click', function(e){
      e.preventDefault();
      const img = this.getAttribute('href');
      const caption = this.dataset.caption || '';
      lbImage.src = img;
      lbCaption.textContent = caption;
      lb.classList.add('active');
    });
  });
  lbClose?.addEventListener('click', ()=> lb.classList.remove('active'));
  lb.addEventListener('click', (e)=>{ if(e.target === lb) lb.classList.remove('active'); });
}

// Prepare mailto form (contact page)
function prepareMail(e){
  return true;
}
