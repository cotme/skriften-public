import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Statement of Faith",
  description: "The Evangelical Free Church of America is an association of autonomous churches united around these theological convictions:",
  // other metadata
};

const StatmentOfFaithPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Statement of Faith"
        description="The Evangelical Free Church of America is an association of autonomous churches united around these theological convictions:"
      />
      <div className="container mx-auto max-w-4xl px-4 space-y-10">
        <div>
          <h1 className="mt-4 text-4xl font-bold">God</h1>
          <p className="mt-2 leading-relaxed">
            We believe in one God, Creator of all things, holy, infinitely perfect, and eternally existing in a loving unity of three equally divine Persons: the Father, the Son and the Holy Spirit. Having limitless knowledge and sovereign power, God has graciously purposed from eternity to redeem a people for Himself and to make all things new for His own glory.          </p>
        </div>
        <div>
          <h1 className="text-4xl font-bold">The Bible</h1>
          <p className="mt-2 leading-relaxed">
            We believe that God has spoken in the Scriptures, both Old and New Testaments, through the words of human authors. As the verbally inspired Word of God, the Bible is without error in the original writings, the complete revelation of His will for salvation, and the ultimate authority by which every realm of human knowledge and endeavor should be judged. Therefore, it is to be believed in all that it teaches, obeyed in all that it requires, and trusted in all that it promises.
          </p>
        </div>
        <div>
          <h1 className="text-4xl font-bold">The Human Condition</h1>
          <p className="mt-2 leading-relaxed">
            We believe that God created Adam and Eve in His image, but they sinned when tempted by Satan. In union with Adam, human beings are sinners by nature and by choice, alienated from God, and under His wrath. Only through God&apos;s saving work in Jesus Christ can we be rescued, reconciled and renewed.
          </p>
        </div>
        <div>
          <h1 className="text-4xl font-bold">Jesus Christ</h1>
          <p className="mt-2 leading-relaxed">
            We believe that Jesus Christ is God incarnate, fully God and fully man, one Person in two natures. Jesus—Israel&apos;s promised Messiah—was conceived through the Holy Spirit and born of the virgin Mary. He lived a sinless life, was crucified under Pontius Pilate, arose bodily from the dead, ascended into heaven and sits at the right hand of God the Father as our High Priest and Advocate.
          </p>
        </div>
        <div>
          <h1 className="text-4xl font-bold">The Work of Christ</h1>
          <p className="mt-2 leading-relaxed">
            We believe that Jesus Christ, as our representative and substitute, shed His blood on the cross as the perfect, all-sufficient sacrifice for our sins. His atoning death and victorious resurrection constitute the only ground for salvation.
          </p>
        </div>
        <div>
          <h1 className="text-4xl font-bold">The Holy Spirit</h1>
          <p className="mt-2 leading-relaxed">
            We believe that the Holy Spirit, in all that He does, glorifies the Lord Jesus Christ. He convicts the world of its guilt. He regenerates sinners, and in Him they are baptized into union with Christ and adopted as heirs in the family of God. He also indwells, illuminates, guides, equips and empowers believers for Christ-like living and service.
          </p>
        </div>
        <div>
          <h1 className="text-4xl font-bold">The Church</h1>
          <p className="mt-2 leading-relaxed">
            We believe that the true church comprises all who have been justified by God&apos;s grace through faith alone in Christ alone. They are united by the Holy Spirit in the body of Christ, of which He is the Head. The true church is manifest in local churches, whose membership should be composed only of believers. The Lord Jesus mandated two ordinances, baptism and the Lord&apos;s Supper, which visibly and tangibly express the gospel. Though they are not the means of salvation, when celebrated by the church in genuine faith, these ordinances confirm and nourish the believer.
          </p>
          </div>
          <div>
            <h1 className="text-4xl font-bold">Christian Living</h1>
            <p className="mt-2 leading-relaxed">
              We believe that God&apos;s justifying grace must not be separated from His sanctifying power and purpose. God commands us to love Him supremely and others sacrificially, and to live out our faith with care for one another, compassion toward the poor and justice for the oppressed. With God&apos;s Word, the Spirit&apos;s power, and fervent prayer in Christ&apos;s name, we are to combat the spiritual forces of evil. In obedience to Christ&apos;s commission, we are to make disciples among all people, always bearing witness to the gospel in word and deed.
            </p>
          </div>
          <div>
            <h1 className="text-4xl font-bold">Christ&apos;s Return</h1>
            <p className="mt-2 leading-relaxed">
              We believe in the personal, bodily and glorious return of our Lord Jesus Christ. The coming of Christ, at a time known only to God, demands constant expectancy and, as our blessed hope, motivates the believer to godly living, sacrificial service and energetic mission.
            </p>
          </div>
          <div>
            <h1 className="text-4xl font-bold">Response and Eternal Destiny</h1>
            <p className="mt-2 leading-relaxed">
              We believe that God commands everyone everywhere to believe the gospel by turning to Him in repentance and receiving the Lord Jesus Christ. We believe that God will raise the dead bodily and judge the world, assigning the unbeliever to condemnation and eternal conscious punishment and the believer to eternal blessedness and joy with the Lord in the new heaven and the new earth, to the praise of His glorious grace. Amen.
            </p>
          </div>
        </div>

    </>
  );
};

export default StatmentOfFaithPage;
