import BaseButton from "../base/BaseButton";

interface SideBarProps {
  onMealRegisterClick: () => void;
  onMealListClick: () => void;
}

export default function SideBar({
  onMealRegisterClick,
  onMealListClick,
}: SideBarProps) {
  return (
    <div>
      <li className="p-[4px]">
        <BaseButton
          name="食事登録"
          variant="contained"
          onClick={onMealRegisterClick}
        />
      </li>
      <li className="p-[4px]">
        <BaseButton
          name="登録済み食事一覧"
          variant="contained"
          onClick={onMealListClick}
        />
      </li>
    </div>
  );
}
