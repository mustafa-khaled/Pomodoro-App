import { useEffect } from "react";
import { useAppState } from "../context/StateContext";
import { getTime } from "../utils/helpers";

import styles from "./Timer.module.css";

function Timer() {
  const {
    progress,
    time,
    setTime,
    isTimeActive,
    setIsTimeActive,
    resetTime,
    setProgress,
    initTime,
  } = useAppState();

  useEffect(() => {
    if (isTimeActive && time > 0) {
      const interval = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [time, isTimeActive, setTime]);

  useEffect(() => {
    setProgress(time / (initTime / 100));
  }, [time, initTime, setProgress]);

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
