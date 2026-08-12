import Breadcrumb from "@/components/Common/Breadcrumb";
import BiblicalPrinciple from "@/components/Principles/biblicaltheological";
import CommunalPrinciple from "@/components/Principles/communal";
import EcclesiologicalPrinciple from "@/components/Principles/ecclesiological";
import MissionalPrinciple from "@/components/Principles/missional";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Founding Principles",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const PrinciplePage = () => {
  return (
    <>
      {<Breadcrumb
        pageName="Founding Principles"
      description="An institution’s founding principles are the guiding core values that shape its culture, decisionmaking, and practices. There are four founding principles that are deemed essential for a theological seminary. The following four principles are intended to give definition and support for the creation of Skriften Theological Seminary, and are each rooted in a significant charge drawn from Scripture for the church of Christ."
      />}
      <div className="container mx-auto max-w-4xl px-4 space-y-10">
          <BiblicalPrinciple />
          <MissionalPrinciple />
          <EcclesiologicalPrinciple />
          <CommunalPrinciple />
      </div>
    </>
  );
};

export default PrinciplePage;