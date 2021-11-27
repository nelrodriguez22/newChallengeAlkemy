import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

export const Heroprofile = ({ history }) => {

	const params = useParams()
	const id = params.id
	const tb= useSelector( (state) => state.teambuilder.heroTB )
	let loc=0
	//busco posicion del heroe en el array del team para luego mostrar sus estadisticas
	const findHero =()=> {
		for (let i = 0; i < tb.length; i++) {
			if (tb[i].id === id){
				loc = i
			}
		}
	return loc
	}
findHero()

//funcion para retornar a la direccion anterior
  const handleClick = () => {
     history.goBack()
  }

  return (
    <>
      <div className="container d-flex justify-content-center  text-center">
        <div className="row mt-3 col-sm-6">
          <div className=" card text-secondary">
            <div className="row">
              <span className="fw-bold mb-2">{tb[loc].name}</span>
            </div>
            <div className="row d-flex justify-content-center">
              Weight:
              {tb[loc].appearance.weight[1]}
              <br />
              Height:
              {tb[loc].appearance.height[1]}
              <br />
              Name: {tb[loc].name}
              <br />
              Alias:
              {tb[loc].biography.aliases[0]}
              <br />
              Eye Color:
              {tb[loc].appearance["eye-color"]} <br />
              Hair Color:
              {tb[loc].appearance["hair-color"]} <br />
              Workplace: {tb[loc].work.base}
            </div>
          </div>
          <button className="btn btn-secondary" onClick={handleClick}>
            Go back
          </button>
        </div>
      </div>
    </>
  );
};


