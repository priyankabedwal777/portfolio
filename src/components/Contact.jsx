import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setShowSuccess(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);

      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    }, 1000);
  };

  const handleContactClick = (type, value) => {
    if (type === "email") {
      window.location.href = `mailto:${value}`;
    } else if (type === "phone") {
      window.location.href = `tel:${value}`;
    }
  };

  const styles = {
    container: {
      minHeight: "100vh",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      padding: "20px",
      position: "relative",
      overflowX: "hidden",
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    },
    wrapper: {
      maxWidth: "1200px",
      margin: "0 auto",
      position: "relative",
      zIndex: 1,
    },
    contactSection: {
      display: "grid",
      gridTemplateColumns: window.innerWidth > 768 ? "1fr 1fr" : "1fr",
      gap: "60px",
      alignItems: "center",
      marginTop: "50px",
    },
    contactInfo: {
      color: "white",
    },
    title: {
      fontSize: "3.5rem",
      fontWeight: 700,
      marginBottom: "20px",
      background: "linear-gradient(45deg, #fff, #e0e7ff)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      lineHeight: 1.1,
    },
    description: {
      fontSize: "1.2rem",
      lineHeight: 1.6,
      marginBottom: "40px",
      opacity: 0.9,
    },
    contactDetails: {
      display: "flex",
      flexDirection: "column",
      gap: "20px",
    },
    contactItem: {
      display: "flex",
      alignItems: "center",
      gap: "15px",
      padding: "15px 20px",
      background: "rgba(255, 255, 255, 0.1)",
      borderRadius: "15px",
      backdropFilter: "blur(10px)",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      cursor: "pointer",
      transition: "all 0.3s ease",
    },
    contactIcon: {
      fontSize: "1.5rem",
      width: "30px",
      textAlign: "center",
      color: "#fbbf24",
    },
    contactText: {
      fontSize: "1.1rem",
      color: "white",
    },
    socialLinks: {
      display: "flex",
      gap: "15px",
      marginTop: "30px",
    },
    socialLink: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "50px",
      height: "50px",
      background: "rgba(255, 255, 255, 0.1)",
      borderRadius: "50%",
      color: "white",
      fontSize: "1.2rem",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      textDecoration: "none",
      transition: "all 0.3s ease",
    },
    formContainer: {
      background: "rgba(255, 255, 255, 0.95)",
      borderRadius: "20px",
      padding: "40px",
      backdropFilter: "blur(20px)",
      border: "1px solid rgba(255, 255, 255, 0.3)",
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
      position: "relative",
      overflow: "hidden",
    },
    formGroup: {
      marginBottom: "25px",
    },
    label: {
      display: "block",
      marginBottom: "8px",
      fontWeight: 600,
      color: "#374151",
      fontSize: "0.9rem",
      textTransform: "uppercase",
      letterSpacing: "0.5px",
    },
    input: {
      width: "100%",
      padding: "15px 20px",
      border: "2px solid #e5e7eb",
      borderRadius: "12px",
      fontSize: "1rem",
      transition: "all 0.3s ease",
      background: "white",
      fontFamily: "inherit",
    },
    textarea: {
      width: "100%",
      padding: "15px 20px",
      border: "2px solid #e5e7eb",
      borderRadius: "12px",
      fontSize: "1rem",
      transition: "all 0.3s ease",
      background: "white",
      fontFamily: "inherit",
      resize: "vertical",
      minHeight: "120px",
    },
    select: {
      width: "100%",
      padding: "15px 20px",
      border: "2px solid #e5e7eb",
      borderRadius: "12px",
      fontSize: "1rem",
      transition: "all 0.3s ease",
      background: "white",
      fontFamily: "inherit",
    },
    submitBtn: {
      width: "100%",
      padding: "18px",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      color: "white",
      border: "none",
      borderRadius: "12px",
      fontSize: "1.1rem",
      fontWeight: 600,
      cursor: "pointer",
      transition: "all 0.3s ease",
      textTransform: "uppercase",
      letterSpacing: "1px",
      position: "relative",
      overflow: "hidden",
    },
    successMessage: {
      background: "linear-gradient(135deg, #10b981, #059669)",
      color: "white",
      padding: "15px",
      borderRadius: "12px",
      marginBottom: "20px",
      textAlign: "center",
      fontWeight: 600,
    },
    loadingSpinner: {
      display: "inline-block",
      width: "20px",
      height: "20px",
      border: "2px solid rgba(255, 255, 255, 0.3)",
      borderRadius: "50%",
      borderTopColor: "white",
      animation: "spin 1s ease-in-out infinite",
      marginRight: "10px",
    },
  };

  return (
    <div style={styles.container}>
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-20px) rotate(1deg);
          }
          66% {
            transform: translateY(-10px) rotate(-1deg);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%) translateY(-100%) rotate(45deg);
          }
          100% {
            transform: translateX(100%) translateY(100%) rotate(45deg);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        .animated-bg::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: radial-gradient(
              circle at 20% 80%,
              rgba(255, 255, 255, 0.1) 0%,
              transparent 50%
            ),
            radial-gradient(
              circle at 80% 20%,
              rgba(255, 255, 255, 0.1) 0%,
              transparent 50%
            ),
            radial-gradient(
              circle at 40% 40%,
              rgba(255, 255, 255, 0.05) 0%,
              transparent 50%
            );
          animation: float 20s ease-in-out infinite;
        }

        .shimmer-effect::before {
          content: "";
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            45deg,
            transparent,
            rgba(102, 126, 234, 0.1),
            transparent
          );
          animation: shimmer 3s ease-in-out infinite;
        }

        .contact-item:hover {
          background: rgba(255, 255, 255, 0.15) !important;
          transform: translateY(-2px);
        }

        .social-link:hover {
          background: rgba(255, 255, 255, 0.2) !important;
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }

        .form-input:focus,
        .form-select:focus,
        .form-textarea:focus {
          outline: none;
          border-color: #667eea !important;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
          transform: translateY(-2px);
        }

        .submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(102, 126, 234, 0.4);
        }

        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .loading-spinner {
          animation: spin 1s ease-in-out infinite;
        }

        .success-message {
          animation: slideDown 0.5s ease;
        }

        @media (max-width: 768px) {
          .contact-section {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            text-align: center;
          }

          .contact-title {
            font-size: 2.5rem !important;
          }

          .form-container {
            padding: 30px 20px !important;
          }

          .contact-item {
            justify-content: center !important;
          }
        }
      `}</style>

      <div className="animated-bg" style={styles.wrapper}>
        <div style={styles.contactSection} className="contact-section">
          {/* Contact Information */}
          <div style={styles.contactInfo}>
            <h1 style={styles.title} className="contact-title">
              Contact Me
            </h1>
            <p style={styles.description}>
              I love talking about ideas, opportunities, and new challenges. If
              you think we can build something amazing together, let's connect!
            </p>

            <div style={styles.contactDetails}>
              <div
                className="contact-item"
                style={styles.contactItem}
                onClick={() =>
                  handleContactClick("email", "your.email@example.com")
                }
              >
                <span style={styles.contactIcon}>📧</span>
                <span style={styles.contactText}>your.email@example.com</span>
              </div>

              <div
                className="contact-item"
                style={styles.contactItem}
                onClick={() => handleContactClick("phone", "+919876543210")}
              >
                <span style={styles.contactIcon}>📱</span>
                <span style={styles.contactText}>+91 9876543210</span>
              </div>

              <div style={styles.contactItem}>
                <span style={styles.contactIcon}>📍</span>
                <span style={styles.contactText}>Gurugram, Haryana, India</span>
              </div>
            </div>

            <div style={styles.socialLinks}>
              {[
                { icon: "🐙", href: "#", title: "GitHub" },
                { icon: "💼", href: "#", title: "LinkedIn" },
                { icon: "📧", href: "#", title: "Email" },
                { icon: "🐦", href: "#", title: "Twitter" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="social-link"
                  title={social.title}
                  style={styles.socialLink}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div
            style={styles.formContainer}
            className="form-container shimmer-effect"
          >
            <div style={{ position: "relative", zIndex: 1 }}>
              {showSuccess && (
                <div style={styles.successMessage} className="success-message">
                  ✅ Message sent successfully! I'll get back to you soon.
                </div>
              )}

              <div>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    style={styles.input}
                    required
                  />
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.label}>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    style={styles.input}
                    required
                  />
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.label}>Subject</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-select"
                    style={styles.select}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="freelance">
                      Freelance Project Proposal
                    </option>
                    <option value="collaboration">
                      Collaboration Opportunity
                    </option>
                    <option value="job">Job Opportunity</option>
                    <option value="consultation">Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.label}>Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-textarea"
                    style={styles.textarea}
                    placeholder="Tell me about your project or idea..."
                    required
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className="submit-btn"
                  style={styles.submitBtn}
                  disabled={isSubmitting}
                >
                  {isSubmitting && (
                    <span
                      style={styles.loadingSpinner}
                      className="loading-spinner"
                    ></span>
                  )}
                  {isSubmitting ? "Sending..." : "📤 Send Message"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
