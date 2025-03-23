"use client";

import BaseButton from "@/components/base/BaseButton";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleHomeClick = () => {
    router.replace("home");
  };
  return (
    <div>
      <BaseButton
        name="ホーム画面へ"
        variant="text"
        onClick={handleHomeClick}
      />
    </div>
  );
}
