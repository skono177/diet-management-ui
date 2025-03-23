"use client";

import "./globals.css";
import Header from "@/components/common/Header";
import { Noto_Sans_JP } from "next/font/google";
import SideBar from "@/components/common/SideBar";
import { useRouter } from "next/navigation";

// Noto Sans を設定（太さやサブセットを指定）
const notoSans = Noto_Sans_JP({
  subsets: ["latin"], // 日本語を使うなら ["latin", "japanese"]
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const handleMealRegisterClick = () => {
    router.replace("/meal/register");
  };

  const handleMealListClick = () => {
    router.replace("/meal");
  };

  return (
    <html lang="ja">
      <body className={notoSans.className}>
        <header className=" fixed top-0 left-0 w-full bg-blue-600 text-white p-4 shadow-md">
          <Header></Header>
        </header>
        <div className={"flex h-screen gap-4"} style={{ paddingTop: "56px" }}>
          <div className={"h-full w-72 p-4 overflow-auto"}>
            <SideBar
              onMealRegisterClick={handleMealRegisterClick}
              onMealListClick={handleMealListClick}
            ></SideBar>
          </div>
          <main className={"h-full flex-grow bg-gray-100 p-4 overflow-auto"}>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
