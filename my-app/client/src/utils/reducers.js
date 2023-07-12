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
      make: 'Tesla',
      model: 'Y',
      year: '2021',
      isRunning: false,
    },
  ],
};

// Here we pass a default value of initalState if none is provided
export default function reducer(state = initalState, action) {
  switch (action.type) {
    case ADD_TECH: {
      const newCarId = createId(state.techs);
      const newCar = { ...action.payload, id: newCarId };

      return {
        ...state,
        techs: [...state.techs, newCar],
      };
    }
    case START_TECH: {
      const carIndex = state.cars.findIndex((car) => car.id === action.payload);
      const updatedCar = { ...state.cars[carIndex], isRunning: true };

      const carsCopy = [...state.cars];
      carsCopy[carIndex] = updatedCar;

      return {
        ...state,
        cars: carsCopy,
      };
    }
    case STOP_TECH: {
      const carIndex = state.cars.findIndex((car) => car.id === action.payload);
      const updatedCar = { ...state.cars[carIndex], isRunning: false };

      const carsCopy = [...state.cars];
      carsCopy[carIndex] = updatedCar;

      return {
        ...state,
        cars: carsCopy,
      };
    }
    default: {
      return state;
    }
  }
}
