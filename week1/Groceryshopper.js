
var grocerylist = {
    vegetableTypes: ["brocoli", "aspargus", "cucumbers"],
    meatTypes: ["fish", "chicken", "pork"],
    chickenBreast: 4,
    wasThereBeef: false,
    storeName: "FoodLion",

    displayinfo: function (grocerylist) {
        console.log('grocerylist.meatTypes' + grocerylist);
    }

}

grocerylist('vegetabletypes');
