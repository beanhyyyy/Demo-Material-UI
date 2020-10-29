import React from 'react';
import Box from '@material-ui/core/Box';
import ContainedButtons from './ContainedButtons';
import NativeSelects from './NativeSelects';

export default function GroupButton() {
  return (
    <Box
        display="flex"
        flexWrap="nowrap"
        bgcolor="background.paper"
        p={2}
    >
        <Box ml="auto">
            <NativeSelects />
        </Box>
        <Box ml={3}>
            <ContainedButtons color="primary" title="Lưu"/>
        </Box>
        <Box ml={3}>
            <ContainedButtons color="default" title="Hủy"/>
        </Box>
    </Box>
  );
}