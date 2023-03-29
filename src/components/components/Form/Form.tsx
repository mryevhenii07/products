import * as React from 'react';
import * as yup from 'yup';
import { Formik, FormikHelpers, FormikProps, Form, Field, FieldProps } from 'formik';
import MyFormValues from '../../../types/interface';
import s from './Form.module.css';
import { useAppDispatch } from '../../../hooks/hooks';
import { addNewProducts } from '../../../store/createFormSlice/createFormSlice';

interface PropsFormValues extends MyFormValues {}

const validationSchema = yup.object().shape({
  name: yup.string().required('Name is required').min(2, 'Too Short!').max(15, 'Too Long!'),
  author: yup.string().required('Author is required').min(2, 'Too Short!').max(15, 'Too Long!'),
  yearOfPublication: yup
    .number()
    .required('Year is required')
    .min(1900, 'Year must be greater than or equal to 1900')
    .max(new Date().getFullYear(), 'Year must be less than or equal to current year'),
  rating: yup
    .number()
    .required('Rating is required')
    .min(1, 'Rating must be greater than or equal to 1')
    .max(5, 'Rating must be less than or equal to 5'),
});

const FormCreate: React.FC = () => {
  const initialValues: PropsFormValues = {
    name: '',
    author: '',
    yearOfPublication: undefined,
    rating: undefined,
    id: Date.now(),
  };
  const dispatch = useAppDispatch();

  return (
    <div className={s.loginBox}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          dispatch(addNewProducts({ ...values, id: Date.now() }));
          actions.setSubmitting(false);
        }}>
        {({ errors, touched }) => (
          <Form className={s.form}>
            <label className={s.label}>
              <span>Name</span>
              <Field id="Name" name="name" placeholder="Enter name..." />
              {errors.name && touched.name ? <div>{errors.name}</div> : null}
            </label>

            <label className={s.label}>
              <span>Author</span>
              <Field id="Author" name="author" placeholder="Enter author..." />
              {errors.author && touched.author ? <div>{errors.author}</div> : null}
            </label>
            <label className={s.label}>
              <span>Year Of Publication</span>
              <Field
                id="YearOfPublication"
                name="yearOfPublication"
                placeholder="Enter year of publication..."
              />
              {errors.yearOfPublication && touched.yearOfPublication ? (
                <div>{errors.yearOfPublication}</div>
              ) : null}
            </label>
            <label className={s.label}>
              <span>Rating</span>

              <Field id="Rating" name="rating" placeholder="Enter rating..." />
              {errors.rating && touched.rating ? <div>{errors.rating}</div> : null}
            </label>
            {/* <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off">
              <TextField id="standard-basic" label="Standard" variant="standard" />
            </Box> */}

            <button className={s.button} type="submit">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormCreate;
