import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import React, { ChangeEvent, useTransition } from "react";
import { Globe } from "lucide-react";

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
    <div className="relative">
      <label className="flex items-center">
        <Globe
          size={20}
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400"
        />
        <select
          defaultValue={localActive}
          onChange={onSelectChange}
          disabled={isPending}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 pl-10 pr-4 py-2.5 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="en">English</option>
          <option value="id">Indonesia</option>
        </select>
      </label>
    </div>
  );
}
