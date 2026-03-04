import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { Mail, MapPin, Github, Trophy } from 'lucide-react';
import Beams from './Beams';
import './PageStyles.css';

const ContactPage = () => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 300);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await addDoc(collection(db, 'messages'), {
        ...formData,
        timestamp: new Date(),
        status: 'unread'
      });

      setSubmitStatus('Message sent successfully! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('Error sending message. Please try again.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(''), 5000);
    }
  };

  const contactInfo = [
    {
      label: "EMAIL",
      value: "satyam23495@iiitd.ac.in",
      icon: <Mail size={28} color="var(--accent-blue)" />
    },
    {
      label: "LOCATION",
      value: "New Delhi, India",
      icon: <MapPin size={28} color="var(--accent-violet)" />
    },
    {
      label: "GITHUB",
      value: "github.com/itzsam-lol",
      icon: <Github size={28} color="var(--text-main)" />
    },
    {
      label: "LEETCODE",
      value: "300+ Problems Solved",
      icon: <Trophy size={28} color="#ffcc00" />
    }
  ];

  return (
    <div className="page-container">
      <div className="retro-grid"></div>
      <div className="scanlines"></div>

      <button className="nav-button" onClick={() => navigate('/menu')}>
        ← MENU
      </button>

      <div className="beams-background">
        <Beams
          beamWidth={3.5}
          beamHeight={12}
          beamNumber={16}
          lightColor="#ff4080"
          speed={2}
          noiseIntensity={2.5}
          scale={0.18}
          rotation={150}
        />
      </div>

      <div className={`page-content ${isLoaded ? 'loaded' : ''}`}>
        <div className="page-header">
          <h1 className="page-title">CONTACT_INTERFACE.COM</h1>
          <p className="page-subtitle">Establish Connection & Send Transmission</p>
        </div>

        <div className="contact-container">
          <div className="contact-info-section">
            <h3 className="info-title">CONNECTION_DETAILS</h3>
            <div className="contact-info-grid">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-info-item" style={{ animationDelay: `${index * 0.1}s` }}>
                  <span className="contact-icon">{info.icon}</span>
                  <div className="contact-details">
                    <span className="contact-label">{info.label}</span>
                    <span className="contact-value">{info.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-form-section">
            <h3 className="form-title">SEND_MESSAGE.EXEC</h3>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">NAME</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">EMAIL</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">SUBJECT</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">MESSAGE</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="6"
                  className="form-textarea"
                ></textarea>
              </div>

              <button
                type="submit"
                className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'TRANSMITTING...' : 'SEND MESSAGE'}
              </button>

              {submitStatus && (
                <div className="submit-status">{submitStatus}</div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
