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
                            ????ng k?? t??i kho???n
                        </Typography>
                        <Typography component="h1" variant="h6"
                            sx={{ fontWeight: "400", fontSize: "16px", mb: 3, mt: 1 }}>
                            Ch??o m???ng gia nh???p c???ng ?????ng ng?????i d??ng c???a Landmaps
                        </Typography>
                        <Stack spacing={2} component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <IconInput placeholder='H??? v?? t??n' DisplayIcon={PersonOutlineOutlinedIcon} />
                            <IconInput placeholder='S??? ??i???n tho???i' DisplayIcon={WifiCalling3OutlinedIcon} />
                            <IconInput placeholder='?????a ch??? mail' DisplayIcon={EmailOutlinedIcon} />
                            <IconInput type='password' placeholder='M???t kh???u' DisplayIcon={HttpsOutlinedIcon} />
                            <IconInput type='password' placeholder='X??c nh???n m???t kh???u' DisplayIcon={HttpsOutlinedIcon} />

                            <FormControlLabel sx={{ mt: 3 }}
                                control={<Checkbox value="accept" color="warning" />}
                                label="B???ng vi???c ????ng k?? t??i kho???n, T??i ?????ng ?? v???i c??c Ch??nh s??ch v?? ??i???u kho???n c???a Landmaps"
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
                                ????ng k??
                            </Button>
                            <Typography align='center' sx={{ fontWeight: "400", fontSize: "16px", mb: 3, mt: 1 }}>
                                B???n ???? c?? t??i kho???n?
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
                                ????ng nh???p
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
                        Trung t??m th??ng tin quy ho???ch v?? x??c minh th???a ?????t Landmaps
                    </Typography>

                    <Typography component="h1" variant="h5" align="center" color="white"
                        sx={{ fontWeight: "500", fontSize: "18px", mt: 3 }}>
                        C??ng c??? h??? tr??? cho c??c nh?? ?????u t??, chuy??n vi??n m??i gi???i, s??n giao d???ch, c??ng ty t??i ch??nh... tra
                        c???u th??ng tin quy ho???ch v?? x??c minh t??nh ph??p l?? th???a ?????t b???i c?? quan nh?? n?????c, v???i m???c ti??u l??
                        h???n ch??? t???i ro v?? n??ng cao t??nh an to??n trong chuy???n nh?????ng b???t ?????ng s???n

                    </Typography>
                </Grid>

            </Grid>
        </ThemeProvider>
    );
}
