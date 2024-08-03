import styled from '@emotion/styled';
import { motion } from 'framer-motion';

import { theme } from '#/styles/theme';

export const Overlay = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
`;

export const Content = styled(motion.div)`
    position: fixed;
    width: 375px;
    max-width: 375px;
    max-height: 90dvh;

    padding: 0 16px 16px 16px;
    
    transform: translate(-50%, -50%);
    background-color: ${theme.color.wht[100]};
    border-radius: 4px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const HolderWrapper = styled(motion.div)`
    width: 375px;
    padding: 16px;

    background-color: ${theme.color.wht[100]};
    border-radius: 16px 16px 0 0;

    display: flex;
    justify-content: center;
    align-self: center;

    cursor: grab;
`

export const Holder = styled.div`
    width: 50px;
    height: 5px;

    background-color: ${theme.color.blk[30]};
    border-radius: 2.5px;
`;