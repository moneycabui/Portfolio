import React from 'react';
import { FaLinkedinIn, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';
import { IoMailSharp } from 'react-icons/io5';
import styles from './Contact.css';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameInput: '',
      emailInput: '',
      phoneInput: '',
      subjectInput: '',
      messageInput: '',
      charCount: 0,
      sentStatus: 'default',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handlePhoneInput = this.handlePhoneInput.bind(this);
    this.handleMessageInput = this.handleMessageInput.bind(this);
    this.handleMessageSend = this.handleMessageSend.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handlePhoneInput(event) {
    const { phoneInput } = this.state;
    let phoneNumber = (event.target.value).toString();
    if (phoneInput.length === 4 && phoneInput.charAt(3) !== '-') {
      phoneNumber = phoneNumber.slice(0, 3) + '-' + phoneNumber.slice(3);
    }
    if (phoneInput.length === 8 && phoneInput.charAt(7) !== '-') {
      phoneNumber = phoneNumber.slice(0, 7) + '-' + phoneNumber.slice(7);
    }
    this.setState({ phoneInput: phoneNumber });
  }

  handleMessageInput(event) {
    const input = event.target.value;
    this.setState({
      messageInput: input,
      charCount: input.length,
    });
  }

  handleMessageSend(event) {
    event.preventDefault();
    console.log('Sent: ', this.state);
    this.setState({
      nameInput: '',
      titleInput: '',
      companyInput: '',
      emailInput: '',
      phoneInput: '',
      subjectInput: '',
      messageInput: '',
      charCount: 0,
      sentStatus: 'sent',
    });
  }

  render() {
    const {
      nameInput,
      titleInput,
      companyInput,
      emailInput,
      phoneInput,
      subjectInput,
      messageInput,
      charCount,
      sentStatus,
    } = this.state;

    let sentNotificationRender = <h2 className={styles.defaultNotification}>- • Send a message • -</h2>;
    if (sentStatus === 'sent') {
      sentNotificationRender = <h2 className={styles.sentNotification}>Message sent!</h2>;
    }
    if (sentStatus === 'failed') {
      sentNotificationRender = <h2 className={styles.failedNotification}>Message failed to send</h2>;
    }

    return (
      <div className={styles.contact}>
        <img src="/images/ContactTitle.png" alt="Contact" className={styles.contactTitle} />

        <div className={styles.iconWrapper}>
          <FaLinkedinIn
            title="linkedin.com/in/monicabui"
            onClick={() => window.open('https://www.linkedin.com/in/monicabui/')}
            className={styles.liIcon}
          />
          <IoMailSharp
            title="Send me an email at monicabbui@gmail.com"
            onClick={() => window.open('mailto:monicabbui@gmail.com')}
            className={styles.emailIcon}
          />
          <FaInstagram
            title="IG: @moneycabui"
            onClick={() => window.open('https://www.instagram.com/moneycabui/')}
            className={styles.igIcon}
          />
          <FaFacebook
            title="facebook.com/moneycabui"
            onClick={() => window.open('https://www.facebook.com/moneycabui')}
            className={styles.fbIcon}
          />
          <FaGithub
            title="GitHub: @moneycabui"
            onClick={() => window.open('https://github.com/moneycabui/Portfolio')}
            className={styles.ghIcon}
          />
        </div>

        <div className={styles.messageContainer}>
          <img className={styles.emailImage} src="/images/EmailIcon.jpeg" alt="Message Icon" />
          <form className={styles.messageForm} onSubmit={this.handleMessageSend}>
            {sentNotificationRender}
            <label htmlFor="nameInput" className={styles.inputText}>First and Last Name*</label>
            <input
              placeholder="First Last"
              name="nameInput"
              value={nameInput}
              onChange={this.handleChange}
              className={styles.nameInput}
              required
              minLength="5"
              maxLength="100"
            />
            <div className={styles.companyContainer}>
              <div>
                <label htmlFor="titleInput" className={styles.titleInputText}>Title</label>
                <input
                  placeholder="CEO"
                  name="titleInput"
                  value={titleInput}
                  onChange={this.handleChange}
                  className={styles.titleInput}
                  maxLength="100"
                />
              </div>
              <div>
                <label htmlFor="companyInput" className={styles.companyInputText}>Company</label>
                <input
                  placeholder="Name of Company"
                  name="companyInput"
                  value={companyInput}
                  onChange={this.handleChange}
                  className={styles.companyInput}
                  maxLength="150"
                />
              </div>
            </div>
            <label htmlFor="emailInput" className={styles.inputText}>Email*</label>
            <input
              placeholder="abc@123.com"
              type="email"
              name="emailInput"
              value={emailInput}
              onChange={this.handleChange}
              className={styles.emailInput}
              minLength="7"
              maxLength="200"
              required
            />
            <label htmlFor="phoneInput" className={styles.inputText}>Phone Number</label>
            <input
              placeholder="999-999-9999"
              type="tel"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              name="phoneInput"
              value={phoneInput}
              onChange={this.handlePhoneInput}
              className={styles.phoneInput}
              maxLength="12"
            />
            <small className={styles.note}>Optional Input | Required format: ###-###-####</small>
            <label htmlFor="subjectInput" className={styles.inputText}>Subject</label>
            <input
              placeholder="Example: Great page!"
              name="subjectInput"
              value={subjectInput}
              onChange={this.handleChange}
              className={styles.subjectInput}
              maxLength="200"
            />
            <label htmlFor="messageInput" className={styles.inputText}>Message*</label>
            <textarea
              placeholder="Type your message here"
              name="messageInput"
              value={messageInput}
              onChange={this.handleMessageInput}
              className={styles.messageInput}
              minLength="10"
              required
            />
            <div className={styles.notesWrapper}>
              <span className={styles.characterCount}>Character Count: {charCount}</span>
              <span className={styles.note}>An asterist (*) indicates required information.</span>
            </div>
            <div className={styles.buttonsContainer}>
              <button type="reset" className={styles.cancelButton}>Cancel</button>
              <button type="submit" className={styles.submitMessageButton}>Send</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;