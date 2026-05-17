// liste-contacts.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactService } from '../contact.service';
import { Contact } from '../contact.interface';
import { SurvolDirective } from '../survol.directive';
import { HighlightDirective } from '../highlight.directive';
import { InitialesPipe } from '../initiales.pipe';
import { MentionPipe } from '../mention.pipe';

@Component({
  selector: 'app-liste-contacts',
  standalone: true,
  imports: [CommonModule, SurvolDirective, HighlightDirective, InitialesPipe, MentionPipe],
  templateUrl: './liste-contacts.component.html',
  styleUrls: ['./liste-contacts.component.css']
})
export class ListeContactsComponent implements OnInit {
  contacts: Contact[] = [];
  filtreActif: boolean | null = null;
  today = new Date();

  get contactsFiltres(): Contact[] {
    if (this.filtreActif === null) return this.contacts;
    return this.contacts.filter(c => c.actif === this.filtreActif);
  }

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.contacts = this.contactService.getAll();
  }

  supprimer(email: string): void {
    this.contactService.supprimer(email);
    this.contacts = this.contactService.getAll();
  }

  toggleActif(email: string): void {
    this.contactService.toggleActif(email);
    this.contacts = this.contactService.getAll();
  }
}
