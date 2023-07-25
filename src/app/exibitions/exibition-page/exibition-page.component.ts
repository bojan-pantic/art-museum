import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExibitionService } from '../exibition.service';
import { Exibition } from 'src/app/model/exibition.model';
import { ArtWork } from 'src/app/model/artwork.model';

@Component({
  selector: 'app-exibition-page',
  templateUrl: './exibition-page.component.html',
  styleUrls: ['./exibition-page.component.css'],
})
export class ExibitionPageComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private service: ExibitionService
  ) {}

  params = {
    sort: 'author',
    sortDirection: 'asc',
    filter: {
      author: '',
    },
  };

  exibitionId: number = 0;
  exibition: Exibition = new Exibition();
  exibitionArtworks: ArtWork[] = [];
  shouldRenderEditButton: boolean = true;
  nonExibitionArtworks: ArtWork[] = [];
  allArtworks: ArtWork[] = [];

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.exibitionId = params['id'];
      this.getOne();
      this.getExibitionArtworks();
      this.getAllArtworks();
    });
  }

  getOne(): void {
    this.service.getOne(this.exibitionId).subscribe({
      next: (data: Exibition) => {
        console.log(data);
        this.exibition = data;
      },
      error: () => {
        console.log('greska!');
      },
    });
  }

  getExibitionArtworks(): void {
    this.service.getExibitionArtworks(this.exibitionId).subscribe({
      next: (data: ArtWork[]) => {
        this.exibitionArtworks = data;
      },
      error: () => {
        console.log('Greska!');
      },
    });
  }

  getAllArtworks(): void {
    this.service.getAllArtworks(this.params).subscribe({
      next: (data: ArtWork[]) => {
        this.allArtworks = data;
        this.filterArtworks();
      },
      error: () => {
        console.log('Greska!');
      },
    });
  }

  filterArtworks() {
    this.nonExibitionArtworks = this.allArtworks.filter(
      (art: ArtWork) => art.exibition_id == '-1'
    );
  }

  onEditClicked(): void {
    this.shouldRenderEditButton = !this.shouldRenderEditButton;
  }

  onDoneClicked(): void {
    this.shouldRenderEditButton = !this.shouldRenderEditButton;
  }

  onSearch(author: string): void {
    this.params.filter.author = author;
    this.getAllArtworks();
  }

  onSort(value: string): void {
    console.log(value);
    this.params.sortDirection = value;
    this.getAllArtworks();
  }

  onRemoveArtwork(artwork: ArtWork): void {
    this.service.removeExibitionArtwork(artwork).subscribe({
      next: (data: ArtWork) => {
        this.getAllArtworks();
        this.getExibitionArtworks();
      },
    });
  }

  onAddArtwork(artwork: ArtWork): void {
    artwork.exibition_id = this.exibitionId.toString();
    this.service.addArtwork(artwork).subscribe({
      next: (data: ArtWork) => {
        this.getAllArtworks();
        this.getExibitionArtworks();
      },
    });
  }
}
