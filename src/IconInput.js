import {useState} from "react";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PropTypes from "prop-types";
import * as React from "react";

export default function IconInput(props) {
    const {divider, DisplayIcon, type, ...inputBaseProps} = props
    const [focus, setFocus] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    return (
        <Paper
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            component='form'
            sx={{
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                gap: '12px',
                p: '16px',
                height: '56px',
                border: '1px solid',
                borderColor: focus ? 'secondary.light' : '#E0E1E2',
                borderRadius: '8px',
                boxShadow: 'none'
            }}
        >
            {DisplayIcon && <DisplayIcon
                sx={{
                    color: '#777E90',
                    width: '24px',
                    height: '24px'
                }}
            />}
            {DisplayIcon && divider && <Divider sx={{
                height: '16px',
                m: 0.5,
                borderRight: '1px solid #9A9B9C'
            }} orientation='vertical'/>}
            <InputBase
                type={type !== 'password' ? type : (showPassword ? 'text' : 'password')}
                {...inputBaseProps}
                fullWidth
                className='grow'
            />

            {type === 'password' && <IconButton onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ? <StyledIcon Root={Visibility}/> : <StyledIcon Root={VisibilityOff}/>}
            </IconButton>}
        </Paper>
    )
}

function StyledIcon(props) {
    const {Root, ...rest} = props
    return (
        <Root
            sx={{
                color: '#777E90',
                width: '24px',
                height: '24px'
            }}
            {...rest}
        />
    )
}

IconInput.defaultProps = {
    divider: true,
    DisplayIcon: MailOutlineIcon,
    type: 'text',
    placeholder: '...'
}

IconInput.propTypes = {
    inputBaseProps: {
        placeholder: PropTypes.string,
        inputBaseProps: PropTypes.object
    }
}