import React from "react";
import assetsObject from "../assets";
const ThumbNail = ({ obj }) => {
  return (
    <div
      className=""
      style={{
        width: "350px",
        border: "1px solid #CFCFCF",
        borderRadius: "2%",
        padding: "10px 20px",
        margin: "10px",
      }}
    >
      <div className="row">
        <p className="text-dark" style={{ textAlign: "left" }}>
          {obj.version} ({obj.date})
        </p>
      </div>

      <div className="row mt-1">
        <div className="d-flex">
          <button
            className="btn mt-2"
            style={{
              padding: "0px 30px 0px 30px",
              background: `${obj.btnColor}`,
              height: "28px",
            }}
          >
            {obj.btnName}
          </button>
          <p style={{ marginTop: "10px", marginLeft: "20px" }}>
            <img
              style={{
                border: "1px solid #CFCFCF",
                borderRadius: "50%",
                padding: "2px",
              }}
              width={20}
              height={20}
              src={assetsObject[obj.img]}
              alt=""
            />
            <span style={{ marginLeft: "5px" }}>{obj.fullName}</span>
          </p>
        </div>
      </div>

      <div className="row mt-4">
        <p style={{ color: "#CFCFCF" }}>{obj.description}</p>
      </div>

      <div className="row">
        <div className="col-sm-4">
          <button
            className="btn"
            style={{
              padding: "10px 30px 10px 30px",
              borderColor: "blue",
              color: "blue",
              borderRadius: "20px",
            }}
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThumbNail;
