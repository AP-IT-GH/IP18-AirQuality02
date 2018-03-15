import { Component, OnInit } from '@angular/core';
import { AirQualityDataService } from '../[Services]/air-quality-data.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  rooms: any[];
  
  constructor(private _svc: AirQualityDataService) { 
    this.rooms = _svc.rooms;
  }

  ngOnInit() {

  }

  UpdateAll(){

  }
  ResetAll(){
    this.rooms = this._svc.roomsDefault;
  }

  reset(roomid){
    if(this.rooms == roomid){
      this.rooms = this._svc.roomsDefault;
    }
  }
}
