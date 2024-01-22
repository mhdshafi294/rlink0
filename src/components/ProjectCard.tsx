import Image from "next/image";
import { forwardRef } from "react";

import StarsCard from "./StarsCard";

interface ProjectCardProps {
  label: string;
  description: string;
  icon?: string;
  className?: string | undefined;
}

export const ProjectCard = forwardRef<HTMLDivElement, ProjectCardProps>(
  ({ className, label, description, icon }, ref) => (
    <div
      ref={ref}
      className={`hyper_card rounded-xl bg-white/5 relative h-80 w-full ${className}`}
    >
      <div className="flex flex-col items-start justify-center gap-6  rounded-lg bg-[#010c13] inset-[2px] p-2 absolute hyper_card_content ">
        <StarsCard />
        <h3 className=" text-2xl  self-end mb-5 mt-5 mr-5 text-slate-100/90">
          {label}
        </h3>
        {icon && (
          <div className="  flex-shrink-0 self-center">
            <Image
              className=""
              src={icon}
              alt={`${label} icon`}
              width={99}
              height={99}
            />
          </div>
        )}

        <p className="text-slate-300/70 flex-shrink  text-sm leading-relaxed tracking-widest px-5">
          {description}
        </p>
      </div>
    </div>
  )
);
ProjectCard.displayName = "ProjectCard";

export default ProjectCard;
