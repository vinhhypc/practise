import { useContext } from "react";
import { HighlightContext } from "./HighlightContext";

export default function Row({ title }) {
  const isHighlighted = useContext(HighlightContext);
  return (
    <div className={["Row", isHighlighted ? "RowHighlighted" : ""].join(" ")}>
      {title}
    </div>
  );
}
