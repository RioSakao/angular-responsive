import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent implements OnChanges, OnInit {
  @Input() userName = '';

  ngOnInit(): void {
    console.log('ngOnInit from the child component');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges triggered', changes);
    // if this is not the first change
    if (!changes['userName'].isFirstChange()) {
      // if the current value is Chris
      if (changes['userName'].currentValue === "Chris") {
         this.userName = 'Hello ' + this.userName
      } else {
         this.userName = changes['userName'].previousValue
      }
   }
  }
}
