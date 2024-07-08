import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { Mail } from "lucide-react";

export default function SoftwareStack() {
  const iconClassNames = "text-zinc-200 min-w-12 min-h-12";
  return (
    <div className="absolute bottom-8 z-20 flex w-full flex-row justify-center gap-4 px-16">
      <Link href="https://github.com/charlietlamb" className="">
        <FaGithub className="size-10" />
      </Link>
      <a href="mailto:charlie@charlielamb.com" className="cursor-pointer">
        <Mail className="size-10" />
      </a>
    </div>
  );
}
