var sizeOptions = { small: 0, medium: 1, large: 2, "x-large": 3 };
var milkOptions = { regular: 0, "non-fat": 1, "lactose-free": 2 };
var icedOptions = { yes: 0, no: 1 };
var sugarOptions = { yes: 0, no: 1 };

var menu = {
    milkOptions: milkOptions,
    sizeOptions: sizeOptions,
    foodOptions: [
    ],
    drinkOptions: [
        {
            name: "small coffee",
            price: 1.20,
            size: sizeOptions.small,
            milk: milkOptions.regular,
            iced: icedOptions.no,
            sugar: sugarOptions.no
        },
        {
            name: "medium lactose free coffee",
            price: 1.60,
            size: sizeOptions.medium,
            milk: milkOptions["lactose-free"],
            iced: icedOptions.no,
            sugar: sugarOptions.no
        },
        {
            name: "large non-fat coffee",
            price: 2.10,
            size: sizeOptions.large,
            milk: milkOptions["non-fat"],
            iced: icedOptions.no,
            sugar: sugarOptions.no
        },
        {
            name: "tea",
            price: 1.10,
            size: sizeOptions.large,
            milk: milkOptions.regular,
            iced: icedOptions.no,
            sugar: sugarOptions.yes
        }
    ]
};

for (var drink of menu.drinkOptions) {
    console.log("The price of a " + drink.name + " is £" + drink.price.toFixed(2) + " , the price of two " + drink.name + "'s is £" + (drink.price * 2).toFixed(2));
}
console.log("milk options", menu.milkOptions);
console.log("size options", menu.sizeOptions);