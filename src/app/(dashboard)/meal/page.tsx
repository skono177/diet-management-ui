"use client";

import BaseButton from "@/components/base/BaseButton";
import MealDetailModal from "@/components/meal/list/detail/MealDetailModal";
import MealTable, { MealData } from "@/components/meal/list/MealTable";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const mealData: MealData[] = [
  {
    id: 1,
    mealDate: "2025-3-1",
    mealKind: "朝食",
    name: "Alice",
    email: "alice@example.com",
    age: 28,
  },
  {
    id: 2,
    mealDate: "2025-3-2",
    mealKind: "昼食",
    name: "Bob",
    email: "bob@example.com",
    age: 34,
  },
  {
    id: 3,
    mealDate: "2025-3-3",
    mealKind: "夕食",
    name: "Charlie",
    email: "charlie@example.com",
    age: 22,
  },
];

export default function MealList() {
  const [selectedMeal, setSelectedMeal] = useState<MealData | null>(null);
  const router = useRouter();
  const query = useSearchParams();
  const isSelect = query.get("select");

  const handleBackScreen = () => {
    router.back();
  };

  const handleMealDetail = (mealData: MealData) => {
    setSelectedMeal(mealData);
  };

  const handleCloseModal = () => setSelectedMeal(null);

  return (
    <div>
      <div className="p-[0px_0px_10px_0px]">
        {!isSelect ? "登録済み食事一覧画面" : "登録済み食事選択画面"}
      </div>
      <MealTable
        mealData={mealData}
        onMealElementClick={handleMealDetail}
      ></MealTable>
      {isSelect && (
        <BaseButton
          className="m-[10px_0px_10px_0px]"
          name="戻る"
          variant="contained"
          onClick={handleBackScreen}
        ></BaseButton>
      )}
      {selectedMeal && (
        <MealDetailModal
          open={true}
          mealData={selectedMeal}
          onAddMealClick={isSelect ? handleBackScreen : undefined}
          onCloseClick={handleCloseModal}
        ></MealDetailModal>
      )}
    </div>
  );
}
