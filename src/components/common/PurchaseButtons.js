import { HiTag } from "react-icons/hi";
import { IoMdWallet } from "react-icons/io";

const style = {
  purchaseWrapper:
    "flex h-20 w-full items-center rounded-lg border border-[#151c22] bg-[#303339] px-12",
  button: "mr-8 flex items-center py-2 px-12 rounded-lg",
  buttonIcon: "text-xl",
  buttonText: "ml-2 text-lg font-semibold",
};

const Purchase = () => {
  return (
    <div className={style.purchaseWrapper}>
      <>
        <button className={`${style.button} bg-[#2081e2] hover:bg-[#42a0ff]`}>
          <IoMdWallet className={style.buttonIcon} />
          <div className={style.buttonText}>Buy Now</div>
        </button>
        <button
          className={`${style.button} border border-[#151c22]  bg-[#363840] hover:bg-[#4c505c]`}
        >
          <HiTag className={style.buttonIcon} />
          <div className={style.buttonText}>Make Offer</div>
        </button>
      </>
    </div>
  );
};

export default Purchase;
