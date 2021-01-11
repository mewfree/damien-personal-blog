import Typography from "typography";
import NoriegaTheme from "typography-theme-noriega";

delete NoriegaTheme.googleFonts;

// NoriegaTheme.overrideThemeStyles = ({ rhythm }, options) => ({
//   "h1,h2,h3,h4,h5,h6": {
//     marginTop: rhythm(1 / 2),
//   },
//   h1: {
//     fontWeight: 900,
//     letterSpacing: "-1px",
//   },
// });
// NoriegaTheme.scaleRatio = 5 / 2;

// Hot reload typography in development.
// if (process.env.NODE_ENV !== `production`) {
//   typography.injectStyles();
// }

const typography = new Typography(NoriegaTheme);

export default typography;
