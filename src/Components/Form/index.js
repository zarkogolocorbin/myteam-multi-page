import { FormContainer } from "./style/Form";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "",
  emailAddress: "",
  companyName: "",
  title: "",
  message: "",
};

const onSubmit = (values, submitProps) => {
  console.log(values);
  submitProps.resetForm();
};

const validationSchema = Yup.object({
  name: Yup.string().required("This field is required"),
  emailAddress: Yup.string()
    .email("Looks like this is not an email")
    .required("This field is required"),
  companyName: Yup.string().required("This field is required"),
  title: Yup.string().required("This field is required"),
  message: Yup.string().required("This field is required"),
});

export default function Forms() {
  return (
    <FormContainer>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div className="form-control">
            <Field name="name">
              {(props) => {
                const { field, meta } = props;

                return (
                  <div>
                    <input
                      placeholder="First Name"
                      type="text"
                      id="name"
                      autoComplete="off"
                      {...field}
                      className={
                        meta.touched && meta.error ? "error-input" : null
                      }
                    />
                    {meta.touched && meta.error ? (
                      <div className="error">{meta.error}</div>
                    ) : null}
                  </div>
                );
              }}
            </Field>
          </div>
          <div className="form-control">
            <Field name="emailAddress">
              {(props) => {
                const { field, meta } = props;

                return (
                  <div>
                    <input
                      placeholder="Email Address"
                      type="email"
                      id="emailAddress"
                      autoComplete="off"
                      {...field}
                      className={
                        meta.touched && meta.error ? "error-input" : null
                      }
                    />
                    {meta.touched && meta.error ? (
                      <div className="error">{meta.error}</div>
                    ) : null}
                  </div>
                );
              }}
            </Field>
          </div>
          <div className="form-control">
            <Field name="companyName">
              {(props) => {
                const { field, meta } = props;

                return (
                  <div>
                    <input
                      placeholder="Company Name"
                      type="text"
                      id="companyName"
                      autoComplete="off"
                      {...field}
                      className={
                        meta.touched && meta.error ? "error-input" : null
                      }
                    />
                    {meta.touched && meta.error ? (
                      <div className="error">{meta.error}</div>
                    ) : null}
                  </div>
                );
              }}
            </Field>
          </div>
          <div className="form-control">
            <Field name="title">
              {(props) => {
                const { field, meta } = props;

                return (
                  <div>
                    <input
                      placeholder="Title"
                      type="text"
                      id="title"
                      autoComplete="off"
                      {...field}
                      className={
                        meta.touched && meta.error ? "error-input" : null
                      }
                    />
                    {meta.touched && meta.error ? (
                      <div className="error">{meta.error}</div>
                    ) : null}
                  </div>
                );
              }}
            </Field>
          </div>
          <div className="form-control">
            <Field name="message">
              {(props) => {
                const { field, meta } = props;

                return (
                  <div>
                    <textarea
                      placeholder="Message"
                      type="text"
                      id="message"
                      autoComplete="off"
                      {...field}
                      rows="2"
                      className={
                        meta.touched && meta.error ? "error-input" : null
                      }
                    />
                    {meta.touched && meta.error ? (
                      <div className="error">{meta.error}</div>
                    ) : null}
                  </div>
                );
              }}
            </Field>
          </div>
          <button type="submit" className="btn btn-submit">
            Submit
          </button>
        </Form>
      </Formik>
    </FormContainer>
  );
}
