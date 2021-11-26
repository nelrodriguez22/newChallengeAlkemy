import React from 'react'
import { useSelector } from 'react-redux';
import { Herocards } from '../components/Herocards'


export const TeamBuilder = () => {
const heroes = useSelector((state) => state.teambuilder);
	const { countHeroes, goodHeroes, badHeroes } = useSelector(
    (state) => state.teambuilder
  );

  return (
    <>
      <div className="text-center">
        <h4>Team</h4>
        <span className="badge bg-dark">
          Total Heroes: {countHeroes} / 6{" "}
        </span>{" "}
        <span className="badge bg-success">
          {" "}
          Good Heroes: {goodHeroes} / 3{" "}
        </span>{" "}
        <span className="badge bg-danger"> Bad Heroes: {badHeroes} / 3 </span>
      </div>
      <div className="d-flex flex-wrap justify-content-center">
        {heroes.heroTB.map((heroes) => (
          <Herocards key={heroes.id} {...heroes} />
        ))}
      </div>
    </>
  );
}
