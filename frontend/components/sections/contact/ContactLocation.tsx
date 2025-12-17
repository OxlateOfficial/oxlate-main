type Props = {
  city: string;
  note: string;
};

export default function ContactLocation({ city, note }: Props) {
  return (
    <div className="text-sm text-gray-600">
      <p className="font-medium">{city}</p>
      <p>{note}</p>
    </div>
  );
}
