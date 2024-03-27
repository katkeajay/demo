import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss']
})
export class Step2Component implements OnInit {
  @Input() step2Form!: FormGroup

  constructor(private navigationService: NavigationService){}
  ngOnInit(): void {
    console.log('this.step2Form: ', this.step2Form);
  }

  displayNextStep(){
    this.navigationService.getNextStep.next(true)
  }
}
