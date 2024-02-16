import { Component, OnInit } from '@angular/core';
import { FormationService } from '../services/formation.service';
import { Formation } from '../models/formation';
 // Importez votre modèle de formation ici

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.css']
})
export class FormationsComponent implements OnInit {
[x: string]: any;
  formations: Formation[] = []; // Initialisez un tableau vide pour stocker les formations

  constructor(private formationService: FormationService) { } // Injectez le service de formations

  ngOnInit(): void {
    this.loadFormations(); // Chargez les formations au chargement du composant
  }

  loadFormations() {
    this.formationService.getAllFormations().subscribe((formations: Formation[]) => {
      this.formations = formations;
    });
  }

  ajouterFormation() {
    // Redirigez vers la page d'ajout de formation ou ouvrez un formulaire modal
  }

  editerFormation(formation: Formation) {
    // Redirigez vers la page d'édition de formation ou ouvrez un formulaire modal avec les détails de la formation
  }

  supprimerFormation(formation: Formation) {
    // Appelez le service pour supprimer la formation et rechargez la liste des formations
  }
}
