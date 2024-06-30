
// import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/footer";
import { TranslateProvider } from "../utils/TranslateContext";
import I18nextP from "@/utils/i18nextP";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "muhtaref",
  description: "muhtaref for freelancer and professional",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      {/* <body className="samsungBold max-w-[1150px] mx-auto"> */}
      <body >
      <hr className="border-2 w-full border-[#49daf9] " />
      <div className="container sm:mx-auto  SamsungOne-400 max-w-[1200px]">
        <I18nextP>
          <TranslateProvider>
            <Header  />
            {children}
            <Footer /> 
          </TranslateProvider>
        </I18nextP>
        </div>
      </body>
    </html>
  );
}
