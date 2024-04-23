import { useEffect, useState } from "react";
import HomeView from "./view/HomeView";
import SplashScreen from "./view/SplashScreen";

export default function App() {
  const [isShowSplash, setIsShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsShowSplash(false);
    }, 4000);
  }, []);

  return <>{isShowSplash ? <SplashScreen /> : <HomeView />}</>;
}
