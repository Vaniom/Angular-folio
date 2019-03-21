import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

    myStyle: object = {};
    myParams: object = {};
    width = 100;
    height = 100;

  constructor(private router: Router) {

  }

  ngOnInit() {
    window.scrollTo(0, 0);

    this.myStyle = {
      'position': 'absolute',
      'width': '100%',
      'height': '100%',
      // 'z-index': -1,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
    };

    this.myParams = {
      particles: {'number':
                    {'value': 80,
                    'density': {'enable': true, 'value_area': 800}
                    },
                  'color': {'value': '#ffffff'},
                  // tslint:disable-next-line:max-line-length
                  'shape': {'type': 'circle', 'stroke': {'width': 0, 'color': '#000000'}, 'polygon': {'nb_sides': 5}, 'image': {'src': 'img/github.svg', 'width': 100, 'height': 100}},
                  // tslint:disable-next-line:max-line-length
                  'opacity': {'value': 0.1763753266952075, 'random': false, 'anim': {'enable': false, 'speed': 1, 'opacity_min': 0.1, 'sync': false}},
                  // tslint:disable-next-line:max-line-length
                  'size': {'value': 5.05971106514665, 'random': true, 'anim': {'enable': false, 'speed': 40, 'size_min': 0.1, 'sync': false}},
                  // tslint:disable-next-line:max-line-length
                  'line_linked': {'enable': false, 'distance': 94.69771699587272, 'color': '#ffffff', 'opacity': 0.1736124811591, 'width': 1},
                  // tslint:disable-next-line:max-line-length
                  'move': {'enable': true, 'speed': 3, 'direction': 'none', 'random': false, 'straight': false, 'out_mode': 'out', 'bounce': false, 'attract': {'enable': false, 'rotateX': 600, 'rotateY': 1200}}},
                  'interactivity':
                  {'detect_on': 'canvas', 'events': {'onhover': {'enable': true, 'mode': 'repulse'},
                  'onclick': {'enable': true, 'mode': 'push'},
                  'resize': true},
                  'modes': {'grab': {'distance': 400, 'line_linked': {'opacity': 1}},
                  // tslint:disable-next-line:max-line-length
                  'bubble': {'distance': 400, 'size': 40, 'duration': 2, 'opacity': 8, 'speed': 3}, 'repulse': {'distance': 200, 'duration': 0.4}, 'push': {'particles_nb': 4}, 'remove': {'particles_nb': 2}}},
                  'retina_detect': true};
    }

  onGoToContact() {
    this.router.navigate(['/contact']);
  }
}
