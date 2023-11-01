import { useState } from "react";
import styles from "./Timer.module.css";

function Timer() {
  const [progress, setProgress] = useState(50);

  return (
    <div className={styles.timer}>
      <div
        className={styles["circle-progress"]}
        style={{
          background: `conic-gradient(var(--secondary) ${progress}%, transparent ${progress}%)`,
        }}>
        <div>some thinsg</div>
      </div>
    </div>
  );
}

export default Timer;
