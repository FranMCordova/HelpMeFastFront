import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enfermero',
  templateUrl: './enfermero.component.html',
  styleUrls: ['./enfermero.component.css']
})
export class EnfermeroComponent implements OnInit {

  constructor(public route:ActivatedRoute) { }

  ngOnInit(): void {
  }

}
