// only 2 level drop down supported for now
class Link {
    name = "";
    icon = "";
    relativeUrl = "";
    absoluteUrl = "";
    subMenu = [];

    constructor(name, relativeUrl, subMenu = [], icon = "") {
        this.name = name;
        this.icon = icon;
        this.relativeUrl = relativeUrl;
        this.absoluteUrl = Link.buildAbsolutePath(relativeUrl);
        this.subMenu = subMenu;
    }
}

Link.DIVIDER = "divider";
Link.siteUrl = process.env.REACT_APP_SERVER_URL;
Link.SEPARATOR = '/';
Link.buildAbsolutePath = function(relativePath) {
    let absolutePath;

    if (Link.siteUrl.endsWith('/') || Link.siteUrl.endsWith('\\')) {
        absolutePath = Link.siteUrl.substring(Link.siteUrl.length - 1);
    } else {
        absolutePath = Link.siteUrl;
    }

    if (relativePath.startsWith('/') || relativePath.startsWith('\\')) {
        absolutePath += relativePath;
    } else {
        absolutePath += Link.SEPARATOR + relativePath;
    }

    return absolutePath;
}

/**
 * checks if some link exists in array of links.
 * settings:
 *  - exact: finds the exact link
 */
Link.findPathInLinks = function(path, links, settings = {}) {
    let doesExist = links.some((link)=>{
        let currentPath = link.relativeUrl;
        let stringQueryStart = settings.exact ? -1 : currentPath.search(/[?]/g);

        return currentPath.substring(0, stringQueryStart !== -1 ? stringQueryStart : currentPath.length) === path;        
    });
    return doesExist;
}
export default Link;
