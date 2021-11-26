import { Formik, Form as FormikForm, Field } from 'formik';

import { PageHeading, FormGroup, TextInput, DatePicker, TextArea } from '../../components';

import { formInitialValues, validationSchema } from './form.form';


export const Form: React.FC<any> = () => {
  return (
    <>
      <PageHeading>Form</PageHeading>
      <Formik
        initialValues={formInitialValues}
        onSubmit={() => {}}
        validationSchema={validationSchema}
      >
        {({ errors, touched }) => (
          <FormikForm>
            <FormGroup label="First name" htmlFor="firstName" validationError={touched.firstName && errors.firstName}>
              <Field component={TextInput} name="firstName"/>
            </FormGroup>
            <FormGroup label="Last name" htmlFor="lastName" validationError={touched.lastName && errors.lastName}>
              <Field component={TextInput} name="lastName"/>
            </FormGroup>
            <FormGroup label="Email address" htmlFor="emailAddress" validationError={touched.emailAddress && errors.emailAddress}>
              <Field component={TextInput} name="emailAddress"/>
            </FormGroup>
            <FormGroup label="Phone number" htmlFor="phoneNumber" validationError={touched.phoneNumber && errors.phoneNumber}>
              <Field
                component={TextInput}
                name="phoneNumber"
                tooltipContent="Phone number must begin with country code, for example '+48' for Poland."
              />
            </FormGroup>
            <FormGroup label="Birthday date" htmlFor="birthdayDate" validationError={touched.birthdayDate && errors.birthdayDate}>
              <Field component={DatePicker} name="birthdayDate"/>
            </FormGroup>
            <FormGroup label="About" htmlFor="about" validationError={touched.about && errors.about}>
              <Field component={TextArea} name="about"/>
            </FormGroup>
            <button type="submit">click</button>
          </FormikForm>
        )}
      </Formik>
    </>
    
  )
}