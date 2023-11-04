import { useAppState } from "../context/StateContext";
import styles from "./Modal.module.css";
import closePhoto from "/public/close-x-svgrepo-com.svg";

function Modal({ onCloseModal }) {
  const {
    workTime,
    setWorkTime,
    shortBreakTime,
    setShortBreakTime,
    longBreakTime,
    setLongBreakTime,
  } = useAppState();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Get the updated values from the form inputs
    const newWorkTime = parseFloat(e.target.work.value) * 60;
    const newShortBreakTime = parseFloat(e.target.short.value) * 60;
    const newLongBreakTime = parseFloat(e.target.long.value) * 60;

    // Update the context state directly
    setWorkTime(newWorkTime);
    setShortBreakTime(newShortBreakTime);
    setLongBreakTime(newLongBreakTime);

    onCloseModal();
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
            <input type="number" id="work" defaultValue={workTime / 60} />
          </div>
          <div>
            <label htmlFor="short">Short Break:</label>
            <input
              type="number"
              id="short"
              defaultValue={shortBreakTime / 60}
            />
          </div>
          <div>
            <label htmlFor="long">Long Break:</label>
            <input type="number" id="long" defaultValue={longBreakTime / 60} />
          </div>
          <button className={styles["submit-btn"]} type="submit">
            Apply
          </button>
        </form>
      </div>
      <div className={styles["over-lay"]} onClick={onCloseModal}></div>
    </>
  );
}

export default Modal;
