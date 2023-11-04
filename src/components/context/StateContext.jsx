import { createContext, useContext, useEffect, useState } from "react";

const StateContext = createContext();

function StateProvider({ children }) {
  const [workTime, setWorkTime] = useState(25 * 60);
  const [shortBreakTime, setShortBreakTime] = useState(5 * 60);
  const [longBreakTime, setLongBreakTime] = useState(30 * 60);

  const [initTime, setInitTime] = useState(0);

  const [activeTag, setActiveTag] = useState("Pomodoro");
  const [progress, setProgress] = useState(50);
  const [time, setTime] = useState(10);
  const [isTimeActive, setIsTimeActive] = useState(false);
  const [activeColor, setActiveColor] = useState(
    window.localStorage.getItem("color") || "#f87070"
  );

  useEffect(() => {
    switch (activeTag) {
      case "Pomodoro":
        setTime(workTime);
        setInitTime(workTime);
        break;

      case "Short Break":
        setTime(shortBreakTime);
        setInitTime(shortBreakTime);
        break;

      case "Long Break":
        setTime(longBreakTime);
        setInitTime(longBreakTime);
        break;

      default:
        break;
    }
  }, [activeTag, workTime, shortBreakTime, longBreakTime]);

  const resetTime = () => {
    setTime(initTime);
    setIsTimeActive(false);
  };

  return (
    <StateContext.Provider
      value={{
        activeTag,
        setActiveTag,
        progress,
        setProgress,
        time,
        setTime,
        isTimeActive,
        setIsTimeActive,
        resetTime,
        initTime,
        workTime,
        setWorkTime,
        shortBreakTime,
        setShortBreakTime,
        longBreakTime,
        setLongBreakTime,
        activeColor,
        setActiveColor,
      }}>
      {children}
    </StateContext.Provider>
  );
}

function useAppState() {
  const context = useContext(StateContext);
  if (context === "undefined") {
    throw new Error("Context Was Used OutSide Dark Mode Provider");
  }
  return context;
}

export { useAppState, StateProvider };
