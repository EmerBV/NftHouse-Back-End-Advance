import { useTranslation } from "react-i18next";

const style = {
  sortByContainer:
    "grow md:mt-0 mt-3 ml-0 md:ml-[8px] block order-2 w-full text-white font-normal text-[18px]",
  sortSelect:
    "flex bg-[#353840] hover:bg-[#4c505c] h-[50px] rounded-[10px] border border-[#151B22] min-w-[200px] p-[12px] cursor-pointer w-full",
  selectOptions:
    "cursor-pointer w-full border-0 outline-0 ring-0 m-0 inline-block px-[2px] bg-transparent text-white font-normal text-[18px]",
};

const SortPriceButton = () => {
  const { t } = useTranslation(["es"]);

  return (
    <div className={style.sortByContainer}>
      <select className={style.sortSelect}>
        <option className={style.selectOptions}>{t("Sort by")}</option>
        <option className={style.selectOptions}>
          {t("Price")}: {t("Low to High")}
        </option>
        <option className={style.selectOptions}>
          {t("Price")}: {t("High to Low")}
        </option>
      </select>
    </div>
  );
};

export default SortPriceButton;
