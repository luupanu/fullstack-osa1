import React from 'react';
import ReactDOM from 'react-dom';

const Otsikko = ({kurssi}) => <h1>{kurssi}</h1>

const Sisalto = ({osat}) => <div>{osat.map(osa => <Osa osa={osa} key={osa.nimi}/>)}</div>

const Osa = ({osa}) => <div><p>{osa.nimi} {osa.tehtavia}</p></div>

const Yhteensa = ({osat}) => {
  const lkm = osat.map(t => t.tehtavia).reduce((a, b) => a + b);
  return(
    <div>
      <p>yhteensä {lkm} tehtävää</p>
    </div>
  )
}

const App = () => {
  const kurssi = {
    nimi: 'Half Stack -sovelluskehitys',
    osat: [
      {
        nimi: 'Reactin perusteet',
        tehtavia: 10
      },
      {
        nimi: 'Tiedonvälitys propseilla',
        tehtavia: 7
      },
      {
        nimi: 'Komponenttien tila',
        tehtavia: 14
      }
    ]
  }

  return(
    <div>
      <Otsikko kurssi={kurssi.nimi}/>
      <Sisalto osat={kurssi.osat}/>
      <Yhteensa osat={kurssi.osat}/>
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'))