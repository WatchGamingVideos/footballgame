this.onStart(function() {
    this.motion.setRotationStyle("left-right");
    while (true) {
        this.motion.pointTowards("F");
        this.animation.simpleSwitchCostume("Side Football Block No Ball");
        this.motion.move(2);
    }
});

this.onStart(function() {
    if (this.sensing.isTouching("actor1")) {
        this.motion.moveTo(-459, 130);
    }
    if (this.sensing.isTouching("Actor11")) {
        this.motion.moveTo(-459, 130);
    }
});

function stop() {
    this.terminate("all");
}
