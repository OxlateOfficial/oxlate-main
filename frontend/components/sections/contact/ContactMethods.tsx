type Props = {
  whatsapp: {
    label: string;
    number: string;
  };
  email: {
    label: string;
    address: string;
  };
};

export default function ContactMethods({ whatsapp, email }: Props) {
  return (
    <div className="space-y-4">
      <a
        href={`https://wa.me/${whatsapp.number}`}
        target="_blank"
        className="block rounded-xl border px-6 py-4"
      >
        {whatsapp.label}
      </a>

      <a
        href={`mailto:${email.address}`}
        className="block rounded-xl border px-6 py-4"
      >
        {email.label}: {email.address}
      </a>
    </div>
  );
}
