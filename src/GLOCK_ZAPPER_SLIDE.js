"use strict";

const SpaceApi = require("../../spaceman-api/api");
const config = require("../config.json");

class GLOCK_ZAPPER_SLIDE {
    static onLoadMod() {        
        const itemId = "GLOCK_ZAPPER_SLIDE";
        const itemClone = "5a6f5e048dc32e00094b97da";
        const itemCategory = "5b5f764186f77447ec5d7714";
        const itemFleaPrice = 3109;
        const itemPrefabPath = "GLOCK_ZAPPER_SLIDE.bundle";
        const itemLongName = "Glock Zapper slide";
        const itemShortName = "Zapper slide";
        const itemDescription = "Standard slide for Glock Zapper.";

        if(config.debug){
            Logger.info(`Loading: ${itemId}`);
        }

        let item = JsonUtil.clone(DatabaseServer.tables.templates.items[itemClone]);
        item._id = itemId;
        item._props.Prefab.path = itemPrefabPath;
        DatabaseServer.tables.templates.items[itemId] = item;

        SpaceApi.AddItemSlotFilter("5a7ae0c351dfba0017554310", itemId, SpaceApi.FindSlotIndex("5a7ae0c351dfba0017554310", "mod_reciever"));
        SpaceApi.AddItemSlotFilter("GLOCK_21", itemId, SpaceApi.FindSlotIndex("GLOCK_21", "mod_reciever"));
        SpaceApi.AddItemSlotFilter("GLOCK_ZAPPER", itemId, SpaceApi.FindSlotIndex("GLOCK_ZAPPER", "mod_reciever"));

        SpaceApi.CreateHandbookItem(itemId, itemCategory, itemFleaPrice);
        SpaceApi.CreateNewItemLocale("en", itemId, itemLongName, itemShortName, itemDescription);
        SpaceApi.CreateTraderAssort(itemId+"_ragfairOffer", itemId, "ragfair", itemFleaPrice, "RUB", 1);
    }
}
module.exports = GLOCK_ZAPPER_SLIDE;