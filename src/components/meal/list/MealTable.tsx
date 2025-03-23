import * as React from "react";
import BaseTable, { Column } from "@/components/base/BaseTable";

export interface MealTableProps {
  mealData: MealData[];
  onMealElementClick: (row: MealData) => void;
}

export interface MealData {
  id: number;
  mealDate: string;
  mealKind: string;
  name: string;
  email: string;
  age: number;
}

const mealColumns: Column<MealData>[] = [
  { id: "id", label: "ID", align: "left", hidden: true },
  { id: "mealDate", label: "食事日", align: "left", hidden: false },
  { id: "mealKind", label: "食事区分", align: "left", hidden: false },
  { id: "name", label: "Name", align: "left", hidden: false },
  { id: "email", label: "Email", align: "left", hidden: false },
  { id: "age", label: "Age", align: "left", hidden: false },
];

export default function MealTable({
  mealData,
  onMealElementClick,
}: MealTableProps) {
  return (
    <BaseTable
      columns={mealColumns}
      rows={mealData}
      onRowClick={onMealElementClick}
    />
  );
}
