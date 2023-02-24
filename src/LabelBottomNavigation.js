import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

export default function LabelBottomNavigation() {
    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div style={{ width: "100%", position: "absolute", bottom: "0" }}>
            <Box>
                <Typography
                    sx={{
                        fontWeight: "400",
                        fontSize: "14px",
                        display: "flex",
                        justifyContent: "center",
                        height: "30px",
                        color: "white",
                        bgcolor: "#353945",

                    }}>
                    Bản quyền @2022 thuộc về LANDMAPS
                </Typography>
            </Box>

            <BottomNavigation value={value} onChange={handleChange}>

                <BottomNavigationAction
                    label="Tìm kiếm"
                    value="recents"
                    icon={<SearchIcon />}
                />
                <BottomNavigationAction
                    label="Cá nhân"
                    value="d"
                    icon={<PersonOutlineIcon />}
                />
                <BottomNavigationAction
                    label="Nearby"
                    value="nearby"
                    icon={<MenuIcon />}
                />
                <BottomNavigationAction label="Tài khoản" value="account" icon={<AccountCircleOutlinedIcon />} />
            </BottomNavigation></div>
    );
}