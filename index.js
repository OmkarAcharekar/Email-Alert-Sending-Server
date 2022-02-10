//Jack of all ca

class Game {
    constructor() {
        this.setup();
    }

    setup() {
        this.initSize();
        this.initScenes();
    }

    initData() {
        this.data = config.data();
        this.data.end = false;
    }

    initSize() {
        const el = $('#app');
        style(
            el, {
            width: config.game.w + 'px',
            height: config.game.h + 'px',
        }
        );
    }

    initScenes() {
        this.scenes = {
            start: new Start('#start', this),
            play: new Play('#play', this),
            over: new Over('#over', this),
            rank: new Rank('#rank', this),
        }
    }


