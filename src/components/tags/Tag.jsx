import { useAppState } from "../context/StateContext";
import styles from "./Tags.module.css";

function Tag({ tag }) {
  const { activeTag, setActiveTag } = useAppState();

  return (
    <div
      className={` ${activeTag === tag.title ? styles.active : ""} ${
        styles.tag
      }`}
      onClick={() => setActiveTag(tag.title)}>
      {tag?.title}
    </div>
  );
}

export default Tag;
