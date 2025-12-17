type Section = {
  heading: string;
  text: string;
};

type Props = {
  sections: Section[];
};

export default function LegalContent({ sections }: Props) {
  return (
    <>
      {sections.map((section, index) => (
        <div key={index}>
          <h2 className="text-xl font-semibold mb-3">
            {section.heading}
          </h2>
          <p>{section.text}</p>
        </div>
      ))}
    </>
  );
}
