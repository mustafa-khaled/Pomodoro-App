import { useEffect } from "react";
import { useAppState } from "../context/StateContext";

import styles from "./Timer.module.css";

function Timer() {
  const { progress, time, setTime, isTimeActive, setIsTimeActive, resetTime } =
    useAppState();

  useEffect(() => {
    if (isTimeActive && time > 0) {
      const interval = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [time, isTimeActive]);

  const getTime = (time) => {
    const min = Math.floor(time / 60);
    const sec = time % 60;

    return `${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}`;
  };

  return (
    <div className={styles.timer}>
      <div
        className={styles["circle-progress"]}
        style={{
          background: `conic-gradient(var(--secondary) ${progress}%, transparent ${progress}%)`,
        }}>
        <div>
          <h3>{getTime(time)}</h3>
          <button onClick={() => setIsTimeActive((p) => !p)}>
            {isTimeActive ? "Pause" : "Start"}
          </button>
          {time === 0 && <button onClick={() => resetTime()}>Reset</button>}
        </div>
      </div>
    </div>
  );
}

export default Timer;
