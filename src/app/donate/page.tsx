import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donate",
  description: "Partner with Skriften Theological Seminary.",
  // other metadata
};

const LearnMorePage = () => {
  return (
    <>

      <Breadcrumb
        pageName="Donate"
        description=""
      />
      <div className="container mx-auto max-w-4xl px-4 space-y-10">
        <div>
          <p className="mt-4 mb-8 leading-relaxed">
            At this time Skriften Theological Seminary has not reiceved 501(c)(3) status from the Internal Revenue Service. However, Skriften has an account with the National Christian Foundation (NCF). NCF serves as a fiscal sponsor for the seminary that allows donors to make tax deducitble gifts to help fund the project until the Seminary is granted nonprofit status.
          </p>
          <hr className="mb-8"/>
          <p className="leading-relaxed">
            Donations can be made by making out a check and sending it to National Christian Foundation.
          </p>
          <p className="mt-4 leading-relaxed">
            The Memo Field should contain: <strong>The Free Church Seminary Fund (#6277112)</strong>.
          </p>
          <div className="mt-4 leading-relaxed">
            <h3 className="text-xl leading-tight md:text-xl">NCF Mailing Address & Contact Info </h3>
            <p className="leading-relaxed">
              NCF Chicago Office<br />
              415 W. Golf Road <br />
              Suite 19<br />
              Arlington Heights, IL 60005<br />
            </p>
            <p className="mt-4 leading-relaxed">
              <a href="mailto:chicago@ncfgiving.com" className="text-primary underline underline-offset-4 hover:opacity-80">chicago@ncfgiving.com</a><br />
              847.607.9569<br />
              847.709.3430 (Fax)
            </p>
          </div>
        </div>
      </div>

    </>
  );
};

export default LearnMorePage;
