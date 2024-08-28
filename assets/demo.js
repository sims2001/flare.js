document.addEventListener('DOMContentLoaded', () => {
    const baseFlare = new FlareJS('.base', {});

    const fullFlare = new FlareJS('.full', {
        glowRadius: 125,
        bgColor: '#ffaa00',
        flareColor: 'hsla(0, 60%, 50%, 0.8)',
        onDestroy: (self) => { prettyLog('onDestroy', self) },
        onReset: (self) => { prettyLog('onReset', self) },
        onStop: (self) => { prettyLog('onStop', self) },
        onStart: (self) => { prettyLog('onStart', self) },
    });

    const experimentalFlare = new FlareJS('.experimental', {
        glowRadius: 75,
        flareColor: '#ffaa0075',
        fluentFlares: true
    });

    document.getElementById('toggle').addEventListener('click', () => {
        fullFlare.toggle();
    })
    document.getElementById('start').addEventListener('click', () => {
        fullFlare.start();
    })
    document.getElementById('stop').addEventListener('click', () => {
        fullFlare.stop();
    })
    document.getElementById('reset').addEventListener('click', () => {
        fullFlare.reset();
    })
    document.getElementById('destroy').addEventListener('click', () => {
        fullFlare.destroy();
    })

});

function prettyLog(str, obj) {
    console.log('%c ' + str, 'color: green; font-weight: bold;');
    console.log('Self: ', obj);
}