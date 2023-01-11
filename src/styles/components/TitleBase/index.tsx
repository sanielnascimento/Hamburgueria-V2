interface iTitleBaseProps {
  children: string; 
  tag: "h1" | "h2" | "h3";
  className: string; 
  color: string;
  heading: "1" | "2" | "3";
  lineHeight: string;
}

export const TitleBase = ({ children, tag, className }: iTitleBaseProps) => {
  return (
    <>
      {tag === "h1" && <h1 className={className}>{children}</h1>}
      {tag === "h2" && <h2 className={className}>{children}</h2>}
      {tag === "h3" && <h3 className={className}>{children}</h3>}
    </>
  );
};
