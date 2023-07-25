import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ArtWork } from 'src/app/model/artwork.model';

@Component({
  selector: 'app-artwork-edit',
  templateUrl: './artwork-edit.component.html',
  styleUrls: ['./artwork-edit.component.css'],
})
export class ArtworkEditComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  form = new FormGroup({
    author: new FormControl('', Validators.required),
  });

  sortForm = new FormGroup({
    sort: new FormControl('', Validators.required),
  });

  @Input()
  exibitionArtworks: ArtWork[] = [];

  @Input()
  nonExibitionArtworks: ArtWork[] = [];

  @Output()
  doneClicked: EventEmitter<void> = new EventEmitter();

  @Output()
  search: EventEmitter<string> = new EventEmitter();

  @Output()
  removeArtwork: EventEmitter<ArtWork> = new EventEmitter();

  @Output()
  addArtwork: EventEmitter<ArtWork> = new EventEmitter();

  @Output()
  sort: EventEmitter<string> = new EventEmitter();

  onDoneClicked(): void {
    this.doneClicked.emit();
  }

  onSearch(): void {
    this.search.emit(this.form.value.author || '');
  }

  onRemoveClicked(artwork: ArtWork): void {
    this.removeArtwork.emit(artwork);
  }

  onAddClicked(artwork: ArtWork): void {
    this.addArtwork.emit(artwork);
  }

  onSort() {
    console.log('Kliknuto');
    this.sort.emit(this.sortForm.value.sort || 'asc');
  }
}
