import { useState } from 'react';
import { Formik, Form as FormikForm, Field, FormikState } from 'formik';

import {
  PageHeading,
  FormGroup,
  FormLegend,
  TextInput,
  DatePicker,
  TextArea,
  ImageUpload,
  Button,
  Modal,
  Text,
} from '../../components';
import { Row, Col } from 'antd';
import { useNavigate } from 'react-router';

import { ApplicationRoutes } from '../../components/navigation/navigation.const';
import { saveData, fetchData, resetData } from '../../api';
import { formInitialValues, validationSchema } from './form.form';
export const Form: React.FC<any> = () => {
  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleSubit = (data: typeof formInitialValues) => {
    saveData(data);
    navigate(ApplicationRoutes.PROFILE);
  };

  const handleReset = (
    resetFormCb: (
      values: Partial<FormikState<typeof formInitialValues>>
    ) => void
  ) => {
    resetData();
    resetFormCb({});
    setIsModalVisible(false);
  };

  return (
    <>
      <PageHeading>Form</PageHeading>
      <FormLegend marginBottom={10} />
      <Formik
        initialValues={fetchData() || formInitialValues}
        onSubmit={handleSubit}
        validationSchema={validationSchema}
        enableReinitialize={true}
      >
        {({ errors, touched, resetForm }) => (
          <FormikForm>
            <Row gutter={5}>
              <Col xs={24} sm={12}>
                <FormGroup
                  label="First name"
                  htmlFor="firstName"
                  validationError={touched.firstName && errors.firstName}
                >
                  <Field component={TextInput} name="firstName" />
                </FormGroup>
              </Col>
              <Col xs={24} sm={12}>
                <FormGroup
                  label="Last name"
                  htmlFor="lastName"
                  validationError={touched.lastName && errors.lastName}
                >
                  <Field component={TextInput} name="lastName" />
                </FormGroup>
              </Col>
            </Row>
            <Row gutter={5}>
              <Col xs={24} sm={12}>
                <FormGroup
                  label="Email address"
                  htmlFor="emailAddress"
                  validationError={touched.emailAddress && errors.emailAddress}
                >
                  <Field component={TextInput} name="emailAddress" />
                </FormGroup>
              </Col>
              <Col xs={24} sm={12}>
                <FormGroup
                  label="Phone number"
                  htmlFor="phoneNumber"
                  validationError={touched.phoneNumber && errors.phoneNumber}
                >
                  <Field
                    component={TextInput}
                    name="phoneNumber"
                    tooltipContent="Phone number must begin with country code, for example '+48' for Poland."
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <FormGroup
                  label="About"
                  htmlFor="about"
                  validationError={touched.about && errors.about}
                >
                  <Field component={TextArea} name="about" maxLength={500} />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col span={7}>
                <FormGroup
                  label="Birthday date"
                  htmlFor="birthdayDate"
                  validationError={touched.birthdayDate && errors.birthdayDate}
                >
                  <Field component={DatePicker} name="birthdayDate" />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col span={7}>
                <FormGroup
                  label="Avatar"
                  htmlFor="avatar"
                  validationError={touched.avatar && errors.avatar}
                >
                  <Field component={ImageUpload} name="avatar" />
                </FormGroup>
              </Col>
            </Row>
            <Row gutter={[10, 10]}>
              <Col>
                <Button htmlType="submit" type="primary">
                  Save
                </Button>
              </Col>
              <Col>
                <Button type="ghost" onClick={() => setIsModalVisible(true)}>
                  Reset
                </Button>
              </Col>
            </Row>
            <Modal
              visible={isModalVisible}
              onOk={() => handleReset(resetForm)}
              onCancel={() => setIsModalVisible(false)}
            >
              <Text>Are you sure, you would like to reset form data?</Text>
            </Modal>
          </FormikForm>
        )}
      </Formik>
    </>
  );
};
