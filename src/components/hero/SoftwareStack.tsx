import { SiNextdotjs } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { RiSupabaseFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";

export default function SoftwareStack() {
  const iconClassNames = "text-zinc-200 min-w-12 min-h-12";
  return (
    <div className="absolute bottom-8 flex w-full justify-center gap-x-4 px-16">
      <SiNextdotjs className={iconClassNames} />
      <FaReact className={iconClassNames} />
      <TbBrandFramerMotion className={iconClassNames} />
      <SiTailwindcss className={iconClassNames} />
      <RiSupabaseFill className={iconClassNames} />
      <SiTypescript className={iconClassNames} />
    </div>
  );
}
