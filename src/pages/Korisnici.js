import React, { useState, useEffect } from "react";
import firebase from "../services/fbConfig";

function useKorisnici() {
  const [korisnici, setKorisnici] = useState([]);

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection("korisnici")
      .onSnapshot((snapshot) => {
        const newKorisnik = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))
        setKorisnici(newKorisnik)
      })

      return () => unsubscribe()
  }, []);

  return korisnici
  
}



const Korisnici = () => {
    const korisnici = useKorisnici();
    

    return (
        <div className="container">
        <h2>Korisnici</h2>

        {korisnici.map((korisnik)=>
       
        <div className="card" key={korisnik.id}>
            <h3>Ime i prezime: {korisnik.imeiprezime}</h3>
            <h4>Visina: {korisnik.visina} cm</h4>
            <h4>Tezina: {korisnik.tezina} kg</h4>
            <h4>Godine: {korisnik.godina} god.</h4>
        </div>

        )}
      </div>
    )
}

export default Korisnici;

