import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-notes-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './notes-page.component.html',
  styleUrl: './notes-page.component.scss'
})
export class NotesPageComponent {
  notes: string[] = [];
  newNote: string = '';
  editIndex: number | null = null;

  onAddNoteClick() {
    if (this.editIndex !== null) {
      this.notes[this.editIndex] = this.newNote;
      this.editIndex = null;
    } else {
      this.notes.push(this.newNote);
    }
    this.newNote = '';
  }

  onEditNoteClick(index: number) {
    this.newNote = this.notes[index];
    this.editIndex = index;
  }

  onDeleteNoteClick(index: number) {
    this.notes.splice(index, 1);
    if (this.editIndex !== null && this.editIndex >= index) {
      this.editIndex = null;
      this.newNote = '';
    }
  }
}
