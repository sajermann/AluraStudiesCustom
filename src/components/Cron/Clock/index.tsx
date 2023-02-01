import styles from "./index.module.scss";

export function Clock({ time }: { time: number }) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minutesTen, minutesUnits] = String(minutes).padStart(2, '0')
  const [secondsTen, secondsUnits] = String(seconds).padStart(2, '0')

  return (
    <>

      <span className={styles.relogioNumero}>{minutesTen}</span>
      <span className={styles.relogioNumero}>{minutesUnits}</span>
      <span className={styles.relogioDivisao}>:</span>
      <span className={styles.relogioNumero}>{secondsTen}</span>
      <span className={styles.relogioNumero}>{secondsUnits}</span>
    </>
  );
}
