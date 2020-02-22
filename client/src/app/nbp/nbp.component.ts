import { Component, OnInit } from '@angular/core';
import {NbpService} from '../services/nbp/nbp.service';
import {NbpResponse} from '../services/nbp/NbpResponse';

@Component({
  selector: 'app-nbp',
  templateUrl: './nbp.component.html',
  styleUrls: ['./nbp.component.css'],
  providers: [NbpService]
})
export class NbpComponent implements OnInit {

  private nbpResponse: NbpResponse[];

  constructor(private nbpService: NbpService) { }

  ngOnInit() {
  }

  getTable(name) {
    this.nbpService.getTable(name).subscribe(res => {
      this.nbpResponse = res;
    });
  }

}
