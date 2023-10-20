import ProductCart from "../cart/ProductCart";
import { useState, useEffect } from "react";
import axios from "axios";
import Button from "../Button/Button";
import Call from "./Call";

const FirstTab = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/ProductDetail")
      .then((res) => setProducts(res.data));
  }, []);

  return (
    <>
      <div className="mb-[32px] px-[70px]">
        <h1 className="text-[24px] mb-[20px]">زمینه فعالیت</h1>
        <h2 className="text-[20px] mb-[16px]">مزون پوشاک زومین</h2>
        <p className="text-[20px] mb-[72px]">
          <span className="text-[#A9A8A8]">مدیریت:</span>
          <span>احدی</span>
        </p>
        <h3 className="text-[20px] mb-[20px]">درباره مزون پوشاک زومین</h3>
        <p className="text-[#5A5A5A] text-[18px] mb-[100px]">
          رواج یافتن خرید و فروش آنلاین لباس، صنعت پوشاک ایران را وارد دورۀ
          جدیدی کرده است. از طرفی، تأسیس شرکت‌های تولیدی لباس و پوشاک بسیار رونق
          گرفته‌اند. از طرف دیگر، گسترش کارگاه‌های خانگی دسته‌بندی‌ها در این
          حوزه را دشوار کرده است. با این حال، اتحادیۀ صنف تولیدکنندگان و
          فروشندگان پوشاک دستورالعمل مشخصی برای این کار دارد. تولید سفارشی و
          محدود لباس معمولاً نیاز به فضایی بزرگ یا نیروی انسانی زیاد ندارد. اما
          اگر قصد تولید عمدۀ پوشاک را دارید و می‌خواهید یک کارگاه خیاطی بزرگ
          تأسیس کنید، به مقدمات بیشتری نیاز دارید. راه‌اندازی کارگاه تولیدی لباس
          و پوشاک نیازمند تهیۀ مکان مناسب و لوازم این کار است. اما در هر حال،
          پیش از جذب نیرو و تهیۀ مواد اولیه حتماً باید برای گرفتن مجوزهای لازم
          اقدام کنید. تولیدی‌های بدون مجوز خیلی سریع جریمه و در صورت اقدام نکردن
          برای ثبت شرکت تولیدی لباس و پوشاک خود برای همیشه تعطیل می‌شوند.بهترین
          راه برای تأسیس شرکت تولیدی لباس و پوشاک، ثبت شرکت با سهامی خاص یا ثبت
          شرکت با مسئولیت محدود است. مناسب‌ترین گزینه برای شما متناسب با نوع
          فعالیت و اهداف شما تعیین می‌شود. پیش از انتخاب نوع شرکت خود، توصیه
          می‌شود شرایط و ضوابط هر یک از این قالب‌ها را بررسی کنید.
        </p>
        <hr className="text-[#A9A8A8] mb-[60px]" />
        <h1 className="text-[24px] mb-[32px]">محصولات</h1>
        <hr className="text-[#A9A8A8] mb-[60px]" />
        {/* here map on products data get from fetch */}
        <ul className="mt-8 grid grid-cols-autoFit gap-8 justify-items-center mb-[80px]">
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
        <div className="flex flex-row justify-center  mb-[100px]">
          <Button
            class_name={"text-blcak flex flex-row items-center gap-[12px]"}
          >
            <img src="/assets/icons/Left_Chevron.svg" />
            <p className="text-[#852536] text-[16px]">مشاهده بیشتر</p>
          </Button>
        </div>
        <hr className="text-[#A9A8A8] mb-[60px]" />

        <h1 className="text-[24px] mb-[32px]">محصولات پر بازدید</h1>
        <hr className="text-[#A9A8A8] mb-[60px]" />
        <ul className="mt-8 grid grid-cols-autoFit gap-8 justify-items-center mb-[80px]">
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
        <div className="flex flex-row justify-center  mb-[100px]">
          <Button
            class_name={"text-blcak flex flex-row items-center gap-[12px]"}
          >
            <img src="/assets/icons/Left_Chevron.svg" />
            <p className="text-[#852536] text-[16px]">مشاهده بیشتر</p>
          </Button>
        </div>
        <hr className="text-[#A9A8A8] mb-[60px]" />

        <h1 className="text-[24px] mb-[32px]">تماس با مزون پوشاک زومین</h1>
        <Call />
      </div>
    </>
  );
};

export default FirstTab;
