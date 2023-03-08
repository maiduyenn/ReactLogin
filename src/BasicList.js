import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

export default function BasicList(props) {
    const { schema } = props;
    return <>
        <Typography sx={{ fontWeight: "400", fontSize: "14px", margin: "5px", mt: 3, mb: 3 }}>{schema.name}</Typography>
        <List disablePadding sx={{
            borderRadius: "8px",
            backgroundColor: "white"
        }}>
            {
                schema.children.map((child, index) => <>
                    <ListItems key={index} {...child} />
                    <Divider sx={{ marginInline: "10px" }} />
                </>)
            }
        </List>
    </>
}


const ListItems = (props) => {
    const { icon: Icon, content } = props
    return <ListItem disablePadding >
        <ListItemButton>
            <ListItemIcon sx={{ minWidth: "38px" }}>
                <Icon />
            </ListItemIcon>
            <ListItemText primary={content} />
        </ListItemButton>
        <Divider />
    </ListItem>
}