import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button';
import LabelBottomNavigation from './LabelBottomNavigation';
import BasicList from './BasicList';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LaunchOutlinedIcon from '@mui/icons-material/LaunchOutlined';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import React from 'react';
import useState from 'react';

export default function Account() {
    const [showLoginstatus, setLoginstatus] = React.useState(true);
    const [showAvatar, setAvatar] = React.useState(false);
    const [showName, setName] = React.useState(false);
    const [showEmail, setEmail] = React.useState(false);
    const login = (event) => {
        setLoginstatus(false);
        setAvatar(true);
        setName(true);
        setEmail(true);
    };


    return (
        <div style={{ justifyContent: "center", display: "flex" }}>
            <Box
                sx={{
                    backgroundColor: '#EAEAEA',
                    width: "390px",
                    height: "916px",
                    position: "relative"
                }}
            >

                <Paper elevation={0} sx={{ mb: 2, borderRadius: "0", paddingLeft: "4px" }}>
                    <Typography sx={{ fontWeight: "600", fontSize: "28px", color: "#003D62" }}>
                        Tài khoản
                    </Typography>
                </Paper>
                <Box sx={{
                    width: "95%",
                    height: "100px",
                    margin: "10px auto"

                }}>

                    <Box
                        sx={{
                            backgroundColor: '#FFFFFF',

                        }}>
                        <div style={{ display: "flex", marginLeft: "10px", padding: "12px 0px", alignItems: "center" }}>

                            {!showAvatar && <Avatar sx={{ bgcolor: "#5c5c9f" }}>N</Avatar>}
                            {showAvatar && <Avatar sx={{ bgcolor: "red" }}>D</Avatar>}

                            <div style={{ marginLeft: "25px" }} >
                                {!showName && <Typography sx={{ fontWeight: "550", fontSize: "16px", mb: 1 }}>Bạn chưa đăng nhập!</Typography>}
                                {showName && <Typography sx={{ fontWeight: "550", fontSize: "16px", mb: 1 }}>Mai Duyên</Typography>}
                                {!showEmail && <Typography sx={{ fontWeight: "400", fontSize: "16px", color: "#596979" }}>Vui lòng đăng nhập để đồng bộ trải nghiệm!</Typography>}
                                {showEmail && <Typography sx={{ fontWeight: "400", fontSize: "16px", color: "#596979" }}>duyen.nguyen@gmail.com</Typography>}
                            </div>

                        </div>
                        {showLoginstatus && <Button
                            onClick={login}
                            type="submit"
                            variant="contained"
                            sx={{
                                width: "342px",
                                height: "48px",
                                margin: "10px",
                                background: "linear-gradient(261.83deg, #D82129 0%, #F36D27 100%)",
                                backdropFilter: "blur(2px)",
                                /* Note: backdrop-filter has minimal browser support */
                                borderRadius: "12px"
                            }}
                        >
                            Đăng nhập
                        </Button>}
                    </Box>

                    <Typography sx={{ fontWeight: "400", fontSize: "14px", margin: "5px", mt: 3, mb: 3 }}>GIỚI THIỆU & PHẢN HỒI</Typography>
                    <BasicList DisplayIcon={ErrorOutlineIcon} content={"Giới thiệu trang"} divider={true} />
                    <BasicList DisplayIcon={NoteAltOutlinedIcon} content={"Hướng dẫn sử dụng"} divider={true} />
                    <BasicList DisplayIcon={HelpOutlineOutlinedIcon} content={"Câu hỏi thường gặp"} divider={true} />
                    <BasicList DisplayIcon={StarOutlineOutlinedIcon} content={"Đánh giá "} divider={true} />
                    <BasicList DisplayIcon={ChatBubbleOutlineOutlinedIcon} content={"Gửi góp ý cho nhà phát triển"} divider={false} />
                    <Typography sx={{ fontWeight: "400", fontSize: "14px", margin: "5px", mt: 3, mb: 3 }}>CÀI ĐẶT</Typography>
                    <BasicList DisplayIcon={SettingsOutlinedIcon} content={"Cài đặt ngôn ngữ"} divider={true} />
                    <BasicList DisplayIcon={LaunchOutlinedIcon} content={"Truy cập trang Landmaps.vn"} divider={false} />



                </Box>
                <LabelBottomNavigation />
            </Box>
        </div >
    )
}