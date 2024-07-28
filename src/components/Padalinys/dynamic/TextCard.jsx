import SingleTextCard from "../SingleTextCard";

export default function Textcard() {
  const text1 = ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.`;

  const text2 = `Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
</br> </br>
consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.`;

  const text3 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.`;
  return (
    <section className="my-[60px] flex items-center gap-[11px]">
      <SingleTextCard text={text1} />
      <SingleTextCard text={text2} />
      <SingleTextCard text={text3} />
    </section>
  );
}
