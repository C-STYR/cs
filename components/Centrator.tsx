import { centratorOuter, centratorInner } from "./styles.css";
export default function Centrator({ children }) {
  return (
    <div className={centratorOuter}>
      <div className={centratorInner}>{children}</div>
    </div>
  );
}
