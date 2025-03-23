import * as React from "react";
import { MenuData } from "../list/MenuTable";
import BaseModal from "@/components/base/BaseModal";

export interface MenuModalProps {
  open: boolean;
  menuData: MenuData;
  onAddMenuClick: (menuData: MenuData) => void;
  onCloseClick: () => void;
}

export default function MenuDetailModal({
  open,
  menuData,
  onAddMenuClick,
  onCloseClick,
}: MenuModalProps) {
  return (
    <BaseModal
      modalTitle="メニュー情報"
      modalDescription="メニューの詳細情報です。"
      open={open}
      negativeButtonName="閉じる"
      onNegativeButtonClick={onCloseClick}
      positiveButtonName="選択したメニューを追加"
      onPositiveButtonClick={onAddMenuClick}
      customProp={menuData}
    />
  );
}
