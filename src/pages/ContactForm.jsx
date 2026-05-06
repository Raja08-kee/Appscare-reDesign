import React, { useState } from 'react';

const ContactForm = () => {
    // State to store form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    ```
// Handle input change
const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });
};

// Handle form submit
const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("🚀 FORM SUBMITTED");
    console.log("📤 Sending Data:", formData);

    try {
        const response = await fetch("https://appscare-redesign-1.onrender.com/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        console.log("📡 Response Status:", response.status);

        const result = await response.json();
        console.log("📥 Server Response:", result);

        if (response.ok) {
            alert("✅ " + result.message);

            // Clear form after success
            setFormData({
                name: '',
                email: '',
                message: ''
            });
        } else {
            alert("❌ " + result.error);
        }

    } catch (error) {
        console.error("❌ FETCH ERROR:", error);
        alert("Server connection failed!");
    }
};

return (
    <div style={{ padding: '20px' }}>
        <h2>Contact Us</h2>

        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
            />
            <br /><br />

            <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
            />
            <br /><br />

            <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
            />
            <br /><br />

            <button type="submit">Send Message</button>
        </form>
    </div>
);
```

};

export default ContactForm;
