import { Component } from '@angular/core';
import {Contact} from "../../core/models/Contact";
import {StrapiModel} from "../../core/models/StrapiModel";
import {ContactService} from "../../core/services/contact/contact.service";
import {MessagesModalService} from "../../core/services/alerts/swal-alert.service";

@Component({
  selector: 'app-get-in-touch',
  templateUrl: './get-in-touch.component.html',
  styleUrls: ['./get-in-touch.component.css']
})
export class GetInTouchComponent {

  constructor(private contactService:ContactService,
              private messagesModalService:MessagesModalService) {
  }

  submit(value: Contact) {
    let strapi = new StrapiModel<Contact> ;
    strapi.data = value;
    this.contactService.save(strapi).subscribe(e => this.messagesModalService.toastSuccess("Votre message a été envoyé avec succés!"));
    }
}
