// ARABIC (RTL) VERSION — generated from the English file of the same path.
// Text is still the English placeholder: replace each English string with Arabic.
// Layout is already right-to-left. Keep links starting with /ar.

// data/technicalLibraryData.js

/**
 * Categories mirror the "Technical Library" submenu in navData.js — keep the
 * `id` values in sync with those href slugs so filter links and nav links
 * always resolve to the same section.
 */
export const libraryCategories = [
  {
    id: "company-documents",
    label: "وثائق الشركة",
    description:
      "ملف الشركة، والهيكل التنظيمي، والتراخيص التجارية، والشهادات.",
  },
  {
    id: "product-datasheets",
    label: "نشرات البيانات الفنية للمنتجات",
    description:
      "نشرات البيانات الفنية لخزانات FRP والبولي إيثيلين والفولاذ والخزانات الأرضية وخزانات المواد الكيميائية.",
  },
  {
    id: "thermal-insulation",
    label: "العزل الحراري",
    description:
      "نشرة البيانات الفنية للأيروجيل، والكتيّب، وإجراءات التطبيق، وصحيفة بيانات السلامة (SDS)، ومعلومات الموصلية الحرارية.",
  },
  {
    id: "chiller-services",
    label: "وثائق خدمة المبردات",
    description:
      "بيان قدرات الخدمة، ونطاق الصيانة الوقائية، وقائمة فحص الصيانة، ومعلومات المعدات المدعومة.",
  },
  {
    id: "engineering",
    label: "الوثائق الهندسية",
    description:
      "المخططات القياسية، وتفاصيل الفوهات، وتعليمات التركيب، ومتطلبات الأساسات.",
  },
  {
    id: "qa-qc",
    label: "وثائق QA / QC",
    description:
      "خطط الفحص والاختبار (ITP)، وبيانات طريقة العمل، وإجراءات QA/QC، ونماذج الفحص والصيانة والاختبار.",
  },
  {
    id: "chemical-compatibility",
    label: "التوافق الكيميائي",
    description:
      "معلومات التوافق الكيميائي لراتنجات FRP والبولي إيثيلين وأنظمة التبطين.",
  },
];

/**
 * `type` drives the icon shown on the card (see DocumentCard).
 * `access`:
 *  - "download"  → file is public, card links straight to `file`.
 *  - "request"   → controlled/project document; card routes to the RFQ
 *                  form instead of exposing a direct link, matching the
 *                  Engineer/Consultant flow (review → submit technical RFQ).
 */
const libraryDocuments = [
  // Company Documents
  {
    id: "company-profile",
    category: "company-documents",
    title: "ملف شركة فالكون تكنولوجيز",
    type: "PDF",
    size: "4.8 MB",
    updated: "2026-06",
    access: "download",
    file: "/documents/company/falcon-technologies-company-profile.pdf",
  },
  {
    id: "org-chart",
    category: "company-documents",
    title: "الهيكل التنظيمي",
    type: "PDF",
    size: "0.6 MB",
    updated: "2026-03",
    access: "download",
    file: "/documents/company/organization-chart.pdf",
  },
  {
    id: "commercial-registration",
    category: "company-documents",
    title: "السجل التجاري والتراخيص التجارية",
    type: "PDF",
    size: "2.1 MB",
    updated: "2026-01",
    access: "request",
  },

  // Product Datasheets
  {
    id: "frp-vertical-tank-capacity-height-chart",
    category: "product-datasheets",
    title: "جدول السعة والارتفاع لخزانات FRP الرأسية",
    type: "PDF",
    size: "11.6 KB",
    updated: "2026-05",
    access: "access",
    file: "/documents/products/FRP_Vertical_Tank_Capacity_Height_Chart.pdf",
  },
  {
    id: "frp-horizontal-above-ground-tanks-chart",
    category: "product-datasheets",
    title: "جدول خزانات FRP الأفقية فوق الأرض",
    type: "PDF",
    size: "27.8 KB",
    updated: "2026-05",
    access: "access",
    file: "/documents/products/FRP_Horizontal_Above_Ground_Tanks_Chart.pdf",
  },
  {
    id: "frp-horizontal-underground-tanks-chart",
    category: "product-datasheets",
    title: "جدول خزانات FRP الأفقية تحت الأرض",
    type: "PDF",
    size: "27.8 KB",
    updated: "2026-05",
    access: "access",
    file: "/documents/products/FRP_Horizontal_Underground_Tank_Chart_No_Subheading.pdf",
  },
  // {
  //   id: "frp-grp-tank-datasheet",
  //   category: "product-datasheets",
  //   title: "FRP / GRP Tank Datasheet",
  //   type: "PDF",
  //   size: "3.2 MB",
  //   updated: "2026-05",
  //   access: "request",
  //   file: "/documents/products/frp-grp-tank-datasheet.pdf",
  // },
  // {
  //   id: "polyethylene-tank-datasheet",
  //   category: "product-datasheets",
  //   title: "Polyethylene (LLDPE / HDPE) Tank Datasheet",
  //   type: "PDF",
  //   size: "2.7 MB",
  //   updated: "2026-05",
  //   access: "request",
  //   file: "/documents/products/polyethylene-tank-datasheet.pdf",
  // },
  // {
  //   id: "steel-tank-datasheet",
  //   category: "product-datasheets",
  //   title: "Steel Tank Systems Datasheet",
  //   type: "PDF",
  //   size: "2.9 MB",
  //   updated: "2026-04",
  //   access: "request",
  //   file: "/documents/products/steel-tank-datasheet.pdf",
  // },
  // {
  //   id: "underground-tank-datasheet",
  //   category: "product-datasheets",
  //   title: "Underground Tank Datasheet",
  //   type: "PDF",
  //   size: "2.4 MB",
  //   updated: "2026-04",
  //   access: "request",
  //   file: "/documents/products/underground-tank-datasheet.pdf",
  // },
  // {
  //   id: "chemical-tank-datasheet",
  //   category: "product-datasheets",
  //   title: "Chemical Storage Tank Datasheet",
  //   type: "PDF",
  //   size: "3.0 MB",
  //   updated: "2026-04",
  //   access: "request",
  // },

  // Thermal Insulation
  {
    id: "aerogel-tds",
    category: "thermal-insulation",
    title: "عزل الأيروجيل — نشرة البيانات الفنية",
    type: "PDF",
    size: "1.8 MB",
    updated: "2026-06",
    access: "request",
    file: "/documents/thermal-insulation/aerogel-technical-data-sheet.pdf",
  },
  {
    id: "aerogel-brochure",
    category: "thermal-insulation",
    title: "عزل الأيروجيل — كتيّب المنتج",
    type: "PDF",
    size: "5.4 MB",
    updated: "2026-06",
    access: "request",
    file: "/documents/thermal-insulation/aerogel-brochure.pdf",
  },
  {
    id: "aerogel-sds",
    category: "thermal-insulation",
    title: "الأيروجيل — صحيفة بيانات السلامة (SDS)",
    type: "PDF",
    size: "0.9 MB",
    updated: "2026-06",
    access: "request",
    file: "/documents/thermal-insulation/aerogel-sds.pdf",
  },
  {
    id: "insulation-application-procedure",
    category: "thermal-insulation",
    title: "إجراءات تطبيق العزل الحراري",
    type: "PDF",
    size: "2.2 MB",
    updated: "2026-05",
    access: "request",
  },

  // Chiller Service Documents
  {
    id: "chiller-capability-statement",
    category: "chiller-services",
    title: "بيان قدرات خدمة المبردات",
    type: "PDF",
    size: "1.6 MB",
    updated: "2026-05",
    access: "request",
    file: "/documents/chiller-services/chiller-service-capability-statement.pdf",
  },
  {
    id: "chiller-pm-scope",
    category: "chiller-services",
    title: "نطاق الصيانة الوقائية",
    type: "PDF",
    size: "1.1 MB",
    updated: "2026-05",
    access: "request",
    file: "/documents/chiller-services/preventive-maintenance-scope.pdf",
  },
  {
    id: "chiller-maintenance-checklist",
    category: "chiller-services",
    title: "قائمة فحص صيانة المبردات",
    type: "XLSX",
    size: "0.4 MB",
    updated: "2026-05",
    access: "request",
    file: "/documents/chiller-services/chiller-maintenance-checklist.xlsx",
  },
  {
    id: "supported-equipment-list",
    category: "chiller-services",
    title: "المعدات المدعومة / الشركات المصنّعة المشمولة",
    type: "PDF",
    size: "0.8 MB",
    updated: "2026-04",
    access: "request",
  },
  {
    id: "sample-service-report",
    category: "chiller-services",
    title: "نموذج تقرير خدمة / فحص",
    type: "PDF",
    size: "1.3 MB",
    updated: "2026-04",
    access: "request",
  },

  // Engineering Documents
  {
    id: "standard-drawings",
    category: "engineering",
    title: "المخططات القياسية للخزانات — مخططات الترتيب العام / المخططات التنفيذية",
    type: "PDF",
    size: "6.1 MB",
    updated: "2026-03",
    access: "request",
  },
  {
    id: "nozzle-details",
    category: "engineering",
    title: "التفاصيل القياسية للفوهات",
    type: "PDF",
    size: "1.4 MB",
    updated: "2026-03",
    access: "request",
    file: "/documents/engineering/standard-nozzle-details.pdf",
  },
  {
    id: "installation-instructions",
    category: "engineering",
    title: "تعليمات تركيب الخزانات",
    type: "PDF",
    size: "2.5 MB",
    updated: "2026-03",
    access: "request",
    file: "/documents/engineering/tank-installation-instructions.pdf",
  },
  {
    id: "foundation-requirements",
    category: "engineering",
    title: "دليل متطلبات الأساسات",
    type: "PDF",
    size: "1.9 MB",
    updated: "2026-02",
    access: "request",
    file: "/documents/engineering/foundation-requirements-guide.pdf",
  },

  // QA / QC Documents
  {
    id: "itp-template",
    category: "qa-qc",
    title: "خطة الفحص والاختبار (ITP) — نموذج",
    type: "PDF",
    size: "1.0 MB",
    updated: "2026-05",
    access: "request",
  },
  {
    id: "method-statements",
    category: "qa-qc",
    title: "بيانات طريقة العمل — الفهرس",
    type: "PDF",
    size: "0.7 MB",
    updated: "2026-05",
    access: "request",
    file: "/documents/qa-qc/method-statements-index.pdf",
  },
  {
    id: "qaqc-procedures",
    category: "qa-qc",
    title: "نظرة عامة على إجراءات QA / QC",
    type: "PDF",
    size: "1.7 MB",
    updated: "2026-04",
    access: "request",
    file: "/documents/qa-qc/qa-qc-procedures-overview.pdf",
  },
  {
    id: "testing-formats",
    category: "qa-qc",
    title: "نماذج تقارير الفحص والاختبار",
    type: "DOCX",
    size: "0.3 MB",
    updated: "2026-04",
    access: "request",
    file: "/documents/qa-qc/inspection-testing-report-formats.docx",
  },

  // Chemical Compatibility
  {
    id: "frp-resin-compatibility",
    category: "chemical-compatibility",
    title: "جدول التوافق الكيميائي لراتنجات FRP",
    type: "PDF",
    size: "2.0 MB",
    updated: "2026-05",
    access: "request",
    file: "/documents/chemical-compatibility/frp-resin-compatibility-chart.pdf",
  },
  {
    id: "polyethylene-compatibility",
    category: "chemical-compatibility",
    title: "جدول التوافق الكيميائي للبولي إيثيلين",
    type: "PDF",
    size: "1.6 MB",
    updated: "2026-05",
    access: "request",
    file: "/documents/chemical-compatibility/polyethylene-compatibility-chart.pdf",
  },
  {
    id: "lining-compatibility",
    category: "chemical-compatibility",
    title: "دليل التوافق الكيميائي لأنظمة التبطين",
    type: "PDF",
    size: "2.3 MB",
    updated: "2026-04",
    access: "request",
  },
];

export default libraryDocuments;
