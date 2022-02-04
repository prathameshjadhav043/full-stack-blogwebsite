import React from 'react';
import { TextField, Grid, InputAdornment, IconButton } from '@material-ui/core'
import { Visibility } from '@material-ui/icons';
import { VisibilityOff } from '@material-ui/icons';

const Input = ({ half, name, handleChange, label, handleShowPassword, autoFocus, type }) => {
    return (
        <Grid item xs={12} sm={half ? 6 : 12}>
            <TextField
                name={name}
                onChange={handleChange}
                variant="outlined"
                requried
                fullwidth
                label={label}
                autoFocus={autoFocus}
                type={type}
                InputProps={name === 'password' && {
                    endAdorment: (
                        <InputAdornment positions="end">
                            <IconButton onClick={handleShowPassword}>
                                {type === 'password' ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment >
                    ),
                }} />
        </Grid >
    );
};

export default Input;

