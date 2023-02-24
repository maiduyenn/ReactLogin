import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

export default function BasicList(props) {
    const { divider, DisplayIcon, content } = props
    return (
        <Box sx={{ width: '100%', maxWidth: "100%", bgcolor: 'background.paper' }}>
            <List>
                <ListItem disablePadding  >
                    <ListItemButton >
                        <ListItemIcon sx={{ minWidth: "38px" }} >
                            {DisplayIcon && <DisplayIcon />}
                        </ListItemIcon>
                        <ListItemText primary={content} />
                    </ListItemButton>
                </ListItem>
                {divider && <Divider />}

            </List>
        </Box >
    );
}