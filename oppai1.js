this.onStart(function() {
    this.motion.moveTo(442, 179);
    this.motion.setRotationStyle("left-right");
    while (true) {
        this.animation.simpleSwitchCostume("Side Football Run Ball");
        this.motion.move(2.8);
        this.motion.pointTowards("F");
    }
});

this.onStart(function() {
    if (this.sensing.isTouchingColor("#941100")) {
        this.looks.hide();
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
        if (this.sensing.isTouching("F11")) {
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
