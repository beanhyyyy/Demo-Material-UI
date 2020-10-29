import React from 'react';
import TextField from '@material-ui/core/TextField';

const InputCus = ({ type, arrOption, ...rest }) => {
    if (type === "input") {
        return <input {...rest} />
    }
    if (type === "textarea") {
        return <textarea {...rest} />
    }
    return (<select {...rest}>
        {Array.isArray(arrOption) && arrOption.map((op, ix) => <option key={(() => `${ix}`)()} >{op}</option>)}
    </select>)
}

const struture = ['input' , 'input', 'input', 'textarea']
const defaultProps ={
    0:{
        label:"Label 1"
    },
    1:{
        label:"Label 1"
    },
    2:{
        label:"Label 1",
        arrOption:['option1',"option2"]
    }
}
struture.map((type,ix)=> <InputCus type={type} {...defaultProps[ix]}/>)

const Layout =({children})=> <Grid container spacing={4}>
    {Array.isArray(children)&& children.map(child=><Grid item>
        {child}
    </Grid>)}
</Grid>

// Model-TextField-3-row
const Test = (props) => {
    return (
        <Layout>
            <TextField
                label={props.labelTextField1}
                variant="outlined"
                color="filled"
            />
            <TextField
                label={props.labelTextField2}
                variant="outlined"
                color="filled"
            />
            <TextField
                label={props.labelTextField3}
                variant="outlined"
                color="filled"
            />
        </Layout>
    )
}

export default Test;