import { NavbarItem } from "@docusaurus/theme-common";

const navbarItems: NavbarItem[] = [
    {
        type: 'docSidebar',
        sidebarId: 'tutorialSidebar',
        position: 'left',
        label: 'Tutorial',
    },
    {
        to: '/hil/intro', // Link to a page in your API docs
        label: 'HIL',
        position: 'left',
        activeBaseRegex: `/hil/`, // Highlight when any API doc is active
    },
    { to: '/blog', label: 'Blog', position: 'left' },
    {
        href: 'https://github.com/ruseleredu/hil-docs',
        label: 'GitHub',
        position: 'right',
    },
];

export default navbarItems;
