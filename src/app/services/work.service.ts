import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorkService {

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
    // tslint:disable-next-line:max-line-length
    gallery: ['../../../assets/W6/gallery/P6-1.png', '../../../assets/W6/gallery/P6-2.png', '../../../assets/W6/gallery/P6-3.png', '../../../assets/W6/gallery/P6-4.png'],
    galleryCaption: ['Choix graphiques, notice explicative, call to action (nb: les personnages utilisés Link et Steve sont soumis à copyright)', 'Génération aléatoire d\'une nouvelle carte à chaque nouvelle partie (placement des obstacles, armes et personnages), mappage des touches pour déplacement au clavier en tour par tour', 'Gestion de la rencontre, choix de l\'utilisateur d\'attaquer ou bloquer au prochain tour. Gestion de la fin de partie lorsqu\'un des personnage a son total de points de vie inférieur ou égal à zero.', 'Reprise des évènements de partie en log de console.'],
    github: 'https://github.com/Vaniom/P6-Jeu-de-plateau-JS',
    // tslint:disable-next-line:max-line-length
    eval: 'Tous les critères de validation ont été respectés. Très bonne présentation et bonne surprise sur le fait que les déplacements se fassent via le clavier',
    },

    {title: 'Projet d\'étude: Site d\'avis de restaurants',
    description: 'Pour ce projet, j\'ai eu à travailler à partir des API Google maps JS et Google Places.',
    tasks: 'Production de code JS, integration des API, sécurisation des clés, réalisation de l\'interface utilisateur.',
    photo: '../../../assets/W7/w7-1.png',
    // tslint:disable-next-line:max-line-length
    gallery: ['../../../assets/W7/gallery/G7-1.png', '../../../assets/W7/gallery/G7-2.png', '../../../assets/W7/gallery/G7-3.png', '../../../assets/W7/gallery/G7-4.png', '../../../assets/W7/gallery/G7-5.png'],
    github: 'https://github.com/Vaniom/P7_site_avis_restos',
    galleryCaption: ['Génération de la carte au chargement de la page et centrage sur la position de l\'utilisateur, récupération des établissements dans un rayon défini autour de l\'utilisateur.', 'Affichage des détails de l\'établissement au clic sur l\'entrée de liste ou sur le marqueur de position.', 'Possibilité pour l\'utilisateur d\'émettre un avis et une note sur un etablissement.', 'Ajout d\'un nouvel établissement par simple clic sur la carte. Option de filtrage des résultats affichés en fonction de la note moyenne.', 'Ajout de nouvel établissement.'],
    // tslint:disable-next-line:max-line-length
    eval: 'Bon travail de la part de Florent, on voit qu\'un travail important a été fourni et que les notions ont été acquises. Bonne proposition avec la Range Bar; site Responsive.',
    },

    {title: 'Documentation technique',
    // tslint:disable-next-line:max-line-length
    description: 'Rédaction de cahiers des charges, spécifications techniques, étude UML (diagrammes fonctionnels, diagrammes de classes, Modèle Physique de Données.',
    tasks: 'Analyse des besoins, chiffrage des coûts, rédaction des documents',
    photo: '../../../assets/docs/doc-1.png',
    // tslint:disable-next-line:max-line-length
    gallery: ['../../../assets/docs/gallery/D-1.png', '../../../assets/docs/gallery/D-2.png', '../../../assets/docs/gallery/D-3.png', '../../../assets/docs/gallery/D-4.png', '../../../assets/docs/gallery/D-5.png', '../../../assets/docs/gallery/D-6.png', '../../../assets/docs/gallery/D-7.png', '../../../assets/docs/gallery/D-8.png', '../../../assets/docs/gallery/D-9.png', '../../../assets/docs/gallery/D-10.png'],
    galleryCaption: ['Production de documents à la mise en page soignée. Ici une notice utilisateur.', 'Détails de la notice utilisateur: utilisation de consignes simples et brèves appuyées par des visuels adaptés.', 'Production de cahier des charges.', 'Détail d\'un cahier des charges: définition d\'un charte graphique.', 'Détail d\'un cahier des charges: production de maquettes wireframe.', 'Etude fonctionnelle de projet: production de diagrammes UML', 'Diagramme de classe.', 'Production de modèle physique de données', 'Documentation technique sous forme wiki.', 'Mise en place de tests en phase de développement.'],
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


  constructor() { }
}
