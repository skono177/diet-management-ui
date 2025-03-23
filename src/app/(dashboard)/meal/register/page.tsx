"use client";

import BaseButton from "@/components/base/BaseButton";
import { useRouter } from "next/navigation";

export default function MealRegister() {
  const router = useRouter();
  const handleSearchMenu = () => {
    router.push(`/meal/menu`);
  };
  const handleSelectRegisteredMenu = () => {
    router.push(`/meal?select=true`);
  };

  return (
    <div>
      <div className="p-[0px_0px_10px_0px]">食事登録画面</div>
      <div className="flex p-4">
        <BaseButton
          className="m-[10px_10px_10px_10px]"
          name="メニュー検索"
          variant="contained"
          onClick={handleSearchMenu}
        />
        <BaseButton
          className="m-[10px_10px_10px_10px]"
          name="登録済み食事選択"
          variant="contained"
          onClick={handleSelectRegisteredMenu}
        />
      </div>
    </div>
  );
}
