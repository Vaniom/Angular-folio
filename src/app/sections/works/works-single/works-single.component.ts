import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-works-single',
  templateUrl: './works-single.component.html',
  styleUrls: ['./works-single.component.css']
})
export class WorksSingleComponent implements OnInit {

  @Input() workTitle: string;
  @Input() workDescription: string;
  @Input() workPhoto: string;
  @Input() workUrl: string;
  @Input() workTasks: string;
  @Input() workIndex: number;
  @Input() workGallery: boolean;
  @Input() workGithub: string;
  @Input() workEval: string;
  @Input() works: any[];

  constructor(private router: Router) { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  onViewDetails(id) {
    this.router.navigate(['/works', 'details', {index: id}]);
  }

}
