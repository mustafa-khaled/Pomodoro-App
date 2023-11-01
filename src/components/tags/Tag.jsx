import styles from "./Tags.module.css";

function Tag({ tag, setActiveTag, activeTag }) {
  return (
    <div
      className={` ${activeTag === tag.id ? styles.active : ""} ${styles.tag}`}
      onClick={() => setActiveTag(tag.id)}>
      {tag?.title}
    </div>
  );
}

export default Tag;
