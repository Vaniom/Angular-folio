import { Component, OnInit } from '@angular/core';
import { WorkService } from 'src/app/services/work.service';

@Component({
  selector: 'app-works-list',
  templateUrl: './works-list.component.html',
  styleUrls: ['./works-list.component.css'],
})
export class WorksListComponent implements OnInit {

  works: any[];


  constructor(private workService: WorkService) {
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.works = this.workService.works;
  }

}
