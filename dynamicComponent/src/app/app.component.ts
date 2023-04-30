import { Component, ComponentRef, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { BurgerComponent } from './burger/burger.component';
import { LaptopComponent } from './laptop/laptop.component';
import { MobileComponent } from './mobile/mobile.component';
import { OvanComponent } from './ovan/ovan.component';
import { WatchComponent } from './watch/watch.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'dynamicComponent';

  @ViewChild('container',{read:ViewContainerRef,static:true}) container !: ViewContainerRef

  components = new Map<string,ComponentRef<any>>();
  index : number = 0;

  product = {
    mobile : 'mobile',
    laptop : 'laptop',
    watch : 'watch',
    burger : 'burger',
    ovan : 'ovan'

  }

  constructor(){

  }
  ngOnInit(): void {
    
  }

  createComponent(componentName : string){
    console.log(componentName)
    // this.container.clear()
    let uniqueName = componentName + '-' +this.index.toString()
    const comRef = this.container.createComponent(this.getComponentType(componentName))
    const comInstance = comRef.instance
    comInstance.name = uniqueName
    this.components.set(uniqueName,comRef)

    comInstance.closed.subscribe((res:any)=>{
      console.log(res)
      this.deleteComponent(res.name)
    })

    this.index++; 
    // console.log(this.components)

  }

  getComponentType(name: string):Type<any>{
    let type: Type<any> = MobileComponent
    switch(name){
      case this.product.mobile:
        type = MobileComponent
        break;
      case this.product.laptop:
        type = LaptopComponent
        break;
      case this.product.watch:
        type = WatchComponent
        break;
      case this.product.burger:
        type = BurgerComponent
        break;
      case this.product.ovan:
        type = OvanComponent
        break;
    }
    return type
  }

  deleteComponent(componentName:string){
    if(this.components.has(componentName)){
      this.components.get(componentName)?.destroy();
    }
    
  }
}
