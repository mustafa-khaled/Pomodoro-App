import { useAppState } from "../context/StateContext";
import styles from "./Tags.module.css";

function Tag({ tag }) {
  const { activeTag, setActiveTag, setIsTimeActive, activeColor } =
    useAppState();

  return (
    <div
      style={{
        backgroundColor: tag.title === activeTag ? activeColor : "",
        color: tag.title === activeTag ? "#161932" : "#d7e0ff",
      }}
      className={`${styles.tag}`}
      onClick={() => {
        setActiveTag(tag.title);
        setIsTimeActive(false);
      }}>
      {tag?.title}
    </div>
  );
}

export default Tag;
