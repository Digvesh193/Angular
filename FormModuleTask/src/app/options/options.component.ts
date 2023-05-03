import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl } from '@angular/forms';
import { BaseComponent } from '../BaseComponent/baseComponent.directive';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class OptionsComponent extends BaseComponent implements OnInit {
    constructor(){
      super()
    }

    ngOnInit(): void {
      console.log(this.formGroups)
    }

    get getSkill(){
      return (<FormArray>this.formGroups.get('selectForm')).controls
    }
    onAddSkill(){
     (<FormArray>(this.formGroups.get('selectForm'))).push(new FormGroup({
      'label':new FormControl(),
      'value':new FormControl()
     }))
    }
    reset(){
      (<FormArray>(this.formGroups.get('selectForm'))).clear();
    }
    deleteOption(index:number){
      (<FormArray>(this.formGroups.get('selectForm'))).removeAt(index)
    }
}
