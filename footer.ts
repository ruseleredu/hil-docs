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
            title: "UTFPR",
            items: [
                {
                    label: "Moodle",
                    href: "https://moodle.utfpr.edu.br/",
                },
                {
                    label: "Webmail",
                    href: "https://webmail.utfpr.edu.br/",
                },
                {
                    label: "Sistemas",
                    href: "https://sistemas2.utfpr.edu.br/",
                },
                {
                    label: "SEI",
                    href: "https://sei.utfpr.edu.br/",
                },
                {
                    label: "Chat",
                    href: "https://chat.utfpr.edu.br/",
                },
                {
                    label: "Ajuda",
                    href: "https://ajuda.utfpr.edu.br/",
                },
                {
                    label: "Calendário",
                    href: "https://www.utfpr.edu.br/alunos/calendario",
                },
                {
                    label: "TCC",
                    href: "https://nupet.daelt.ct.utfpr.edu.br/tcc/engenharia/index.html",
                },
                {
                    label: "Nuvem",
                    href: "https://nuvem.utfpr.edu.br/",
                },
            ],
        },
        {
            title: "Ferramentas",
            items: [
                {
                    label: "CCStudio",
                    href: "https://www.ti.com/tool/CCSTUDIO",
                },
                {
                    label: "Visual Studio Code",
                    href: "https://code.visualstudio.com/download",
                },
                {
                    label: "Git SCM",
                    href: "https://git-scm.com/downloads",
                },
                {
                    label: "GitHub CLI",
                    href: "https://cli.github.com/",
                },
                {
                    label: "GitHub Desktop",
                    href: "https://desktop.github.com/download/",
                },
                {
                    label: "WinGet",
                    href: "https://winget.run/",
                },
            ],
        },
        {
            title: "TI",
            items: [
                {
                    label: "TMDSCNCD28379D",
                    href: "https://www.ti.com/tool/TMDSCNCD28379D",
                },
                {
                    label: "LAUNCHXL-F28379D",
                    href: "https://www.ti.com/tool/LAUNCHXL-F28379D",
                },
                {
                    label: "LAUNCHXL-F28069M",
                    href: "https://www.ti.com/tool/LAUNCHXL-F28069M",
                },
                {
                    label: "C2000WARE",
                    href: "https://www.ti.com/tool/C2000WARE",
                },
                {
                    label: "C28X-ACADEMY",
                    href: "https://dev.ti.com/tirex/explore/node?isTheia=false&node=A__AEIJm0rwIeU.2P1OBWwlaA__C28X-ACADEMY__1sbHxUB__LATEST",
                },
            ],
        },
        {
            title: "AI", //
            items: [
                {
                    label: "Gemini",
                    href: "https://gemini.google.com/app",
                }, //
                {
                    label: "ChatGPT",
                    href: "https://chatgpt.com/",
                }, //
                {
                    label: "Claude",
                    href: "https://claude.ai/",
                },
                {
                    label: "Copilot",
                    href: "https://copilot.microsoft.com/",
                },
                {
                    label: "DeepSeek",
                    href: "https://chat.deepseek.com/",
                },
                {
                    label: "Grok",
                    href: "https://grok.com/",
                },
                {
                    label: "Kimi",
                    href: "https://www.kimi.com/en",
                },
                {
                    label: "GLM",
                    href: "https://chat.z.ai/",
                },
            ],
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
