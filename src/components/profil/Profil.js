import React from "react";


export const Profil = () => {

   function teacher(e) {
      e.preventDefault();
      console.log('Professeur');
    }
      function student(e) {
        e.preventDefault();
        console.log('Etudiant');
      }
  


    return (
      
      <>
        
       <div>
          <h1 id="Title-Profil">   Selectionner votre profil </h1>
          
        <button onClick={teacher} href="#" id="card-right">
          <div id="font-card" >Enseignants </div>
          </button>
          </div>
        <button onClick={student} href="#"id="card-left" >
          <div id="font-card">Etudiants</div></button>
       
      </>
    );
  }
