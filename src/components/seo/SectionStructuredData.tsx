
import { BUSINESS_STRUCTURED_DATA } from "./businessStructuredData";
import { FAQ_STRUCTURED_DATA } from "./faqStructuredData";
import { WEBSITE_STRUCTURED_DATA } from "./websiteStructuredData";
import { SECTIONS_STRUCTURED_DATA } from "./sectionsStructuredData";
import { HOWTO_STRUCTURED_DATA } from "./howToStructuredData";
import { EVENT_STRUCTURED_DATA } from "./eventStructuredData";

// Return structured data objects instead of React components
export const getStructuredData = () => {
  return [
    BUSINESS_STRUCTURED_DATA,
    FAQ_STRUCTURED_DATA,
    WEBSITE_STRUCTURED_DATA,
    ...SECTIONS_STRUCTURED_DATA,
    HOWTO_STRUCTURED_DATA,
    ...EVENT_STRUCTURED_DATA
  ];
};
