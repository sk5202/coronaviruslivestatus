import { Component } from '@angular/core';
import { VirusService } from './virus.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'coronalivestatus';
  CountryAffectedlist: any[] = [];
  statastictime;
  
  // https://rapidapi.com/astsiatsko/api/coronavirus-monitor?endpoint=apiendpoint_745c45af-47e5-4b99-b962-9f77e164c054
  constructor(private _VirusService: VirusService) {
    this._VirusService.GetContrieslist().subscribe(r =>{
      this.CountryAffectedlist = r.countries_stat;
      this.statastictime = r.statistic_taken_at
    });


  }
}
