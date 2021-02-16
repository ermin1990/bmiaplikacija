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
          ...doc.data(),
        }));
        setKorisnici(newKorisnik);
      });

    return () => unsubscribe();
  }, []);

  return korisnici;
}

const Korisnici = () => {
  const korisnici = useKorisnici();


  //Formula
// let BMIcalc = (korisnik.tezina/((korisnik.visina/100)*(korisnik.visina/100))).toFixed(2);
  
const BMI=(korisnik)=> {

  let BMIcalc = (korisnik.tezina/((korisnik.visina/100)*(korisnik.visina/100))).toFixed(0);
  let poruka;

  if (BMIcalc < 20) {
    poruka = "Normalno";
  } else if (21 < BMIcalc < 25) {
    poruka = "Povećano";
    
  } else if (26 < BMIcalc < 30) {
    poruka = "Prekomjerno";
  } else if (BMIcalc > 31) {
    poruka = "Gojaznost";
  }

  return (
    <h5>
      {BMIcalc} - {poruka}
    </h5>
  );
  

}

  
  return (
    <div className="container">
      <h2>Korisnici</h2>
      <div className="container text-left d-flex float-left">
        {korisnici.map(
          (korisnik) => (
            //Novi profil izgled
            <div
            key={korisnik.id}
              className="card text-black mb-3"
              style={{ maxWidth: "18rem", margin : "2px" }}
            >
              <div className="card-header bg-light">Ime i prezime<br/> {korisnik.imeiprezime}<br/> JMBG: {korisnik.jmbg}<br/> {korisnik.godina} god.</div>
              <div className="card-body">
                <h5 className="card-title">BMI: {BMI(korisnik)}
                                
                 </h5>
                <p className="card-text">
                  Visina: {korisnik.visina} cm
                </p>
                <p className="card-text">
                  Tezina: {korisnik.tezina} kg
                </p>
              </div>
            </div>
          )

          /* <div className="card" key={korisnik.id}>
            <h3>Ime i prezime: {korisnik.imeiprezime}</h3>
            <h4>Visina: {korisnik.visina} cm</h4>
            <h4>Tezina: {korisnik.tezina} kg</h4>
            <h4>Godine: {korisnik.godina} god.</h4>
        </div> */
        )}
      </div>
    </div>
  );
};

export default Korisnici;
