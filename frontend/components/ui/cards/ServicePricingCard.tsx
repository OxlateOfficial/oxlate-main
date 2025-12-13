type Props = {
  price: string;
  time: string;
  ctaText: string;
  onCtaClick?: () => void;
};

export default function ServicePricingCard({
  price,
  time,
  ctaText,
  onCtaClick,
}: Props) {
  return (
    <div className="rounded-3xl border bg-gray-50 p-6 text-center">
      <p className="text-sm text-gray-600">Starting at</p>

      <p className="mt-2 text-3xl font-semibold">{price}</p>

      <p className="mt-1 text-sm text-gray-600">
        Delivery in {time}
      </p>

      <button
        // onMouseEnter={prefetch}
        onClick={onCtaClick}
        className="mt-6 w-full rounded-xl bg-black px-6 py-3 text-white font-medium"
      >
        {ctaText}
      </button>
    </div>
  );
}
