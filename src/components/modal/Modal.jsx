import styles from "./Modal.module.css";
import closePhoto from "/public/close-x-svgrepo-com.svg";

function Modal({ onCloseModal }) {
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className={styles.modal}>
        <div className={styles["modal-head"]}>
          <h3>Settings</h3>
          <img src={closePhoto} alt="closePhoto" onClick={onCloseModal} />
        </div>

        <form onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="work">Work:</label>
            <input type="text" id="work" />
          </div>
          <div>
            <label htmlFor="short">Short Break:</label>
            <input type="text" id="short" />
          </div>
          <div>
            <label htmlFor="long">Long Break</label>
            <input type="text" id="long" />
          </div>
          <button className={styles["submit-btn"]}>Apply</button>
        </form>
      </div>
      <div className={styles["over-lay"]} onClick={onCloseModal}></div>
    </>
  );
}

export default Modal;
