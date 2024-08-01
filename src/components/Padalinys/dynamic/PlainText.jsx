
import ReactHtmlParser from 'react-html-parser';
export default function PlainText(plainText) {


  return (
    <section className="my-[60px]">
      <p className='font-[400] text-[16px] leading-[25px] text-[#14133B]'>
        {ReactHtmlParser(plainText?.plainText)}
      </p>
    </section>
  );
}
