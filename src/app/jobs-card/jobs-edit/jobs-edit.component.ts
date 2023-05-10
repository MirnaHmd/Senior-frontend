import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobs-edit',
  templateUrl: './jobs-edit.component.html',
  styleUrls: ['./jobs-edit.component.css']
})
export class JobsEditComponent implements OnInit {
  selectedLocation = '';

  constructor() { }

  ngOnInit(): void {
  }

  onSelectedLocation(value: string) : void {
    this.selectedLocation = value;
  }
}
