import { Component, OnInit } from '@angular/core';
import { UserInterface } from 'src/model/user.interface';
import { PageEvent } from '@angular/material/paginator';
import { ListService } from 'src/app/services/list/list.service';
import { ApiService } from 'src/app/services/api/api.service';

import { doctorDto } from './doctorsDto'
import { HttpBackend } from '@angular/common/http';
import { NgForm, FormBuilder, FormGroup } from '@angular/forms';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent implements OnInit {

  public newDoc: UserInterface;
  public form: FormGroup;

  constructor(
    private readonly listSrv: ListService, 
    private readonly api: ApiService, 
    private formBuilder: FormBuilder
  ){
    this.form = this.formBuilder.group({fn:'', ln:''});
    this.api.get('users/doctors').subscribe(data => {this.doctors = data as UserInterface[], console.log(data), this.displayedDoctors = this.doctors});
  }

  // Notre liste d'éléments statiques
  doctors : UserInterface[] = [];
  // doctors: UserInterface[] = [
  //   {id: 1, firstName: 'Athmane', lastName: 'Fares', cheminImage: "assets/coeur.png"},
  //   {id: 2, firstName: 'Éric', lastName: 'Judor', cheminImage: "assets/charc.jpg"},
  //   {id: 3, firstName: 'Jamel', lastName: 'Dridi', cheminImage: "assets/charc.jpg"},
  //   {id: 4, firstName: 'Ramzi', lastName: 'Bédia', cheminImage: "assets/charc.jpg"},
  //   {id: 5, firstName: 'Professeur', lastName: 'Strauss', cheminImage: "assets/charc.jpg"},
  //   {id: 6, firstName: 'Professeur', lastName: 'Test', cheminImage: "assets/charc.jpg"},
  //   {id: 7, firstName: 'Professeur', lastName: 'Lounès', cheminImage: "assets/charc.jpg"},
  //   {id: 8, firstName: 'Julien', lastName: '', cheminImage: "assets/mario_bas.gif"},
  //   {id: 9, firstName: 'Hichem', lastName: '', cheminImage: "assets/charc.jpg"},
  //   {id: 10, firstName: 'Franck', lastName: '', cheminImage: "assets/Franck.jpg"},
  //   {id: 11, firstName: 'Alexis', lastName: '', cheminImage: "assets/charc.jpg"},
  //   {id: 12, firstName: 'Théo', lastName: '', cheminImage: "assets/charc.jpg"},
  //   {id: 13, firstName: 'Jean-Christophe', lastName: '', cheminImage: "assets/charc.jpg"},
  //   {id: 14, firstName: 'Zaïr', lastName: '', cheminImage: "assets/charc.jpg"},
  //   {id: 15, firstName: 'Khalil', lastName: '', cheminImage: "assets/charc.jpg"},
  //   {id: 16, firstName: 'Patrick', lastName: '', cheminImage: "assets/charc.jpg"},
  // ];

  displayedDoctors = []; //La liste qui est liée à la vue (celle qui est affichée)
  paginatorInfo: PageEvent = {pageSize: 10, pageIndex: 0, length: this.doctors.length}; //Les informations que l'on lie au paginateur
  //paginatorInfo: PageEvent = {pageSize: 5, pageIndex: 0, length: this.docs.length};//test

  ngOnInit() {
    
    this.api.get(`users/doctors`).toPromise() //users/doctors
      .then(success => console.log(success), error => console.log(error));

    //À l'initialisation du composant on pagine nos éléments
    this.displayedDoctors = this.listSrv.paginateElements<UserInterface>(this.doctors, this.paginatorInfo);
    //this.docs = this.listSrv.paginateElements<doctorDto>(this.docs, this.paginatorInfo);
  }

  //Méthode déclenchée lorsqu'une recherche est faite dans notre composant de recherche
  search(query: string): void { 
    //Si la recherche est vide on affecte tous les éléments à la liste que l'on affiche
    this.displayedDoctors = this.doctors;

    //Sinon on filtre les éléments dont le nom ou le prénom ne commence pas par la chaîne recherchée 
    if (query !== ''){
      this.displayedDoctors = this.doctors.filter((doctor) => {

        const len = query.length; // On récupère la taille de la chaîne recherchée
        const firstName = doctor.firstName.substr(0, len).toLocaleLowerCase(); // On crée une sous chaîne du prénom de la même taille que celle recherchée
        const lastName = doctor.lastName.substr(0, len).toLowerCase(); // Idem ave cle nom

        //On vérifie ensuite l'égalité des chaînes (on transforme ces chaînes en minuscule pour ne pas être sensible à la casse)
        const firstNameMatched = firstName === query.toLowerCase(); 
        const lastNameMatched = lastName === query.toLowerCase();

        //On conserve les éléments si la sous-chaîne créée avec le prénom ou celle créée avec le nom correspond
        return firstNameMatched || lastNameMatched;
      });
    } 

    this.paginatorInfo.pageIndex = 0; //On remet la paginateur à la première page
    this.paginatorInfo.length = this.displayedDoctors.length; //On affecte la taille des éléments trouvés à la taille du paginateur
    this.displayedDoctors = this.listSrv.paginateElements<UserInterface>(this.displayedDoctors, this.paginatorInfo); // On pagine nos éléments qui correspondent à la recherche
  }

  //Méthode déclenchée lorsque l'utilisateur change de page ou change la taille du paginateur
  pageChange(event: PageEvent): void {
    this.paginatorInfo = event; //On met à jour la variable qui contient les informations du paginateur
    this.displayedDoctors = this.listSrv.paginateElements<UserInterface>(this.doctors, this.paginatorInfo); // On pagine nos éléments affichés
  }

  addDoc(){
    alert("Vous venez de cliquer sur un bouton");
    
    this.doctors.push({id: this.doctors[this.doctors.length - 1].id+1, firstName: "test", lastName: "test", cheminImage: "assets/charc.jpg"});

    this.paginatorInfo = {pageSize: 10, pageIndex: 0, length: this.doctors.length};
    this.displayedDoctors = this.listSrv.paginateElements<UserInterface>(this.doctors, this.paginatorInfo);
  }

  delete(id){
    console.log(id);
    console.log('users/'+id);
    //la fonction est appelé en fonction de delete ou post, mais toujours users/+id
    this.api.delete('users/'+id, id).toPromise().then(sucess => console.log(sucess), error=> console.log(error));
    
    //maj de la liste ?
    this.api.get('users').toPromise() //users/doctors
      .then(success => console.log(success), error => console.log(error));
    this.paginatorInfo = {pageSize: 10, pageIndex: 0, length: this.doctors.length};
    this.displayedDoctors = this.listSrv.paginateElements<UserInterface>(this.doctors, this.paginatorInfo);
  }

  onSubmit(form: NgForm)
  {
    console.log(this.form.value);
    if(this.doctors.length == 0)
    {
      this.doctors.push({id:0, firstName: this.form.value['fn'], lastName: this.form.value['ln'], cheminImage: "assets/charc.jpg"});
    }
    else
    {
      this.doctors.push({id: this.doctors[this.doctors.length - 1].id+1, firstName: this.form.value['fn'], lastName: this.form.value['ln'], cheminImage: "assets/charc.jpg"});
    }
    this.paginatorInfo = {pageSize: 10, pageIndex: 0, length: this.doctors.length};
    this.displayedDoctors = this.listSrv.paginateElements<UserInterface>(this.doctors, this.paginatorInfo);
  }

  

  // createDoctor() {
  //   const doctor = {
  //     firstName: this.form.value['fn'], 
  //     lastName: this.form.value['ln'], 
  //     cheminImage: "assets/charc.jpg"
  //   };

  //   this.api.put('/users', doctor).toPromise().then(
  //     success => console.log(success), error => console.log(error)
  //   );
  // }



}
