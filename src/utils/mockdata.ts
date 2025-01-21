import { IHomeServiceCardProps } from "@/appComponents/home/HomeServiceCard";
import { images } from "../../public/exporter";

export interface serviceCard extends IHomeServiceCardProps {
  id: number;
}

export const servicesCardData: serviceCard[] = [
  {
    id: 1,
    title: "Event Security",
    description:
      "Cosmic Security excels in event security, ensuring seamless protection for gatherings of any scale. Our trained professionals prioritize the safety of your event, allowing you to focus on its success.",
    cardImage: images.SERVICE_CARD_ONE,
  },
  {
    id: 2,
    title: "Construction Site Security",
    description:
      "Cosmic Security's mobile patrol service delivers proactive protection, ensuring a visible and responsive presence across various locations. Our mobile patrols provide dynamic security solutions tailored to your specific needs",
    cardImage: images.SERVICE_CARD_TWO,
  },
  {
    id: 3,
    title: "Shopping Mall & Store Security",
    description:
      "Cosmic Security's mobile patrol service delivers proactive protection, ensuring a visible and responsive presence across various locations. Our mobile patrols provide dynamic security solutions tailored to your specific needs",
    cardImage: images.SERVICE_CARD_THREE,
  },
  {
    id: 4,
    title: "CCTV Surveillance",
    description:
      "Cosmic Security's mobile patrol service delivers proactive protection, ensuring a visible and responsive presence across various locations. Our mobile patrols provide dynamic security solutions tailored to your specific needs",
    cardImage: images.SERVICE_CARD_FOUR,
  },
  {
    id: 5,
    title: "Event Security",
    description:
      "Cosmic Security excels in event security, ensuring seamless protection for gatherings of any scale. Our trained professionals prioritize the safety of your event, allowing you to focus on its success.",
    cardImage: images.SERVICE_CARD_ONE,
  },
  {
    id: 6,
    title: "Construction Site Security",
    description:
      "Cosmic Security's mobile patrol service delivers proactive protection, ensuring a visible and responsive presence across various locations. Our mobile patrols provide dynamic security solutions tailored to your specific needs",
    cardImage: images.SERVICE_CARD_TWO,
  },
  {
    id: 7,
    title: "Shopping Mall & Store Security",
    description:
      "Cosmic Security's mobile patrol service delivers proactive protection, ensuring a visible and responsive presence across various locations. Our mobile patrols provide dynamic security solutions tailored to your specific needs",
    cardImage: images.SERVICE_CARD_THREE,
  },
  {
    id: 8,
    title: "CCTV Surveillance",
    description:
      "Cosmic Security's mobile patrol service delivers proactive protection, ensuring a visible and responsive presence across various locations. Our mobile patrols provide dynamic security solutions tailored to your specific needs",
    cardImage: images.SERVICE_CARD_FOUR,
  },
];

export const phoneNumber = "+1-833-926-7642";
export const emailAddress = "info@thecosmicsecurity.com";
