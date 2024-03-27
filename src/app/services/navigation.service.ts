import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  getNextStep = new BehaviorSubject(false);
  getLastStep = new BehaviorSubject(false);
  constructor() { }
}
