import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import React, { ChangeEvent, useTransition } from "react";

export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const localActive = useLocale();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;

    // Replace the locale in the current pathname
    const newPathname = pathname.replace(`/${localActive}`, `/${nextLocale}`);

    startTransition(() => {
      // router.replace(`/${nextLocale}`);
      router.replace(newPathname);
    });
  };
  return (
    <div>
      <label>
        <p className="sr-only">change language</p>
        <select
          defaultValue={localActive}
          onChange={onSelectChange}
          disabled={isPending}
          className="bg-gray-50 mx-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="en">English</option>
          <option value="id">Indonesia</option>
        </select>
      </label>
    </div>
  );
}
