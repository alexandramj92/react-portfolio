import { Box, List, SxProps, useTheme } from '@mui/material';
import { FC } from 'react';

import { breakpoints } from '../utils/breakpoints';

export interface HorizontalScrollContainerProps {
  /**The content of the component.*/
  children?: React.ReactNode;
  /**The max width of the container.*/
  maxContainerWidth?: string;
  /**The width of the grid columns in the container.*/
  gridAutoColumns?: string;
  /**The sx props of the container.*/
  containerSx?: SxProps;
}

export const ScrollingContainer: FC<HorizontalScrollContainerProps> = ({
  children,
  maxContainerWidth = '1046px',
  gridAutoColumns = '212px',
  containerSx,
}) => {
    const theme = useTheme()
  return (
    <Box
      data-testid="list-container"
      sx={{ maxWidth: maxContainerWidth, margin: '0 auto', padding: '0 15px', ...containerSx }}
    >
      <List
        data-testid="list-element"
        sx={{
          display: 'grid',
          gridColumnGap: '28px',
          gridAutoFlow: 'column',
          gridAutoColumns: `${gridAutoColumns}`,
          padding: '15px 0px',
          listStyle: 'none',
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          overflowY: 'hidden',
          '::-webkit-scrollbar': { height: '12px' },
          '::-webkit-scrollbar-thumb': { borderRadius: '416px', background: `${theme.palette.primary.main}` },
          '::-webkit-scrollbar-track': {
            borderRadius: '416px',
            background: `${theme.palette.custom.offWhite}`,
            outline: `.2px solid ${theme.palette.primary.main}`,
          },
          [`@media (max-width:${breakpoints.sm}px)`]: {
            gridAutoColumns: `calc(${gridAutoColumns}*.7641)`,
            gridColumnGap: '12px',
            '::-webkit-scrollbar': { height: '5px' },
          },
        }}
      >
        {children}
      </List>
    </Box>
  );
};
