import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControlName } from '@angular/forms';
import {CardService} from '../services/card.service';
import {Router} from '@angular/router';

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
dataarray=[];
    constructor(private formBuilder: FormBuilder, private cardService : CardService,private router:Router) { }
    ngOnInit() {
        this.dynamicForm = this.formBuilder.group({
             title: ['', Validators.required],
              content:['',Validators.required],
              logo:['']
        });
    }

    get f() { return this.dynamicForm.controls; }
  
    onSubmit() {
        this.submitted = true;
if(this.dynamicForm.valid){
  this.cardService.dynamicCard.push(this.dynamicForm.value);
  
  this.router.navigate(['home']);
}
        }
    onReset() {
        
   }

    onClear() {

        this.submitted = false;
     }
}

