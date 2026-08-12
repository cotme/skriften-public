import NewsLetterBox from "./NewsLetterBox";

const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="mx-auto flex flex-wrap justify-center">
          <div className="w-full px-4 lg:w-6/12 xl:w-8/12">
            <NewsLetterBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
