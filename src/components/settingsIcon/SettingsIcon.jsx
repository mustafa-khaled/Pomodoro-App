import { useState } from "react";
import Modal from "../modal/Modal";
import styles from "./SettingsIcon.module.css";
import settingsPhoto from "/public/settings-svgrepo-com.svg";

function SettingsIcon() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const onCloseModal = () => {
    setIsOpenModal(false);
  };

  const onOpenModal = () => {
    setIsOpenModal(true);
  };

  return (
    <>
      <div className={styles["settings-icon"]}>
        <img src={settingsPhoto} alt="Settings Icon" onClick={onOpenModal} />
      </div>
      {isOpenModal && <Modal onCloseModal={onCloseModal} />}
    </>
  );
}

export default SettingsIcon;
