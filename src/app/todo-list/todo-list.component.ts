import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todoLists:Todo[] = [];
  checkedComplete: number = 0;
  checkedInComplete: number = 0;
  id: number = 1;
    constructor(
    ) {}
  
    ngOnInit(): void {  
    }
  
  onSubmit(form: NgForm){
    this.todoLists.push(new Todo(this.id,form.value.description, true));
    this.id ++;
    this.checkedComplete++;
    form.reset()
  }
  
  onclick(event:any, todo:Todo){
    todo.complete = event.target.checked;
  
    console.log(todo);
      if(todo.complete) {
        this.checkedComplete++;
        this.checkedInComplete--;
        
      }else{
        this.checkedComplete--;
        this.checkedInComplete++;
        } 
    }
  
    // remove(id: Todo) {
      
    //   this.todoLists = this.todoLists.filter(item => item !== id)
  
     
    //   if(id.complete == false){
    //     this.checkedInComplete--;
    //   }else{
    //     this.checkedComplete--;
    //   }
    // }
}
