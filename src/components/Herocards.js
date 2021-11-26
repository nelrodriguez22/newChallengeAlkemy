import { useDispatch } from "react-redux"
import { NavLink } from "react-router-dom"

import {
  removehero,
  downcountheroes,
  downgoodheroes,
  downbadheroes,
} from "../redux/ducks/tb";
export const Herocards = ({...props}) => {
	const dispatch = useDispatch();
	
	const HandleDelete = (id) => {
			if (props.biography.alignment === "good") {
			dispatch(removehero(id));
			dispatch(downcountheroes());
			dispatch(downgoodheroes());
      }else{
			dispatch(removehero(id));
			dispatch(downcountheroes());
			dispatch(downbadheroes());
		}
	};
	
	return (
    <>
      <div className="card">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={props.image.url}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <h5 className="card-title">{props.name}</h5>
            {props.biography.alignment === "good" ? (
              <span className="badge pill bg-success p-1">
                {props.biography.alignment}
              </span>
            ) : (
              <span className="badge pill bg-danger p-1">
                {props.biography.alignment}
              </span>
            )}

            <div className="card-text">
              <div>
                <p className="mb-0">
                  Combat:
                  <span className="fw-bold">{props.powerstats.combat}</span>
                  <br />
                  Durability:
                  <span className="fw-bold">{props.powerstats.durability}</span>
                  <br />
                  Intelligence:
                  <span className="fw-bold">
                    {props.powerstats.intelligence}
                  </span>
                  <br />
                  Power:
                  <span className="fw-bold">{props.powerstats.power}</span>
                  <br />
                  Speed:
                  <span className="fw-bold">{props.powerstats.speed}</span>
                  <br />
                  Strength:
                  <span className="fw-bold">
                    {props.powerstats.strength}
                  </span>{" "}
                  <br />
                </p>
              </div>
              <div className="d-flex flex-row-reverse mt-5">
                <button
                  className="btn btn-outline-danger btn-block"
                  onClick={() => HandleDelete(props.id)}
                >
                  Remove
                </button>
                <NavLink to={`Heroe/${props.id}`}>
                  <button
                    className="btn btn-outline-secondary"
                  >
                    Profile
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};



