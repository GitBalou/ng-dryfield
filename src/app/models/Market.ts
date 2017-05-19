export class Market{
    
    private transactions: number[];
    private waterPrice: number;
    private harvestPrice: number;

    constructor(waterPrice, harvestPrice) {
        this.transactions = [];
        this.waterPrice = waterPrice;
        this.harvestPrice = harvestPrice;
    }

    getTransactions() {
        return this.transactions;
    }

    getWaterPrice() {
        return this.waterPrice;
    }

    getHarvestPrice() {
        return this.harvestPrice;
    }

    setTransactions(transactions) {
        this.transactions = transactions;
    }

    setWaterPrice(waterPrice) {
        this.waterPrice = waterPrice;
    }

    setHarvestPrice(harvestPrice) {
        this.harvestPrice = harvestPrice;
    }
}