import { COLOR } from './color';
import { FONT_FAMILY, FONT_WEIGHT } from './font';

export const theme = {
    color: COLOR,
    font: {
        family: FONT_FAMILY,
        weight: FONT_WEIGHT,
    },
} as const;
