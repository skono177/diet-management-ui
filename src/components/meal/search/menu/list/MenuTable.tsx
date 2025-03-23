import * as React from "react";
import BaseTable, { Column } from "@/components/base/BaseTable";

export interface MenuTableProps {
  menuDataList: MenuData[];
  onMenuElementClick: (row: MenuData) => void;
}

export interface MenuData {
  restaurantId: number;
  restaurantName: string;
  menuId: number;
  menuName: string;
  calorie: string;
}

const menuColumns: Column<MenuData>[] = [
  { id: "restaurantId", label: "ID", align: "left", hidden: true },
  { id: "restaurantName", label: "店名", align: "left", hidden: false },
  { id: "menuId", label: "メニューID", align: "left", hidden: true },
  { id: "menuName", label: "メニュー", align: "left", hidden: false },
  { id: "calorie", label: "カロリー", align: "left", hidden: false },
];

export default function MenuTable({
  menuDataList,
  onMenuElementClick,
}: MenuTableProps) {
  return (
    <BaseTable
      columns={menuColumns}
      rows={menuDataList}
      onRowClick={onMenuElementClick}
    />
  );
}
