
import ReactHtmlParser from 'react-html-parser';
export default function PlainText(plainText) {


  return (
    <section className="my-[60px]">
      <p>
        {ReactHtmlParser(plainText?.plainText)}
      </p>
    </section>
  );
}
