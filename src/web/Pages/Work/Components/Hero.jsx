import workhero from "../../../../assets/bannar.jpg";
import styles from "./Hero.module.css";
import { FaPenRuler } from "react-icons/fa6";
export default function Hero() {
  return (
    <div className={styles.herodiv}>
      <div className={styles.mainhero}>
        <div className={styles.divtop}>
          <h1 className={styles.divtoph1}>Hello This is Hasan Rafi Zidan</h1>
          <h1 className={styles.divtoph2}>Hello This is Hasan</h1>
        </div>
        <div className="w-[100%] h-[100%] ">
          <img className="w-[100%] h-[100%] rounded-xl" src={workhero} />
        </div>
        <div className={styles.divbtm}>
          <h1 className={styles.divbtmh1}>Hello This is Hasan</h1>
          <h1 className={styles.divbtmh2}>Hello This is Hasan Rafi Zidan</h1>
        </div>
        <div className={styles.icon}>
          <div className={styles.mainicon}>
            <FaPenRuler className="text-[#fff]"/>
          </div>
        </div>
      </div>
    </div>
  );
}
