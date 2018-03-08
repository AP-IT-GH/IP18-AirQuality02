import { Component, OnInit } from '@angular/core';
import { AirQualityDataService } from '../[Services]/air-quality-data.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  data: any[];
  
  constructor(private _svc: AirQualityDataService) { 
    this.data = _svc.rooms;
  }

  ngOnInit() {

  }

}
