import { Component, OnInit, OnChanges } from '@angular/core';
import { ApiRequest } from '../services/apiRequest.service';
@Component({
  selector: 'app-quaggans',
  templateUrl: './quaggans.component.html',
  styleUrls: ['./quaggans.component.css'],
})
export class QuaggansComponent implements OnInit {
  inputs: string[] = [];
  searchText: string = '';
  wayItWasSorted: string = 'asc';
  constructor(private service: ApiRequest) {}

  updateData(item: string) {
    this.searchText = item;
  }

  ngOnInit() {
    this.service
      .getApi('https://api.guildwars2.com/v2/quaggans')
      .then((response) => {
        this.inputs = response.filter((x) => x != '404');
      });
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
