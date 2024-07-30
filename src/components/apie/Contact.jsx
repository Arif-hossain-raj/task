import ContactBox from "../innerpageCommon/ContactBox";

const Contact = () => {
  return (
    <section className="mb-[90px]">
      <div className="contact">
        <div className="header flex justify-between items-center pb-[25px]">
          <div className="text">
            <h3>Kontaktai</h3>
          </div>
        </div>

        <div className="content grid grid-cols-4 gap-[18px]">
          <ContactBox
            image={"/image/dynamic/8.jpg"}
            name={"Asta Sieliūnienė"}
            degignation={"Direktorė"}
            phone={"+370 686 95225"}
            email={"asta.sieliuniene@irkc.lt"}
          />
          <ContactBox
            image={"/image/dynamic/7.jpg"}
            name={"Asta Sieliūnienė"}
            degignation={"Direktorė"}
            phone={"+370 686 95225"}
            email={"asta.sieliuniene@irkc.lt"}
          />
          <ContactBox
            image={"/image/dynamic/9.jpg"}
            name={"Asta Sieliūnienė"}
            degignation={"Direktorė"}
            phone={"+370 686 95225"}
            email={"asta.sieliuniene@irkc.lt"}
          />
          <ContactBox
            image={"/image/dynamic/9.jpg"}
            name={"Asta Sieliūnienė"}
            degignation={"Direktorė"}
            phone={"+370 686 95225"}
            email={"asta.sieliuniene@irkc.lt"}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
