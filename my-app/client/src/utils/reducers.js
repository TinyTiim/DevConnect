import { ADD_TECH, START_TECH, STOP_TECH } from './actions';
import createId from './createId';

// Notice we moved the initial state object from our CarComponent to the reducer itself
const initalState = {
  techs: [
    {
      id: 1,
      make: 'Linux',
      model: 'With this Linux Commands Line Mousepad, reading the functions on the mat repetively, constantly training your Linux skills and programming to reach a higher level imperceptibly.',
      year: '2008',
      isRunning: false,
    },
    {
      id: 2,
      make: 'Cozoo',
      model: 'cozoo Headphone Stand with USB Charger Under Desk Headset Holder Mount with 3 Port USB Charging Station and iWatch Stand Smart Watch Charging Dock Dual Earphone Hanger Hook,UL Tested',
      year: '2021',
      isRunning: false,
    },
  ],
};

// Here we pass a default value of initalState if none is provided
export default function reducer(state = initalState, action) {
  switch (action.type) {
    case ADD_TECH: {
      const newTechId = createId(state.techs);
      const newTech = { ...action.payload, id: newTechId };

      return {
        ...state,
        techs: [...state.techs, newTech],
      };
    }
    case START_TECH: {
      const techIndex = state.techs.findIndex((tech) => tech.id === action.payload);
      const updatedTech = { ...state.techs[techIndex], isRunning: true };

      const techsCopy = [...state.techs];
      techsCopy[techIndex] = updatedTech;

      return {
        ...state,
        techs: techsCopy,
      };
    }
    case STOP_TECH: {
      const techIndex = state.techs.findIndex((tech) => tech.id === action.payload);
      const updatedTech = { ...state.techs[techIndex], isRunning: false };

      const techsCopy = [...state.techs];
      techsCopy[techIndex] = updatedTech;

      return {
        ...state,
        techs: techsCopy,
      };
    }
    default: {
      return state;
    }
  }
}
