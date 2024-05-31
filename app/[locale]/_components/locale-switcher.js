"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  const onSelectChange = (e) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };

  return (
    <label>
      <p className="sr-only">change language</p>
      <select
        defaultValue={localActive}
        className=" appearance-none text-gray-200 bg-base-100 focus:border-none focus:outline-none hover:bg-base-100 block w-full  "
        onChange={onSelectChange}
        disabled={isPending}
      >
        <option value="ar">arabic</option>
        <option value="kr">kurdish</option>
      </select>
    </label>
  );
}
