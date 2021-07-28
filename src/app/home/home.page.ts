import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  url: string = "https://sv443.net/jokeapi/v2/joke/Any";
  joke: string = '';
  jokes: any = [];


  constructor(
    public navCtrl: NavController, private http: HttpClient, private storage: Storage
  ) {}

  getJoke() {
    return this.http.get<any>(this.url).pipe(map(res => {
      if(res.setup){
        return res.setup + res.delivery;
      }
      else {
        return res.joke;
      }
    })).subscribe((res: Response)=>(this.joke=res.toString()));
  }

  saveJoke(){
    this.jokes.push(this.joke);
  }  
  clearAll(){
    this.jokes = [];
  }


  }
