import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';

import { Photo } from './Photo';
import { isDefined } from 'ionic-angular/util/util';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items ;
  load: boolean = false;
  link: Array<string>;
  a: number;
  link1;
  link2;


  constructor(
    public navCtrl: NavController,
    private fire: AngularFireDatabase
  ) {
    this.fire.list('photos').valueChanges()
      .subscribe(res => {
        this.setItems(res);
      })
      
  }


  setItems(res){
    this.items = res[3];
    console.log(this.items);
    console.log(this.items[0].farm);

    this.setPhotos();
  }

  setPhotos(){
    console.log("in setPhotos()");
    
    var i = Math.floor(Math.random() * (500 + 1));      
    this.link1  = "https://farm"+this.items[i].farm+".staticflickr.com/"+this.items[i].server+"/"+this.items[i].id+"_"+this.items[i].secret+".jpg";
    i = Math.floor(Math.random() * (500 + 1));      
    this.link2  = "https://farm"+this.items[i].farm+".staticflickr.com/"+this.items[i].server+"/"+this.items[i].id+"_"+this.items[i].secret+".jpg";
    
  }

  
  pikachu1Clicked() {
    console.log("clicked");
    var i = Math.floor(Math.random() * (500 + 1));      
    this.link2  = "https://farm"+this.items[i].farm+".staticflickr.com/"+this.items[i].server+"/"+this.items[i].id+"_"+this.items[i].secret+".jpg";
  }

  
  pikachu2Clicked() {
    console.log("clicked");
    var i = Math.floor(Math.random() * (500 + 1));      
    this.link1  = "https://farm"+this.items[i].farm+".staticflickr.com/"+this.items[i].server+"/"+this.items[i].id+"_"+this.items[i].secret+".jpg";
  }

  loadHome() {
    this.load = true;
    console.log(this.load);

  }

}
