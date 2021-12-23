import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import {Observable, Subject} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddTask: boolean= false ; 
  private Subject  = new Subject<any>() ; 

  constructor() { }

  toggleAddTask(): void {
    this.showAddTask = !this.showAddTask; 
    this.Subject.next(this.showAddTask)
  }
  onToggle(): Observable<any> {
    return this.Subject.asObservable()  ;
  }
}
