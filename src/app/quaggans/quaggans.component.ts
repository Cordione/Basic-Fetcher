import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiRequest } from '../services/apiRequest.service';

@Component({
  selector: 'app-quaggans',
  templateUrl: './quaggans.component.html',
  styleUrls: ['./quaggans.component.css'],
})
export class QuaggansComponent implements OnInit {
  inputs: string[] = [];
  searchText: string = '';
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
}
