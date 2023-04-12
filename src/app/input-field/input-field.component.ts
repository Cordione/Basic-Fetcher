import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css'],
})
export class InputFieldComponent implements OnInit {
  @Output() updateDataEvent = new EventEmitter<string>();
  data: string = '';
  constructor() {}

  ngOnInit(): void {}
}
