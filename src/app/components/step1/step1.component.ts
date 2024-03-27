import { Component, DoCheck, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss'],
})
export class Step1Component implements OnInit, DoCheck {
  step1Form!: FormGroup;
  step2Form!: FormGroup;
  step3Form!: FormGroup;
  step4Form!: FormGroup;

  displayStep1: boolean = false;
  displayStep2: boolean = false;
  displayStep3: boolean = false;
  displayStep4: boolean = false;

  constructor(private formBuilder: FormBuilder, private navigationService: NavigationService) {}


  ngDoCheck(): void {
    this.navigationService.getNextStep.subscribe(displayNextStep => {
      if (displayNextStep) {
        this.displayThirdStep()
      }
    })

    this.navigationService.getLastStep.subscribe(displayLastStep => {
      if (displayLastStep) {
        this.displayFourthStep()
      }
    })
  }

  ngOnInit(): void {
    this.createStep1Form();
  }

  createStep1Form(): void {
    this.displayStep1 = true;
    this.step1Form = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.minLength(10), Validators.maxLength(10)]],
      gender: ['', [Validators.required]],
    });
  }
  createStep2Form(): void {
    this.step2Form = this.formBuilder.group({
      hobbies: [''],
      about: [''],
      higherEdu: ['', [Validators.required]]
    });
  }
  createStep3Form(): void {
    this.step3Form = this.formBuilder.group({
      billingAddress: [''],
    });
  } 
   createStep4Form(): void {
    this.step4Form = this.formBuilder.group({
     shippingAddress: [''],
    });
  }

  displaySecondStep() {
    this.displayStep1 = false;
    this.displayStep2 = true;
    this.displayStep3 = false;
    this.displayStep4 = false;
    this.createStep2Form();
  }
  displayThirdStep() {
    this.displayStep1 = false;
    this.displayStep2 = false;
    this.displayStep3 = true;
    this.displayStep4 = false;
    this.createStep3Form();
  }
  displayFourthStep() {
    this.displayStep1 = false;
    this.displayStep2 = false;
    this.displayStep3 = false;
    this.displayStep4 = true;
    this.createStep4Form();
  }
}
