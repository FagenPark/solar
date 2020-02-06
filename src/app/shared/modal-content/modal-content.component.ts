import {Component, Input, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.scss']
})
export class ModalContentComponent implements OnInit {
  @Input() modalContentId: string;

  constructor() { }

  ngOnInit() {
  }
}
