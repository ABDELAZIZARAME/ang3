import { Component, OnInit, ViewChild } from '@angular/core';
import { ContactService } from './contact.service';
import { Contact } from './contact.interface';
import { ListeContactsComponent } from './liste-contacts/liste-contacts.component';
import { FormulaireContactComponent } from './formulaire-contact/formulaire-contact.component';
import { StatsContactsComponent } from './stats-contacts/stats-contacts.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ListeContactsComponent,
    FormulaireContactComponent,
    StatsContactsComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  @ViewChild(ListeContactsComponent) listeRef!: ListeContactsComponent;
  @ViewChild(StatsContactsComponent) statsRef!: StatsContactsComponent;

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {}

  onContactAjoute(contact: Contact): void {
    this.contactService.ajouter(contact);
    setTimeout(() => {
      if (this.listeRef) this.listeRef.contacts = this.contactService.getAll();
      if (this.statsRef) this.statsRef.refresh();
    }, 0);
  }
}