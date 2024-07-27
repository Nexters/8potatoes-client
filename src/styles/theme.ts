import { COLOR } from './color';
import { FONT_WEIGHT, FONT_FAMILY } from './font';

export const theme = {
    color: COLOR,
    font: {
        family: FONT_FAMILY,
        weight: FONT_WEIGHT,
    }
} as const;
