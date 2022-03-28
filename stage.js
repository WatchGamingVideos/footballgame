this.onStart(function() {
    this.sound.setVolume(0);
    while (true) {
        this.sound.play("Crowd sports");
    }
});

this.onStart(function() {
    score = 0;
    while (true) {
    }
});

this.onMessageReceived("TD", function () {
    this.sound.changeVolume(5);
    score++;
});

this.onStart(function() {
    if ((this.score > this.record)) {
        number = this.score;
        this.broadcast("NEW  RECORD");
    }
});

