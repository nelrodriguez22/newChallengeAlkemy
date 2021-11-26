const initialState = {
  countHeroes: 0,
  goodHeroes: 0,
  badHeroes: 0,
  heroTB: [],
};

const ADDHERO = "tb/addero";
const RMVHERO = "tb/removehero";
const UPCOUNT = "tb/upcountheroes";
const DWNCOUNT = "tb/downcountheroes";
const UPGH = "tb/upgoodheroes";
const DWNGH = "tb/downgoodheroes";
const UPBH = "tb/upbadheroes";
const DWNBH = "tb/downbadheroes";

export const addhero = (data) => ({
  type: ADDHERO,
  payload:data,
});
export const removehero = (id) => ({
  type: RMVHERO,
  payload:id
});

export const upcountheroes = () => ({
  type: UPCOUNT,
});
export const downcountheroes = () => ({
  type: DWNCOUNT,
});

export const upgoodheroes = () => ({
  type: UPGH,
});
export const downgoodheroes = () => ({
  type: DWNGH,
});

export const upbadheroes = () => ({
  type: UPBH,
});
export const downbadheroes = () => ({
  type: DWNBH,
});





export default function tbReducer (state = initialState, action){
	switch (action.type) {
    case ADDHERO:
      return {
        ...state,
        heroTB: [...state.heroTB, action.payload],
      };

    case RMVHERO:
      return {
        ...state,
        heroTB: state.heroTB.filter((heroTB) => heroTB.id !== action.payload),
      };
    case UPCOUNT:
      return {
        ...state,
        countHeroes: state.countHeroes + 1,
      };
    case DWNCOUNT:
      return {
        ...state,
        countHeroes: state.countHeroes - 1,
      };
    case UPGH:
      return {
        ...state,
        goodHeroes: state.goodHeroes + 1,
      };
    case DWNGH:
      return {
        ...state,
        goodHeroes: state.goodHeroes - 1,
      };
    case UPBH:
      return {
        ...state,
        badHeroes: state.badHeroes + 1,
      };
    case DWNBH:
      return {
        ...state,
        badHeroes: state.badHeroes - 1,
      };
    default:
      return state;
  } 
}

