import {
  Component,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ako-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddTodoComponent {
  addForm = new FormGroup({
    description: new FormControl('', Validators.required),
  });

  @Output() added = new EventEmitter<string>();

  add(): void {
    this.added.emit(this.addForm.get('description')!.value);
    this.reset();
  }

  reset(): void {
    this.addForm.reset({ description: '' });
  }
}
