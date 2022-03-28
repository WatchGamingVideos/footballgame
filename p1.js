this.onStart(function() {
    this.motion.setRotationStyle("left-right");
    while (true) {
        if (this.sensing.isMouseDown()) {
            this.motion.pointTowards("mouse-pointer");
            this.animation.simpleSwitchCostume("Side Football Run Ball");
            this.motion.move(3.1);
        } else {
            this.animation.simpleSwitchCostume("Side Football Idle Ball");
        }
        if (this.sensing.isTouchingColor("#941100")) {
            this.broadcast("TD");
            this.looks.sayFor("TEAM TYNKER TD", 0.3);
            this.motion.moveTo(-456, -44);
        }
        if (this.sensing.isTouching("Actor1")) {
            this.animation.simpleSwitchCostumeAndWait("Side Football Tackle");
            this.motion.moveTo(-448, -39);
        }
        if (this.sensing.isTouching("Actor11")) {
            this.animation.simpleSwitchCostumeAndWait("Side Football Tackle");
            this.motion.moveTo(-448, -39);
        }
        if (this.sensing.isTouching("Actor111")) {
            this.animation.simpleSwitchCostumeAndWait("Side Football Tackle");
            this.motion.moveTo(-448, -39);
        }
        if (this.sensing.isTouching("Actor12")) {
            this.animation.simpleSwitchCostumeAndWait("Side Football Tackle");
            this.motion.moveTo(-448, -39);
        }
    }
});

function stop() {
    this.terminate("all");
}
