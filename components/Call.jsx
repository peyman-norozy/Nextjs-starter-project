const Call = (props) => {
  return (
    <div className="bg-[#F2F2F2] rounded-[18px] py-[57px] px-[70px]">
      {/* grid */}
      <div className="grid grid-cols-autoFit gap-8 gap-y-[20px] mb-[20px]">
        <div>
          <span className="text-[#5A5A5A] text-[20px]">نام شرکت : </span>
          <span className="text-[#000] text-[20px] text-bold">
            مزون پوشاک زمین
          </span>
        </div>
        <div>
          <span className="text-[#5A5A5A] text-[20px]">استان : </span>
          <span className="text-[#000] text-[20px] text-bold">
            مزون پوشاک زمین
          </span>
        </div>
        <div>
          <span className="text-[#5A5A5A] text-[20px]">تاریخ تاسیس : </span>
          <span className="text-[#000] text-[20px] text-bold">1360</span>
        </div>
        <div className=" text-right">
          <span className="text-[#5A5A5A] text-[20px]">همراه :</span>
          <span className="text-[#000] text-[20px] text-bold">09125874367</span>
        </div>
        <div>
          <span className="text-[#5A5A5A] text-[20px]">تلفن : </span>
          <span className="text-[#000] text-[20px] text-bold">22224547</span>
        </div>
        <div>
          <span className="text-[#5A5A5A] text-[20px]">شماره ثبت : </span>
          <span className="text-[#000] text-[20px] text-bold">2412787</span>
        </div>
      </div>
      <div className="mb-[20px]">
        <span className="text-[#5A5A5A] text-[20px]">نشانی : </span>
        <span className="text-[#000] text-[20px] text-bold">
          تهران، الهیه، مرتضی فیاضی(فرشته) ساختمان میرادور - پلاک 12 طبقه چهارم
          واحد 402
        </span>
      </div>
      <div className="mb-[20px]">
        <span className="text-[#5A5A5A] text-[20px]">سایت : </span>
        <span className="text-[#BF4D61] text-[20px] text-bold">
          www.loremipsum.com - www.lorem.com - www.loremipsumdolr.com
        </span>
      </div>
    </div>
  );
};

export default Call;
