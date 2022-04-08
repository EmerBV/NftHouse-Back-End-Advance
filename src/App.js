import { Routes, Route, Navigate } from "react-router-dom";

import Hero from "./components/hero/Hero";
import ExplorePage from "./pages/explore/ExplorePage";
import AccountPage from "./pages/account/AccountPage";
import Nft from "./pages/nfts/[nftId]";
import CreatePage from "./pages/create/CreatePage";
import LoginPage from "./pages/login/LoginPage";
import SignupPage from "./pages/signup/SignupPage";
import NotFoundPage from "./components/error/NotFoundPage";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="m-0 w-full h-full block">
        <div className="flex flex-col min-h-full">
          <Routes>
            <Route index element={<Hero />} />
            <Route path="/assets" element={<ExplorePage />} />
            <Route path="/asset/:id" element={<Nft />} />
            <Route path="/asset/create" element={<CreatePage />} />
            <Route path="/account" element={<AccountPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/" element={<Navigate to="/assets" />} />
            <Route path="/404" element={<NotFoundPage />} />
            <Route path="*" element={<Navigate to="/404" />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
