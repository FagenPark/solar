import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ModalComponent} from './modal/modal.component';
import {ToolTipComponent} from './tool-tip/tool-tip.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    ModalComponent,
    ToolTipComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ModalComponent,
    ToolTipComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
