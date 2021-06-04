"use strict";

const SpaceApi = require("../../spaceman-api/api");
const config = require("../config.json");

class GLOCK_21 {
    static onLoadMod() {        
        const itemId = "GLOCK_21";
        const itemClone = "5a7ae0c351dfba0017554310";
        const itemCategory = "5b5f792486f77447ed5636b3";
        const itemFleaPrice = 6608;
        const itemLongName = "GLOCK 21 .45 ACP pistol";
        const itemShortName = "GLOCK21";
        const itemDescription = "Glock 21 is an Austrian pistol designed by Glock company for the Austrian army purposes. Thanks to both to its impressive combat characteristics and reliablity gained wide recognition and popularity also as a police, shooting sports and civilian self-defence weapon.";

        if(config.debug){
            Logger.info(`Loading: ${itemId}`);
        }

        let item = JsonUtil.clone(DatabaseServer.tables.templates.items[itemClone]);
        item._id = itemId;
        item._props.Slots[SpaceApi.FindSlotIndex(itemClone, "mod_magazine")]._props.filters[0].Filter = DatabaseServer.tables.templates.items["5fb64bc92b1b027b1f50bcf2"]._props.Slots[SpaceApi.FindSlotIndex("5fb64bc92b1b027b1f50bcf2", "mod_magazine")]._props.filters[0].Filter ;
        item._props.Chambers[0]._props.filters[0].Filter = DatabaseServer.tables.templates.items["5fb64bc92b1b027b1f50bcf2"]._props.Chambers[0]._props.filters[0].Filter;
        item._props.ammoCaliber = DatabaseServer.tables.templates.items["5fb64bc92b1b027b1f50bcf2"]._props.ammoCaliber;
        DatabaseServer.tables.templates.items[itemId] = item;

        SpaceApi.CreateHandbookItem(itemId, itemCategory, itemFleaPrice);
        SpaceApi.CreateNewItemLocale("en", itemId, itemLongName, itemShortName, itemDescription);
        SpaceApi.CreateTraderAssort(itemId+"_ragfairOffer", itemId, "ragfair", itemFleaPrice, "RUB", 1);
    }
}
module.exports = GLOCK_21;