import { 
    Form, 
    FloatingLabel, 
    Button,
    Spinner 
} from 'react-bootstrap';
import { useFormik } from "formik";
import * as Yup from 'yup';


export default function ContactForm() {

    const schema = Yup.object().shape({
        name: Yup.string()
            .required("Please write your name"),
        email: Yup.string()
            .email("Please write a valid email")
            .required("Please write your email"),
        message: Yup.string()
            .min(50, "Please write at least 50 characters")
            .required("Please leave a message"),
    })

    const submitHandler = async (values, actions) => {
        console.log(values);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        actions.resetForm()
    }

    const {
        touched,
        errors,
        dirty,
        isValid,
        handleChange,
        handleBlur,
        isSubmitting,
        handleSubmit,
        getFieldProps,
        } = useFormik({
            validationSchema: schema,
            onSubmit: submitHandler,
            initialValues: {
                name: "",
                email: "",
                message: "",
            },
        })
 
    return (
        <Form onSubmit={handleSubmit} >
            <FloatingLabelField 
                label="Your name" 
                type="text" 
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={touched.name && !!errors.name}
                isValid={touched.name && !errors.name}
                errorMessage={errors.name}
                disabled={isSubmitting}
                {...getFieldProps("name")} 
            />
            <FloatingLabelField 
                label="Your email" 
                type="email" 
                onChange={handleChange} 
                onBlur={handleBlur}
                isInvalid={touched.email && !!errors.email}
                isValid={touched.email && !errors.email}
                errorMessage={errors.email}
                disabled={isSubmitting}
                {...getFieldProps("email")} 
            />
            <FloatingLabelField 
                label="Your message" 
                type="textarea" 
                onChange={handleChange} 
                as="textarea" 
                onBlur={handleBlur}
                isInvalid={touched.message && !!errors.message}
                isValid={touched.message && !errors.message}
                errorMessage={errors.message}
                disabled={isSubmitting}
                {...getFieldProps("message")} 
            />
            <Button type="submit" disabled={!(dirty && isValid) || isSubmitting}>
                Send the message
                {isSubmitting && <Spinner className="ms-1" animation="border" variant="light" size="sm" />}
            </Button>
            
        </Form>
    );
};

const FloatingLabelField = ({label, type, errorMessage, ...props}) => {

    return (
        <FloatingLabel label={label} className="mb-3">
                <Form.Control 
                    type={type} 
                    placeholder={label} 
                    style={type === "textarea" ? { height: "200px" } : {}} 
                    {...props} 
                />
                <Form.Control.Feedback type="invalid" tooltip>{errorMessage}</Form.Control.Feedback>
        </FloatingLabel>
    );
};