import React, { useState, useEffect } from "react";

export default function UserModal() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // DOM-related code here
      // For example, you can use document.getElementById(), document.querySelector(), etc.
    }
  }, []);

  return (
    <div
      className="modal fade"
      id="userModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <h5 className="modal-title" id="exampleModalLabel">
            Update User
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div className="modal-body">
          <div className="mb-3"></div>
        </div>
      </div>
      UserModal
    </div>
  );
}
