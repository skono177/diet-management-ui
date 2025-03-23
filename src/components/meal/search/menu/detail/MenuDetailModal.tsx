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
      closeButtonName="閉じる"
      onCloseClick={onCloseClick}
      customButtonName="選択したメニューを追加"
      onCustomClick={onAddMenuClick}
      customProp={menuData}
    />
  );
}
