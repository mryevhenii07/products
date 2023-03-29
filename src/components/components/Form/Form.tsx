import * as React from 'react';
import * as yup from 'yup';
import { Formik, FormikHelpers, FormikProps, Form, Field, FieldProps } from 'formik';
import MyFormValues from '../../../types/interface';
import s from './Form.module.css';
import { useAppDispatch } from '../../../hooks/hooks';
import { addNewProducts } from '../../../store/createFormSlice/createFormSlice';

interface PropsFormValues extends MyFormValues {}

const validationSchema = yup.object().shape({
  name: yup.string().required('Required').min(2, 'Too Short!').max(15, 'Too Long!'),
  author: yup.string().required('Required').min(2, 'Too Short!').max(15, 'Too Long!'),
  yearOfPublication: yup.number().max(new Date().getFullYear()).required(),
  rating: yup.string().required('Required').min(1, 'Too Short!').max(1, 'Too Long!'),
});

const FormCreate: React.FC = () => {
  const initialValues: PropsFormValues = {
    name: '',
    author: '',
    yearOfPublication: '',
    rating: '',
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
            <label>
              Name
              <Field id="Name" name="name" placeholder="Enter name..." />
              {errors.name && touched.name ? <div>{errors.name}</div> : null}
            </label>

            <Field id="Author" name="author" placeholder="Enter author..." />
            {errors.author && touched.author ? <div>{errors.author}</div> : null}

            <Field
              id="YearOfPublication"
              name="yearOfPublication"
              placeholder="Enter year of publication..."
            />
            {errors.yearOfPublication && touched.yearOfPublication ? (
              <div>{errors.yearOfPublication}</div>
            ) : null}

            <Field id="Rating" name="rating" placeholder="Enter rating..." />
            {errors.rating && touched.rating ? <div>{errors.rating}</div> : null}

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
