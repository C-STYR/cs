import { blogWrapper } from "./blog.css";
import Centrator from "../../components/Centrator";

export interface BlogWrapperProps {
  children: React.ReactNode;
}

export default function BlogWrapper({ children }: BlogWrapperProps) {
  return (
    <Centrator>
      <div className={blogWrapper}>{children}</div>
    </Centrator>
  );
}
