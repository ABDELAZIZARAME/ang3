// contact.service.ts
import { Injectable } from '@angular/core';
import { Contact } from './contact.interface';

@Injectable({
  providedIn: 'root' // Singleton : une seule instance dans toute l'app
})
export class ContactService {

  // Données privées (source de vérité unique)
  private contacts: Contact[] = [
    { nom: 'Ahmed Benali',  email: 'ahmed@ma',   actif: true,  score: 16, role: 'admin' },
    { nom: 'Sara Alami',   email: 'sara@ma',    actif: false, score: 8,  role: 'user'  },
    { nom: 'Omar Tazi',    email: 'omar@ma',    actif: true,  score: 18, role: 'admin' },
    { nom: 'Laila Rami',   email: 'laila@ma',   actif: true,  score: 11, role: 'guest' },
    { nom: 'Youssef El',   email: 'youssef@ma', actif: false, score: 6,  role: 'user'  },
  ];

  // ─── LECTURE ───────────────────────────────────────────
  getAll(): Contact[] {
    return this.contacts;
  }

  getActifs(): Contact[] {
    return this.contacts.filter(c => c.actif);
  }

  getByRole(role: string): Contact[] {
    return this.contacts.filter(c => c.role === role);
  }

  getScoreMoyen(): number {
    if (this.contacts.length === 0) return 0;
    return Math.round(
      this.contacts.reduce((s, c) => s + c.score, 0) / this.contacts.length
    );
  }

  // ─── MODIFICATION ──────────────────────────────────────
  ajouter(contact: Contact): void {
    this.contacts = [...this.contacts, contact];
  }

  supprimer(email: string): void {
    this.contacts = this.contacts.filter(c => c.email !== email);
  }

  toggleActif(email: string): void {
    const contact = this.contacts.find(c => c.email === email);
    if (contact) contact.actif = !contact.actif;
  }
}
