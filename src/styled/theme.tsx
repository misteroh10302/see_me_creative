
export const theme = {
   fontSize: '10px',
   zIndex: {
       high: 1000
   },
   font: {
       serif:  "Times NR Condensed",
       sans: "Roboto",
       seeSans: "Druk"
   },
   padding: {
       sectionVertical: "8rem",
       desktop: "3rem"
   },
   colors: {
       green: "#00FF00",
       orange: "#F18923",
       yellow: "#FFFF00",
       blue: "#00FFFF"
   },
   p: {
       fontSize: "3rem",
       letterSpacing: "-.55px",
       lineHeight: "3.6rem"
   },
   tags: {
       fontSize: "1.5rem"
   },
   heading1: {
       fontSize: "4rem",
       letterSpacing: "-.55px",
       lineHeight: "4.6rem"
   },
   heading2: {
    fontSize: "3rem",
    letterSpacing: "-.37px",
    lineHeight: "3.6rem"
    },
    projectHeader: {
        fontSize: "4.6rem",
        letterSpacing: "-.66px",
        lineHeight: "44rem"
    }, size: {
        mobileS: '320px',
        mobileM: '375px',
        mobileL: '425px',
        tablet: '768px',
        laptop: '1024px',
        laptopL: '1440px',
        desktop: '2560px'
    }
};

export const device = {
    mobileS: `(min-width: ${theme.size.mobileS})`,
    mobileM: `(min-width: ${theme.size.mobileM})`,
    mobileL: `(min-width: ${theme.size.mobileL})`,
    tablet: `(min-width: ${theme.size.tablet})`,
    laptop: `(min-width: ${theme.size.laptop})`,
    laptopL: `(min-width: ${theme.size.laptopL})`,
    desktop: `(min-width: ${theme.size.desktop})`,
    desktopL: `(min-width: ${theme.size.desktop})`
  };