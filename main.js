"use strict";

const GLOCK_21 = require("./src/GLOCK_21.js");
const GLOCK_ZAPPER = require("./src/GLOCK_ZAPPER.js");
const GLOCK_ZAPPER_BARREL = require("./src/GLOCK_ZAPPER_BARREL.js");
const GLOCK_ZAPPER_SLIDE = require("./src/GLOCK_ZAPPER_SLIDE.js");

class main {
    constructor() {
        Logger.info(`Loading: spaceman-glock_extras`)
        ModLoader.onLoad["GLOCK_21"] = GLOCK_21.onLoadMod;
        ModLoader.onLoad["GLOCK_ZAPPER"] = GLOCK_ZAPPER.onLoadMod;
        ModLoader.onLoad["GLOCK_ZAPPER_BARREL"] = GLOCK_ZAPPER_BARREL.onLoadMod;
        ModLoader.onLoad["GLOCK_ZAPPER_SLIDE"] = GLOCK_ZAPPER_SLIDE.onLoadMod;
    }
}

module.exports.main = new main();
