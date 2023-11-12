import Link from "next/link";

const Nav = () => {
  return (
    <div className="fixed top-0  flex justify-between items-center w-full z-10 font-titling-gothic text-silver-grey text-sm">
      <Link href="/" className="">
        <img src="/logo.png" alt="" width={200} className="p-10" />
      </Link>

      <div className="flex justify-between px-20 gap-5 ">
        <Link
          href="/about"
          className="pr-2 bg-white hover:text-accent-blue hover:scale-110 ease-in-out duration-300"
        >
          HOME
        </Link>
        <Link
          href="/about"
          className="pr-2 bg-white hover:text-accent-blue hover:scale-110 ease-in-out duration-300"
        >
          ABOUT
        </Link>
        <Link
          href="/services"
          className="pr-2 bg-white hover:text-accent-blue hover:scale-110 ease-in-out duration-300"
        >
          SERVICES
        </Link>
        <Link
          href="/portfolio"
          className="pr-2 bg-white hover:text-accent-blue hover:scale-110 ease-in-out duration-300"
        >
          PORTFOLIO
        </Link>
        <Link
          href="/contact"
          className=" bg-white hover:text-accent-blue hover:scale-110 ease-in-out duration-300"
        >
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default Nav;
