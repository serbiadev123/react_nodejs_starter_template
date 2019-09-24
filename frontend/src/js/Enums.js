import Link from './helperClasses/Link';

export const LINKS = {
    HOME: new Link("Home", "home"),
    CONTACT_US: new Link("Contact", "contact"),
    ABOUT_US: new Link("About Us", "about"),
    DIVIDER: Link.DIVIDER,
    // DUMMY LINKS - TODO - remove later
    FEATURES: new Link("Features", "features"),
    PRICING: new Link("Pricing", "pricing"),
    ACTION: new Link("Action", "action"),
    ANOTHER_ACTION: new Link("Another Action", "another-action"),
    SOMETHING: new Link("Something", "something"),
    SEPERATED_LINK: new Link("Separated Link", "separated-link"),
}
