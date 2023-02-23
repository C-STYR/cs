import { outer, inner } from "./styles.css";
export default function Centrator({ children }) {
  return (
    <div className={outer}>
      <div className={inner}>{children}</div>
    </div>
  );
}
