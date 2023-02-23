import { blogWrapper } from "./blog.css";

export interface BlogWrapperProps {
  children: React.ReactNode;
}

export default function BlogWrapper({ children }: BlogWrapperProps) {
  return <div className={blogWrapper}>{children}</div>;
}
