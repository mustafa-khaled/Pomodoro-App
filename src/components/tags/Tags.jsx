import { tagsData } from "../data/data";
import Tag from "./Tag";
import styles from "./Tags.module.css";

function Tags() {
  return (
    <div className={styles.tags}>
      {tagsData?.map((t) => {
        return <Tag key={t.id} tag={t} />;
      })}
    </div>
  );
}

export default Tags;
