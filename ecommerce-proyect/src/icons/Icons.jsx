import React from "react";
import PalmerColor from "../assets/coconut-tree.png";
import Beach from "../assets/Beach.png";
import editIcon from "../assets/editIcon.png";
import deleteIcon from "../assets/delete.png";
import sun from "../assets/sun.png";
import cart from "../assets/shopping-cart.png";
import surf from "../assets/surf.png";
import surfCarte from "../assets/surfCartel.png";
import Wave from "../assets/wave.png";
import WaveReal from "../assets/waveReal.png";
import SurfTable from "../assets/surfboard.png";
import close from "../assets/close.png";
import caution from "../assets/caution.png";
import windowsLogo from "../assets/windows.png";
import wifi from "../assets/wifi.png";
import volumen from "../assets/volume.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export function CartIcon({ itemsLength }) {
  return (
    <div className="  ">
      <div className="relative py-2">
        <div className="t-0 absolute left-3">
          <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">
            {itemsLength}
          </p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="file: mt-4 h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>
      </div>
    </div>
  );
}

export function AddToCartIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-6 h-6"
    >
      <path d="M6 6h15l-1.68 9.39A2 2 0 0117.36 17H9.64a2 2 0 01-1.96-1.61L5 4H2" />
      <circle cx="9" cy="20" r="1" />
      <circle cx="17" cy="20" r="1" />
      <path d="M12 10v4m2-2h-4" />
    </svg>
  );
}

export function PalmTreeIcon() {
  return <img src={PalmerColor} alt="Palm Tree" className="h-10 w-10 ml-2" />;
}

export function Fondo() {
  return <img src={Beach} alt="Palm Tree" className="h-20 w-20 ml-20" />;
}

export function EditIcon() {
  return <img src={editIcon} alt="Edit Icon" className="h-5 w-5 ml-2"></img>;
}

export function DeleteIcon() {
  return <img src={deleteIcon} alt="Delete Icon" className=""></img>;
}

export function Sun() {
  return <img src={sun} alt="Sun Icon" className="size-36"></img>;
}

export function Cart() {
  return <img src={cart} alt="Cart Icon" className="size-10 mr-4"></img>;
}

export function Surf() {
  return <img src={surf} alt="Surf Icon" className="size-10"></img>;
}

export function SurfCartel() {
  return (
    <img src={surfCarte} alt="SurfCartel Icon" className="h-11 w-11 mr-2"></img>
  );
}

export function SurfCartelRegister() {
  return (
    <img
      src={surfCarte}
      alt="SurfCartel Icon"
      className="h-20 w-20 ml-20"
    ></img>
  );
}

export function WaveIcon() {
  return <img src={Wave} alt="Wave Icon" className="size-12 "></img>;
}

export function WaveRealIcon() {
  return <img src={WaveReal} alt="WaveReal Icon" className="size-12 "></img>;
}

export function SurfBoardIcon() {
  return <img src={SurfTable} alt="SurfBoard Icon" className="size-12 "></img>;
}

export function CloseIcon() {
  return <img src={close} alt="Close Icon" className="size-6"></img>;
}

export function CautionIcon() {
  return <img src={caution} alt="Caution Icon" className="size-20 "></img>;
}

export function WindowsIcon() {
  return <img src={windowsLogo} alt="Windows Icon" className="size-6"></img>;
}

export function WifiIcon() {
  return <img src={wifi} alt="wifi Icon" className="size-6"></img>;
}

export function VolumenIcon() {
  return <img src={volumen} alt="Volumen Icon" className="size-6"></img>;
}

export function SurfBoardIconLogin() {
  return (
    <img
      src={SurfTable}
      alt="SurfBoard Icon"
      className="h-20 w-20 ml-20 "
    ></img>
  );
}

const PrevArrow = ({ className, style, onClick }) => (
  <div
    className={`${className} custom-arrow size-20`}
    style={{ ...style, display: "block", left: "250px", zIndex: 1 }}
    onClick={onClick}
  >
    <FaArrowLeft />
  </div>
);

const NextArrow = ({ className, style, onClick }) => (
  <div
    className={`${className} custom-arrow`}
    style={{ ...style, display: "block", right: "250px", zIndex: 1 }}
    onClick={onClick}
  >
    <FaArrowRight />
  </div>
);

export { PrevArrow, NextArrow };
