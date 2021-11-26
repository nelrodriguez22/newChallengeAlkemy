import React from 'react'
import { useSelector } from 'react-redux'

export const TeamStats = () => {
  let tb = useSelector((state) => state.teambuilder.heroTB);

  const combat = tb
    .map((item) => Number(item.powerstats.combat))
    .reduce((prev, curr) => prev + curr, 0);
  const durability = tb
    .map((item) => Number(item.powerstats.durability))
    .reduce((prev, curr) => prev + curr, 0);
  const intelligence = tb
    .map((item) => Number(item.powerstats.intelligence))
    .reduce((prev, curr) => prev + curr, 0);
  const power = tb
    .map((item) => Number(item.powerstats.power))
    .reduce((prev, curr) => prev + curr, 0);
  const speed = tb
    .map((item) => Number(item.powerstats.speed))
    .reduce((prev, curr) => prev + curr, 0);
  const strength = tb
    .map((item) => Number(item.powerstats.strength))
    .reduce((prev, curr) => prev + curr, 0);
  const arr = [combat, durability, intelligence, power, speed, strength];
  const maxStat = [
    "Combat",
    "Durability",
    "Intelligence",
    "Power",
    "Speed",
    "Strength",
  ];
  let max = 0;
  let loc = 0;
  let maxShow = 0;
  let avgh = 0;
  let avgw = 0;

  //compara valores para mostrar el tipo y el valor de la mayor estadistica
  const compareValues = () => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
        loc = i;
      }
    }
    maxShow = maxStat[loc];

    return [maxShow, max];
  };
  //funcion para sacar el promedio de altura
  //pd: use el metodo slice pero tambien podria haber usado un regex y separar por espacio
  //para asi poder usar los nros de la cadena y hacer las operaciones
  const avgHeights = () => {
    if (!isNaN(tb)) {
    } else {
      let heights = Object.entries(tb).map((el) =>
        Number(el[1].appearance.height[1].slice(0, 3))
      );
      avgh = (heights.reduce((a, c) => a + c) / heights.length).toFixed(2);
    }

    return avgh;
  };

  //funcion para sacar el promedio de peso
  const avgWeights = () => {
    if (!isNaN(tb)) {
    } else {
      let weights = Object.entries(tb).map((el) =>
        Number(el[1].appearance.weight[1].slice(0, 2))
      );
      avgw = (weights.reduce((a, c) => a + c) / weights.length).toFixed(2);
    }

    return avgw;
  };

  compareValues();
  avgWeights();
  avgHeights();

  return (
    <>
      <div className="container">
        <div className="row mt-3 col-sm-12 m-1">
          <div className=" card text-secondary">
            <div className="row ">
              <h6 className="card-header">Total PowerStats </h6>
            </div>
            <div className="row p-1">
              Combat:{combat}
              <br />
              Durability:{durability}
              <br />
              Intelligence:{intelligence}
              <br />
              Power:{power}
              <br />
              Speed:{speed}
              <br />
              Strength:{strength}
              <br />
            </div>
            <div className="text-secondary">
              <div className="row p-1 mt-3">
                This team's is made of: {maxShow}({max}) <br />
                Avg. Height:{avgh} cm <br />
                Avg. Weight:{avgw} kgs
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}