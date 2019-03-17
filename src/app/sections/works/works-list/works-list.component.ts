import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-works-list',
  templateUrl: './works-list.component.html',
  styleUrls: ['./works-list.component.css'],
})
export class WorksListComponent implements OnInit {

  works = [
    {title: 'Projet d\'étude: Chalets & Caviar',
    description: 'Le but de ce projet etait de personnaliser un thème wordpress en vue d\'exploiter le site dans un contexte immobilier.',
    // tslint:disable-next-line:max-line-length
    tasks: 'Choix d\'un thème, définition d\'une identité graphique, traduction de l\'interface, adaptation du css, integration d\'un module de gestion immobilière, publication d\'une notice d\'utilisation.',
    projectUrl: 'http://www.laroutea4.fr/projets/chaletscaviar/',
    photo: '../../../assets/W2/w2-1.png',
    gallery: false,
    // tslint:disable-next-line:max-line-length
    eval: 'D\'un point de vu fonctionnel, toutes les fonctionnalités attendues sont présentes. Il n\'y a pas eu d\'utilisation à outrance de plugin ce qui est un très bon point. Le projet est bien entendu responsive ce qui permet d\'assurer un maximum de visibilité sur les différents types de support.',
    },
    {title: 'Projet d\'étude: Festival du Film de Plein Air',
    // tslint:disable-next-line:max-line-length
    description: 'Pour ce projet, je devais produire un cahier des charges complet, accompagné d\'une maquette html du site. La principale difficulté residait dans le budget restreint, une solution CMS a été proposée.',
    // tslint:disable-next-line:max-line-length
    tasks: 'Définition des besoins, étude fonctionnelle et technique, définition d\'une charte graphique, rédaction du cahier des charges, chiffrage des coùts et production d\'un devis, élaboration de la maquette (html et booststrap).',
    projectUrl: 'http://www.festival.laroutea4.fr/',
    photo: '../../../assets/W3/w3-1.png',
    gallery: false,
    eval: 'Projet de qualité professionnelle traité avec exhaustivité. Excellente prestation orale.',
    },
    {title: 'Projet d\'étude: Jeu Javascript en tour par tour',
    // tslint:disable-next-line:max-line-length
    description: 'A partir de quelques contraintes, produire un jeu en javascript et jQuery jouable à deux joueurs en local (sur la même machine). Le code produit devait-être orienté objet. Liberté sur les fonctionnalités et l\'interface graphique.',
    tasks: 'Production de code JS et jQuery en orienté objet, réalisation de l\'interface qraphique',
    photo: '../../../assets/W6/w6-1.png',
    gallery: true,
    github: 'https://github.com/Vaniom/P6-Jeu-de-plateau-JS',
    // tslint:disable-next-line:max-line-length
    eval: 'Tous les critères de validation ont été respectés. Très bonne présentation et bonne surprise sur le fait que les déplacements se fassent via le clavier',
    },
    {title: 'Projet d\'étude: Site d\'avis de restaurants',
    description: 'Pour ce projet, j\'ai eu à travailler à partir des API Google maps JS et Google Places.',
    tasks: 'Production de code JS, integration des API, sécurisation des clés, réalisation de l\'interface utilisateur.',
    photo: '../../../assets/W7/w7-1.png',
    gallery: true,
    github: 'https://github.com/Vaniom/P7_site_avis_restos',
    // tslint:disable-next-line:max-line-length
    eval: 'Bon travail de la part de Florent, on voit qu\'un travail important a été fourni et que les notions ont été acquises. Bonne proposition avec la Range Bar; site Responsive.',
    },
    {title: 'Documentation technique',
    // tslint:disable-next-line:max-line-length
    description: 'Rédaction de cahiers des charges, spécifications techniques, étude UML (diagrammes fonctionnels, diagrammes de classes, Modèle Physique de Données.',
    tasks: 'Analyse des besoins, chiffrage des coûts, rédaction des documents',
    photo: '../../../assets/docs/doc-1.png',
    gallery: true,
    },
    {title: 'Portfolio Angular',
    description: 'Site visant à présenter mes travaux, réalisé à partir du framework Angular (v7). Vous êtes en train de le parcourir :)',
    // tslint:disable-next-line:max-line-length
    tasks: 'analyse de l\'architecture et déploiement (angular_CLI, npm), ecriture du code (typescript, js), réalisation des éléments graphiques, mise en page (bootstrap).',
    photo: '../../../assets/w-folio/w-folio-1.png',
    gallery: false,
    github: 'https://github.com/Vaniom/Angular-folio',
    },
  ];

  constructor(private router: Router) {
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
