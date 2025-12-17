type Block = {
  type: "paragraph" | "heading";
  text: string;
};

export default function BlogContent({ content }: { content: Block[] }) {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed text-[15px] sm:text-base">

      {content.map((block, index) => {
        if (block.type === "heading") {
          return (
            <h2 key={index} className="text-xl font-semibold">
              {block.text}
            </h2>
          );
        }

        return <p key={index}>{block.text}</p>;
      })}
    </article>
  );
}
