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
}
