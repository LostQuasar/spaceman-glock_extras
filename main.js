"use strict";

const GLOCK_21 = require("./src/GLOCK_21");


class main {
    constructor() {
        Logger.info(`Loading: spaceman-glock_21`)
        ModLoader.onLoad["GLOCK_21"] = GLOCK_21.onLoadMod;
    }
}

module.exports.main = new main();
