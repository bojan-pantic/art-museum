import { Component, Input, OnInit } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { ArtWork } from 'src/app/model/artwork.model';
import { ArtworkDetailsComponent } from './artwork-details/artwork-details.component';

@Component({
  selector: 'app-artwork-item',
  templateUrl: './artwork-item.component.html',
  styleUrls: ['./artwork-item.component.css'],
})
export class ArtworkItemComponent implements OnInit {
  constructor(private offCanvas: NgbOffcanvas) {}

  ngOnInit(): void {}

  @Input()
  artwork: ArtWork = new ArtWork();

  showDetails() {
    const offCanvasRef = this.offCanvas.open(ArtworkDetailsComponent, {
      position: 'end',
    });

    offCanvasRef.componentInstance.artwork = this.artwork;
  }
}
