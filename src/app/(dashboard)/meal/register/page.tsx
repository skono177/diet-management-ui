"use client";

import BaseButton from "@/components/base/BaseButton";
import BaseModal from "@/components/base/BaseModal";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function MealRegister() {
  const [openConfirm, setOpenConfirm] = useState<boolean>(false);
  const [openComplete, setOpenComplete] = useState<boolean>(false);
  const router = useRouter();

  const handleSearchMenu = () => {
    router.push(`/meal/menu`);
  };

  const handleSelectRegisteredMenu = () => {
    router.push(`/meal?select=true`);
  };

  const handleRegisterMeal = () => {
    setOpenComplete(true);
    setOpenConfirm(false);
  };

  const handleCloseCompleteModal = () => {
    setOpenComplete(false);
    router.replace("/meal");
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
      <BaseButton
        className="m-[10px_10px_10px_10px]"
        name="登録"
        variant="contained"
        onClick={() => setOpenConfirm(true)}
      />
      <BaseModal
        modalTitle={"登録情報の確認"}
        modalDescription={
          "入力・選択した食事情報を登録しますか？\n修正する場合は「修正」ボタンより修正を行ってください。"
        }
        open={openConfirm}
        negativeButtonName={"修正"}
        onNegativeButtonClick={() => setOpenConfirm(false)}
        positiveButtonName={"登録"}
        onPositiveButtonClick={handleRegisterMeal}
        customProp={undefined}
      ></BaseModal>
      <BaseModal
        modalTitle={"登録情報の登録完了"}
        modalDescription={"食事情報の登録が完了しました。"}
        open={openComplete}
        negativeButtonName={"OK"}
        onNegativeButtonClick={handleCloseCompleteModal}
        customProp={undefined}
      ></BaseModal>
    </div>
  );
}
