import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.scss']
})
export class Step3Component implements OnInit{
  @Input() step3Form!: FormGroup

  constructor(private navigationService: NavigationService){}
  ngOnInit(): void {
    console.log('this.step3Form: ', this.step3Form);
  }

  displayNextStep() {
    this.navigationService.getLastStep.next(true)
  }

}
