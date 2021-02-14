import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import firebase from "../services/fbConfig";

const DodajNovi = () => {
//Dodati state ali da se ubacuje sve odjednom a ne jedna po jedna stavka iz input polja
const [noviacc, setNoviacc] = useState([]);
const history = useHistory();


const saveAcc = (e) => {
  e.preventDefault()
    
  setNoviacc({ [e.target.id] : e.target.value })
  
 firebase
  .firestore()
  .collection('korisnici')
  .add(noviacc)
  history.push("/korisnici");
}


  return (
    <div className="container">
      <form onSubmit={saveAcc}>
        <h2>Dodaj novi</h2>
        <div className="container">
          <input type="text" placeholder="ime i prezime" onChange={e=>{setNoviacc({...noviacc, imeiprezime:e.target.value})}} id="imeiprezime"/>
          <input type="text" placeholder="visina" onChange={e=>{setNoviacc({...noviacc, visina:e.target.value})}} id="visina"/>
          <input type="text" placeholder="tezina" onChange={e=>{setNoviacc({...noviacc, tezina:e.target.value})}} id="tezina"/>
          <input type="text" placeholder="godina" onChange={e=>{setNoviacc({...noviacc, godina:e.target.value})}} id="godina"/><br/>
        </div>
        <button className="btn btn-info">Dodaj nove podatke</button>
      </form>
    </div>
  );
}

export default DodajNovi;
