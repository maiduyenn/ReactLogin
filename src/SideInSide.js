import * as React from 'react';
import useState from 'react'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';

import Typography from '@mui/material/Typography';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import WifiCalling3OutlinedIcon from '@mui/icons-material/WifiCalling3Outlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';

import IconInput from "./IconInput";

const theme = createTheme();



export default function SignInSide() {

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };


    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid item xs={12} sm={6} md={6} component={Paper} elevation={6} square
                    sx={{ height: '842px', width: "543px", padding: "50px" }}>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Typography component="h1" variant="h5" sx={{ fontWeight: "600", fontSize: "28px" }}>
                            Đăng kí tài khoản
                        </Typography>
                        <Typography component="h1" variant="h6"
                            sx={{ fontWeight: "400", fontSize: "16px", mb: 3, mt: 1 }}>
                            Chào mừng gia nhập cộng đồng người dùng của Landmaps
                        </Typography>
                        <Stack spacing={2} component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <IconInput placeholder='Họ và tên' DisplayIcon={PersonOutlineOutlinedIcon} />
                            <IconInput placeholder='Số điện thoại' DisplayIcon={WifiCalling3OutlinedIcon} />
                            <IconInput placeholder='Địa chỉ mail' DisplayIcon={EmailOutlinedIcon} />
                            <IconInput type='password' placeholder='Mật khẩu' DisplayIcon={HttpsOutlinedIcon} />
                            <IconInput type='password' placeholder='Xác nhận mật khẩu' DisplayIcon={HttpsOutlinedIcon} />

                            <FormControlLabel sx={{ mt: 3 }}
                                control={<Checkbox value="accept" color="warning" />}
                                label="Bằng việc đăng ký tài khoản, Tôi đồng ý với các Chính sách và điều khoản của Landmaps"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{
                                    mt: 3,
                                    mb: 2,
                                    background: "linear-gradient(261.83deg, #D82129 0%, #F36D27 100%)",
                                    backdropFilter: "blur(2px)",
                                    /* Note: backdrop-filter has minimal browser support */
                                    borderRadius: "12px"
                                }}
                            >
                                Đăng kí
                            </Button>
                            <Typography align='center' sx={{ fontWeight: "400", fontSize: "16px", mb: 3, mt: 1 }}>
                                Bạn đã có tài khoản?
                            </Typography>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{
                                    mt: 3,
                                    mb: 2,
                                    color: " #EB6017",
                                    background: "rgba(255, 255, 255, 0.5)",
                                    backdropFilter: "blur(2px)",
                                    /* Note: backdrop-filter has minimal browser support */
                                    borderRadius: "12px",
                                    border: 1,
                                    borderColor: 'error.main'
                                }}
                            >
                                Đăng nhập
                            </Button>
                        </Stack>
                    </Box>
                </Grid>
                <Grid
                    position={'relative'}
                    item
                    xs={false}
                    sm={6}
                    md={6}
                    sx={{
                        height: '842px',
                        width: "543px",
                        padding: "150px",
                        backgroundColor: '#E14E00',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <Box
                        sx={{
                            position: "absolute",
                            width: "275.06px",
                            height: "275.06px",
                            background: "linear-gradient(224.89deg, rgba(255, 255, 255, 0.134) 42.03%, rgba(217, 217, 217, 0) 95.25%)",
                            borderRadius: "237px",
                            left: "350px",
                            top: "50px",
                            transform: "rotate(30.98deg)",
                        }}

                    />
                    <Box
                        component={"img"}
                        src="logo.png"
                        alt="logo image"

                        sx={{
                            height: '56px',
                            width: "243px",
                            ml: 15,
                            mb: 4
                        }}

                    />
                    <Typography component="h1" variant="h5" align="center" color="white"
                        sx={{ fontWeight: "600", fontSize: "40px" }}>
                        Trung tâm thông tin quy hoạch và xác minh thửa đất Landmaps
                    </Typography>

                    <Typography component="h1" variant="h5" align="center" color="white"
                        sx={{ fontWeight: "500", fontSize: "18px", mt: 3 }}>
                        Công cụ hỗ trợ cho các nhà đầu tư, chuyên viên môi giới, sàn giao dịch, công ty tài chính... tra
                        cứu thông tin quy hoạch và xác minh tính pháp lý thửa đất bởi cơ quan nhà nước, với mục tiêu là
                        hạn chế tủi ro và nâng cao tính an toàn trong chuyển nhượng bất động sản

                    </Typography>
                </Grid>

            </Grid>
        </ThemeProvider>
    );
}
