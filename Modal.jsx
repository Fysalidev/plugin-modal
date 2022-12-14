import "./styles.css";
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

/**
 * Modal
 * @param { object } props
 * @param {boolean} isShowing from usModal
 * @param {function} hide from useModal
 * @param {string} title
 * @returns {JSX.Element} Modal
 */

const Modal = ({ isShowing, hide, title }) =>
  isShowing
    ? ReactDOM.createPortal(
        <>
          <div className="modal-overlay">
            <div className="modal-wrapper">
              <div className="modal">
                <div className="modal-header">
                  <h3>{title}</h3>
                  <button
                    type="button"
                    className="modal-close-button"
                    onClick={hide}
                  >
                    <span>&times;</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>,
        document.body
      )
    : null;

export default Modal;

Modal.propTypes = {
  isShowing: PropTypes.bool.isRequired,
  hide: PropTypes.func.isRequired,
  title: PropTypes.string,
};

