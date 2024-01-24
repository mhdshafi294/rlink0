import { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import Image from "next/image";

interface CommunityLinkProps {
  link: string;
  Icon: string | any;
  name?: string;
  className: string | undefined;
}

const CommunityLink: React.FC<CommunityLinkProps> = ({
  link,
  Icon,
  name,
  className,
}) => {
  // console.log(`${name} className: ${className}`);
  // console.log(typeof className);
  return (
    <div
      className={cn(
        "flex justify-center items-center mx-2 p-4 rounded-full border border-white hover:scale-110 duration-300 transition-all group",
        className
      )}
    >
      <a href={link} target="_blank" rel="">
        {typeof Icon === "string" ? (
          <Image
            className=""
            src={Icon}
            alt={`${name} icon`}
            width={24}
            height={24}
          />
        ) : (
          <Icon />
        )}
      </a>
    </div>
  );
};

export default CommunityLink;
