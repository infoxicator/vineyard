import { Component } from '@angular/core';
import {HomeService} from '../home/home.service'
import { NavController } from 'ionic-angular';
import {ChurchPage} from '../church/church'

@Component({
  selector: 'page-about',
  providers: [HomeService],
  templateUrl: 'about.html'
})
export class AboutPage {
  pages : Array<string>;
  grid: Array<Array<string>>; //array of arrays
  constructor(public navCtrl: NavController, private homeService:HomeService) {
    this.homeService.getPagesByParent(35)
    .then(pages => this.pages = pages)
    .then(foo =>  {this.grid = Array(Math.ceil(this.pages.length/2));
       console.log(this.grid);
       let rowNum = 0; //counter to iterate over the rows in the grid

       for (let i = 0; i < this.pages.length; i += 2) { //iterate images

         this.grid[rowNum] = Array(2); //declare two elements per row

         if (this.pages[i]) { //check file 
           this.grid[rowNum][0] = this.pages[i] //insert image
         }

         if (this.pages[i + 1]) { //repeat for the second image
           this.grid[rowNum][1] = this.pages[i + 1]
         }

         rowNum++; //go on to the next row
       }
       console.log(this.grid);
       console.log(this.pages);
      })

  }
   pageTapped(event, churchPage){
    this.navCtrl.push(ChurchPage, {
      churchPage: churchPage
    })
  }

}
