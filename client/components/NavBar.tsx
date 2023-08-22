import Link from "next/link";
import Image from "next/image";
import profileImage from "../assets/profile.jpg";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav>
        <Link href="/">
          <Image
            src={profileImage}
            alt="Car Hub Logo"
            width={118}
            height={118}
            className="object-contain"
          />
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
