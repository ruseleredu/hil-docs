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
        // ... rest of your links
    ],
    copyright: COPYRIGHT_STRING,
};

export default footer;