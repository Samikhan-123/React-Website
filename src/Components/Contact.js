import React from 'react'
import { useFormik } from 'formik';
const Contact = () => {
    const formik = useFormik({
        initialValues:
        {
            name: '',
            email: '',
            message: ''
        },
        onSubmit: (values, { resetForm }) => {
            alert(`Hello my name is ${values.name} my email is ${values.email} and message is ${values.message}`)
            console.log(values);
            resetForm();
        }
    })
    return (
        <>
            <div>
                <h1 className='text-center fw-bold py-4'>Contact Us</h1>
            </div>

            <section style={{ width: '100vw', height: 'auto' }} className="section_form">
                <div style={{ width: '50vw' }} className="center bg-light py-3 m-auto ">
                    <form style={{ width: '90%' }} className="feed-form mx-auto" onSubmit={formik.handleSubmit}>
                        <input required placeholder="Name" type="text" name="name" onChange={formik.handleChange} value={formik.values.name} />
                        <input required placeholder="Email" type="email" name="email" onChange={formik.handleChange} value={formik.values.email} />
                        <textarea required placeholder='Message' name="message" onChange={formik.handleChange} value={formik.values.message} />
                        <button className="button_submit fw-bold" type='submit' >SEND</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Contact
