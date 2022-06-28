import {
  Component,
  ChangeDetectionStrategy,
  Input,
  OnInit,
  Output,
  EventEmitter,
  HostBinding,
} from '@angular/core';
import { Todo } from '../model';

@Component({
  selector: 'ako-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoComponent implements OnInit {
  @Input() todo!: Todo;

  @Output() removed = new EventEmitter<void>();
  @Output() completed = new EventEmitter<void>();
  @Output() reopened = new EventEmitter<void>();

  @HostBinding('class.completed') get isCompleted() {
    return this.todo.completed;
  }

  ngOnInit(): void {
    if (!this.todo) {
      throw Error('TodoComponent:ngOnInit - A Todo object must be supplied');
    }
  }

  remove(): void {
    this.removed.emit();
  }

  complete(): void {
    this.completed.emit();
  }

  reopen(): void {
    this.reopened.emit();
  }
}
