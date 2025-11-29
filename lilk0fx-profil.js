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
// Animation de vague pour l'avatar
(function() {
    const avatar = document.querySelector('.profile-avatar');
    
    if (avatar) {
        // Ajouter les styles dynamiquement
        const style = document.createElement('style');
        style.innerHTML = `
            @keyframes float {
                0%, 100% {
                    transform: translateY(0px);
                }
                50% {
                    transform: translateY(-20px);
                }
            }

            @keyframes wave {
                0%, 100% {
                    transform: translateY(0px) rotateZ(0deg);
                }
                25% {
                    transform: translateY(-15px) rotateZ(2deg);
                }
                50% {
                    transform: translateY(-25px) rotateZ(0deg);
                }
                75% {
                    transform: translateY(-15px) rotateZ(-2deg);
                }
            }

            @keyframes shadowFloat {
                0%, 100% {
                    transform: translateX(-50%) scaleX(1);
                }
                50% {
                    transform: translateX(-50%) scaleX(0.8);
                }
            }

            .profile-avatar {
                animation: wave 3s cubic-bezier(.2,.9,.2,1) infinite !important;
                transform-origin: center;
                position: relative;
            }

            .profile-avatar::after {
                content: '';
                position: absolute;
                bottom: -20px;
                left: 50%;
                width: 80%;
                height: 15px;
                background: radial-gradient(ellipse at center, rgba(0, 212, 161, 0.3) 0%, rgba(0, 212, 161, 0) 70%);
                filter: blur(8px);
                animation: shadowFloat 3s cubic-bezier(.2,.9,.2,1) infinite;
                z-index: -1;
            }
        `;
        document.head.appendChild(style);
    }
})();

// Gestion du fade-in au scroll
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
