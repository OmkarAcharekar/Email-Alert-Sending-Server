class Over extends Scene {
    setup() {

        this.game.data.end = true;

        this.updateView()

        this.event();
    }

    updateView() {
        const {
            time,
            score,
            shoot,
        } = this.game.data;
        $('#over .time').innerHTML = numberFormat(time);
        $('#over .score').innerHTML = numberFormat(score);
        $('#over .shoot').innerHTML = numberFormat(shoot);
    }