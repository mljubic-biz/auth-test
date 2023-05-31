import "./style.scss";
import React, { FunctionComponent, ReactNode } from "react";
import bubbles0 from "@/assets/images/Bubbles-0.svg";
import bubbles1 from "@/assets/images/Bubbles-1.svg";
import bubbles2 from "@/assets/images/Bubbles-2.svg";
import bubbles3 from "@/assets/images/Bubbles-3.svg";
import Image from "next/image";
import clsx from "clsx";

interface IBubblesBackground {
  className?: string;
  index?: number;
  children?: ReactNode;
}

const BubblesBackground: FunctionComponent<IBubblesBackground> = ({
  children,
  className,
  index = 0,
}) => {
  let bubblesIcon;

  switch (index) {
    case 1:
      bubblesIcon = bubbles1;
      break;
    case 2:
      bubblesIcon = bubbles2;
      break;
    case 3:
      bubblesIcon = bubbles3;
      break;
    default:
      bubblesIcon = bubbles0;
  }

  return (
    <div className={clsx("bubbles-background", className)}>
      <Image
        src={bubblesIcon}
        alt=""
        tabIndex={-1}
        className="bubbles-background__image"
      />
      {children}
    </div>
  );
};

export default BubblesBackground;
