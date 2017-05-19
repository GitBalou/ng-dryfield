export class Player {

    private name : string;
    private nbHarvest : number;
    private money : number;
    private water : number;
    private waterPrice : number;
    private harvestPrice : number;

    constructor() {
        this.name = "";
        this.nbHarvest = 0;
        this.money = 50;
        this.water = 3;
        this.waterPrice = 1;
        this.harvestPrice = 40;
    }

    setName(name : string) : void {
        this.name = name;
    }

    setNbHarvest(nb: number) : void {
        this.nbHarvest = nb;
    }

    setMoney(money: number) : void {
        this.money = money;
    }

    setWater(water : number) : void {
        this.water = water;
    }

    setWaterPrice(price: number) : void {
        this.waterPrice = price;
    }

    setHarvestPrice( price : number) : void {
        this.harvestPrice = price;
    }

    getName() : string {
        return this.name;
    }

    getNbHarvest() : number {
        return this.nbHarvest;
    }

    getMoney() : number {
        return this.money;
    }

    getWater() : number {
        return this.water;
    }

    getWaterPrice() : number {
        return this.waterPrice;
    }

    getHarvestPrice() : number {
        return this.harvestPrice;
    } 
}
