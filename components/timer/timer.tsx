import styles from "./timer.module.css";
import bg from "../../assets/images/sleeping.jpg";
import { Button } from "@nextui-org/button";
import { useEffect, useState } from "react";
import PieTimer from "../pie-timer/pie-timer";

export default function Timer() {
  const [currentS, setCurrentS] = useState(25 * 60);
  const [maxS, setMaxS] = useState(25 * 60);

  const [running, setRunning] = useState(false);

  const start = () => {
    setRunning(true);
  };

  const pause = () => {
    setRunning(false);
  };

  const restart = () => {
    setCurrentS(maxS);
  };

  useEffect(() => {
    let interval: string | number | NodeJS.Timeout | undefined;
    if (running) {
      interval = setInterval(() => {
        setCurrentS((v) => (v > 0 ? v - 1 : 0));
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [running]); // also watch the running state

  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), url(${bg.src})`,
        backgroundRepeat: "repeat",
      }}
    >
      <div className="grid w-full justify-center gap-3">
        <PieTimer currentS={currentS} />
        <div className="grid grid-cols-3 gap-3">
          <div className="grid">
            <Button
              color="primary"
              variant={maxS === 15 * 60 ? "solid" : "bordered"}
              onClick={() => {
                setMaxS(15 * 60);
                setCurrentS(15 * 60);
              }}
            >
              15 mins
            </Button>
          </div>
          <div className="grid">
            <Button
              color="primary"
              variant={maxS === 30 * 60 ? "solid" : "bordered"}
              onClick={() => {
                setMaxS(30 * 60);
                setCurrentS(30 * 60);
              }}
            >
              30 mins
            </Button>
          </div>
          <div className="grid">
            <Button
              color={"primary"}
              variant={maxS === 60 * 60 ? "solid" : "bordered"}
              onClick={() => {
                setMaxS(60 * 60);
                setCurrentS(60 * 60);
              }}
            >
              1 hour
            </Button>
          </div>
        </div>
        <div>
          <Button
            color="primary"
            onClick={() => {
              if (running) {
                pause();
              } else {
                start();
              }
            }}
          >
            {running ? "Pause" : "Start"}
          </Button>
          <Button
            color="primary"
            onClick={() => {
              start();
              restart();
            }}
          >
            Restart
          </Button>
        </div>
      </div>
    </div>
  );
}
