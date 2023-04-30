import { IceCream } from "./icecream.component";
import { Strawberry,Vanila } from "./vanila.component";

export class ImbissComponent {

    public getVanilla(): IceCream {
      return new Vanila();
    }
  
    public getStrawberry(): IceCream {
      return new Strawberry();
    }
  
    // public getStracciatella(): IceCream {
    //   return new Stracciatella();
    // }
  }