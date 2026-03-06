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
        type: "dropdown",
        items: [
            {
                to: "/hil/academy",
                label: "Academy",
            },
            {
                to: "/hil/hil402",
                label: "HIL402",
            },
            {
                to: "/hil/thcc",
                label: "Control Center",
            },
            {
                to: "/hil/interfaces",
                label: "Interfaces",
            },
        ],
    },
    {
        to: '/ti/intro', // Link to a page in your API docs
        label: 'TI',
        position: 'left',
        activeBaseRegex: `/ti/`, // Highlight when any API doc is active
        type: "dropdown",
        items: [
            {
                to: "/ti/launchpad",
                label: "LaunchPads",
            },
            {
                to: "/ti/hsec180",
                label: "controlCARD",
            },
            {
                to: "/ti/microcontrollers",
                label: "Microcontrollers",
            },
            {
                to: "/ti/c2000ware",
                label: "C2000WARE",
            },
            {
                to: "/ti/ccstudio",
                label: "CCStudio",
            },
        ],
    },
    {
        to: '/win/intro', // Link to a page in your API docs
        label: 'Win',
        position: 'left',
        activeBaseRegex: `/win/`, // Highlight when any API doc is active
        type: "dropdown",
        items: [
            {
                to: "/win/winget",
                label: "WinGet",
            },
        ],
    },
    //{ to: '/blog', label: 'Blog', position: 'left' },
    {
        href: 'https://github.com/ruseleredu/hil-docs',
        label: 'GitHub',
        position: 'right',
    },
];

export default navbarItems;
