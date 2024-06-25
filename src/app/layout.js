// "use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/footer";
// import i18next from "i18next";
// import { createContext } from "react";

// import AR_LANG from "../locales/ar/common.json";
// import EN_LANG from "../locales/en/common.json";
// import { I18nextProvider } from "react-i18next";
// import { TranslateProvider } from "../utils/TranslateContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "muhtaref",
  description: "muhtaref for freelancer and professional",
};

// i18next.init({
//   interpolation: {
//     escapeValue: false,
//   },
//   resources: {
//     en: {
//       global: EN_LANG,
//     },
//     ar: {
//       global: AR_LANG,
//     },
//   },
//   lng: "en",
// });

// const MyContext = createContext(); // Assuming no nested Contexts

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body dir={i18next.language === "en" ? "ltr" : "rtl"} className="samsungBold"> */}
      <body className="samsungBold">
        {/* <I18nextProvider i18n={i18next}> */}
        {/* <TranslateProvider> */}
        <Header />
        {children}
        <Footer />
        {/* </TranslateProvider> */}
        {/* </I18nextProvider> */}
      </body>
    </html>
  );
}

// "use client";
// import { Inter } from "next/font/google";
// import "./globals.css";
// import Header from "@/components/Header";
// import Footer from "@/components/footer";
// import i18next from "i18next";
// import { createContext } from 'react';

// import AR_LANG from "../locales/ar/common.json";
// import EN_LANG from "../locales/en/common.json";
// import { I18nextProvider } from "react-i18next";
// import { TranslateProvider } from "../utils/TranslateContext";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "muhtaref",
//   description: "muhtaref for freelancer and professional",
// };
// i18next.init({
//   interpolation: {
//     escapeValue: false,
//   },
//   resources: {
//     en: {
//       global: EN_LANG,
//     },
//     ar: {
//       global: AR_LANG,
//     },
//   },
//   lng: "en",
// });
// const MyContext = createContext();

// export default function RootLayout({ children }) {
//   return (
//     // <html lang="en">
//     <html lang={i18next.lng}>
//       <I18nextProvider i18n={i18next}>
//       <body className="samsungBold">
//         {" "}
//         <TranslateProvider>
//           <Header />
//           {children}
//           <Footer />
//         </TranslateProvider>
//       </body>
//       </I18nextProvider>
//     </html>
//   );
// }
