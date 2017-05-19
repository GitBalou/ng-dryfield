 export class Field {

    private waterReserve: number;
    private dayCount: number;
    private harvestStateEnum: string[];
    private harvestState: string; // 'notRdy', 'ok', 'dead'

    constructor() {
        this.waterReserve = 3;
        this.dayCount = 0;
        this.harvestState= "notRdy"; 
        this.harvestStateEnum = ['notRdy', 'ok', 'dead'];
    }

    setWaterReserve(quantity:number) : void {
        this.waterReserve = quantity;
    }

    incrementDayCount() : void {
        this.dayCount++;
    }

    setDayCount(day:number): void {
         this.dayCount = day;
    }

    setHarvestState(state:string) : void {
        
        if( this.harvestStateEnum.indexOf(state) == -1) {
            console.warn('State '+state+' is not allowed in field.js model');
        }

        this.harvestState = state;
    }

    getWaterReserve() {
        return this.waterReserve;
    }

    getDayCount() {
        return this.dayCount;
    }

    getHarvestState() {
        return this.harvestState;
    }
      
 }
