import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const renderField=({ input, label,name, type, meta})=>(
    <FormGroup row>
                    <Label for={name} sm={2}>{label}</Label>
                    <Col sm={10}>
                    <input {...input} placeholder={label} type={type}></input>
                     </Col>
    </FormGroup>
)


const BreakupForm=(props)=>{
    console.log(props);
    const { handleSubmit, pristine, reset, submitting } = props
    return(
        <div>
        <Label >Breakup</Label>
        <form onSubmit={handleSubmit}>
               
         <Field label="Basic" name="basic" component={renderField} type="text" placeholder="basic"/>
         <Field label="HRA" name="hra" component={renderField}  type="text" placeholder="HRA"/>
         <Field label="Transport Allowance" name="ta"  component={renderField}  type="text" placeholder="Transport Allowance" />
         <Field label="Special Allowance" name="specialAllowance" component={renderField} type="text" placeholder="Special Allowance" />
         <Field label="LTA" name="lta" component={renderField}  type="text" placeholder="LTA"/>
         <Field label="Medical Bills"  name="medicalBills" component={renderField} type="text" placeholder="Medical Bills"/>
        </form>
        </div>
        
    )
}


export default reduxForm({
    form: 'breakupForm' // a unique identifier for this form
  })(BreakupForm)