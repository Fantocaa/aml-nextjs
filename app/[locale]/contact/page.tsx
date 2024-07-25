import FormEmail from "@/components/services/formemail";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

interface Params {
  params: {
    locale: string;
  };
}

export async function generateMetadata({ params: { locale } }: Params) {
  const t = await getTranslations({ locale, namespace: "MetadataHome" });

  return {
    title: t("contact"),
    description: t("description"),
  };
}

export default function Contact() {
  const t = useTranslations("Contact");
  return (
    <main className="flex min-h-screen flex-col items-center justify-center container lg:p-24 gap-4 bg-gray-50 ">
      <section className="bg-white dark:bg-gray-900 rounded-2xl mt-4 xl:mt-12">
        <div className="py-8 lg:py-16 px-8 mx-auto xl:max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            {t("title")}
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            {t("subtitle")}
          </p>
          <FormEmail />
        </div>
      </section>
    </main>
  );
}
