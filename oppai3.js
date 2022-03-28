this.onStart(function() {
    this.motion.setRotationStyle("left-right");
    while (true) {
        this.motion.pointTowards("F");
        this.animation.simpleSwitchCostume("Side Football Run Ball");
        this.motion.move(2.4);
    }
});

this.onStart(function() {
    while (true) {
        if (this.sensing.isTouching("F11")) {
            this.animation.simpleSwitchCostumeAndWait("Side Football Tackle");
            this.motion.moveTo(430, -88);
        }
    }
});

this.onStart(function() {
    while (true) {
        if (this.sensing.isTouching("F1")) {
            this.animation.simpleSwitchCostumeAndWait("Side Football Tackle");
            this.motion.moveTo(430, -88);
        }
    }
});

this.onStart(function() {
    while (true) {
        if (this.sensing.isTouching("F12")) {
            this.animation.simpleSwitchCostumeAndWait("Side Football Tackle");
            this.motion.moveTo(430, -88);
        }
    }
});

