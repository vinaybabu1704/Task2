import { Injectable } from '@angular/core';
import { CardInterface} from '../cardInterface';
@Injectable({
  providedIn: 'root'
})
export class CardService {
  dynamicCard:CardInterface[]=[{
    id:1,
   title:"Explore new features in Magento 2.3.4",
   logo:"assets/images/Magento.jpg",
   content:"Magento has released some major enhancement packages as version 2.3.4 The pre release date was"
 },
 {
   id:2,
   title:"Can CDP's dolve Customer Data Puzzle?",
   logo:"assets/images/CDP.jpg",
   content:"Achieving a single view of customer has been the holy grail for marketers.Why do so many"
 },
 {
   id:3,
   title:"5 Universal Customer Segments for Marketing Personalization",
   logo:"assets/images/blog.jpg",
   content:"The outcome of personalized experience is simple--getting the"
  }
 ]; 
 constructor( ) {
 }
  }
