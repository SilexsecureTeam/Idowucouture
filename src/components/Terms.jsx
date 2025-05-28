import term from "../assets/term.png";
import Secondletter from "./Secondletter";

const Terms = () => {
  return (
    <div>
      <div className="relative w-full h-[50vh] overflow-hidden">
        <div className="absolute inset-0 min-w-[100vw] min-h-[50vh]">
          <img
            src={term}
            alt="term"
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-[#E0B654] px-5 py-3 md:text-5xl text-2xl font-bold text-white">
          Terms & Condition
        </div>
      </div>

      <div className="px-5 md:px-10 text-black lg:px-20 py-20">
        {/* <h2 className="font-bold mon text-[24px] md:text-[40px] mb-4">
          Terms & Condition
        </h2> */}
        <h3 className="font-bold mon text-[20px] md:text-[30px] mb-4">
          Introduction
        </h3>
        <h4 className="font-normal mon text-[15px] md:text-[18px] mb-4">
          These Website Standard Terms and Conditions written on this webpage
          shall manage your use of our website, ReyTheme accessible at
          www.gallerbebe.com <br />
          These Terms will be applied fully and affect to your use of this
          Website. By using this Website, you agreed to accept all terms and
          conditions written in here. You must not use this Website if you
          disagree with any of these Website Standard Terms and Conditions.{" "}
          <br />
          Minors or people below 18 years old are not allowed to use this
          Website.
        </h4>
        <h3 className="font-bold mon text-[20px] md:text-[30px] mb-4">
          {" "}
          Intellectual Property Rights
        </h3>
        <h4 className="font-normal mon text-[15px] md:text-[18px] mb-4">
          {" "}
          Other than the content you own, under these Terms, Rey Theme and/or
          its licensors own all the intellectual property rights and materials
          contained in this Website. <br />
          You are granted limited license only for purposes of viewing the
          material contained on this Website.{" "}
        </h4>
        <h3 className="font-bold mon text-[20px] md:text-[30px] mb-4">
          {" "}
          Restrictions
        </h3>
        <h4 className="font-normal mon text-[15px] md:text-[18px] mb-2">
          {" "}
          You are specifically restricted from all of the following:{" "}
        </h4>
        <ul className="list-disc pl-4 mb-4">
          <li className="font-normal mon text-[15px] md:text-[18px] mb-1.5 ml-5 marker:text-sm marker:text-black">
            {" "}
            publishing any Website material in any other media;{" "}
          </li>
          <li className="font-normal mon text-[15px] md:text-[18px] mb-1.5 ml-5 marker:text-sm marker:text-black">
            selling, sublicensing and/or otherwise commercializing any Website
            material;{" "}
          </li>
          <li className="font-normal mon text-[15px] md:text-[18px] mb-1.5 ml-5 marker:text-sm marker:text-black">
            publicly performing and/or showing any Website material;{" "}
          </li>
          <li className="font-normal mon text-[15px] md:text-[18px] mb-1.5 ml-5 marker:text-sm marker:text-black">
            using this Website in any way that is or may be damaging to this
            Website;{" "}
          </li>
          <li className="font-normal mon text-[15px] md:text-[18px] mb-1.5 ml-5 marker:text-sm marker:text-black">
            using this Website in any way that impacts user access to this
            Website;{" "}
          </li>
          <li className="font-normal mon text-[15px] md:text-[18px] mb-1.5 ml-5 marker:text-sm marker:text-black">
            using this Website contrary to applicable laws and regulations, or
            in any way may cause harm to the Website, or to any person or
            business entity;{" "}
          </li>
          <li className="font-normal mon text-[15px] md:text-[18px] mb-1.5 ml-5 marker:text-sm marker:text-black">
            engaging in any data mining, data harvesting, data extracting or any
            other similar activity in relation to this Website;{" "}
          </li>
          <li className="font-normal mon text-[15px] md:text-[18px] mb-1.5 ml-5 marker:text-sm marker:text-black">
            using this Website to engage in any advertising or marketing.{" "}
          </li>
        </ul>
        <h4 className="font-normal mon text-[15px] md:text-[18px] mb-2">
          Certain areas of this Website are restricted from being access by you
          and Rey Theme may further restrict access by you to any areas of this
          Website, at any time, in absolute discretion. Any user ID and password
          you may have for this Website are confidential and you must maintain
          confidentiality as well.{" "}
        </h4>
        <h3 className="font-bold mon text-[20px] md:text-[30px] mb-4">
          {" "}
          Your Content
        </h3>
        <h4 className="font-normal mon text-[15px] md:text-[18px] mb-4">
          In these Website Standard Terms and Conditions, “Your Content” shall
          mean any audio, video text, images or other material you choose to
          display on this Website. By displaying Your Content, you grant Rey
          Theme a non-exclusive, worldwide irrevocable, sub licensable license
          to use, reproduce, adapt, publish, translate and distribute it in any
          and all media. <br />
          Your Content must be your own and must not be invading any
          third-party’s rights. Rey Theme reserves the right to remove any of
          Your Content from this Website at any time without notice.
        </h4>
        <h3 className="font-bold mon text-[20px] md:text-[30px] mb-4">
          {" "}
          Your Privacy
        </h3>
        <h4 className="font-normal mon text-[15px] md:text-[18px] mb-4">
          Please read Privacy Policy.
        </h4>
        <h3 className="font-bold mon text-[20px] md:text-[30px] mb-4">
          {" "}
          No warranties
        </h3>
        <h4 className="font-normal mon text-[15px] md:text-[18px] mb-4">
          This Website is provided “as is,” with all faults, and Rey Theme
          express no representations or warranties, of any kind related to this
          Website or the materials contained on this Website. Also, nothing
          contained on this Website shall be interpreted as advising you. <br />
          Limitation of liability <br />
          In no event shall Rey Theme, nor any of its officers, directors and
          employees, shall be held liable for anything arising out of or in any
          way connected with your use of this Website whether such liability is
          under contract. Rey Theme, including its officers, directors and
          employees shall not be held liable for any indirect, consequential or
          special liability arising out of or in any way related to your use of
          this Website.{" "}
        </h4>
        <h3 className="font-bold mon text-[20px] md:text-[30px] mb-4">
          Indemnification
        </h3>
        <h4 className="font-normal mon text-[15px] md:text-[18px] mb-4">
          You hereby indemnify to the fullest extent Rey Theme from and against
          any and/or all liabilities, costs, demands, causes of action, damages
          and expenses arising in any way related to your breach of any of the
          provisions of these Terms.
        </h4>
        <div className="mt-25">
          <Secondletter />
        </div>
      </div>
    </div>
  );
};

export default Terms;
