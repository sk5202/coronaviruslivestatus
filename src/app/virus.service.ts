import { Injectable, Inject } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Corona } from './Domain/Corona';
//import { APP_CONFIG,AppConfig } from './app-config.module';


@Injectable({
  providedIn: 'root'
})
export class VirusService {

  constructor(private httpClient: HttpClient) { }
  url = "https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php";
  GetContrieslist(): Observable<Corona>{
    const headers = new HttpHeaders({'x-rapidapi-host':'coronavirus-monitor.p.rapidapi.com','x-rapidapi-key':'d12448bdd0mshe6b90dcb11f55ccp14187cjsn18a732c85fb1'});
    
    return this.httpClient.get<Corona>(this.url ,{headers: headers});
  }

 
}
