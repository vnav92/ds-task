import * as Yup from 'yup';

export const formInitialValues = {
  firstName: '',
  lastName: '',
  emailAddress: '',
  phoneNumber: '',
  birthdayDate: '',
  about: '',
}

const getTooShortMessage = (minLength: number) => `Please provide at least ${minLength} digits`;
const getTooLongMessage = (name: string, maxLength: number) => `${name} should be shorter than ${maxLength} digits`

export const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('Required').min(2, getTooShortMessage(2)).max(50, getTooLongMessage('First name', 50)),
  lastName: Yup.string().required('Required').min(2, getTooShortMessage(2)).max(100, getTooLongMessage('Last name', 100)),
  emailAddress: Yup.string().email('Invalid email format').required('Required').max(80, getTooLongMessage('Email', 80)),
  phoneNumber: Yup.string()
    .required('Required')
    .test(
      'isTelephoneNumber',
      'Incorrect telephone number',
      (value) =>
        Boolean(value && value[0] === '+' && !isNaN(value.slice(1) as unknown as number) && value.split('').length > 7)
    ),
  birthdayDate: Yup.string().required('Required'),
  about: Yup.string().required('Required').min(5, getTooShortMessage(10)).max(500, getTooLongMessage('Description', 500))
})