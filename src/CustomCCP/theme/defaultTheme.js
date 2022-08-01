/* eslint-disable id-length */ // Doesn't make sense for this file

// Taken from standard colors - will be updated for CCP
export const palette = {
    white: "#FFFFFF", // white
    alabaster: "#FBFBFB", // basically white
    concrete: "#F3F3F3", // even lighter grey
    haze: "#F7F7F7", // invisible grey
    alto: "#DDDDDD", // light grey
    darkgold: "#E27710",
    darkerGold: "#8A480A", // darker gold for hover
    whiteSmoke: "#EFEFEF",
    mercury: "#F2F2F2", // lighter grey
    zumthor: "#EBF5FF", // background blue
    water: "#CEE5F6", // hover blue
    mango: "#E77600", // focus orange
    danube: "#6D9CCF", // border blue
    silver: "#BFBFBF", // medium grey
    inkwell: "#232F3E", // inkwell blue
    shuttle: "#556478", // inkwell blue 75
    azure: "#326295", // selected blue
    icyblue: "#4a596c",
    black: "rgba(0,0,0,0.74)", // mostly black
    secondaryBlack: "#222222",
    bronzeBlack: '#111111',
    emperor: "#555555", // dark grey
    boulder: "#767676", // light dark grey
    dustyGray: "rgba(242, 242, 242, 0.49)",
    dustyGrayOpaque: "rgba(242, 242, 242)",
    darkGray: "#4A4A4A",
    lightGray: "#CCCCCC",
    mediumGrayAlt: "#777777",
    mediumGray: "#666666",
    whisper: "#EDEDED", // whisper / Gray93
    rust: "#C45500", // rust brown
    green: "#117E26", // green
    darkGreen: "#0B4115", // dark green
    lightGreen: "#AADFB4", // light green
    lightBlue: "#E8F6F8", //light blue
    red: "#D0021B", // red
    darkRed: "#760410", // dark red
    yellow: "#F5A623",
    lightYellow: "#FDDF93",
    night: "#002B4F", // data viz 0
    aqua: "#2E8CB8", // data viz 1
    tangerine: "#DD7703", // data viz 2
    raspberry: "#A3317B", // data viz 3
    moss: "#678227", // data viz 4
    indigo: "#4F4FCD", // data viz 5
    apple: "#33C336", // high keyword traffic
    tea: "#BFEBB8", // med keyword traffic
    ghost: "#F5F9FA", // info callout bg
    honeydew: "#EFF5ED", // success callout bg
    linen: "#FFF5E9", // warning callout bg
    blush: "#FBEDED", // error callout bg
    tbd: "transparent", // TBD COLORS
    brown: "#47596E",
    blue: "#257CAF",
    darkBlue: "#415266",
    mediumBlue: "#004A75", // hover blue color
    astral: "#377f9b",
    lightRed: "#fcecee",
    pureRed: "#ff0000"
  };
  
  const lightPalette = {
    mediumGray: "#D1D1D1",
    darkerGray: "#949494", //WAI requirement of contrast 3.1, so mediumGray is not contrast enough with white background 
    green: "#E1EFE1",
    blue: "#C2E1F3",
    darkerBlue: "#389AD6", //WAI requirement of contrast 3.1, so mediumGray is not contrast enough with white background 
    yellow: "#FCE4BD"
  };
  
  // Spacing
  // ---------
  // Raw values, in pixels
  const spacingValues = {
    nano: 0.188, // 3px
    micro: 0.3125, // 5px
    mini: 0.375, // 6px
    mid: 0.5,
    small: 0.625, // 10px
    regular: 0.75,
    base: 0.875, // 14px
    medium: 1.125, // 18px
    large: 1.25, // 20
    xlarge: 1.625, // 26
    xxlarge: 2.75 // 44
  };
  const spacing = {};
  Object.keys(spacingValues).forEach(key => {
    spacing[key] = `${spacingValues[key]}rem`;
  });
  
  //  Defaults
  // ---------
  
  const fonts = {
    regular: "AmazonEmber",
  };
  
  const fontsSize = {
    mini: "0.75rem", //12px
    small: "0.8125rem", //13px
    regular: "0.875rem", //14px
    large: "1.125rem", //18px
    extraLarge: "1.875rem", //30px
    system: "1rem", // 16px
    body: "0.875rem" //14px
  };
  
  const fontsWeight = {
    thin: "100",
    light: "200",
    normal: "400",
    medium: "600",
    bold: "700",
    bolder: "900"
  }
  
  const screen = {
    minWidth: 200,
    minHeight: 465,
    small: {
      width: 320,
      height: 465
    },
    medium: {
      width: 740,
      height: 760
    }
  };
  
  const maxWidths = {
    form: "25rem" // 400px
  };
  
  const minHeights = {
    contactActionBar: "5.3125rem"
  }
  
  const color = {
    primary: "#06adcb",
    secondary: "#1166BB",
    success: palette.auigreen,
    warning: palette.mango,
    error: palette.red,
    boxShadowColor: palette.alto,
    borderColor: palette.dustyGray,
    highlightColor: "#398ADA"
  };
  
  const zIndex = {
    level_0: 30,
    level_1: 20,
    level_2: 10,
    level_3: 1
  };
  
  const breakpoints = {
    xs: "225px",
    sm: "300px",
    md: "320px"
  };
  
  const globals = {
    bodyBackground: palette.mercury,
    channelViewBackground: palette.mercury,
    bodyFontColor: palette.black,
    bodyFontFamily: `${fonts.regular}, Helvetica, sans-serif`,
    bodyFontWeight: fontsWeight.normal,
    bodyFontSize: fontsSize.body,
    baseFontSize: "1rem",
    textDisabledColor: palette.boulder,
    textSecondaryColor: palette.emperor,
    textTertiaryColor: palette.boulder,
    letterSpacing: "0.01875rem",
    radius: "2px",
    boxShadow: "0 2px 4px 0 rgba(0,0,0,0.2)",
    boxShadowFocus: `0 0 2px 0 ${palette.mango}`,
    baseBorder: `1px solid ${palette.alto}`,
    secondaryBorder: `1px solid ${palette.whiteSmoke}`,
    baseMargin: spacing.small,
    basePadding: spacing.small,
    link: {
      color: color.secondary,
      hoverColor: palette.rust,
      decoration: "none",
      hoverDecoration: "underline",
      base: "1em",
      small: "0.9em",
      tiny: "0.8em"
    },
    // Applies to all disabled states
    disabled: `
      pointer-events: none;
      opacity: 0.7;
    `,
  
    ellipses: `
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `
  };
  // eslint-disable-next-line
  export default {
    palette,
    lightPalette,
    spacingValues,
    spacing,
    globals,
    fonts,
    screen,
    color,
    fontsSize,
    fontsWeight,
    zIndex,
    breakpoints,
    maxWidths,
    minHeights,
  
    // Typography
    // -------------
    typography: {
      color: {
        base: `
        color: ${globals.bodyFontColor};
        `,
        secondary: `
        color: ${globals.textSecondaryColor};
        `,
        tertiary: `
        color: ${globals.textTertiaryColor};
        `
      },
      h1: `
        font-size: 28px;
        line-height: 1.2;
        font-weight: ${fontsWeight.normal};
        padding: 0;
      `,
      h1Margin: "0.67em 0 0.34em 0",
  
      h2: `
        font-size: ${fontsSize.large};
        line-height: 1.3;
        padding: 0;
      `,
      h2Margin: "0.83em 0 0.42em 0",
  
      h3: `
        font-size: 17px;
        line-height: 1.255;
        padding: 0;
      `,
      h3Margin: "1em 0 0.5em 0",
      
      h4: `
        font-size: 17px;
        line-height: 1.255;
        padding: 0;
      `,
      h4Margin: "1.33em 0 0.67em 0",
  
      h5: `
        font-size: 13px;
        line-height: 1.465;
        padding: 0;
      `,
      h5Margin: "1.67em 0 0.84em 0",
  
      h6: `
        font-size: 11px;
        line-height: 1.465;
        font-weight: ${fontsWeight.normal};
        text-transform: uppercase;
        padding: 0;
      `,
      h6Margin: "2.33em 0 1.17em 0",
  
      base: `
        font-size: ${globals.bodyFontSize};
        line-height: 1.465;
        font-weight: ${fontsWeight.normal};
        padding: 0;
      `,
      baseMargin: "1em 0 0.5em 0",
  
      a: `
        font-size: ${globals.link.base};
        color: ${globals.link.color};
        text-decoration: ${globals.link.decoration};
  
        &:hover{
          color: ${globals.link.hoverColor};
          text-decoration: ${globals.link.hoverDecoration};
        }
      `
    },
  
    // Button
    button: {
      boxShadowFocus: globals.boxShadowFocus,
      cursor: "pointer",
      padding: "0 15px",
  
      normal: {
        fontSize: fontsSize.body,
        height: "36px"
      },
  
      small: {
        fontSize: fontsSize.small,
        height: "30px",
        padding: spacing.micro
      },
  
      default: {
        bg: palette.white,
        color: "rgba(0,0,0,0.74)",
        bgHover:"hsl(0, 0%, 98%)"
      },
  
      default_flat: {
        bg: '',
        color: "rgba(0,0,0,0.74)",
        bgHover: '',
        boxShadow: 'none'
      },
  
      primary: {
        bg: palette.blue,
        bgHover: "hsl(202, 65%, 40%)",
        color: palette.white
      },
  
      primary_alt : {
        bg: palette.green,
        bgHover: "hsl(132, 76%, 25%)",
        color: palette.white
      },
  
      primary_flat: {
        bg: '',
        color: palette.blue,
        bgHover: '',
        boxShadow: 'none'
      },
  
      secondary: {
        bg: palette.darkBlue,
        bgHover: "hsl(212, 22%, 24%)",
        color: palette.white
      },
  
      tertiary: {
        bg: palette.alto,
        bgHover: "hsl(0, 0%, 84%)",
        color: palette.black
      },
  
      secondary_alt : {
        bg: "rgb(208, 2, 27)",
        bgHover: "hsl(353, 98%, 34%)",
        color: palette.white
      },
  
      toggle: {
        borderColor: palette.silver,
        borderColorActive: palette.azure,
        bg: palette.white,
        bgHover: palette.concrete,
        bgActive: palette.zumthor
      }
    },
  
    // Message (Alerts)
    message: {
      iconSize: "24px",
      bg: palette.white,
      borderRadius: "3px",
  
      info: {
        bg: palette.ghost,
        solidBg: palette.auiblue,
        iconColor: palette.azure,
        color: globals.bodyFontColor,
        borderColor: palette.azure
      },
      success: {
        bg: palette.honeydew,
        solidBg: palette.auigreen,
        iconColor: palette.auigreen,
        color: palette.auigreen,
        borderColor: palette.apple
      },
      warning: {
        bg: palette.linen,
        solidBg: palette.mango,
        iconColor: palette.mango,
        color: palette.rust,
        borderColor: palette.rust
      },
      error: {
        bg: palette.blush,
        solidBg: palette.red,
        iconColor: palette.red,
        color: palette.red,
        borderColor: palette.red
      }
    },
  
    listItem: {
      selectedBg: palette.brown,
      selectedColor: palette.white,
      hoverBg: palette.brown,
      spacing: spacing.small,
      hoverColor: palette.white,
      height: 45
    },
  
    contactStatusColorsHover: {
      incoming: palette.darkGreen,
      connected: palette.mediumBlue,
      missed: palette.blue,
      "no-longer-available": palette.darkgold,
      "failed-connect-agent": palette.darkRed,
      "failed-connect-customer": palette.darkRed,
      "cancelled-connect-agent": palette.darkGray,
      "missed-callback": palette.darkRed,
      "agent-hungup": palette.darkRed,
      "line-engaged-agent": palette.darkRed,
      "line-engaged-customer": palette.darkRed,
      "missed-call-agent": palette.darkRed,
      "missed-call-customer": palette.darkRed,
      "multiple-ccp-windows": palette.darkRed,
      "realtime-communication-error": palette.darkRed,
      "bad-address-customer": palette.darkRed,
      "bad-address-agent": palette.darkRed,
      acw: palette.darkGray,
      disconnected: palette.darkGray,
      connecting: palette.darkGreen,
      ended: palette.darkGray,
      error: palette.darkRed,
      pending: palette.mediumBlue,
      hold: palette.darkerGold,
      rejected: palette.darkRed,
      joined: palette.mediumBlue
    },
    contactStatusColors: {
      incoming: palette.green,
      connected: palette.blue,
      missed: palette.red,
      "no-longer-available": palette.yellow,
      "failed-connect-agent": palette.red,
      "failed-connect-customer": palette.red,
      "cancelled-connect-agent": palette.mediumGray,
      "missed-callback": palette.red,
      "agent-hungup": palette.red,
      "line-engaged-agent": palette.red,
      "line-engaged-customer": palette.red,
      "missed-call-agent": palette.red,
      "missed-call-customer": palette.red,
      "multiple-ccp-windows": palette.red,
      "realtime-communication-error": palette.red,
      "bad-address-customer": palette.red,
      "bad-address-agent": palette.red,
      acw: palette.mediumGray,
      disconnected: palette.mediumGray,
      connecting: palette.green,
      ended: palette.mediumGray,
      error: palette.red,
      pending: palette.blue,
      hold: palette.darkgold,
      rejected: palette.red,
      joined: palette.blue
    },
    contactStatusColorsInactive: {
      missed: palette.red,
      rejected: palette.red
    },
    contactStatusTextColors: {
      missed: palette.white,
      rejected: palette.white,
      hold: palette.white
    },
    contactStatusTextColorsInactive: {
      missed: palette.white,
      rejected: palette.white,
      hold: palette.black
    },
    contactStatusTextColorsInactiveHover: {
      missed: palette.white,
      rejected: palette.white,
      hold: palette.black,
      ended: palette.white,
      connected: palette.white
    },
    contactStatusColorsLight: {
      incoming: lightPalette.green,
      connected: lightPalette.blue,
      joined: lightPalette.blue,
      missed: palette.red,
      "no-longer-available": lightPalette.yellow,
      acw: lightPalette.mediumGray,
      disconnected: lightPalette.mediumGray,
      connecting: lightPalette.green,
      pending: lightPalette.blue,
      ended: lightPalette.mediumGray,
      error: "#F1B3BB",
      rejected: palette.red,
      "failed-connect-agent": palette.yellow,
      "failed-connect-customer": palette.yellow,
      "missed-callback": palette.red,
      "agent-hungup": palette.red,
      "line-engaged-agent": palette.red,
      "line-engaged-customer": palette.red,
      "missed-call-agent": palette.red,
      "missed-call-customer": palette.red,
      "multiple-ccp-windows": palette.red,
      "realtime-communication-error": palette.red,
      "bad-address-customer": palette.red,
      "bad-address-agent": palette.red
    },
  
    contactStatusColorsLightHover: {
      incoming: lightPalette.green,
      connected: lightPalette.darkerBlue,
      joined: lightPalette.darkerBlue,
      missed: palette.darkRed,
      "no-longer-available": lightPalette.yellow,
      acw: lightPalette.darkerGray,
      disconnected: lightPalette.darkerGray,
      connecting: lightPalette.green,
      pending: lightPalette.darkerBlue,
      ended: lightPalette.darkerGray,
      error: "#E26071",
      rejected: palette.darkRed,
      "failed-connect-agent": palette.darkgold,
      "failed-connect-customer": palette.darkgold,
      "missed-callback": palette.darkRed,
      "agent-hungup": palette.darkRed,
      "line-engaged-agent": palette.darkRed,
      "line-engaged-customer": palette.darkRed,
      "missed-call-agent": palette.darkRed,
      "missed-call-customer": palette.darkRed,
      "multiple-ccp-windows": palette.darkRed,
      "realtime-communication-error": palette.darkRed,
      "bad-address-customer": palette.darkRed,
      "bad-address-agent": palette.darkRed
    },
  
    toasts: {
      marginLeft: spacing.large,
      marginTop: spacing.small,
      stackOffsetLeft: spacing.micro,
      stackOffsetTop: spacing.mid,
      padding: spacing.small,
      borderRadius: "2px",
      defaultBackground: "white"
    },
  
    chatTabs: {
      inactive: palette.white,
      inactiveText: palette.secondaryBlack,
      unseenMessagesBorderRadius: "7px",
      unseenMessagesColor: palette.green,
      unseenMessagesBorderColor: "#27A43F",
      minWidthActive: 148,
      minWidthInactive: 78,
      slopeWidth: 6,
      slopeHeight: 3.8125,
      slopeMaxHeight: 3.0625,
      slopeCornerBottomLocation: 0.9375,
      distance: 5
    },
  
    chatTranscriptor: {
      loading: color.primary,
      outgoingMsgBg: palette.lightBlue,
      incomingMsgBg: palette.whisper,
      outgoingMsg: `
        color: ${palette.secondaryBlack};
        background: ${palette.lightBlue};
        `,
  
      incomingMsg: `
        color: ${palette.secondaryBlack};
        background: ${palette.whisper};
        `,
      msgStatusWidth: "3.4375rem"
    },
  
    softphoneAgentStatusBarTextColors: {
      hold: palette.white,
      connected: palette.black
    },
  
    softphoneAgentStatusBarBackgroundColors: {
      hold: palette.darkgold,
      connected: palette.alabaster
    }
  
  };
  
  /* eslint-enable */
  