import React, { useState } from "react"
import { useFormik } from "formik"
import axios from "axios"
import { toast } from "react-toastify"
import { TeamBuilder } from "../teambuilder/TeamBuilder"
import {
  addhero,
  upcountheroes,
  upgoodheroes,
  upbadheroes,
} from "../redux/ducks/tb"
import { useDispatch, useSelector } from "react-redux"
import "react-toastify/dist/ReactToastify.css"


export const Searchpage = () => {
	const baseUrl = "https://superheroapi.com/api/10221785482721212";
	const [ heroes, setHeroes ] = useState([])
	const dispatch = useDispatch()
	//selecciona contadores de la store
	const {countHeroes, goodHeroes, badHeroes} = useSelector((state) => state.teambuilder)
	//selecciona array de heroes de la store
	const tb = useSelector((state)=> state.teambuilder.heroTB)
	

//consulta a la api segun la busqueda
	const formik = useFormik({
		initialValues: {
			q: "",
		},
		onSubmit: ({ q }) => {
			if (q === "") {
				return;
			} else {
				axios(`${baseUrl}/search/${q}`)
					.then(({ data }) => {
						if (data.results === undefined) {
							setHeroes([]);
							toast.error(data.error, {
							position: "bottom-center",
							autoClose: 3000,
							hideProgressBar: true,
							closeOnClick: true,
							pauseOnHover: true,
							draggable: true,
							progress: undefined,
							theme: "colored",
						});}else{
								setHeroes(data.results);
						}
					});
			}
		},
	});

//funcion para validar condiciones de agregado de heroes
const HandleAdd = ({...heroe}) => {
	//validacion si el id ya esta incluido en el equipo antes de iniciar el proceso de validaciones
if (tb[tb.findIndex((x) => x.id === heroe.id)]){
	toast.error("You can't add the same hero twice!", {
    position: "bottom-center",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
}else{
	//validacion de cantidad de heroes menores a 6 sino notifica del error
	if (countHeroes < 6) {
    //validaciones de heroes buenos menores a 3  sino notifica del error
    if (heroe.biography.alignment === "good") {
      if (goodHeroes < 3) {
        dispatch(addhero(heroe));
        dispatch(upcountheroes());
        dispatch(upgoodheroes());
      } else {
        return toast.error("The number of good heroes must be less than 3", {
          position: "bottom-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } else {
      //validaciones de heroes malos menores a 3 sino notifica del error
      if (badHeroes < 3) {
        dispatch(addhero(heroe));
        dispatch(upcountheroes());
        dispatch(upbadheroes());
      } else {
        return toast.error("The number of bad heroes must be less than 3", {
          position: "bottom-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    }
  } else {
	  return toast.error("The number of heroes must be less than 6", {
		 position: "bottom-center",
		 autoClose: 2000,
		 hideProgressBar: true,
		 closeOnClick: true,
		 pauseOnHover: true,
		 draggable: true,
		 progress: undefined,
		 theme: "colored",
	  });
	}
}
};
	return (
    <>
      <form onSubmit={formik.handleSubmit} className="container mt-4">
        <div className="col-sm-5 container-fluid">
          <div className="input-group mb-3">
            <input
              type="text"
              name="q"
              className="form-control"
              placeholder="Search hero"
              value={formik.values.q}
              onChange={formik.handleChange}
              autoComplete="off"
            />
            <button type="submit" className="btn btn-outline-primary">
              Search
            </button>
          </div>
          <span id="error"></span>
        </div>
      </form>
      <section className="d-flex justify-content-between">
        <div className="container col-lg-6">
          <TeamBuilder />
        </div>
        <div className="container col-lg-6">
          <h4>Results:</h4>
          <div className="d-flex col-sm flex-wrap">
            {heroes.map((heroe, id) => {
              return (
                <div key={id} className="card col-sm-4">
                  <img
                    src={heroe.image.url}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h4 className="card-title text-center">{heroe.name}</h4>
                    <div className="text-center mb-2 ">
                      {heroe.biography.alignment === "good" ? (
                        <span className="badge text-uppercase text-success p-1">
                          {heroe.biography.alignment}
                        </span>
                      ) : (
                        <span className="badge text-uppercase text-danger p-1">
                          {heroe.biography.alignment}
                        </span>
                      )}
                    </div>
                    <div className="row text-center">
                      <div
                        className="modal fade"
                        id="exampleModal"
                        tabIndex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5
                                className="modal-title"
                                id="exampleModalLabel"
                              >
                                Profile
                              </h5>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div className="modal-body">
                              <h5>Biography</h5>
                              <p className="card-text text-center">
                                Alias-es:
                                <span className="fw-bold">
                                  {" "}
                                  {heroe.biography.aliases}
                                </span>
                                <br />
                                Alignment:
                                <span className="fw-bold">
                                  {" "}
                                  {heroe.biography.alignment}
                                </span>
                                <br />
                                Alter-Egos:
                                <span className="fw-bold">
                                  {" "}
                                  {heroe.biography.alterEgo}
                                </span>
                                <br />
                                First Appearance:
                                <span className="fw-bold">
                                  {" "}
                                  {heroe.biography.firstAppearance}
                                </span>
                                <br />
                                Full-Names:
                                <span className="fw-bold">
                                  {" "}
                                  {heroe.biography.fullName}
                                </span>
                                <br />
                                Publishers:
                                <span className="fw-bold">
                                  {" "}
                                  {heroe.biography.publisher}
                                </span>
                                <br />
                              </p>
                              <h5>Powerstats</h5>
                              <p className="card-text text-center">
                                Combat:
                                <span className="fw-bold">
                                  {" "}
                                  {heroe.powerstats.combat}
                                </span>
                                <br />
                                Durability:
                                <span className="fw-bold">
                                  {" "}
                                  {heroe.powerstats.durability}
                                </span>
                                <br />
                                Intelligence:
                                <span className="fw-bold">
                                  {" "}
                                  {heroe.powerstats.intelligence}
                                </span>
                                <br />
                                Power:
                                <span className="fw-bold">
                                  {" "}
                                  {heroe.powerstats.power}
                                </span>
                                <br />
                                Speed:
                                <span className="fw-bold">
                                  {" "}
                                  {heroe.powerstats.speed}
                                </span>
                                <br />
                                Strength:
                                <span className="fw-bold">
                                  {" "}
                                  {heroe.powerstats.strength}
                                </span>
                                <br />
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    className="btn btn-outline-secondary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Profile
                  </button>
                  <button
                    className="btn mt-2 btn-primary"
                    onClick={() => HandleAdd({ ...heroe })}
                  >
                    Add
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}