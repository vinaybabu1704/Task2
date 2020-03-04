import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControlName } from '@angular/forms';
import {Router, ActivatedRoute, RouterLink} from '@angular/router';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent implements OnInit {
  
  dynamicForm: FormGroup;
    submitted = false;
    title:FormControlName;
    content:FormControlName;
    logo:FormControlName;
    id:number;
    mode:string;
dataarray=[];
 @Input() dynamicCard;
 @Output() updateEvent = new EventEmitter<object>();
 
    constructor(private formBuilder: FormBuilder,private router:Router,private route:ActivatedRoute) { }
    
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
        var cardindex=this.dynamicCard.findIndex(dynamicCard =>dynamicCard.id ===id);
        this.dynamicForm.controls.title.setValue(this.dynamicCard[cardindex].title);
        this.dynamicForm.controls.content.setValue(this.dynamicCard[cardindex].content);
      }
    }
      delete(id:number){
        this.deleteid(id);
        this.router.navigate(['home']);
      }
    

    get f() { return this.dynamicForm.controls; }
  
    onSubmit() {
      console.log("submit");
        this.submitted = true;
if(this.dynamicForm.valid){
  this.pushCard(this.dynamicForm.value);
  this.router.navigate(['home']);
}
        }
   update(id:number){
    var index= this.dynamicCard.findIndex(dynamicCard =>dynamicCard.id ===id);
    var logo=this.dynamicCard[index].logo;
    this.dynamicCard[index]=this.dynamicForm.value;
      this.dynamicCard[index].logo=logo;
    this.dynamicCard[index].id =this.id;
    this.updateEvent.emit(this.dynamicCard);
     this.router.navigate(['home']);
   }
   pushCard(card){
    var len= this.dynamicCard.length;
    card.id=len+1;
    this.dynamicCard.push(card);
    }
    deleteid(id:number){
      var index= this.dynamicCard.findIndex(dynamicCard =>dynamicCard.id ===id);
      this.dynamicCard.splice(index,1);
    }
  }

