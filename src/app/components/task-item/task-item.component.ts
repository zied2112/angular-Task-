import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { faTimes } from '@fortawesome/free-solid-svg-icons';

import{Task} from '../../Task' ; 
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task!: Task ; 
  fatimes= faTimes ; 
  @Output() onDeletetask: EventEmitter<Task> = new EventEmitter()
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }
  onDelete(task) {
    this.onDeletetask.emit(task)
  }
  onToggle(task){
    this.onToggleReminder.emit(task)
  }
}
