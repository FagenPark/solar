import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-testimonial',
  templateUrl: './user-testimonial.component.html',
  styleUrls: ['./user-testimonial.component.scss']
})
export class UserTestimonialComponent implements OnInit {
  @Input() userImageUrl: string;

  constructor() { }

  ngOnInit(): void {
  }

}
