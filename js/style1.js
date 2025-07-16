
        // Controle do player de música
        const music = document.getElementById('backgroundMusic');
        const volumeSlider = document.getElementById('volumeSlider');
        const volumeDisplay = document.getElementById('volumeDisplay');

        // Configurar volume inicial ainda mais baixo (12%)
        music.volume = 0.01;
        
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
            window.location.href = 'pag2.html';
            // Exemplo: window.location.href = 'terceira-pagina.html';
        }

        // Criar corações flutuantes
        function createHeart() {
            const heart = document.createElement('div');
            heart.className = 'heart';
            const hearts = ['💜', '🖤', '💙', '🤍'];
            heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDuration = (Math.random() * 15 + 15) + 's';
            heart.style.animationDelay = Math.random() * 8 + 's';
            
            document.getElementById('hearts').appendChild(heart);
            
            // Remove o coração após a animação
            setTimeout(() => {
                if (heart.parentNode) {
                    heart.parentNode.removeChild(heart);
                }
            }, 25000);
        }

        // Criar corações periodicamente
        setInterval(createHeart, 4000);
        
        // Criar alguns corações iniciais
        for (let i = 0; i < 2; i++) {
            setTimeout(createHeart, i * 2000);
        }


(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'95ede952576306a3',t:'MTc1MjQ2MzUxMS4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();