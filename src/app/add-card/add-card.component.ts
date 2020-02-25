import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControlName } from '@angular/forms';
import {CardService} from '../card.service';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent implements OnInit {
  dynamicForm: FormGroup;
    submitted = false;
    heading:FormControlName;
    content:FormControlName;
    img:FormControlName;

    constructor(private formBuilder: FormBuilder) { }
    ngOnInit() {
        this.dynamicForm = this.formBuilder.group({
             heading: ['', Validators.required],
              content:['',Validators.required],
              img:['',Validators.required]
        });
    }

    get f() { return this.dynamicForm.controls; }
  
    onSubmit() {
        this.submitted = true;
        console.log(this.dynamicForm.value);
    }

    onReset() {
        
   }

    onClear() {

        this.submitted = false;
     }
}

