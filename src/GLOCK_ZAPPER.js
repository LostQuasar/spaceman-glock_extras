"use strict";

const SpaceApi = require("../../spaceman-api/api");
const config = require("../config.json");

class GLOCK_ZAPPER {
    static onLoadMod() {        
        const itemId = "GLOCK_ZAPPER";
        const itemClone = "5a7ae0c351dfba0017554310";
        const itemCategory = "5b5f792486f77447ed5636b3";
        const itemFleaPrice = 6608;
        const itemPrefabPath = "GLOCK_ZAPPER/weapon_glock_glock_17_gen3_9x19_container.bundle";
        const itemLongName = "GLOCK Zapper 9x19 pistol";
        const itemShortName = "Zapper";
        const itemDescription = "Glock Zapper, also known as the Glock light gun is an Austrian pistol designed by Glock company for the Space army purposes. Thanks to both to its impressive combat characteristics and reliability gained wide recognition and popularity also as a space police, shooting sports and civilian self-defence weapon.";

        if(config.debug){
            Logger.info(`Loading: ${itemId}`);
        }

        let item = JsonUtil.clone(DatabaseServer.tables.templates.items[itemClone]);
        item._id = itemId;
        item._props.Prefab.path = itemPrefabPath;
        DatabaseServer.tables.templates.items[itemId] = item;

        SpaceApi.CreateHandbookItem(itemId, itemCategory, itemFleaPrice);
        SpaceApi.CreateNewItemLocale("en", itemId, itemLongName, itemShortName, itemDescription);
        SpaceApi.CreateTraderAssort(itemId+"_ragfairOffer", itemId, "ragfair", itemFleaPrice, "RUB", 1);
    }
}
module.exports = GLOCK_ZAPPER;