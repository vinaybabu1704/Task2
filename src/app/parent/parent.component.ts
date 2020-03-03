import { Component, OnInit } from '@angular/core';
import {CardService} from '../services/card.service';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor(private cardService : CardService) { }
   dynamicCard=this.cardService.dynamicCard;
  ngOnInit() {
  }

}
