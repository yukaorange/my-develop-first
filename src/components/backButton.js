import { useContext, useState } from "react";
import styles from "@/scss/backButton.module.scss";
import { useRouter } from "next/router";
import { NightModeContext } from "@/components/nightModeContext";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function BackButton() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };
  const { nightMode } = useContext(NightModeContext);

  return (
    <button
      className={nightMode ? `${styles.button} ${styles.night}` : styles.button}
      onClick={handleClick}
    >
      back
    </button>
  );
}
