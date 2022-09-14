import React from "react";
import "../assets/css/Contact.css";
import {Formik,Form,Field} from 'formik'
import contactVal from 'validation/contactValidation'

function Contact() {
  return (
    <div className='contact'>

    <div className="form-contact">
      <div className="contact-form frm">
        <h1 className='h-left'>Tell Us Your Message</h1>
        <Formik
        initialValues={{
          name:"",
          email:"",
          subject:"",
          message:""
        }}
        validationSchema={contactVal}
        onSubmit={(val)=>
        {
          
        }}
        >

        {
          ({errors,touched})=> (

            <Form className='form-ik'>
            <div className="inp-form">
              <label htmlFor="name">Your Name <span>*</span></label>
            <Field name='name' placeholder="Full Name" className='inp-f' id='name'/>
            {errors.name && touched.name ? (<div className='error'><i className="bi bi-dash-circle-fill"></i></div>):null}
            </div>
            <div className="inp-form">
              <label htmlFor="email">Your E-mail <span>*</span></label>
            <Field name='email' placeholder="E-mail address" className='inp-f' id='email'/>
            {errors.email && touched.email ? (<div className='error'><i className="bi bi-dash-circle-fill"></i></div>):null}
            </div>
            <div className="inp-form">
              <label htmlFor="subject">Subject<span>*</span></label>
            <Field name='subject' placeholder="Subject" className='inp-f' id='subject'/>
            {errors.subject && touched.subject ? (<div className='error'><i className="bi bi-dash-circle-fill"></i></div>):null}
            </div>
            <div className="inp-form">
              <label htmlFor="subject">Your Message<span>*</span></label>
            <Field name='message'  placeholder="Message" className='inp-f area' as="textarea" id='message'/>
            {errors.message && touched.message ? (<div className='error'><i className="bi bi-dash-circle-fill"></i></div>):null}
            </div>
            <div className="sub-div">
              <input className='sub-btn' type="submit" value='Send Message'/>
            </div>
          </Form>
          )
        }

        </Formik>

      </div>



      <div className="form-about frm">
        <h1 className='h-left'>Contact Us</h1>
        <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram anteposuerit litterarum formas human. qui sequitur mutationem consuetudium lectorum. Mirum est notare quam</p>
      <div className="cnt">
        <h2 className='h-left'><i className="fa-regular fa-address-book"></i> Address</h2>
        <p>Azerbaijan Baku , AF Business</p>
      </div>
      <div className="cnt">
        <h2 className='h-left'><i className="fa-solid fa-phone"></i>  Phone</h2>
        <p>Mobile: (050) 825 75 15 </p>
        <p>Hotline: 1009 678 456</p>
      </div>
      <div className="cnt">
        <h2 className='h-left'><i className="fa-solid fa-envelope"></i> Mail</h2>
        <p>eltacem@code.edu.az</p>
        <p>ejtacmalik@gmail.com</p>
      </div>


      </div>
      </div>



<iframe width="100%" className='frame'  frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Azerbaijan,%20Baku+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
    </div>
  );
}

export default Contact;