// ARABIC (RTL) VERSION — generated from the English file of the same path.
// Text is still the English placeholder: replace each English string with Arabic.
// Layout is already right-to-left. Keep links starting with /ar.

import PageHero from "@/components/ar/common/PageHero";
import RfqForm from "@/components/ar/contact/RfqForm";

export const metadata = {
  alternates: {
    canonical: "/ar/request-a-quote",
    languages: { en: "/request-a-quote", ar: "/ar/request-a-quote", "x-default": "/request-a-quote" },
  },
  title: "اطلب عرض سعر | فالكون تكنولوجيز - المملكة العربية السعودية",
  description:
    "اطلب عرض سعر للخزانات أو العزل الحراري أو ترميم وتبطين الخزانات أو تركيب وصيانة المبردات من فالكون تكنولوجيز. يمكن للمهندسين والاستشاريين أيضًا تقديم طلبات عروض أسعار فنية.",
};

export default function RequestAQuote() {
  return (
    <div className="w-full overflow-hidden">
      <PageHero
        eyebrow="ابدأ الآن"
        title="اطلب عرض سعر"
        description="أخبرنا بما تحتاجه — خزانات المياه أو الديزل أو المواد الكيميائية، أو العزل الحراري، أو ترميم وتبطين الخزانات، أو تركيب وصيانة المبردات — وسيتابع مهندسونا معك بعرض سعر مخصص."
        breadcrumb="اطلب عرض سعر"
        image="/assets/images/home/hero-slide-1.png"
      />

      <section className="w-full bg-white dark:bg-neutral-950">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1fr_1.4fr] lg:px-8 xl:px-0 lg:py-24">
          <div>
            <div className="inline-flex h-7.5 items-center rounded-full border border-neutral-300 px-4.25 dark:border-white/15">
              <span className="text-[12px] font-medium uppercase tracking-[-0.01em] text-neutral-900 dark:text-white">
                كيف يعمل
              </span>
            </div>
            <h2 className="mt-5 text-[30px] font-normal leading-[1.1] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[36px]">
              عميل أو مهندس — في الحالتين نحن في خدمتك
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-500 dark:text-white/55">
              اختر ما تحتاجه، وأضف المعلومات الأساسية، وأخبرنا بموقع التركيب. أضف السعة أو المعايير أو التفاصيل الفنية إن توفرت — وإن لم تتوفر، سيتواصل معك مهندسونا لتأكيد المتطلبات قبل تقديم العرض.
            </p>

            <ol className="mt-8 space-y-5">
              {[
                {
                  step: "01",
                  title: "ما الذي تحتاجه؟",
                  desc: "أعمال الخزانات أو العزل أو الترميم أو التبطين أو الخدمات الصناعية أو المبردات.",
                },
                {
                  step: "02",
                  title: "المتطلب الأساسي",
                  desc: "السعة للخزانات، أو الطراز/الموديل والمشكلة لخدمة المبردات.",
                },
                {
                  step: "03",
                  title: "التركيب / الموقع",
                  desc: "فوق الأرض، أو تحت الأرض، أو على السطح، أو في غرفة المعدات، أو لم يُحدد بعد.",
                },
                {
                  step: "04",
                  title: "بياناتك",
                  desc: "الاسم والشركة ورقم الجوال/واتساب وموقع المشروع.",
                },
              ].map((s) => (
                <li key={s.step} className="flex gap-4">
                  <span className="text-sm font-semibold text-brand dark:text-brand-light">
                    {s.step}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-neutral-900 dark:text-white">
                      {s.title}
                    </p>
                    <p className="mt-0.5 text-sm text-neutral-500 dark:text-white/55">
                      {s.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <p className="mt-8 text-sm leading-relaxed text-neutral-500 dark:text-white/55">
              تفضّل مناقشة الأمر مباشرة، أو لديك سؤال عام؟ استخدم{" "}
              <a
                href="/ar/contact-us"
                className="text-brand dark:text-brand-light underline underline-offset-2 hover:text-brand-dark"
              >
                صفحة الاتصال
              </a>{" "}
              بدلًا من ذلك.
            </p>
          </div>

          <div>
            <div className="inline-flex h-7.5 items-center rounded-full border border-neutral-300 px-4.25 dark:border-white/15">
              <span className="text-[12px] font-medium uppercase tracking-[-0.01em] text-neutral-900 dark:text-white">
                اطلب عرض سعر
              </span>
            </div>
            <h2 className="mt-5 text-[30px] font-normal leading-[1.1] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[36px]">
              أخبرنا بما تحتاجه
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-500 dark:text-white/55">
              يمكن للمهندسين والاستشاريين مشاركة التفاصيل الفنية أدناه — ويمكن إرسال المعايير والمخططات ونشرات البيانات الفنية لاحقًا عبر البريد الإلكتروني.
            </p>
            <div className="mt-8">
              <RfqForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
