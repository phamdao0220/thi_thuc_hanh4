import { Component, OnInit } from '@angular/core';
import { Awesomes } from 'src/app/awesomes';
import { AwesomeService } from 'src/app/services/awesome/awesome.service';

@Component({
  selector: 'app-list-awesome',
  templateUrl: './list-awesome.component.html',
  styleUrls: ['./list-awesome.component.css']
})
export class ListAwesomeComponent implements OnInit {
  awesomes: Awesomes[] = [];
  constructor(
    private awesomesService: AwesomeService
  ) { }

  ngOnInit(): void {
  }
  getAll() {
    this.awesomesService.getAll().subscribe(awesomes => {
      this.awesomes = awesomes;
    })
  }
}
