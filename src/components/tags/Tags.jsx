import { useState } from "react";
import { tagsData } from "../data/data";
import Tag from "./Tag";
import styles from "./Tags.module.css";

function Tags() {
  const [activeTag, setActiveTag] = useState(1);

  return (
    <div className={styles.tags}>
      {tagsData?.map((t) => {
        return (
          <Tag
            key={t.id}
            tag={t}
            activeTag={activeTag}
            setActiveTag={setActiveTag}
          />
        );
      })}
    </div>
  );
}

export default Tags;
