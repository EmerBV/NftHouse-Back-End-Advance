import Header from "../../components/header/Header";
import NftCard from "../../components/nft/NFTCard";

import CategoryButton from "../../components/common/CategoryButton";
import SortPriceButton from "../../components/common/SortPriceButton";

const style = {
  collectionWrapper: "overflow-hidden py-0 px-[28px] block",
  nftCardWrapper:
    "grid 2xl:grid-cols-9 xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 mx-0 items-center justify-center py-8",
  collectionContainer:
    "lg:flex md:block block flex-wrap bg-[#202225] w-full justify-between items-center mt-[24px] mb-[10px] mx-0",
  itemsTextContainer: "block my-[16px] mx-0 bg-[#202225]",
  itemsText: "flex font-semibold text-[20px] text-white",
  filterWrapper:
    "md:flex block max-w-full mt-0 bg-[#202225] justify-items-end z-30 flex-nowrap",
  optionsContainer:
    "grow block order-1 w-full text-white font-normal text-[18px]",
  selectOptionsContainer:
    "flex bg-[#353840] hover:bg-[#4c505c] md:mr-[8px] h-[50px] rounded-[10px] border border-[#151B22] min-w-[200px] p-[12px] cursor-pointer",
  selectOptions:
    "cursor-pointer w-full border-0 outline-0 ring-0 m-0 inline-block px-[2px] bg-transparent text-white font-normal text-[18px]",
  sortByContainer:
    "grow md:mt-0 mt-3 ml-0 md:ml-[8px] block order-2 w-full text-white font-normal text-[18px]",
  sortSelect:
    "flex bg-[#353840] hover:bg-[#4c505c] h-[50px] rounded-[10px] border border-[#151B22] min-w-[200px] p-[12px] cursor-pointer",
};

const ExplorePage = () => {
  return (
    <>
      <Header />

      <div className={style.collectionWrapper}>
        <div className={style.collectionContainer}>
          <div className={style.itemsTextContainer}>
            <p className={style.itemsText}>Items</p>
          </div>

          <div className={style.filterWrapper}>
            <CategoryButton />
            <SortPriceButton />
          </div>
        </div>

        <>
          <div className={style.nftCardWrapper}>
            <NftCard />
          </div>
        </>
      </div>
    </>
  );
};

export default ExplorePage;
