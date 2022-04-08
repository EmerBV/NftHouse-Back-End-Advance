import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="justify-center items-center py-[200px]">
      <div className="text-white text-[200px] font-bold text-center">404</div>
      <div className="text-white text-[100px] font-bold text-center">
        Page Not Found
      </div>
      <p className="text-white hover:text-[#2081E2] text-[30px] font-medium text-center ">
        <Link to="/">Go to Home</Link>
      </p>
    </div>
  );
};

export default NotFoundPage;
