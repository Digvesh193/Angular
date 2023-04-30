import { IceCream } from "./icecream.component";

export class Vanila implements IceCream {
    getPrice(): number {
       return 10
    }
    getType(): string {
       return "Vanila"
    }
    getCalories(): number {
        return 100;
    }
}

export class Strawberry implements IceCream {

    public getPrice(): number {
      return 30;
    }
  
    getType(): string {
      return 'Strawberry';
    }
  
    getCalories(): number {
      return 98;
    }
  }