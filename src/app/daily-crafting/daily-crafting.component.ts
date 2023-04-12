import { Component, OnInit } from '@angular/core';
import { ApiRequest } from '../services/apiRequest.service';

@Component({
  selector: 'app-daily-crafting',
  templateUrl: './daily-crafting.component.html',
  styleUrls: ['./daily-crafting.component.css'],
})
export class DailyCraftingComponent implements OnInit {
  inputs: string[] = [];
  rawInputs: string[] = [];
  searchText: string = '';
  wayItWasSorted: string = 'asc';
  constructor(private service: ApiRequest) {}

  updateData(item: string) {
    this.searchText = item;
  }

  ngOnInit() {
    this.service
      .getApi('https://api.guildwars2.com/v2/dailycrafting')
      .then((response) => {
        this.rawInputs = response;
        this.rawInputs.forEach((el) => {
          const line = el.split('\n');
          line.forEach((word) => {
            const separatedWord = word.split('_');
            this.inputs.push(separatedWord.join(' '));
          });
        });
      });
  }
  sortMe() {
    if ((this.wayItWasSorted == 'asc')) {
      this.inputs.sort((a, b) =>
        b.toLowerCase().localeCompare(a.toLowerCase())
      );
      this.wayItWasSorted = 'desc';
    } else if ((this.wayItWasSorted == 'desc')) {
      this.inputs.sort((a, b) =>
        a.toLowerCase().localeCompare(b.toLowerCase())
      );
      this.wayItWasSorted = 'asc';
    }
  }
}
