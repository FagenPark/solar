import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ModalComponent} from './modal/modal.component';
import {ToolTipComponent} from './tool-tip/tool-tip.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ModalContentComponent } from './modal-content/modal-content.component';
import {AnchorLinkDirective} from './anchor-link.directive';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    ModalComponent,
    ToolTipComponent,
    ModalContentComponent,
    AnchorLinkDirective,
    LoadingSpinnerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ModalComponent,
    ToolTipComponent,
    CommonModule,
    FormsModule,
    LoadingSpinnerComponent,
    ReactiveFormsModule,
    ModalContentComponent,
    AnchorLinkDirective
  ]
})
export class SharedModule { }
