import * as React from "react";
import Link from "next/link";
import { sidebarLinks } from "../../utils/nav-menu";
import { useRouter } from "next/router";
import { ToggleProps } from "./types";

const Sidebar = (props: ToggleProps) => {
  const router = useRouter();
  return (
    <div
      id="menu"
      className={`sticky top-0 z-10 flex-col ${
        props.toggleState ? "" : "hidden"
      } h-screen px-4 py-4 bg-black-brand-09 shadow-inner w-full lg:w-60 xl:w-64 2xl:w-80 lg:px-6 xl:px-8 lg:py-6 lg:flex overflow-scroll border-r border-gray-brand-03`}
    >
      <div className="flex-1 py-4">
        <a href="/" className="hidden md:block">
          <span className="sr-only">Fueler Resources</span>
          <svg
            width="100"
            height="20"
            viewBox="0 0 54 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.27 8L0.3 0.7H1.31L2.96 7.12H3.27L4.61 1H5.86L7.37 7.12H7.68L9.15 0.7H10.13L8.34 8H6.66L5.23 2.3L3.94 8H2.27ZM13.3755 8.18C12.9089 8.18 12.5055 8.1 12.1655 7.94C11.8255 7.78 11.5489 7.57 11.3355 7.31C11.1222 7.04333 10.9622 6.74667 10.8555 6.42C10.7555 6.09333 10.7055 5.76 10.7055 5.42V5.24C10.7055 4.89333 10.7555 4.55667 10.8555 4.23C10.9622 3.90333 11.1222 3.61 11.3355 3.35C11.5489 3.08333 11.8189 2.87333 12.1455 2.72C12.4789 2.56 12.8689 2.48 13.3155 2.48C13.8955 2.48 14.3722 2.60667 14.7455 2.86C15.1255 3.10667 15.4055 3.42667 15.5855 3.82C15.7722 4.21333 15.8655 4.63333 15.8655 5.08V5.51H11.6255C11.6589 6.03667 11.8155 6.47333 12.0955 6.82C12.3755 7.16667 12.8022 7.34 13.3755 7.34C13.7955 7.34 14.1355 7.24667 14.3955 7.06C14.6622 6.87333 14.8222 6.65667 14.8755 6.41H15.7755C15.6622 6.96333 15.3922 7.39667 14.9655 7.71C14.5389 8.02333 14.0089 8.18 13.3755 8.18ZM13.3155 3.32C12.8355 3.32 12.4589 3.45667 12.1855 3.73C11.9122 3.99667 11.7389 4.35 11.6655 4.79H14.9255C14.8655 4.33667 14.7022 3.98 14.4355 3.72C14.1689 3.45333 13.7955 3.32 13.3155 3.32ZM20.0486 8.18C19.5753 8.18 19.1586 8.07 18.7986 7.85C18.4453 7.63 18.1753 7.31333 17.9886 6.9V8H17.2286V0.7H18.1886V3.58C18.3886 3.20667 18.6586 2.93 18.9986 2.75C19.3386 2.57 19.7153 2.48 20.1286 2.48C20.6419 2.48 21.0886 2.60333 21.4686 2.85C21.8486 3.09667 22.1453 3.42667 22.3586 3.84C22.5719 4.25333 22.6786 4.71333 22.6786 5.22V5.4C22.6786 5.9 22.5686 6.36333 22.3486 6.79C22.1286 7.21 21.8219 7.54667 21.4286 7.8C21.0353 8.05333 20.5753 8.18 20.0486 8.18ZM19.9386 7.34C20.2986 7.34 20.6119 7.25333 20.8786 7.08C21.1453 6.90667 21.3519 6.67 21.4986 6.37C21.6453 6.06333 21.7186 5.71 21.7186 5.31C21.7186 4.71 21.5553 4.23 21.2286 3.87C20.9019 3.50333 20.4719 3.32 19.9386 3.32C19.6186 3.32 19.3219 3.39333 19.0486 3.54C18.7753 3.68 18.5553 3.88667 18.3886 4.16C18.2286 4.42667 18.1486 4.75 18.1486 5.13V5.59C18.1486 5.95667 18.2319 6.27 18.3986 6.53C18.5653 6.79 18.7853 6.99 19.0586 7.13C19.3319 7.27 19.6253 7.34 19.9386 7.34ZM26.6331 8.18C26.0265 8.18 25.5098 8.08 25.0831 7.88C24.6565 7.68 24.3298 7.40333 24.1031 7.05C23.8765 6.69667 23.7631 6.29667 23.7631 5.85H24.7431C24.7431 6.07 24.7998 6.29 24.9131 6.51C25.0331 6.73 25.2298 6.91333 25.5031 7.06C25.7831 7.20667 26.1598 7.28 26.6331 7.28C27.0731 7.28 27.4331 7.21667 27.7131 7.09C27.9931 6.95667 28.1998 6.78667 28.3331 6.58C28.4665 6.36667 28.5331 6.13667 28.5331 5.89C28.5331 5.59 28.4031 5.34333 28.1431 5.15C27.8831 4.95 27.5031 4.82667 27.0031 4.78L26.1931 4.71C25.5465 4.65667 25.0298 4.45667 24.6431 4.11C24.2565 3.76333 24.0631 3.30667 24.0631 2.74C24.0631 2.29333 24.1698 1.90333 24.3831 1.57C24.6031 1.23667 24.9065 0.976666 25.2931 0.79C25.6798 0.596666 26.1298 0.499999 26.6431 0.499999C27.1498 0.499999 27.5965 0.593333 27.9831 0.779999C28.3698 0.966666 28.6698 1.23 28.8831 1.57C29.1031 1.90333 29.2131 2.30333 29.2131 2.77H28.2331C28.2331 2.53667 28.1765 2.31667 28.0631 2.11C27.9565 1.90333 27.7865 1.73333 27.5531 1.6C27.3198 1.46667 27.0165 1.4 26.6431 1.4C26.2831 1.4 25.9831 1.46333 25.7431 1.59C25.5098 1.71667 25.3331 1.88333 25.2131 2.09C25.0998 2.29 25.0431 2.50667 25.0431 2.74C25.0431 3.00667 25.1465 3.24333 25.3531 3.45C25.5598 3.65667 25.8665 3.77667 26.2731 3.81L27.0831 3.88C27.8298 3.94667 28.4198 4.15333 28.8531 4.5C29.2931 4.84 29.5131 5.30333 29.5131 5.89C29.5131 6.33667 29.3931 6.73333 29.1531 7.08C28.9131 7.42667 28.5765 7.69667 28.1431 7.89C27.7098 8.08333 27.2065 8.18 26.6331 8.18ZM33.3077 8.18C32.8477 8.18 32.4477 8.1 32.1077 7.94C31.7743 7.78 31.4977 7.56667 31.2777 7.3C31.0577 7.02667 30.891 6.72667 30.7777 6.4C30.671 6.07333 30.6177 5.74667 30.6177 5.42V5.24C30.6177 4.9 30.671 4.56667 30.7777 4.24C30.891 3.91333 31.0577 3.62 31.2777 3.36C31.5043 3.09333 31.7843 2.88 32.1177 2.72C32.451 2.56 32.841 2.48 33.2877 2.48C33.7343 2.48 34.1343 2.56333 34.4877 2.73C34.8477 2.89667 35.1343 3.13333 35.3477 3.44C35.5677 3.74 35.691 4.09667 35.7177 4.51H34.7977C34.751 4.17667 34.5977 3.9 34.3377 3.68C34.0777 3.45333 33.7277 3.34 33.2877 3.34C32.9077 3.34 32.591 3.42667 32.3377 3.6C32.0843 3.77333 31.8943 4.01 31.7677 4.31C31.641 4.61 31.5777 4.95 31.5777 5.33C31.5777 5.69667 31.641 6.03333 31.7677 6.34C31.8943 6.64 32.0843 6.88 32.3377 7.06C32.5977 7.23333 32.921 7.32 33.3077 7.32C33.7543 7.32 34.1143 7.20667 34.3877 6.98C34.661 6.74667 34.8177 6.46 34.8577 6.12H35.7777C35.7577 6.54 35.6343 6.90333 35.4077 7.21C35.1877 7.51667 34.8943 7.75667 34.5277 7.93C34.1677 8.09667 33.761 8.18 33.3077 8.18ZM39.5421 8.18C39.0754 8.18 38.6654 8.1 38.3121 7.94C37.9588 7.78 37.6588 7.57 37.4121 7.31C37.1721 7.04333 36.9888 6.74667 36.8621 6.42C36.7421 6.09333 36.6821 5.76 36.6821 5.42V5.24C36.6821 4.9 36.7454 4.56667 36.8721 4.24C36.9988 3.90667 37.1854 3.61 37.4321 3.35C37.6788 3.08333 37.9788 2.87333 38.3321 2.72C38.6854 2.56 39.0888 2.48 39.5421 2.48C39.9954 2.48 40.3988 2.56 40.7521 2.72C41.1054 2.87333 41.4054 3.08333 41.6521 3.35C41.8988 3.61 42.0854 3.90667 42.2121 4.24C42.3388 4.56667 42.4021 4.9 42.4021 5.24V5.42C42.4021 5.76 42.3388 6.09333 42.2121 6.42C42.0921 6.74667 41.9088 7.04333 41.6621 7.31C41.4221 7.57 41.1254 7.78 40.7721 7.94C40.4188 8.1 40.0088 8.18 39.5421 8.18ZM39.5421 7.32C39.9421 7.32 40.2821 7.23333 40.5621 7.06C40.8488 6.88 41.0654 6.64 41.2121 6.34C41.3654 6.04 41.4421 5.70333 41.4421 5.33C41.4421 4.95 41.3654 4.61 41.2121 4.31C41.0588 4.01 40.8388 3.77333 40.5521 3.6C40.2721 3.42667 39.9354 3.34 39.5421 3.34C39.1554 3.34 38.8188 3.42667 38.5321 3.6C38.2454 3.77333 38.0254 4.01 37.8721 4.31C37.7188 4.61 37.6421 4.95 37.6421 5.33C37.6421 5.70333 37.7154 6.04 37.8621 6.34C38.0154 6.64 38.2321 6.88 38.5121 7.06C38.7988 7.23333 39.1421 7.32 39.5421 7.32ZM45.6899 8.16C45.0566 8.16 44.5699 7.95333 44.2299 7.54C43.8899 7.12667 43.7199 6.53 43.7199 5.75V2.65H44.6799V5.94C44.6799 6.36 44.7933 6.69 45.0199 6.93C45.2466 7.16333 45.5533 7.28 45.9399 7.28C46.3399 7.28 46.6666 7.15333 46.9199 6.9C47.1733 6.64 47.2999 6.28667 47.2999 5.84V2.65H48.2599V8H47.4999V6.77C47.3799 7.22333 47.1733 7.57 46.8799 7.81C46.5866 8.04333 46.2033 8.16 45.7299 8.16H45.6899ZM52.1992 8.06C51.7992 8.06 51.4526 8.00333 51.1592 7.89C50.8726 7.77667 50.6492 7.58333 50.4892 7.31C50.3359 7.03 50.2592 6.65333 50.2592 6.18V3.38H49.3392V2.66H50.2592V1.04H51.1792V2.66H53.0192V3.38H51.1792V6.3C51.1792 6.58667 51.2559 6.81 51.4092 6.97C51.5692 7.12333 51.7926 7.2 52.0792 7.2H53.0192V8.06H52.1992Z"
              fill="#3FD080"
            />
          </svg>
        </a>
        <nav className="md:mt-8">
          <ul className="pt-2 space-y-3 text-base side-links">
            {sidebarLinks.map((link) => (
              <li
                key={link.path}
                className={`py-2 text-white pl-4 text-opacity-10 rounded-t list-none `}
              >
                <Link href={link.path}>
                  <a
                    onClick={props.toggleNavBar}
                    className={`text-sm uppercase font-semibold text-center text-gray-brand-01 hover:text-green-brand-01 ${
                      router.asPath === link.path ? `text-green-brand-01` : ""
                    }`}
                  >
                    {link.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
