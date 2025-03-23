"use client";

import BaseButton from "@/components/base/BaseButton";
import MenuDetailModal from "@/components/meal/search/menu/detail/MenuDetailModal";
import MenuTable, {
  MenuData,
} from "@/components/meal/search/menu/list/MenuTable";
import { useRouter } from "next/navigation";
import { useState } from "react";

const menuDataList: MenuData[] = [
  {
    restaurantId: 1,
    restaurantName: "やよい軒",
    menuId: 1,
    menuName: "特から定食",
    calorie: "1000kcal",
  },
];

export default function MealMenuSearch() {
  const [selectedMenu, setSelectedMenu] = useState<MenuData | null>(null);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleBackScreen = () => {
    router.back();
  };

  const handleMenuDetail = (menuData: MenuData) => {
    setSelectedMenu(menuData);
    setOpen(true);
  };

  const handleAddMenu = (menuData: MenuData) => {
    router.replace("/previousPage");
  };

  const handleCloseModal = () => setOpen(false);

  return (
    <div>
      <div className="p-[0px_0px_10px_0px]">メニュー検索画面</div>
      <MenuTable
        menuDataList={menuDataList}
        onMenuElementClick={handleMenuDetail}
      ></MenuTable>
      <BaseButton
        className="m-[10px_0px_10px_0px]"
        name="戻る"
        variant="contained"
        onClick={handleBackScreen}
      ></BaseButton>
      {open && selectedMenu && (
        <MenuDetailModal
          open={open}
          menuData={selectedMenu}
          onAddMenuClick={handleAddMenu}
          onCloseClick={handleCloseModal}
        ></MenuDetailModal>
      )}
    </div>
  );
}
