"use client";
import Image from "next/image";
import Link from "next/link";
import { CiUser } from "react-icons/ci";
import { FiPlus } from "react-icons/fi";
import { FaAngleDown } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import { signOut, useSession } from "next-auth/react";
import Button from "./Form/Button";

type accountMenuType = {
  title: String;
  href: string;
};

const accountMenuItem = [
  { title: "اطلاعات فردی", href: "/account/userinfo" },
  { title: "خودرو های من", href: "/account/mycar" },
  { title: "لیست مورد علاقه", href: "/account/favorite" },
  { title: "لیست نظرات", href: "/account/comments" },
  { title: "ثبت نام", href: "/register" },
  { title: "ورود", href: "/login" },
];

const Header = () => {
  const { data: session } = useSession();

  const [accountMenu, setAccountMenu] = useState<accountMenuType[]>([]);
  const menuItemHandler = () => {
    if (session) {
      let menus = accountMenuItem.filter(
        (menu) => menu.href !== "/register" && menu.href !== "/login"
      );
      setAccountMenu(menus);
    } else {
      let menus = accountMenuItem.filter((menu) => menu.title !== "/register");
      setAccountMenu(menus);
    }
  };

  useEffect(() => {
    menuItemHandler();
  }, [session]);

  const router = useRouter();
  const [searchQuery, setsearchQuery] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const [showBuy, setShowBuy] = useState(false);
  const [showAccount, setShowAccount] = useState(false);

  const searchHandler = () => {
    if (searchQuery.trim()) {
      router.push(`/car?q=${searchQuery}`);
    }
  };

  const UserInfos = useMemo(
    () =>
      session ? (
        <Link
          replace={true}
          href="/account"
          className="flex items-center hover:text-orange duration-300"
        >
          <CiUser className="text-3xl" />
          <p className="text-sm mr-1 sm:block hidden">{session?.user?.email}</p>
        </Link>
      ) : (
        <Link
          replace={true}
          href="/login"
          className="flex items-center hover:text-orange duration-300"
        >
          <p className="sm:flex hidden">ورود به حساب کاربری</p>
          <CiUser className="text-xl" />
        </Link>
      ),
    [session]
  );

  const logoutHanlder = () => {
    signOut();
    router.push("/");
  };

  return (
    <header className="xl:container mx-auto md:px-8 px-2 sticky top-0 bg-black-200 z-10">
      <div className="flex justify-between items-center h-[4rem]">
        <div className="lg:flex hidden items-center gap-x-6">
          <Link href="/" replace={true}>
            <Image
              src="/img/logo/logo-light.svg"
              alt="logo"
              width={120}
              height={10}
            />
          </Link>

          <Link replace={true} href="/car" className="flex items-center">
            <p className="hover:text-orange duration-300">خرید خودرو</p>
          </Link>

          <div className="relaitve group">
            <button className="flex items-center">
              <FaAngleDown className="font-bold ml-1 text-sm" />
              <p className="hover:text-orange duration-300">اکانت</p>
            </button>
            <ul className="hidden group-hover:block absolute bg-black-500 px-4 py-2 rounded-xl">
              {accountMenu.map((menu, index) => (
                <li className="my-2 block" key={index}>
                  <Link
                    replace={true}
                    href={menu.href}
                    className="hover:text-orange duration-300"
                  >
                    {menu.title}
                  </Link>
                </li>
              ))}
              <li className={`my-2 ${session ? `block` : `hidden`}`}>
                <button
                  className="text-gray-200 hover:text-white duration-300"
                  onClick={() => logoutHanlder()}
                >
                  خروج
                </button>
              </li>
            </ul>
          </div>
          <Link
            replace={true}
            href="/about"
            className="hover:text-orange duration-300"
          >
            درباره ما
          </Link>
          <Link
            replace={true}
            href="/help-center"
            className="hover:text-orange duration-300 lg:hidden xl:flex flex"
          >
            ارتباط با ما
          </Link>
          <Link
            replace={true}
            href="/panel"
            className="hover:text-orange duration-300"
          >
            پنل
          </Link>
        </div>

        {showMenu && (
          <div className="lg:hidden block min-w-[10rem] min-h-screen pt-2 absolute bg-black-100 border-r border-borderColor z-10 items-center gap-x-8 right-0 top-0 ">
            <div className="py-2 border-b border-borderColor text-center hover:text-orange duration-300">
              <Link
                replace={true}
                href="car"
                onClick={() => setShowBuy(!showBuy)}
              >
                خرید خودرو
              </Link>
            </div>

            <div className="relaitve group py-2 border-b border-borderColor">
              <button
                className="flex items-center justify-center m-auto"
                onClick={() => setShowAccount(!showAccount)}
              >
                <FaAngleDown className="font-bold ml-1 text-sm" />
                <p className="">اکانت</p>
              </button>
              <ul className="block">
                {showAccount && (
                  <>
                    {accountMenu.map((menu, index) => (
                      <li className=" text-center py-2 border-b border-borderColor">
                        <Link replace={true} href={menu.href} key={index}>
                          {menu.title}
                        </Link>
                      </li>
                    ))}
                  </>
                )}
              </ul>
            </div>
            <Link
              replace={true}
              href="/about"
              className="text-center py-2 border-b border-borderColor block hover:text-orange duration-300"
            >
              درباره ما
            </Link>
            <Link
              replace={true}
              href="/panel"
              className="text-center py-2 border-b border-borderColor block hover:text-orange duration-300"
            >
              پنل
            </Link>
            <Link
              replace={true}
              href="/addcar"
              className="text-center py-2 border-b border-borderColor block hover:text-orange duration-300"
            >
              ثبت خودرو
            </Link>
          </div>
        )}

        <div className="flex">
          <button
            className="lg:hidden block ml-5 text-2xl"
            onClick={() => setShowMenu(!showMenu)}
          >
            <GiHamburgerMenu />
          </button>

          <div className="relative">
            <input
              type="text"
              className="bg-black-100 border border-borderColor rounded-lg py-1 md:w-auto w-[10rem]"
              onChange={(e) => setsearchQuery(e.target.value)}
            />
            <button
              className="absolute top-2 left-2 border-r pr-1"
              onClick={searchHandler}
            >
              <FaSearch className="text-orange text-xl" />
            </button>
          </div>
        </div>

        <div className="flex gap-x-4">
          <div className="flex items-center">{UserInfos}</div>
          <Button
            href="addcar"
            className="sm:py-2 py-1 sm:px-4 px-2 sm:text-base test-sm"
          >
            <FiPlus className="sm:block hidden" />
            <p className="sm:mr-2 font-semibold">ثبت خودرو</p>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
