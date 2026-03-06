import { ThemeConfig } from "@docusaurus/preset-classic";

const formatter = new Intl.DateTimeFormat("pt-BR", {
    timeZone: "America/Sao_Paulo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23", // Use 24-hour format
});
const utc3Time = formatter.format(new Date());
const doclink = '<a href="https://docusaurus.io/" style="color: #ffffff; font-weight: bold;" target="_blank" rel="noopener noreferrer">Docusaurus</a>';
const gitlink = '<a href="https://github.com/ruseleredu/hil-docs" style="color: #ffffff; font-weight: bold;" target="_blank" rel="noopener noreferrer">hil-docs</a>';
const COPYRIGHT_STRING = `Copyright © ${new Date().getFullYear()} ${gitlink}. Built with ${doclink} at ${utc3Time} UTC-3.`;

const footer: ThemeConfig["footer"] = {
    style: "dark",
    links: [
        {
            title: "Docs",
            items: [{ label: "Tutorial", to: "/docs/intro" }],
        },
        {
            title: "HIL Interfaces",
            items: [
                { label: "Connect", to: "/hil/Interfaces/hil-connect" },
                { label: "Breakout Board", to: "/hil/Interfaces/hil-breakout-board" },
                { label: "Combined Charging System", to: "/hil/Interfaces/hil-ccs-interface-card" },
                { label: "TI LaunchPad Interface", to: "/hil/Interfaces/hil-ti-launchpad-interface" },
                { label: "TI DSP 180", to: "/hil/Interfaces/hil-ti-dsp-180-interface" },
                { label: "TI μGrid LaunchPad", to: "/hil/Interfaces/hil-ti-ugrid-launchpad-interface" },
                { label: "Infineon", to: "/hil/Interfaces/hil-infineon-interface-cards" },
                { label: "dSpace", to: "/hil/Interfaces/hil-dspace-interface-cards" },
                { label: "Calibration", to: "/hil/Interfaces/hil-calibration-cards" },
                { label: "Nucleo - 64", to: "/hil/Interfaces/hil-nucleo-64-interface-card" }
            ],
        },
        // ... rest of your links
    ],
    copyright: COPYRIGHT_STRING,
};

export default footer;
