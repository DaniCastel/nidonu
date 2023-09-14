import clsx from "clsx";
import styles from "./pie-timer.module.css";
import { useEffect, useState } from "react";

export default function PieTimer({ currentS }: { currentS: number }) {
  return (
    <div
      style={{
        background: `conic-gradient(
          #fed7aa ${(currentS * 100) / (60 * 60)}%,
          rgb(255, 255, 255, 0.5) 0
        )`,
      }}
      className={styles.chart}
    ></div>
  );
}
