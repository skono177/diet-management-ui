import * as React from "react";
import BaseModal from "@/components/base/BaseModal";
import { MealData } from "../MealTable";

export interface MealDetailModalProps {
  open: boolean;
  mealData: MealData;
  onAddMealClick?: (mealData: MealData) => void;
  onCloseClick: () => void;
}

export default function MealDetailModal({
  open,
  mealData,
  onAddMealClick,
  onCloseClick,
}: MealDetailModalProps) {
  return (
    <BaseModal
      modalTitle="食事情報"
      modalDescription="食事の詳細情報です。"
      open={open}
      closeButtonName="閉じる"
      onCloseClick={onCloseClick}
      customButtonName={
        onAddMealClick ? "選択した登録済みの食事を追加" : undefined
      }
      onCustomClick={onAddMealClick}
      customProp={mealData}
    />
  );
}
