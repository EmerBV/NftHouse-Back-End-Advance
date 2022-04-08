import formatDistanceToNow from "date-fns/formatDistanceToNow";

import EthLogo from "../../images/eth.svg";

import { BsFillCartFill } from "react-icons/bs";

const style = {
  eventItem: "flex px-4 py-5 font-medium items-center",
  event: "flex items-center justify-center",
  eventIcon: "flex mr-2 text-xl",
  eventName: "flex text-lg font-semibold items-center justify-center",
  eventPrice: "flex items-center justify-center",
  eventPriceValue: "text-lg items-center justify-center",
  ethLogo: "h-5 mr-2",
  accent: "text-[#2081e2] items-center justify-center",
};

const EventItem = () => {
  return (
    <div className={style.eventItem}>
      <div className={`${style.event} flex-[2]`}>
        <div className={style.eventIcon}>
          <BsFillCartFill />
        </div>
        <div className={style.eventName}>Sale</div>
      </div>
      <div className={`${style.eventPrice} flex-[2]`}>
        <img src={EthLogo} alt="eth" className={style.ethLogo} />
        <div className={style.eventPriceValue}>12</div>
      </div>
      <div className={`${style.accent} flex-[3]`}>Azuki</div>
      <div className={`${style.accent} flex-[3]`}>Azuki</div>
      <time className={`${style.accent} flex-[2]`} dateTime="">
        {formatDistanceToNow(new Date())}
      </time>
    </div>
  );
};

export default EventItem;
