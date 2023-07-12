import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { START_TECH, STOP_TECH, ADD_TECH } from '../../utils/actions';

export default function MarketplaceComponent() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const [newTechItem, setNewTechItem] = useState('');
  const [newTechDescription, setNewTechDescription] = useState('');
  const [newTechYearModel, setNewTechYearModel] = useState('');

  return (
    <>
      <h1>Tech Marketplace</h1>
      <section className="tech-input">
        <div>
          <div className="add-tech">
            Add Tech Item:
            <input
              defaultValue={newTechItem}
              onChange={(event) => setNewTechItem(event.target.value)}
              placeholder="Tech Item (include brand)..."
              type="text"
            />
            <input
              defaultValue={newTechDescription}
              onChange={(event) => setNewTechDescription(event.target.value)}
              placeholder="Tech Description..."
              type="text"
            />
            <input
              defaultValue={newTechYearModel}
              onChange={(event) => setNewTechYearModel(event.target.value)}
              placeholder="New Tech Year Model..."
              type="text"
            />
            <button
              onClick={() =>
                dispatch({
                  type: ADD_TECH,
                  payload: {
                    make: newTechItem,
                    model: newTechDescription,
                    year: newTechYearModel,
                  },
                })
              }
            >
              Add Tech
            </button>
          </div>
        </div>
      </section>
      <section className="tech-list">
        {console.log(state)}
        {state.techs.map((tech) => (
          <div key={tech.id} id={tech.id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {tech.model} <br />
              <span style={{ fontSize: '1rem' }}>
                This tech item was manufactured in {tech.year}
              </span>
            </h4>
            <div className="card-body bg-light p-2">
              <p>{tech.make}</p>
              <code>
                Tech ID:
                {tech.id}
              </code>
            </div>
            <span style={{ fontSize: '1rem' }}>
              {tech.isRunning ? 'tech is available 🏎️' : 'tech is sold 💤'}
              <button
                id="turnOn"
                onClick={
                  !tech.isRunning
                    ? () => dispatch({ type: START_TECH, payload: tech.id })
                    : () => dispatch({ type: STOP_TECH, payload: tech.id })
                }
              >
                Toggle Engine
              </button>
            </span>
          </div>
        ))}
      </section>
    </>
  );
}
