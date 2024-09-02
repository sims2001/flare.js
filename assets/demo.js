document.addEventListener('DOMContentLoaded', () => {
    const baseFlare = new FlareJS('.base', {});

    const fullFlare = new FlareJS('.full', {
        glowRadius: 125,
        bgColor: '#ffaa00',
        flareColor: 'hsla(0, 60%, 50%, 0.8)',
        onDestroy: (self) => {
            prettyLog('onDestroy', self);
        },
        onReset: (self) => {
            prettyLog('onReset', self);
        },
        onStop: (self) => {
            prettyLog('onStop', self);
        },
        onStart: (self) => {
            prettyLog('onStart', self);
        },
    });

    const experimentalFlare = new FlareJS('.experimental', {
        glowRadius: 75,
        flareColor: '#ffaa0075',
        fluentFlares: true,
    });

    document.getElementById('toggle').addEventListener('click', () => {
        fullFlare.toggle();
    });
    document.getElementById('start').addEventListener('click', () => {
        fullFlare.start();
    });
    document.getElementById('stop').addEventListener('click', () => {
        fullFlare.stop();
    });
    document.getElementById('reset').addEventListener('click', () => {
        fullFlare.reset();
    });
    document.getElementById('destroy').addEventListener('click', () => {
        fullFlare.destroy();
    });


    const fullscreenBase = document.querySelector('.fullscreen-base');
    const fullscreenButtons = document.querySelectorAll('.fullscreen-button');

    fullscreenButtons.forEach((b) => {
        b.addEventListener('click', (e) => {
            const selector = b.dataset.toggle;
            const isFullScreen = document.body.dataset.fullscreen === 'true';

            const img = b.querySelector('img');

            const element = document.getElementById(selector);

            console.log("Toggling Fullscreen!");

            if(isFullScreen) {
                fullscreenBase.classList.add('d-none');
                element.classList.remove('fullscreen');
                img.src = 'assets/arrows-angle-expand.svg';
                document.body.classList.remove('no-scroll');
                document.body.dataset.fullscreen = 'false';
            } else {
                fullscreenBase.classList.remove('d-none');
                element.classList.add('fullscreen');
                img.src = 'assets/arrows-angle-contract.svg';
                document.body.classList.add('no-scroll');
                document.body.dataset.fullscreen = 'true';
                window.scrollTo(0, 0);
            }

        });
    });
});

function prettyLog(str, obj) {
    console.log('%c ' + str, 'color: green; font-weight: bold;');
    console.log('Self: ', obj);
}
