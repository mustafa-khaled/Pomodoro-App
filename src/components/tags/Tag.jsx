import { useAppState } from "../context/StateContext";
import styles from "./Tags.module.css";

function Tag({ tag }) {
  const { activeTag, setActiveTag, setIsTimeActive } = useAppState();

  return (
    <div
      className={` ${activeTag === tag.title ? styles.active : ""} ${
        styles.tag
      }`}
      onClick={() => {
        setActiveTag(tag.title);
        setIsTimeActive(false);
      }}>
      {tag?.title}
    </div>
  );
}

export default Tag;
