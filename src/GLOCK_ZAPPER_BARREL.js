"use strict";

const SpaceApi = require("../../spaceman-api/api");
const config = require("../config.json");

class GLOCK_ZAPPER_BARREL {
    static onLoadMod() {        
        const itemId = "GLOCK_ZAPPER_BARREL";
        const itemClone = "5a6b5f868dc32e000a311389";
        const itemCategory = "5b5f75c686f774094242f19f";
        const itemFleaPrice = 1563;
        const itemPrefabPath = "GLOCK_ZAPPER_BARREL.bundle";
        const itemLongName = "Barrel for Glock Zapper 9x19";
        const itemShortName = "ZAP 9x19";
        const itemDescription = "Standard barrel for Glock Zapper.";

        if(config.debug){
            Logger.info(`Loading: ${itemId}`);
        }

        let item = JsonUtil.clone(DatabaseServer.tables.templates.items[itemClone]);
        item._id = itemId;
        item._props.Prefab.path = itemPrefabPath;
        DatabaseServer.tables.templates.items[itemId] = item;

        SpaceApi.PlaceItemSlotsFilteredBy(itemClone, itemId);
        SpaceApi.CreateHandbookItem(itemId, itemCategory, itemFleaPrice);
        SpaceApi.CreateNewItemLocale("en", itemId, itemLongName, itemShortName, itemDescription);
        SpaceApi.CreateTraderAssort(itemId+"_ragfairOffer", itemId, "ragfair", itemFleaPrice, "RUB", 1);
    }
}
module.exports = GLOCK_ZAPPER_BARREL;