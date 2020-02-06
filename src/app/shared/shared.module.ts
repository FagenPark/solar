import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ModalComponent} from './modal/modal.component';
import {ToolTipComponent} from './tool-tip/tool-tip.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ModalContentComponent } from './modal-content/modal-content.component';

@NgModule({
  declarations: [
    ModalComponent,
    ToolTipComponent,
    ModalContentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ModalComponent,
    ToolTipComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ModalContentComponent
  ]
})
export class SharedModule { }
