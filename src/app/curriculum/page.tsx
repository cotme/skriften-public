import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Curriculum",
  description: "Learn more about our curriculum and delivery methods.",
  // other metadata
};

const LearnMorePage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Curriculum"
        description="Learn more about our curriculum and delivery methods."
      />
      <div className="container mx-auto max-w-4xl px-4 space-y-10">
        <div>
          <h1 className="mb-3 text-4xl font-bold">What We Do</h1>
          <p className="mt-4 leading-relaxed">
            We are preparing to offer graduate-level theological education for men and women who may be called to vocational ministry. Our primary degree offering will be an 80-hour Master of Divinity (MDiv) degree, which will train students in four main ares: Bible, Language, Theology, and Church.</p>
        </div>
        <div>
          <h1 className="mb-3 text-4xl font-bold">MDiv</h1>
          <p className="mt-4 leading-relaxed">
            The Masters of Divinity (MDiv) is a professional degree that helps prepare students for pastoral ministry within the local church.</p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl leading-tight md:text-3xl">Bible (18 Hours)</h2>
              <p>
                The Bible segment of the MDiv degree will provide a basic framework to understand the Scriptures and their various genres, as well as provide an overview of Biblical Theology and interprative disciplens.
              </p>
            </div>
            <div>
              <h2 className="mb-4 text-3xl leading-tight md:text-3xl">Langauge (18 Hours)</h2>
              <p>
                The language segment will teach students both Koine Greek and Biblical Hebrew, as well as Exegesis Classes that will help studnets  understand how to apply their language skills to the task of teaching and preaching the Word of God.
              </p>
            </div>
            <div>
              <h2 className="mb-4 text-3xl leading-tight md:text-3xl">Theology (18 Hours)</h2>
              <p>
                The theology segment will offer students a comprehensive overview of systematic theology, as well as an introduction into historical theology, apologetics, ethics, and cultural exegesis.
              </p>
            </div>
            <div>
              <h2 className="mb-4 text-3xl leading-tight md:text-3xl">Church (26 Hours)</h2>
              <p>
                The church segment will give students a foundational understanding of the local church, the nature of pastoral care and leadership, preaching, evangelism, and discipleship. The capstone of this segment will prepare graduating students for credentialing within the Evangelical Free Church of America.
              </p>
            </div>
          </div>
          <div>
            <h1 className="mb-3 text-4xl font-bold">Modality</h1>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <h2 className="mb-4 text-3xl leading-tight md:text-3xl">Connected</h2>
                <p>
                  The word “Connected” refers to both the in-person and online aspects of the education. Students will be able to complete a bulk of their coursework and practical ministry expierence within their current context, however each semester will have one-week intensives offered in a learning environment, intentionally fostering relationships with the teacher and other students. This is “Life Together.” Through this approach, relationships can be formed while maintaining the flexibility and cost advantages of an online approach. The aim is to keep theological education from being reduced to an online-only experience and acknowledge that humans are embodied beings who thrive in relationship.
                </p>
              </div>
              <div>
                <h2 className="mb-4 text-3xl leading-tight md:text-3xl">Cohort</h2>
                <p>
                  Degree and class offerings will be designed around cohorts of students to matriculate through their program with the same peers from start to finish. This model will encourage personal relationship and connectedness that can enrich the seminary experience and provide friendships that carry into ministry for years and decades after graduation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default LearnMorePage;
