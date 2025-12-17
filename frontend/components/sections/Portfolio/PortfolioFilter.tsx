"use client";

type Filter = {
  id: string;
  label: string;
};

type Props = {
  filters: Filter[];
  active: string;
  onChange: (id: string) => void;
};

export default function PortfolioFilter({
  filters,
  active,
  onChange,
}: Props) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {filters.map((filter) => {
        const isActive = active === filter.id;

        return (
          <button
            key={filter.id}
            onClick={() => onChange(filter.id)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition
              ${
                isActive
                  ? "bg-black text-white"
                  : "border text-gray-700 hover:bg-gray-100"
              }
            `}
          >
            {filter.label}
          </button>
        );
      })}
    </div>
  );
}
