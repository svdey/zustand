import React from "react";
import useCourceStore from "../store/CourceStore";

const CourceList = () => {
  const { cources, removeCource, toggleCourceStatus } = useCourceStore(
    (state) => ({
      cources: state.cources,
      removeCource: state.removeCource,
      toggleCourceStatus: state.toggleCourceStatus,
    })
  );

  return (
    <>
      <ul>
        {cources.map((cource, i) => (
          <React.Fragment key={i}>
            <li
              className="course-item"
              style={{ backgroundColor: cource.complited ? "green" : "snow" }}
            >
              <span className="cource-item-col-1">
                <input
                  type="checkbox"
                  checked={cource.complited}
                  onChange={(e) => toggleCourceStatus(cource.id)}
                />
              </span>
              <span style={{ color: !cource.complited ? "black" : "snow" }}>
                {cource.title}
              </span>
              <button
                onClick={() => removeCource(cource.id)}
                className="delete-btn"
              >
                Delete
              </button>
            </li>
          </React.Fragment>
        ))}
      </ul>
    </>
  );
};

export default CourceList;
