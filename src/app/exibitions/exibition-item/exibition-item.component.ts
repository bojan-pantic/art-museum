import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Exibition } from 'src/app/model/exibition.model';

@Component({
  selector: 'app-exibition-item',
  templateUrl: './exibition-item.component.html',
  styleUrls: ['./exibition-item.component.css'],
})
export class ExibitionItemComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input()
  exibition: Exibition = new Exibition();

  @Input()
  shouldRenderButton: boolean = false;

  @Output()
  editClicked: EventEmitter<void> = new EventEmitter();

  onEditClicked() {
    this.editClicked.emit();
  }
}
