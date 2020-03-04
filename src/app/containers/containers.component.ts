import { Component, OnInit } from '@angular/core';
import { CardService } from '../services/card.service';
import {Router} from '@angular/router';

const DEFAULT_IMG='assets/images/default.jpg';
@Component({
  selector: 'app-containers',
  templateUrl: './containers.component.html',
  styleUrls: ['./containers.component.css']
})
export class ContainersComponent implements OnInit {
cards=[];
searchTerm: string;
default_img:string;
  constructor( private cardService : CardService, private router:Router) { 
    this.default_img=DEFAULT_IMG;
  }

  ngOnInit() {
   this.cards=this.cardService.dynamicCard;
   
  }
  Redirect(data) {
    this.router.navigate(['edit',data.id]);
 }
}
