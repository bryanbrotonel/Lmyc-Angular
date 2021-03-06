import { FleetService } from './fleet.service';
import { Component, OnInit } from '@angular/core';
import { Boat, BoatStatus } from '../models/boat';

@Component({
  selector: 'app-fleet',
  templateUrl: './fleet.component.html',
  styleUrls: ['./fleet.component.css']
})
export class FleetComponent implements OnInit {

  boats: Boat[];
  constructor(private fleetService : FleetService) { }
  ngOnInit() {
    this.getFleets();
  }

  getFleets(): void {
    this.fleetService.getFleets()
        .subscribe(boats => this.boats = boats);

  }
}
