import { Component, Input, OnInit } from '@angular/core';
import { ArtWork } from 'src/app/model/artwork.model';

@Component({
  selector: 'app-artwork-details',
  templateUrl: './artwork-details.component.html',
  styleUrls: ['./artwork-details.component.css'],
})
export class ArtworkDetailsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input()
  artwork: ArtWork = new ArtWork();
}
