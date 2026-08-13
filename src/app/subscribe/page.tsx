import Breadcrumb from "@/components/Common/Breadcrumb";
import NewsLatterBox from "@/components/Contact/NewsLetterBox";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Subscribe",
  description: "",
  // other metadata
};

const Page = () => {
  return (
    <>

      <Breadcrumb
        pageName="Newsletter"
        description=""
      />
      <div className="container mx-auto max-w-4xl px-4 space-y-10">
< NewsLatterBox />
      </div>

    </>
  );
};

export default Page;
