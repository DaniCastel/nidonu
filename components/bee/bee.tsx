import styles from "./bee.module.css";
import bg from "../../assets/images/sleeping.jpg";

export default function Bee() {
  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.7)), url(${bg.src})`,
        backgroundRepeat: "repeat",
      }}
    ></div>
  );
}
