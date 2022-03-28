this.onStart(function() {
    this.motion.setRotationStyle("left-right");
    while (true) {
        this.motion.pointTowards("F");
        this.animation.simpleSwitchCostume("Side Football Run Ball");
        this.motion.move(2.1);
    }
});

this.onStart(function() {
    if (this.sensing.isTouchingColor("#941100")) {
        this.looks.hide();
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
