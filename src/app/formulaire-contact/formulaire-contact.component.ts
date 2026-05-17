// formulaire-contact.component.ts
import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Contact } from '../contact.interface';
import { InitialesPipe } from '../initiales.pipe';

@Component({
  selector: 'app-formulaire-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, InitialesPipe],
  templateUrl: './formulaire-contact.component.html',
  styleUrls: ['./formulaire-contact.component.css']
})
export class FormulaireContactComponent {
  @Output() contactAjoute = new EventEmitter<Contact>();

  // Modèle du formulaire (Two-Way Binding avec [(ngModel)])
  nouveau: Contact = {
    nom: '',
    email: '',
    actif: true,
    score: 10,
    role: 'user'
  };

  erreur: string = '';

  soumettre(): void {
    if (!this.nouveau.nom.trim() || !this.nouveau.email.trim()) {
      this.erreur = 'Nom et email sont obligatoires.';
      return;
    }
    this.erreur = '';
    this.contactAjoute.emit({ ...this.nouveau });
    // Réinitialiser le formulaire
    this.nouveau = { nom: '', email: '', actif: true, score: 10, role: 'user' };
  }
}
