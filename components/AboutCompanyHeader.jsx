import StarRating from "../StarRating";

const AboutCompanyHeader = (props) => {
  return (
    <>
      <div className="mb-[32px] px-[70px]">
        <div className="flex justify-between	">
          <div className="flex items-center">
            <img src="/assets/icons/Vector_AboutCompany.svg" />
            <h2 className="text-[20px] mr-[12px]">مزون پوشاک زومین</h2>
          </div>
          <div className="flex gap-[10px] items-center">
            <StarRating />
            <img src="/assets/icons/AboutCompany_save.svg" />
            <img src="/assets/icons/AboutCompany_search.svg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutCompanyHeader;
