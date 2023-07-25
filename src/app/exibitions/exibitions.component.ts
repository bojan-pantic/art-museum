import { Component, OnInit } from '@angular/core';
import { ExibitionService } from './exibition.service';
import { Exibition } from '../model/exibition.model';

@Component({
  selector: 'app-exibitions',
  templateUrl: './exibitions.component.html',
  styleUrls: ['./exibitions.component.css'],
})
export class ExibitionsComponent implements OnInit {
  constructor(private service: ExibitionService) {}

  exibitions: Exibition[] = [];

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.service.getAll().subscribe({
      next: (data: Exibition[]) => {
        this.exibitions = data;
      },
      error: () => {
        console.log('Greska');
      },
    });
  }
}
