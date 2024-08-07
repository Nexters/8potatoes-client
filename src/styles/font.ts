export const FONT_FAMILY = {
    suit: 'SUIT Variable',
};

export const FONT_STYLE_NAME = {
    heading1: 'heading1',
    heading2: 'heading2',
    heading3: 'heading3',
    heading4: 'heading4',
    body1: 'body1',
    body2: 'body2',
    body3: 'body3',
    body4: 'body4',
    body5: 'body5',
    body6: 'body6',
    body7: 'body7',
    smallText1: 'smallText1',
    smallText2: 'smallText2',
    button1: 'button1',
    button2: 'button2',
    caption: 'caption',
} as const;

const LINE_HEIGHT_RATIO = 1.5;

export const FONT_WEIGHT = {
    medium: 500,
    semiBold: 600,
    bold: 700,
} as const;

export const TYPOGRAPHY = {
    [FONT_STYLE_NAME.heading1]: {
        fontSize: '24px',
        lineHeight: `${LINE_HEIGHT_RATIO * 24}px`,
        fontWeight: FONT_WEIGHT.bold,
    },
    [FONT_STYLE_NAME.heading2]: {
        fontSize: '20px',
        lineHeight: `${LINE_HEIGHT_RATIO * 20}px`,
        fontWeight: FONT_WEIGHT.bold,
    },
    [FONT_STYLE_NAME.heading3]: {
        fontSize: '20px',
        lineHeight: `${LINE_HEIGHT_RATIO * 20}px`,
        fontWeight: FONT_WEIGHT.semiBold,
    },
    [FONT_STYLE_NAME.heading4]: {
        fontSize: '18px',
        lineHeight: `${LINE_HEIGHT_RATIO * 18}px`,
        fontWeight: FONT_WEIGHT.bold,
    },
    [FONT_STYLE_NAME.body1]: {
        fontSize: '18px',
        lineHeight: `${LINE_HEIGHT_RATIO * 18}px`,
        fontWeight: FONT_WEIGHT.semiBold,
    },
    [FONT_STYLE_NAME.body2]: {
        fontSize: '16px',
        lineHeight: `${LINE_HEIGHT_RATIO * 16}px`,
        fontWeight: FONT_WEIGHT.bold,
    },
    [FONT_STYLE_NAME.body3]: {
        fontSize: '16px',
        lineHeight: `${LINE_HEIGHT_RATIO * 16}px`,
        fontWeight: FONT_WEIGHT.semiBold,
    },
    [FONT_STYLE_NAME.body4]: {
        fontSize: '16px',
        lineHeight: `${LINE_HEIGHT_RATIO * 16}px`,
        fontWeight: FONT_WEIGHT.medium,
    },
    [FONT_STYLE_NAME.body5]: {
        fontSize: '14px',
        lineHeight: `${LINE_HEIGHT_RATIO * 14}px`,
        fontWeight: FONT_WEIGHT.bold,
    },
    [FONT_STYLE_NAME.body6]: {
        fontSize: '14px',
        lineHeight: `${LINE_HEIGHT_RATIO * 14}px`,
        fontWeight: FONT_WEIGHT.semiBold,
    },
    [FONT_STYLE_NAME.body7]: {
        fontSize: '14px',
        lineHeight: `${LINE_HEIGHT_RATIO * 14}px`,
        fontWeight: FONT_WEIGHT.medium,
    },
    [FONT_STYLE_NAME.button1]: {
        fontSize: '16px',
        lineHeight: `${LINE_HEIGHT_RATIO * 16}px`,
        fontWeight: FONT_WEIGHT.bold,
    },
    [FONT_STYLE_NAME.button2]: {
        fontSize: '14px',
        lineHeight: `${LINE_HEIGHT_RATIO * 14}px`,
        fontWeight: FONT_WEIGHT.bold,
    },
    [FONT_STYLE_NAME.caption]: {
        fontSize: '12px',
        lineHeight: `${LINE_HEIGHT_RATIO * 12}px`,
        fontWeight: FONT_WEIGHT.semiBold,
    },
    [FONT_STYLE_NAME.smallText1]: {
        fontSize: '12px',
        lineHeight: `${LINE_HEIGHT_RATIO * 12}px`,
        fontWeight: FONT_WEIGHT.semiBold,
    },
    [FONT_STYLE_NAME.smallText2]: {
        fontSize: '12px',
        lineHeight: `${LINE_HEIGHT_RATIO * 12}px`,
        fontWeight: FONT_WEIGHT.medium,
    },
} as const;