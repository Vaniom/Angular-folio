import { Component, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkService } from 'src/app/services/work.service';

@Component({
  selector: 'app-works-viewdetails',
  templateUrl: './works-viewdetails.component.html',
  styleUrls: ['./works-viewdetails.component.css']
})
export class WorksViewdetailsComponent implements OnInit {

  @Input() workIndex: number;
  @Input() works: any[];

  index: string;
  work: any;



  constructor(private route: ActivatedRoute, private router: Router, private workService: WorkService) { }

  ngOnInit() {
    this.index = this.route.snapshot.paramMap.get('index');
    this.work = this.workService.works[this.index];
    window.scrollTo(0, 0);
  }

  onBack() {
    this.router.navigate(['/works', 'works-list']);
  }

}
