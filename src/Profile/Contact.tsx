import emailjs, { sendForm } from 'emailjs-com'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import '../components/main.css'
import { Button } from 'semantic-ui-react'
import { useState } from 'react'
import { layer } from '@fortawesome/fontawesome-svg-core'

const Contact = () => {

    const [loading, isLoading] = useState(false)

    const sendEmail = (e: any) => {
    e.preventDefault();
    emailjs.sendForm('gmail', 'template_gwijifq', e.target, 'user_u2kPPJin5PtcVq1ikaa5Y')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }

    const handleLoading = () => {
      isLoading(true)
      setTimeout(() => {
        isLoading(false)
      }, 1000)
    }

    return (
      <div id="Contact" className="contact-main">
        <div className="contain">
          <section className="form-section">
            <form onSubmit={sendEmail}>
              <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="user_name" required />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="user_email" required />
              </div>
              <div>
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" required />
              </div>
              <div onClick={handleLoading}>
                <Button className="btn" type="submit" loading={loading}>
                  Send
                </Button>
              </div>
            </form>
          </section>
          <section className="detail-section">
            <h1 style={{ textAlign: "center" }}>Want to get in touch?</h1>
            <p style={{ fontSize: "2rem" }}>
              My Cell: <strong>01746389293</strong>
            </p>
          </section>
        </div>
      </div>
    );
}

export default Contact
