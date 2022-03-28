this.onStart(function() {
    this.motion.setRotationStyle("left-right");
    while (true) {
        this.motion.pointTowards("F");
        this.motion.move(2.1);
    }
});

this.onStart(function() {
    if (this.sensing.isTouching("actor1")) {
        this.animation.simpleSwitchCostumeAndWait("Side Football Block No Ball");
        this.motion.moveTo(-459, 130);
    }
    if (this.sensing.isTouching("Actor11")) {
        this.animation.simpleSwitchCostumeAndWait("Side Football Block No Ball");
        this.motion.moveTo(-459, 130);
    }
});

function stop() {
    this.terminate("all");
}
