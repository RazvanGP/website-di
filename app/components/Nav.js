import Link from "next/link";

const Nav = () => {
  return (
    <div className="fixed top-0 flex justify-between items-center w-full z-10 font-titling-gothic text-silver-grey text-sm">
      <Link href="/">
        <img src="/logo.png" alt="" width={200} className="p-10" />
      </Link>

      <div className="flex justify-between px-20 gap-5 ">
        <Link
          href="/about"
          className="border-r-2 pr-5 hover:text-accent-blue hover:scale-110 ease-in-out duration-300"
        >
          ABOUT
        </Link>
        <Link
          href="/services"
          className="border-r-2 pr-5 hover:text-accent-blue hover:scale-110 ease-in-out duration-300"
        >
          SERVICES
        </Link>
        <Link
          href="/portfolio"
          className="border-r-2 pr-5 hover:text-accent-blue hover:scale-110 ease-in-out duration-300"
        >
          PORTFOLIO
        </Link>
        <Link
          href="/contact"
          className="hover:text-accent-blue hover:scale-110 ease-in-out duration-300"
        >
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default Nav;
