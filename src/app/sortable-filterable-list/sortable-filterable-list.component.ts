import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sortable-filterable-list',
  templateUrl: './sortable-filterable-list.component.html',
  styleUrls: ['./sortable-filterable-list.component.css'],
})
export class SortableFilterableListComponent implements OnInit {
  @Input() inputs: string[] = [];
  searchText: string = '';
  wayItWasSorted: string = 'asc';
  constructor() {}

  updateData(item: string) {
    this.searchText = item;
  }

  ngOnInit(): void {
  }
  sortMe() {
    if (this.wayItWasSorted == 'asc') {
      this.inputs.sort((a, b) =>
        b.toLowerCase().localeCompare(a.toLowerCase())
      );
      this.wayItWasSorted = 'desc';
    } else if (this.wayItWasSorted == 'desc') {
      this.inputs.sort((a, b) =>
        a.toLowerCase().localeCompare(b.toLowerCase())
      );
      this.wayItWasSorted = 'asc';
    }
  }
}
