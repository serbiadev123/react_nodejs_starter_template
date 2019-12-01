import Link from './helperClasses/Link';

export const ICONS = {
    HOME: "home",
    COFFEE: "coffee",
    ARROW_DOWN: "arrow-down",
    ARROW_UP: "arrow-right"
    // @TODO: add more icons when needed, also incluse in the library in the app.js
};

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
    LOGOUT: new Link("Logout", "/logout")
};


export const ADMIN_SUB_LINKS = {
    DASHBOARD_FIRST: new Link("First", "/admin/home/first"),
    DASHBOARD_SECOND: new Link("Second", "/admin/home/second"),
    APPS_FIRST: new Link("First", "/admin/apps/first"),
    APPS_SECOND: new Link("Second", "/admin/apps/second"),
    APPS_THIRD: new Link("Third", "/admin/apps/third"),
    PAGES_FIRST: new Link("First", "/admin/pages/first"),
    PAGES_SECOND: new Link("Second", "/admin/pages/second"),
    PAGES_THIRD: new Link("Third", "/admin/pages/third"),
};

export const ADMIN_LINKS = {
    DASHBOARD: new Link("Home", "", [
        ADMIN_SUB_LINKS.DASHBOARD_FIRST,
        ADMIN_SUB_LINKS.DASHBOARD_SECOND,
    ], ICONS.COFFEE),
    APPS: new Link("Apps", "", [
        ADMIN_SUB_LINKS.APPS_FIRST,
        ADMIN_SUB_LINKS.APPS_SECOND,
        ADMIN_SUB_LINKS.APPS_THIRD,
    ], ICONS.COFFEE),
    PAGES: new Link("Pages", "", [
        ADMIN_SUB_LINKS.PAGES_FIRST,
        ADMIN_SUB_LINKS.PAGES_SECOND,
        ADMIN_SUB_LINKS.PAGES_THIRD,
    ], ICONS.COFFEE),
    // admin avatar(profile icon) links
    USER_ACCOUNT: new Link("My Account", "/admin/myaccount"),
    SETTINGS: new Link("Settings", "/admin/settings")
};

