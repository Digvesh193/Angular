import { ChangeDetectionStrategy, Component, DoCheck, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BaseComponent } from '../BaseComponent/baseComponent.directive';
import { StorageService } from '../service/storage.service';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class InputTextComponent extends BaseComponent implements OnInit {

    Name : string = "digvesh"
      constructor(public storageService : StorageService){
        super()
      }

    ngOnInit(): void { 
        this.formGroups.addControl(this.fieldName,new FormControl(this.defaultValue,[this.fieldMeta.validate]))
      }   

}
