import { Link, useNavigate } from "react-router-dom";
import { Disclosure, Menu } from "@headlessui/react";
import {
  UilBars,
  UilSignout,
  UilSignOutAlt,
  UilUserCircle,
} from "@iconscout/react-unicons";
import { useUserContext } from "../../contexts/userContext";
import { logout } from "../../firebase/authentication/authentication";
import { LoginPageUrl } from "../../constants/urls";

const navigation = [
  { name: "Películas", href: "/", current: true },
  { name: "Buscador películas", href: "/search", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function Navbar() {
  const navigate = useNavigate();
  const { user, isLoadingUser } = useUserContext();

  const handleLogout = async () => {
    logout();
    navigate(LoginPageUrl);
  };

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main mensu</span>
                  {open ? (
                    <UilSignOutAlt
                      className="block h-6 w-6"
                      aria-hidden="true"
                    />
                  ) : (
                    <UilBars className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current
                            ? "text-gray-300 hover:bg-gray-700 hover:text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="cursor-default flex rounded-full bg-gray-800 text-sm mr-2">
                      <span className="sr-only">Open user menu</span>
                      <UilUserCircle className="fill-blue-500" />
                    </Menu.Button>
                  </div>
                </Menu>

                {/* User Name */}
                {!isLoadingUser && !!user ? (
                  <span className="text-white mr-5">{user.name}</span>
                ) : null}

                {/* Logout */}
                <div>
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white"
                  >
                    <span className="sr-only">Logout</span>
                    <UilSignout />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
