        // Controle do player de música
        const music = document.getElementById('backgroundMusic');
        const volumeSlider = document.getElementById('volumeSlider');
        const volumeDisplay = document.getElementById('volumeDisplay');

        // Configurar volume inicial e tentar tocar automaticamente
        music.volume = 0.005; // 15% do volume
        
        // Tentar tocar automaticamente quando a página carregar
        window.addEventListener('load', function() {
            music.play().catch(function(error) {
                console.log('Autoplay bloqueado pelo navegador. Clique na página para iniciar a música.');
            });
        });

        // Permitir que qualquer clique na página inicie a música
        document.addEventListener('click', function() {
            if (music.paused) {
                music.play();
            }
        });

        // Controle do volume
        volumeSlider.addEventListener('input', function() {
            const volume = this.value / 100;
            music.volume = volume;
            volumeDisplay.textContent = this.value + '%';
        });

        // Função para ir para próxima página
        function nextPage() {
            window.location.href = 'pags/pag1.html';
            // Exemplo: window.location.href = 'proxima-pagina.html';
        }

        // Criar rosas flutuantes
        function createRose() {
            const rose = document.createElement('div');
            rose.className = 'rose';
            rose.innerHTML = '🌹';
            rose.style.left = Math.random() * 100 + '%';
            rose.style.animationDuration = (Math.random() * 10 + 10) + 's';
            rose.style.animationDelay = Math.random() * 5 + 's';
            
            document.getElementById('roses').appendChild(rose);
            
            // Remove a rosa após a animação
            setTimeout(() => {
                if (rose.parentNode) {
                    rose.parentNode.removeChild(rose);
                }
            }, 20000);
        }

        // Criar rosas periodicamente
        setInterval(createRose, 3000);
        
        // Criar algumas rosas iniciais
        for (let i = 0; i < 3; i++) {
            setTimeout(createRose, i * 1000);
        }


    (function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'958bd764d2dfe103',t:'MTc1MTQzNTE3Mi4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();