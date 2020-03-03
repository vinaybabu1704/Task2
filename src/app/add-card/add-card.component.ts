import { Component, OnInit ,Input} from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControlName } from '@angular/forms';
import {CardService} from '../services/card.service';
import {Router, ActivatedRoute, RouterLink} from '@angular/router';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent implements OnInit {
  card:CardService;
  dynamicForm: FormGroup;
    submitted = false;
    title:FormControlName;
    content:FormControlName;
    logo:FormControlName;
    id:number;
    mode:string;
dataarray=[];
 @Input() dynamicCard;
    constructor(private formBuilder: FormBuilder, private cardService : CardService,private router:Router,private route:ActivatedRoute) { }
    
    ngOnInit() {
        this.dynamicForm = this.formBuilder.group({
             title: ['', Validators.required],
              content:['',Validators.required],
              logo:['']
        });
        this.route.data.subscribe((data:any) => {
          this.mode=data.mode;
          console.log(this.mode);
      })
        if( this.mode != 'add'){
        this.route.paramMap.subscribe(data => {
          this.id = +data.get('id'); 
          this.getdata(this.id);
        });
    }}
    getdata(id:number){
         if(this.mode!='add'){
        this.dynamicForm.controls.title.setValue(this.cardService.getdata(id).title);
        this.dynamicForm.controls.content.setValue(this.cardService.getdata(id).content);
      }
    }
      delete(id:number){
        this.cardService.delete(id);
        this.router.navigate(['home']);
      }
    

    get f() { return this.dynamicForm.controls; }
  
    onSubmit() {
      console.log("submit");
        this.submitted = true;
if(this.dynamicForm.valid){
  this.cardService.pushCard(this.dynamicForm.value);
  this.router.navigate(['home']);
}
        }
   update(id:number){
    var index= this.cardService.dynamicCard.findIndex(dynamicCard =>dynamicCard.id ===id);
    this.cardService.dynamicCard[index]=this.dynamicForm.value;
    this.cardService.dynamicCard[index].id =this.id;
     this.router.navigate(['home']);
   }
  }

