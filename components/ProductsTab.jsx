import { useState } from "react";
import Button from "../Button/Button";
import ProductCart from "../cart/ProductCart";
import Link from "next/link";

const products = [
  {
    productName: "لباس زنانه کد ۳۱۸",
    storeName: "Zomin",
    situation: "تهران،صاحبقرانیه",
    imgSrc: "/assets/images/Product_img.png",
    iconSave: "/assets/icons/Product_save.svg",
    iconHome: "/assets/icons/Product_Home.svg",
    iconLocation: "/assets/icons/Product_Location.svg",
  },
  {
    productName: "لباس زنانه کد ۳۱۸",
    storeName: "Zomin",
    situation: "تهران،صاحبقرانیه",
    imgSrc: "/assets/images/Product_img.png",
    iconSave: "/assets/icons/Product_save.svg",
    iconHome: "/assets/icons/Product_Home.svg",
    iconLocation: "/assets/icons/Product_Location.svg",
  },
  {
    productName: "لباس زنانه کد ۳۱۸",
    storeName: "Zomin",
    situation: "تهران،صاحبقرانیه",
    imgSrc: "/assets/images/Product_img.png",
    iconSave: "/assets/icons/Product_save.svg",
    iconHome: "/assets/icons/Product_Home.svg",
    iconLocation: "/assets/icons/Product_Location.svg",
  },
  {
    productName: "لباس زنانه کد ۳۱۸",
    storeName: "Zomin",
    situation: "تهران،صاحبقرانیه",
    imgSrc: "/assets/images/Product_img.png",
    iconSave: "/assets/icons/Product_save.svg",
    iconHome: "/assets/icons/Product_Home.svg",
    iconLocation: "/assets/icons/Product_Location.svg",
  },
  {
    productName: "لباس زنانه کد ۳۱۸",
    storeName: "Zomin",
    situation: "تهران،صاحبقرانیه",
    imgSrc: "/assets/images/Product_img.png",
    iconSave: "/assets/icons/Product_save.svg",
    iconHome: "/assets/icons/Product_Home.svg",
    iconLocation: "/assets/icons/Product_Location.svg",
  },
];
const ProductsTab = (props) => {
  const [dropdownDivHeghit, setDropdownDivHeghit] = useState("h-[0px]");
  const dropdownHandler = () => {
    setDropdownDivHeghit((prevState) =>
      prevState === "h-[0px]" ? "h-[500px]" : "h-[0px]"
    );
  };
  return (
    <>
      <div className="mb-[32px] px-[70px]">
        <div className="flex">
          {/* col-right */}
          <div className="w-[25%]">
            {/* search-input */}
            <div className=" relative mb-[20px] ">
              <input
                className="bg-[#E0E0E0] w-inherit rounded-[12px] h-[40px] p[3px] text-gray-500 w-full p-[10px] side_bar outline-none"
                type="search"
              />
              <img
                className="absolute top-[9px] left-[12px]"
                src="/assets/icons/Search_2.svg"
              />
            </div>

            {/* dropdown-box */}
            <div className="py-[28px] pr-[21px] bg-[#fff] rounded-[12px] shadow-md shadow-gray-600">
              <div>
                <h2 className="mb-[8px] text-[18px] font-bold">
                  دسته بندی محصولات
                </h2>
                <Button
                  class_name={"font-bold text-[#852536] text-[16px] mb-[12px]"}
                  text={"نمایش همه محصولات"}
                  on_click={dropdownHandler}
                />
              </div>
              <div
                className={`${dropdownDivHeghit} overflow-scroll direction_ltr dropdown_scroll pt-[12px]`}
              >
                <ul className="px-[18px] direction_rtl">
                  <li className="mb-[8px] text-[14px] text-[#453F3A] leading-[24px]">
                    <Link href="#">لباس مجلسی (۷۷)</Link>
                  </li>
                  <li className="mb-[8px] text-[14px] text-[#453F3A] leading-[24px]">
                    <Link href="#">لباس مجلسی (۷۷)</Link>
                  </li>
                  <li className="mb-[8px] text-[14px] text-[#453F3A] leading-[24px]">
                    <Link href="#">لباس مجلسی (۷۷)</Link>
                  </li>
                  <li className="mb-[8px] text-[14px] text-[#453F3A] leading-[24px]">
                    <Link href="#">لباس مجلسی (۷۷)</Link>
                  </li>
                  <li className="mb-[8px] text-[14px] text-[#453F3A] leading-[24px]">
                    <Link href="#">لباس مجلسی (۷۷)</Link>
                  </li>
                  <li className="mb-[8px] text-[14px] text-[#453F3A] leading-[24px]">
                    <Link href="#">لباس مجلسی (۷۷)</Link>
                  </li>
                  <li className="mb-[8px] text-[14px] text-[#453F3A] leading-[24px]">
                    <Link href="#">لباس مجلسی (۷۷)</Link>
                  </li>
                  <li className="mb-[8px] text-[14px] text-[#453F3A] leading-[24px]">
                    <Link href="#">لباس مجلسی (۷۷)</Link>
                  </li>
                  <li className="mb-[8px] text-[14px] text-[#453F3A] leading-[24px]">
                    <Link href="#">لباس مجلسی (۷۷)</Link>
                  </li>
                  <li className="mb-[8px] text-[14px] text-[#453F3A] leading-[24px]">
                    <Link href="#">لباس مجلسی (۷۷)</Link>
                  </li>
                  <li className="mb-[8px] text-[14px] text-[#453F3A] leading-[24px]">
                    <Link href="#">لباس مجلسی (۷۷)</Link>
                  </li>
                  <li className="mb-[8px] text-[14px] text-[#453F3A] leading-[24px]">
                    <Link href="#">لباس مجلسی (۷۷)</Link>
                  </li>
                  <li className="mb-[8px] text-[14px] text-[#453F3A] leading-[24px]">
                    <Link href="#">لباس مجلسی (۷۷)</Link>
                  </li>
                  <li className="mb-[8px] text-[14px] text-[#453F3A] leading-[24px]">
                    <Link href="#">لباس مجلسی (۷۷)</Link>
                  </li>
                  <li className="mb-[8px] text-[14px] text-[#453F3A] leading-[24px]">
                    <Link href="#">لباس مجلسی (۷۷)</Link>
                  </li>
                  <li className="mb-[8px] text-[14px] text-[#453F3A] leading-[24px]">
                    <Link href="#">لباس مجلسی (۷۷)</Link>
                  </li>
                  <li className="mb-[8px] text-[14px] text-[#453F3A] leading-[24px]">
                    <Link href="#">لباس مجلسی (۷۷)</Link>
                  </li>
                  <li className="mb-[8px] text-[14px] text-[#453F3A] leading-[24px]">
                    <Link href="#">لباس مجلسی (۷۷)</Link>
                  </li>
                  <li className="mb-[8px] text-[14px] text-[#453F3A] leading-[24px]">
                    <Link href="#">لباس مجلسی (۷۷)</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* col-left */}
          <div className="w-[75%]">
            {/* PRODUCTS */}
            <ul className="grid grid-cols-halfPageAutoFit gap-8 justify-items-center mb-[80px]">
              {products.length &&
                products.map((item) => (
                  <ProductCart
                    title={item.productName}
                    storeName={item.storeName}
                    situation={item.situation}
                    productImg={item.imgSrc}
                    iconSave={item.iconSave}
                    iconHome={item.iconHome}
                    iconLocation={item.iconLocation}
                  />
                ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsTab;
