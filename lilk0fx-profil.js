(function () {
            const revealElements = document.querySelectorAll('.reveal');
            revealElements.forEach((el, i) => {
                el.style.setProperty('--i', i % 8);
            });

            if ('IntersectionObserver' in window) {
                const io = new IntersectionObserver((entries, obs) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('visible');
                            obs.unobserve(entry.target);
                        }
                    });
                }, { threshold: 0.1 });

                revealElements.forEach(el => io.observe(el));
            } else {
                revealElements.forEach(el => el.classList.add('visible'));
            }
        })();