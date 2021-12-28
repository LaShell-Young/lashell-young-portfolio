// create
// portfolio item class

 class PortfolioItem {
    // define parameters
    constructor( name, desc, diff, itemOrder, img, url) {
        // define properties
        this.name = name;
        this.description = desc;
        this.difficulty = diff;
        this.itemOrder = itemOrder;
        this.image = img;
        this.url = url;

        console.log('portfolio item added!');
    }
    // methods
    updateName(name) {
        this.name = name;
        console.log(`portfolio item ${this.itemOrder} name updated!`);
    }
    updateDesc(desc) {
        this.description = desc;
        console.log(`portfolio item ${this.itemOrder} description updated!`);
    }
    updateDiff(diff) {
        this.difficulty = diff;
        console.log(`portfolio item ${this.itemOrder} difficulty updated!`);
    }
    updateItemOrder(itemOrder) {
        this.itemOrder = itemOrder;
        console.log(`portfolio item ${this.itemOrder} item order updated!`);
    }
    updateImg(img) {
        this.image = img;
        console.log(`portfolio item ${this.itemOrder} image updated!`);
    }
};

export default PortfolioItem;