import React, { useState } from "react";
import "./Modal.css";

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Open
      </button>
      {modal && (
        <div className="overlay">
          <div className="modal">
            <div className="modal-content">
              <h2>Hello Modale</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati, harum recusandae. Voluptates nostrum sequi sapiente
                dolor, voluptate adipisci non aspernatur quas dolorem dicta
                dolorum laboriosam nihil voluptatibus sint incidunt repudiandae
                tempore beatae facere necessitatibus explicabo veritatis laborum
                nobis quidem delectus. Animi voluptatem odit quas sequi vero
                minima veritatis perspiciatis aut!
              </p>
              <button onClick={toggleModal} className="close-modal">
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
