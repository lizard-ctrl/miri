document.addEventListener('mousemove', (e) => {
    const skull = document.createElement('div');
    skull.classList.add('skull');
    skull.textContent = '❀';
    document.body.appendChild(skull);
  
    skull.style.left = `${e.pageX}px`;
    skull.style.top = `${e.pageY}px`;
  
    // Optional: add a little randomness to position or rotation
    skull.style.transform = `translate(-50%, -50%) rotate(${Math.random() * 360}deg)`;
  
    // Remove after fade
    setTimeout(() => {
      skull.remove();
    }, 10000); // 5 seconds
  });

 
  const totalImages = 12;

  function createAndAnimateImage() {
    const img = document.createElement("img");
    const index = Math.floor(Math.random() * totalImages) + 1;
    img.src = `assets/flash/${index}.png`;
    img.className = "image";
    img.style.left = `${Math.random() * window.innerWidth-80}px`;
    img.style.top = `-100px`;
    document.body.appendChild(img);

    let position = -100;
    const speed = 2; // pixels per frame
    const interval = setInterval(() => {
      position += speed;
      img.style.top = `${position}px`;

      if (position > window.innerHeight) {
        clearInterval(interval);
        img.remove(); // clean up
      }
    }, 30); // roughly 60fps
  }

  // Start staggered drops every 1 second
  setInterval(createAndAnimateImage, 3000);
     

  const tattoos = Array.from({ length: 12 }, (_, i) => `assets/flash/${i + 1}.png`);
  const whereOptions = ["arms", "leg", "back", "shoulder", "hand", "neck", "chest"];
  const sizeOptions = ["small", "medium", "large"];
  
  const tattooEl = document.getElementById("tattoo");
  const whereEl = document.getElementById("where-answer");
  const sizeEl = document.getElementById("size-answer");
  
  document.getElementById("feeling-lucky").addEventListener("click", () => {
    shuffleTattoo(); // 👈 updated
    shuffleAnswer(whereEl, whereOptions);
    shuffleAnswer(sizeEl, sizeOptions);
    explodeEmojis();
  });
  
  function shuffleTattoo() {
    let i = 0;
    tattooEl.style.opacity = 0;
  
    const duration = 1500;
    const intervalTime = 75;
  
    const shuffleInterval = setInterval(() => {
      tattooEl.src = tattoos[i % tattoos.length];
      i++;
    }, intervalTime);
  
    setTimeout(() => {
      clearInterval(shuffleInterval);
      const final = tattoos[Math.floor(Math.random() * tattoos.length)];
      tattooEl.src = final;
      tattooEl.style.opacity = 1;
    }, duration);
  }
  
  function shuffleAnswer(el, options) {
    let i = 0;
    const duration = 1500;
    const intervalTime = 75;
    const shuffleInterval = setInterval(() => {
      el.textContent = options[i % options.length];
      i++;
    }, intervalTime);
    setTimeout(() => {
      clearInterval(shuffleInterval);
      const final = options[Math.floor(Math.random() * options.length)];
      el.textContent = final;
    }, duration);
  }
  
  
 
  

  
  
  
  const circleBtn = document.querySelector('.circle-btn');
      const navLinks = document.querySelector('.nav-links');
      const closeBtnNav = document.querySelector('.nav-links .close-btn');
      const contentSections = document.querySelectorAll('.content');
      const linkBtns = document.querySelectorAll('.nav-link');
      const nameHeader = document.getElementById('nameHeader'); 
  
  
  
  
     
      closeBtnNav.addEventListener('click', () => {
          circleBtn.classList.remove('active');
          navLinks.classList.remove('active');
      });
  
      linkBtns.forEach(link => {
          link.addEventListener('click', (e) => {
              e.preventDefault();
              const contentId = link.getAttribute('data-content');
              const contentDiv = document.getElementById(contentId);
  
            
              contentSections.forEach(section => {
                  section.classList.remove('active');
              });
  
              contentDiv.classList.add('active');
  
             
              rawrBar.style.display = 'none';
          });
      });
  
      const closeBtns = document.querySelectorAll('.content .close-btn');
      closeBtns.forEach(btn => {
          btn.addEventListener('click', (e) => {
              const contentDiv = e.target.closest('.content');
              contentDiv.classList.remove('active');
  
              if (![...contentSections].some(section => section.classList.contains('active'))) {
                  
                  rawrBar.style.display = 'block';
              }
          });
      });
  