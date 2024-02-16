import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Formation } from '../models/formation'; // Importez le modèle de formation ici

@Injectable({
  providedIn: 'root'
})
export class FormationService {
  // Vous pouvez simuler des données de formation statiques pour le moment
  private formations: Formation[] = [
    { id: 1, nom: 'Formation Angular', description: 'Formation avancée sur Angular' },
    { id: 2, nom: 'Formation JavaScript', description: 'Formation complète sur JavaScript' },
    // Ajoutez d'autres formations ici
  ];

  constructor() { }

  getAllFormations(): Observable<Formation[]> {
    // Simulez la récupération de données depuis une source externe (par exemple, un API)
    return of(this.formations);
  }

  // Implémentez les autres méthodes nécessaires pour ajouter, mettre à jour et supprimer des formations
}
