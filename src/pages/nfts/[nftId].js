import Header from "../../components/header/Header";
import NFTImage from "../../components/nft/NFTImage";
import NFTDetails from "../../components/nft/NFTDetails";
import ItemActivity from "../../components/nft/ItemActivity";
import PurchaseButtons from "../../components/common/PurchaseButtons";

const style = {
  nftIdwrapper: "w-full pt-[8px] pb-[16px] block container-lg text-[#e5e8eb]",
  nftIdContainer: "flex flex-col h-full flex-1",
  flexColContainer: "items-center flex flex-col",
  generalAssetWrapper: "px-4 w-[1280px] max-w-full pt-[8px] pb-[16px] block",
  assetWrapper: "m-0 p-0 block",
  assetContainer: "block",
  topContent: "md:flex flex-row block",
  cardContainer: "flex-[3] w-full md:max-w-[43%] flex md:block my-[20px]",
  detailsPurchaseWrapper: "flex-[4] block",
  detailsPurchaseContainer:
    "mx-[20px] mt-[20px] mb-[15px] flex flex-wrap flex-col justify-between",
  detailsContainer: "block items-center justify-between mb-[5px] max-w-full",
  purchaseWrapper: "m-[20px] block",
  purchaseContainer: "block",
  bottomWrapper: "w-full mt-0 mb-[20px] block",
  bottomContainer: "overflow-auto w-full block",
  activityWrapper: "block",
  activityContainer: "overflow-hidden block",
};

const Nft = () => {
  return (
    <>
      <Header />

      <div className={style.nftIdwrapper}>
        <div className={style.nftIdContainer}>
          <div className={style.flexColContainer}>
            <div className={style.generalAssetWrapper}>
              <div className={style.assetWrapper}>
                <div className={style.assetContainer}>
                  <div className={style.topContent}>
                    <div className={style.cardContainer}>
                      <NFTImage />
                    </div>
                    <div className={style.detailsPurchaseWrapper}>
                      <div className={style.detailsPurchaseContainer}>
                        <div className={style.detailsContainer}>
                          <NFTDetails />
                        </div>
                        <div className={style.purchaseWrapper}>
                          <div className={style.purchaseContainer}>
                            <PurchaseButtons />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={style.bottomWrapper}>
                    <div className={style.bottomContainer}>
                      <div className={style.activityWrapper}>
                        <div className={style.activityContainer}>
                          <ItemActivity />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nft;
