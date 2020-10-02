import React from "react";

const Modal = ({ open, handleModalClose, data }) => {
  return (
    <div className={`modal ${open ? "open" : ""}`}>
      <div className="modal-inner">
        <div className="close-button" onClick={handleModalClose} />
        <div className="content">
          <h3>{data.name}</h3>

          {data.sprites &&
            Object.values(data.sprites).map(
              (v) => v && <img src={v} alt="Pokemon Sprite" />
            )}
          <h4>Stats</h4>
          {data.stats &&
            data.stats.map((v) => (
              <ul className="stats" key={v.base_stat}>
                <li>{v.base_stat}</li>
                <li>{v.effort}</li>
              </ul>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
