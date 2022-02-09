import React from "react";
import "./Modal.css";

function Modal({ closeModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="title">
          <h3>Theme Color</h3>
          <h3 style={{ color: "#6495ed" }}>Change Theme</h3>
        </div>
        <div className="body">
          <div className="FirstP mb-2 mt-4">
            <p class="">Font Color</p>
            <p className="Color1">
              #444444
              <div className="mt-1" id="first"></div>
            </p>
          </div>
          <div className="SecondP mb-2">
            <p class="mb-2">BackGround Color</p>
            <p className="Color2">
              #FFFFFF
              <div className="mt-1" id="second"></div>
            </p>
          </div>
          <div className="ThirdP mb-2">
            <p class="mb-2">Button Color</p>
            <p className="Color3">
              #2072EF
              <div className="mt-1" id="third"></div>
            </p>
          </div>
          <div className="FourthP mb-2">
            <p class="mb-2">Button Border Color</p>
            <p className="Color4">
              #2072EF
              <div className="mt-1" id="fourth"></div>
            </p>
          </div>
          <div className="FifthP mb-2">
            <p class="mb-2">Button Mouseover Color</p>
            <p className="Color5">
              #0053D1
              <div className="mt-1" id="fifth"></div>
            </p>
          </div>
        </div>
        <div className="footer">
          <button id="cancelBtn" onClick={() => closeModal(false)}>
            Cancel
          </button>
          <button>Save</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
