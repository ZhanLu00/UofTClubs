import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import "./style.css"

//custom input field class for collecting text input
class InputField extends React.Component{
    render(){
        const { label, value, onInputChange, name, type } = this.props;
        return (
            <Grid className="logInGrid" container direction="column">
                <TextField
                    name={name}
                    type={type}
                    label={label}
                    id="margin-normal"
                    defaultValue={value || ""}
                    className="input"
                    margin="normal"
                    onChange={onInputChange}
                />
            </Grid>
        )
    }
}

export default InputField;