// mobile nav toggle
        const navBtn = document.getElementById('navBtn'), mobileNav = document.getElementById('mobileNav');
        navBtn && navBtn.addEventListener('click', () => {
            const open = mobileNav.style.display === 'block';
            mobileNav.style.display = open ? 'none' : 'block';
            navBtn.setAttribute('aria-expanded', String(!open));
        });

        // testimonials slider
        const slides = document.getElementById('slides'), dots = document.getElementById('dots');
        const total = slides ? slides.children.length : 0;
        let idx = 0, interval = null;
        function renderDots(){
            if(!dots) return;
            dots.innerHTML = '';
            for(let i=0;i<total;i++){
                const d=document.createElement('div'); d.className='dot'+(i===idx?' active':'');
                d.addEventListener('click',()=>{ idx=i; update(); });
                dots.appendChild(d);
            }
        }
        function update(){
            if(!slides) return;
            slides.style.transform = 'translateX('+(-idx*100)+'%)';
            Array.from(dots.children).forEach((d,i)=>d.classList.toggle('active',i===idx));
        }
        function startSlider(){
            interval = setInterval(()=>{ idx = (idx+1)%total; update(); }, 4500);
        }
        if(total>0){ renderDots(); update(); startSlider(); }
        
        // Fade-in lors du scroll — IntersectionObserver léger
        (function () {
            const selector = '.course, .plan, .instructor, .slide, .card-small, .hero-card';
            const elems = Array.from(document.querySelectorAll(selector));
            // ajouter la classe reveal et une variable d'index pour délai
            elems.forEach((el, i) => {
                el.classList.add('reveal');
                el.style.setProperty('--i', i % 10); // cycle pour éviter délais trop grands
            });

            if ('IntersectionObserver' in window) {
                const io = new IntersectionObserver((entries, obs) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('visible');
                            obs.unobserve(entry.target);
                        }
                    });
                }, { threshold: 0.12 });

                document.querySelectorAll('.reveal').forEach(el => io.observe(el));
            } else {
                // fallback simple
                document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
            }
        })();

        // contact form (demo)
        function handleSubmit(e){
            e.preventDefault();
            const name=document.getElementById('name').value.trim();
            const email=document.getElementById('email').value.trim();
            const subject=document.getElementById('subject').value.trim();
            const message=document.getElementById('message').value.trim();
            // demo: open mail client (fallback) and show a simple confirmation
            const mailto = `mailto:hello@0fx.example?subject=${encodeURIComponent(subject||'Contact 0FX')}&body=${encodeURIComponent('Nom: '+name+'\\nEmail: '+email+'\\n\\n'+message)}`;
            window.location.href = mailto;
            alert('Merci — votre message va être envoyé via votre client mail.');
            e.target.reset();
        }

