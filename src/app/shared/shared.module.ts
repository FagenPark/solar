import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ModalComponent} from './modal/modal.component';
import {ToolTipComponent} from './tool-tip/tool-tip.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ModalContentComponent } from './modal-content/modal-content.component';
import {AnchorLinkDirective} from './anchor-link.directive';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { GaClickDirective } from './ga-click.directive';

@NgModule({
  declarations: [
    ModalComponent,
    ToolTipComponent,
    ModalContentComponent,
    AnchorLinkDirective,
    LoadingSpinnerComponent,
    GaClickDirective
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
    AnchorLinkDirective,
    GaClickDirective
  ]
})
export class SharedModule { }
