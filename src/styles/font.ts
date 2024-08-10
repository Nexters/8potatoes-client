export const FONT_FAMILY = {
    suit: 'SUIT Variable',
};

export const FONT_STYLE_NAME = {
    headingBold24: 'headingBold24',
    headingBold20: 'headingBold20',
    headingBold18: 'headingBold18',
    headingSemiBold20: 'headingSemiBold20',
    bodyBold16: 'bodyBold16',
    bodyBold14: 'bodyBold14',
    bodySemiBold18: 'bodySemiBold18',
    bodySemiBold16: 'bodySemiBold16',
    bodySemiBold14: 'bodySemiBold14',
    bodyMedium16: 'bodyMedium16',
    bodyMedium14: 'bodyMedium14',
    buttonBold16: 'buttonBold16',
    buttonBold14: 'buttonBold14',
    captionSemiBold12: 'captionSemiBold12',
    smallTextBold12: 'smallTextBold12',
    smallTextMedium12: 'smallTextMedium12',
} as const;

const LINE_HEIGHT_RATIO = 1.5;

export const FONT_WEIGHT = {
    medium: 500,
    semiBold: 600,
    bold: 700,
} as const;

export const TYPOGRAPHY = {
    [FONT_STYLE_NAME.headingBold24]: {
        fontSize: '24px',
        lineHeight: `${LINE_HEIGHT_RATIO * 24}px`,
        fontWeight: FONT_WEIGHT.bold,
    },
    [FONT_STYLE_NAME.headingBold20]: {
        fontSize: '20px',
        lineHeight: `${LINE_HEIGHT_RATIO * 20}px`,
        fontWeight: FONT_WEIGHT.bold,
    },
    [FONT_STYLE_NAME.headingSemiBold20]: {
        fontSize: '20px',
        lineHeight: `${LINE_HEIGHT_RATIO * 20}px`,
        fontWeight: FONT_WEIGHT.semiBold,
    },
    [FONT_STYLE_NAME.headingBold18]: {
        fontSize: '18px',
        lineHeight: `${LINE_HEIGHT_RATIO * 18}px`,
        fontWeight: FONT_WEIGHT.bold,
    },
    [FONT_STYLE_NAME.bodySemiBold18]: {
        fontSize: '18px',
        lineHeight: `${LINE_HEIGHT_RATIO * 18}px`,
        fontWeight: FONT_WEIGHT.semiBold,
    },
    [FONT_STYLE_NAME.bodyBold16]: {
        fontSize: '16px',
        lineHeight: `${LINE_HEIGHT_RATIO * 16}px`,
        fontWeight: FONT_WEIGHT.bold,
    },
    [FONT_STYLE_NAME.bodySemiBold16]: {
        fontSize: '16px',
        lineHeight: `${LINE_HEIGHT_RATIO * 16}px`,
        fontWeight: FONT_WEIGHT.semiBold,
    },
    [FONT_STYLE_NAME.bodyMedium16]: {
        fontSize: '16px',
        lineHeight: `${LINE_HEIGHT_RATIO * 16}px`,
        fontWeight: FONT_WEIGHT.medium,
    },
    [FONT_STYLE_NAME.bodyBold14]: {
        fontSize: '14px',
        lineHeight: `${LINE_HEIGHT_RATIO * 14}px`,
        fontWeight: FONT_WEIGHT.bold,
    },
    [FONT_STYLE_NAME.bodySemiBold14]: {
        fontSize: '14px',
        lineHeight: `${LINE_HEIGHT_RATIO * 14}px`,
        fontWeight: FONT_WEIGHT.semiBold,
    },
    [FONT_STYLE_NAME.bodyMedium14]: {
        fontSize: '14px',
        lineHeight: `${LINE_HEIGHT_RATIO * 14}px`,
        fontWeight: FONT_WEIGHT.medium,
    },
    [FONT_STYLE_NAME.buttonBold16]: {
        fontSize: '16px',
        lineHeight: `${LINE_HEIGHT_RATIO * 16}px`,
        fontWeight: FONT_WEIGHT.bold,
    },
    [FONT_STYLE_NAME.buttonBold14]: {
        fontSize: '14px',
        lineHeight: `${LINE_HEIGHT_RATIO * 14}px`,
        fontWeight: FONT_WEIGHT.bold,
    },
    [FONT_STYLE_NAME.captionSemiBold12]: {
        fontSize: '12px',
        lineHeight: `${LINE_HEIGHT_RATIO * 12}px`,
        fontWeight: FONT_WEIGHT.semiBold,
    },
    [FONT_STYLE_NAME.smallTextBold12]: {
        fontSize: '12px',
        lineHeight: `${LINE_HEIGHT_RATIO * 12}px`,
        fontWeight: FONT_WEIGHT.bold,
    },
    [FONT_STYLE_NAME.smallTextMedium12]: {
        fontSize: '12px',
        lineHeight: `${LINE_HEIGHT_RATIO * 12}px`,
        fontWeight: FONT_WEIGHT.medium,
    },
} as const;
