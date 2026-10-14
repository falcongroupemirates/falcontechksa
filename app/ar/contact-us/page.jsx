// ARABIC (RTL) VERSION — generated from the English file of the same path.
// Text is still the English placeholder: replace each English string with Arabic.
// Layout is already right-to-left. Keep links starting with /ar.

import PageHero from "@/components/ar/common/PageHero";
import ContactInfoSection from "@/components/ar/contact/ContactInfoSection";
import ContactForm from "@/components/ar/contact/ContactForm";

export const metadata = {
  alternates: {
    canonical: "/ar/contact-us",
    languages: { en: "/contact-us", ar: "/ar/contact-us", "x-default": "/contact-us" },
  },
  title: "اتصل بفالكون تكنولوجيز | المملكة العربية السعودية",
  description:
    "تواصل مع فالكون تكنولوجيز للحصول على حلول الخزانات والعزل الحراري وترميم وتبطين الخزانات والخدمات الصناعية وتركيب وصيانة المبردات. اتصل بنا أو راسلنا عبر واتساب أو أرسل استفسارًا عامًا.",
};

export default function ContactUs() {
  return (
    <div className="w-full overflow-hidden">
      <PageHero
        eyebrow="لنبقَ على تواصل"
        title="اتصل بنا"
        description="في فالكون تكنولوجيز، نقدّر كل تواصل. سواء كنت تبحث عن حلول هندسية، أو تطلب استشارة، أو ترغب ببساطة في معرفة المزيد عن خدماتنا، فريقنا هنا لمساعدتك."
        breadcrumb="تواصل"
        image="/assets/images/home/hero-slide-2.png"
      />
      <section className="w-full bg-white dark:bg-neutral-950">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1fr_1.4fr] lg:px-8 xl:px-0 lg:py-24">
          <div>
            <div className="inline-flex h-7.5 items-center rounded-full border border-neutral-300 px-4.25 dark:border-white/15">
              <span className="text-[12px] font-medium uppercase tracking-[-0.01em] text-neutral-900 dark:text-white">
                بيانات الاتصال
              </span>
            </div>
            <h2 className="mt-5 text-[30px] font-normal leading-[1.1] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[36px]">
              تفضّل الاتصال أو واتساب؟
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-500 dark:text-white/55">
              تواصل مع مكتبنا في الدمام مباشرة، أو أرسل لنا استفسارًا عامًا أدناه. هل تبحث عن عرض سعر رسمي بدلًا من ذلك؟ استخدم{" "}
              <a
                href="/ar/request-a-quote"
                className="text-brand underline underline-offset-2 hover:text-brand-dark"
              >
                اطلب عرض سعر
              </a>
              .
            </p>
            <div className="mt-8">
              <ContactInfoSection />
            </div>
          </div>

          <div>
            <div className="inline-flex h-7.5 items-center rounded-full border border-neutral-300 px-4.25 dark:border-white/15">
              <span className="text-[12px] font-medium uppercase tracking-[-0.01em] text-neutral-900 dark:text-white">
                استفسار عام
              </span>
            </div>
            <h2 className="mt-5 text-[30px] font-normal leading-[1.1] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[36px]">
              أرسل لنا رسالة
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-500 dark:text-white/55">
              الأسئلة والملاحظات أو أي أمر لا يتطلب عرض سعر رسميًا، تصل مباشرة إلى مكتب الاستقبال لدينا.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
