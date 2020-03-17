import { Component, OnInit } from '@angular/core';
import { MedicinesInterface } from 'src/model/medicines.interface';
import { PageEvent } from '@angular/material/paginator';
import { ListService } from 'src/app/services/list/list.service';
import { ApiService } from 'src/app/services/api/api.service';

import { HttpBackend } from '@angular/common/http';
import { NgForm, FormBuilder, FormGroup } from '@angular/forms';
import { identifierModuleUrl } from '@angular/compiler';


@Component({
  selector: 'app-medicines',
  templateUrl: './medicines.component.html',
  styleUrls: ['./medicines.component.scss']
})
export class MedicinesComponent implements OnInit {

  public form: FormGroup;

  constructor(private readonly listSrv: ListService, 
    private readonly apim: ApiService, 
    private formBuilder: FormBuilder) { this.form = this.formBuilder.group({name:'', description:''});
    this.apim.get('medicines/all').subscribe(data => {this.medicaments = data as MedicinesInterface[], console.log(data), this.displayedMedicines = this.medicaments});
  }

  medicaments : MedicinesInterface[] = [];
  displayedMedicines = []; //La liste qui est liée à la vue (celle qui est affichée)
  paginatorInfo: PageEvent = {pageSize: 10, pageIndex: 0, length: this.medicaments.length};

  ngOnInit() {
    this.apim.get(`medicines/all`).toPromise()
      .then(success => console.log(success), error => console.log(error));

    //À l'initialisation du composant on "pagine" nos éléments
    this.displayedMedicines = this.listSrv.paginateElements<MedicinesInterface>(this.medicaments, this.paginatorInfo);
  }

  //Méthode déclenchée lorsqu'une recherche est faite dans notre composant de recherche
  search(query: string): void { 
    //Si la recherche est vide on affecte tous les éléments à la liste que l'on affiche
    this.displayedMedicines = this.medicaments;

    //Sinon on filtre les éléments dont le nom ou le prénom ne commence pas par la chaîne recherchée 
    if (query !== ''){
      this.displayedMedicines = this.medicaments.filter((medicament) => {

        const len = query.length; // On récupère la taille de la chaîne recherchée
        const name = medicament.name.substr(0, len).toLocaleLowerCase(); // On crée une sous chaîne du prénom de la même taille que celle recherchée

        //On vérifie ensuite l'égalité des chaînes (on transforme ces chaînes en minuscule pour ne pas être sensible à la casse)
        const nameMatched = name === query.toLowerCase(); 

        //On conserve les éléments si la sous-chaîne créée avec le prénom ou celle créée avec le nom correspond
        return nameMatched;
      });
    } 

    this.paginatorInfo.pageIndex = 0; //On remet la paginateur à la première page
    this.paginatorInfo.length = this.displayedMedicines.length; //On affecte la taille des éléments trouvés à la taille du paginateur
    this.displayedMedicines = this.listSrv.paginateElements<MedicinesInterface>(this.displayedMedicines, this.paginatorInfo); // On pagine nos éléments qui correspondent à la recherche
  }

  //Méthode déclenchée lorsque l'utilisateur change de page ou change la taille du paginateur
  pageChange(event: PageEvent): void {
    this.paginatorInfo = event; //On met à jour la variable qui contient les informations du paginateur
    this.displayedMedicines = this.listSrv.paginateElements<MedicinesInterface>(this.medicaments, this.paginatorInfo); // On pagine nos éléments affichés
  }

  delete(id){
    console.log(id);
    console.log('medicines/'+id);
    //la fonction est appelé en fonction de delete ou post, mais toujours users/+id
    this.apim.delete('medicines/'+id, id).toPromise().then(sucess => console.log(sucess), error=> console.log(error));
    
    //maj de la liste ?
    this.apim.get('medicines/all').toPromise()
      .then(success => console.log(success), error => console.log(error));
    this.paginatorInfo = {pageSize: 10, pageIndex: 0, length: this.medicaments.length};
    this.displayedMedicines = this.listSrv.paginateElements<MedicinesInterface>(this.medicaments, this.paginatorInfo);
  }

  onSubmit(){
    console.log("oui");
    console.log("non");
    const med = this.form.value;
    console.log(med);
    this.apim.put(`medicines`, med).toPromise().then(sucess => console.log(sucess), error=> console.log(error));
  }

}
