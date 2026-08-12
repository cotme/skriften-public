import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mission, Vision, and Focus",
  description: "A summary of the mission and vision behind Skriften Theological Seminary.",
  // other metadata
};

const MissionVisionPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Mission, Vision, and Focus"
        description="A summary of the mission and vision behind Skriften Theological Seminary."
      />
      <div className="container mx-auto max-w-4xl px-4 space-y-10">
        <div>
          <h1 className="mb-2 text-4xl font-bold">Mission</h1>
          <p className="leading-relaxed">
            Skriften Theological Seminary exists to serve the churches of the Evangelical Free Church of America by training up men and women through theological education for faithful Gospel ministry in the local church and on the mission field.
          </p>
        </div>
        <div>
          <h1 className="mb-2 text-4xl font-bold">Vision</h1>
          <p className="leading-relaxed">
            The vision of Skriften is to partner with churches and districts within the EFCA to prepare men and women for vocational ministry. Skriften seeks to provide the resource of theological education that is biblically faithful, academically rigorous, and accessible. This is facilitated by a style of education that is rooted in Scripture, experienced within a supportive community of peers and professors, and fuels an uncompromising desire to reach all peoples with the good news of Jesus Christ.
          </p>
        </div>
        <div>
          <h1 className="mb-2 text-4xl font-bold">Focus</h1>
          <p className="leading-relaxed">
            Skriften is focused on serving the Evangelical Free Church of America, its seventeen districts, and its sixteen-hundred congregations by providing theological education for the training of pastors, ministry leaders, and missionaries.
          </p>
          <p className="leading-relaxed">
            Skriften holds to the <a href="/mission-vision/statement-of-faith/" className="text-primary underline underline-offset-4 hover:opacity-80">EFCA Statement of Faith</a>, and aligns with the theological convictions held by the association as articulated by its Spiritual Heritage Committee and affirmed at the biennial EFCA conferences. Students who come from other denominations and traditions are welcome to study at this institution.
          </p>
        </div>
      </div>
    </>
  );
};

export default MissionVisionPage;
