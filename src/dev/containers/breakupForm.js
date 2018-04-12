import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Col, FormGroup, Label, Input,Container } from 'reactstrap';

const renderField=({ input, label,name, type, meta})=>(
    <FormGroup row>
                    <Label for={name} sm={2}>{label}</Label>
                    <Col sm={4}>
                    <Input {...input} placeholder={label} type={type}></Input>
                     </Col>
    </FormGroup>
)


const BreakupForm=(props)=>{
    console.log(props);
    const { handleSubmit} = props
    return(

        <Container>
        <Label ><b>Breakup</b></Label>
        <Container>
        <form onSubmit={handleSubmit}>
         <Field label="Basic" name="basic" component={renderField} type="text" placeholder="basic"/>
         <Field label="HRA" name="hra" component={renderField}  type="text" placeholder="HRA"/>
         <Field label="Transport Allowance" name="ta"  component={renderField}  type="text" placeholder="Transport Allowance" />
         <Field label="Special Allowance" name="specialAllowance" component={renderField} type="text" placeholder="Special Allowance" />
         <Field label="LTA" name="lta" component={renderField}  type="text" placeholder="LTA"/>
         <Field label="Medical Bills"  name="medicalBills" component={renderField} type="text" placeholder="Medical Bills"/>
        </form>
        </Container>
        </Container>
    )
}


export default reduxForm({
    form: 'breakupForm' // a unique identifier for this form
  })(BreakupForm)