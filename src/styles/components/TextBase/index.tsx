import { iTextBaseProps } from "./types";

export const TextBase = ({ tag, className, children } : iTextBaseProps) => {
    return (
      <>
        {tag === "p" && <p className={className}>{children}</p>}
        {tag === "span" && <span className={className}>{children}</span>}
        {tag === "label" && <label className={className}>{children}</label>}
      </>
    );
  };