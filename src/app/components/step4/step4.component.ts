import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-step4',
  templateUrl: './step4.component.html',
  styleUrls: ['./step4.component.scss']
})
export class Step4Component implements OnInit{
  @Input() step4Form!: FormGroup

  ngOnInit(): void {
    console.log('this.step4Form: ', this.step4Form);
  }

  submitForm(){
    
  }

}
