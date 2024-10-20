import { Component, OnInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent implements OnInit {
  userName = 'Maria';

  updateUser() {
     this.userName = 'Chris';
  }
  ngOnInit() {
    console.log('ngOnInit from the parent component');
 }
}
