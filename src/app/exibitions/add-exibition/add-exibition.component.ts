import { Component, OnInit } from '@angular/core';
import { ExibitionService } from '../exibition.service';
import { Exibition, ExibitionLocation } from 'src/app/model/exibition.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-exibition',
  templateUrl: './add-exibition.component.html',
  styleUrls: ['./add-exibition.component.css'],
})
export class AddExibitionComponent implements OnInit {
  constructor(private service: ExibitionService, private router: Router) {}

  locations: ExibitionLocation[] = [];

  exibitionForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    location: new FormControl({}, Validators.required),
  });

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.service.getLocations().subscribe({
      next: (data: ExibitionLocation[]) => {
        this.locations = data;
      },
      error: () => {
        console.log('Greska!');
      },
    });
  }

  onSubmit(): void {
    console.log(this.exibitionForm.value);

    let location = new ExibitionLocation();
    for (let loc of this.locations) {
      if (loc._id == this.exibitionForm.value.location) {
        location = loc;
      }
    }

    let exibition = new Exibition();
    exibition.title = this.exibitionForm.value.title || '';
    exibition.description = this.exibitionForm.value.description || '';
    exibition.location = location;

    this.service.addExibition(exibition).subscribe({
      next: (_) => {
        this.router.navigate(['/home']);
        console.log('Sve ok');
      },
    });
  }
}
