// ---------- Icons ----------
const IconCommitment = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-8 h-8"
    fill="none"
    stroke="currentColor"
  >
    <path
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 13l4 4L19 7"
    />
  </svg>
);

const IconCustomBuild = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-8 h-8"
    fill="none"
    stroke="currentColor"
  >
    <rect x="3" y="3" width="7" height="7" strokeWidth={2} />
    <rect x="14" y="14" width="7" height="7" strokeWidth={2} />
    <path strokeWidth={2} d="M10 6h4M14 10v4" />
  </svg>
);

const IconPerformance = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-8 h-8"
    fill="none"
    stroke="currentColor"
  >
    <path
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13 10V3L4 14h7v7l9-11h-7z"
    />
  </svg>
);

const IconSupport = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-8 h-8"
    fill="none"
    stroke="currentColor"
  >
    <path
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3l8 4v6c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V7l8-4z"
    />
  </svg>
);

// ---------- Smart mapper ----------
const getWhyTrustIcon = (text: string) => {
  const v = text.toLowerCase();

  if (v.includes("commit") || v.includes("delivery")) return <IconCommitment />;

  if (v.includes("business") || v.includes("template"))
    return <IconCustomBuild />;

  if (
    v.includes("performance") ||
    v.includes("security") ||
    v.includes("usability")
  )
    return <IconPerformance />;

  if (v.includes("support") || v.includes("long-term")) return <IconSupport />;

  return <IconCommitment />;
};

import { loadWhyTrustUs } from "@/lib/cms/loadWhyTrustUs";

export default function WhyTrustUsSection() {
  const data = loadWhyTrustUs();

  return (
    <section className="relative px-4 py-24 max-w-7xl mx-auto">
      {/* Title */}
      <h3 className="text-3xl sm:text-4xl font-bold text-center mb-14 tracking-tight">
        {data.title}
      </h3>

      {/* Cards */}
      <div className="grid gap-8 sm:grid-cols-2">
        {data.points.map((item: any, index: number) => (
          <div
            key={index}
            className="
              group relative rounded-3xl p-8 sm:p-10
              min-h-[220px]
              bg-gradient-to-br from-white to-gray-50
              border border-gray-200
              shadow-sm hover:shadow-lg
              transition-all duration-300
            "
          >
            {/* Icon */}
            <div
              className="
              w-14 h-14 mb-6
              rounded-xl
              text-white
              flex items-center justify-center
              shadow-md
            "
              style={{ backgroundColor: "#324F7B" }}
            >
              {getWhyTrustIcon(item.title)}
            </div>

            {/* Heading */}
            <h4
              className="
              text-xl sm:text-2xl
              font-semibold
              text-gray-900
              mb-4
              leading-snug
            "
            >
              {item.title}
            </h4>

            {/* Description */}
            <p className="text-base text-gray-600 leading-relaxed max-w-[95%]">
              {item.desc}
            </p>

            {/* Accent line */}
            <div
              className="
                absolute bottom-0 left-0
                h-1 w-0
                group-hover:w-full
                transition-all duration-300
              "
              style={{
                backgroundColor: "#324F7B",
                borderBottomLeftRadius: "3.5rem",
                borderBottomRightRadius: "3.5rem",
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
