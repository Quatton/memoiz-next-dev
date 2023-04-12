import Image from "next/image";
import Link from "next/link";

export const Brand: React.FC = () => {
  return (
      <Link href="/" className="flex items-center">
        <Image src="/assets/icon-dark-transparent.svg" alt="Memoiz" width={48} height={48} />
        <span className="text-white font-semibold text-2xl ml-2 font-montserrat">MEMOIZ</span>
      </Link>
  );
};