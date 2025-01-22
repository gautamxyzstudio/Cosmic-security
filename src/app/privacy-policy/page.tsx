import Description, {
  IDescriptionTypes,
} from "@/components/textTypes/Description";
import Heading, {
  IHeadingTags,
  IHeadingTypes,
} from "@/components/textTypes/Heading";
import React from "react";
const Section = ({
  title,
  paragraphs,
}: {
  title: string;
  paragraphs: string[];
}) => (
  <div className="flex flex-col gap-y-3 lg:gap-y-4">
    <Heading
      content={title}
      tagType={IHeadingTags.h3}
      type={IHeadingTypes.heading40}
    />
    <div className="flex flex-col gap-y-2 lg:gap-y-3">
      {paragraphs.map((text, index) => (
        <Description
          key={index}
          content={text}
          type={IDescriptionTypes.dec20}
        />
      ))}
    </div>
  </div>
);
const PrivacyPolicy = () => {
  const sections = [
    {
      title: "I. Personal Information:",
      paragraphs: [
        "We do not collect personally identifiable information about you, unless you choose to fill your personal information on our website. Predominantly, you may browse our website without providing any personally identifiable information about yourself. However, we collect information that you supply to us when you personally choose to contact us for more information. You supply the information directly to us or indirectly by using credentials from third parties such as Facebook, Twitter, Google+ or LinkedIn. This data includes your name, date of birth, email address, contact number, contact address or other similar information. This information collected by us is used to respond to your inquiry to develop products, services and programs or process an order.",
        "We do gather certain non-personally identifiable information such as standard web log information for functionality, device and software information, carrier and connection information for all visitors of our websites. We may use this information to analyse trends and statistics so as to help us provide you with better services.",
        "We may share your information with other  Cosmic Security offices world-wide or with our partners. We may occasionally transfer or share your information with third parties who perform certain services on our behalf. However, such third parties have agreed to only use such information on behalf of  Cosmic Security. We reserve the right to disclose your Information with legal and regulatory bodies or pursuant to a judicial order for compliance.",
        "Further, in the event we decide to reorganize, sell or transfer all or part of our business, we may share your Information with third parties involved in such transactions. Even in such circumstances, we will obtain written assurances that the information provided by you will be appropriately protected.",
      ],
    },
    {
      title: "II. Use of Cookies:",
      paragraphs: [
        "Our website uses cookies. Cookies are small text files of information which save and retrieve information about your visit to our website. Cookies, by themselves, do not give us any personally identifiable information about you unless you choose to provide this information to us. A cookie is like an identification card. It is unique to your computer and can only be read by the server that gave it to you.",
        "We use cookies to understand site usage and to improve the content and offerings on our website. We use cookies to personalize your experience on our webpage.",
        "If you do not want information collected through the use of cookies, there is a simple procedure in most browsers that allows you to deny or accept the cookie feature. However, if you do not configure your browser, you will accept cookies provided by this website. Note that certain features of our products and services may not function properly without the aid of cookies.",
      ],
    },
    {
      title: "III. Security:",
      paragraphs: [
        "We use reasonable administrative, technical, and physical security measures to protect the information from unauthorized access, use, loss, or destruction. Information provided by you is stored on a secured web server managed by  Cosmic Security or an agent of  Cosmic Security performing services on our behalf.",
        "Despite having created a secure and reliable website for you, the confidentiality of any information, communication, or material transmitted over the internet, especially unencrypted data, can be read by third parties. Therefore, we request you to exercise utmost discretion while providing sensitive confidential information. You also acknowledge that the use of the internet and this website is solely at your own risk.",
      ],
    },
    {
      title: "IV. Links to other Websites:",
      paragraphs: [
        " Cosmic Security may provide links to other third-party websites and services. However,  Cosmic Security is not responsible for privacy statements, practices, or the contents of such third-party websites.",
      ],
    },
    {
      title: "V. Access to your Personal Information:",
      paragraphs: [
        "You may access, update, or correct your Personal Information that we hold, including your profile and preferences. You may do so by contacting us at email@xyz.studio.",
        "You may also request us to delete your personal information by sending a request to email@xyz.studio. We will implement reasonable efforts to delete your personal information, though there may be some delay in deleting such data, and we don’t guarantee complete or comprehensive removal of the content or information you may have posted or otherwise made available through our website.",
      ],
    },
    {
      title: "VI. Authenticity:",
      paragraphs: [
        " Cosmic Security shall not be responsible for the authenticity of the information you provide and therefore it is your duty to ensure that the information provided by you is authentic.",
      ],
    },
    {
      title: "VII. Children:",
      paragraphs: [
        "Our web-site is directed to people in their business and professional capacity only. It is not intended for children under thirteen (13) years of age. Therefore, we do not knowingly/unknowingly solicit data or market it to children under the age of thirteen (13).",
      ],
    },
    {
      title: "VIII. Grievance Redressal:",
      paragraphs: [
        "Any grievances or complaints, in relation to processing of information, should be addressed to  Cosmic Security in writing to the following contact email: email@xyz.studio. Grievances shall be redressed as expeditiously as possible.",
      ],
    },
    {
      title: "IX. Changes to this Policy:",
      paragraphs: [
        "We reserve the right to update our Privacy Policy as and when need arises so as to reflect our current privacy practices. When we make certain changes, we will revise the “last updated” date at the top of this page. But our commitment to protect the privacy of website users will continue to remain.",
      ],
    },
  ];

  return (
    <div className="p-6 py-14 lg:px-20 lg:py-20 flex flex-col gap-y-6 lg:gap-y-10 ">
      <div className="flex flex-col gap-y-3 lg:gap-y-4">
        <Heading
          content="Privacy Policy"
          tagType={IHeadingTags.h3}
          type={IHeadingTypes.heading56}
        />
        <Description
          type={IDescriptionTypes.dec24}
          content="Cosmic Security is committed to respecting your privacy and choices while using our website. This policy applies to information collected by us on our website."
        />
      </div>

      {sections.map((section, index) => (
        <Section
          key={index}
          title={section.title}
          paragraphs={section.paragraphs}
        />
      ))}
    </div>
  );
};

export default PrivacyPolicy;
