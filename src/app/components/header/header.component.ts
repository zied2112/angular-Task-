import { Component, OnInit } from '@angular/core';
import {UiService} from '../../services/ui.service'
import { Subscription } from "rxjs";
import { Router } from "@angular/router";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string  = 'Task-tracker';
showAddTask: boolean= false ; 
subscription: Subscription; 

  currentItem = 'Television';
  constructor(private uiService: UiService, private router:Router) { 
    this.subscription = this.uiService.onToggle().subscribe((value =>this.showAddTask = value)) ; 
  }
  toggleAddTask(){
    this.uiService.toggleAddTask()
  }
  ngOnInit(): void {
  }
  hasRouter(route: string ){
    return this.router.url === route ; 
  }

}

