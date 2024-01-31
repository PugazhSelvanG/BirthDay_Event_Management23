import React, { useState } from 'react';
import '../assets/css/book.css'; 

function BookingForm() {
    const [formData, setFormData] = useState({
        applicantName: '',
        eventName: '',
        applicantAddress: '',
        applicantMobile: '',
        applicantEmail: '',
        date: '',
        time: '',
        numPeople: '',
        foodType: 'Vegetarian',
        addons: {
            magicShow: false,
            djParty: false,
            gameShow: false
        }
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setFormData({
            ...formData,
            addons: {
                ...formData.addons,
                [name]: checked
            }
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); // You can handle form submission here
    };

    return (
        <div className="-container">
            <h2>Event Booking Form</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="applicantName">Applicant Name:</label>
                <input type="text" id="applicantName" name="applicantName" value={formData.applicantName} onChange={handleInputChange} />

                <label htmlFor="eventName">Event Name:</label>
                <input type="text" id="eventName" name="eventName" value={formData.eventName} onChange={handleInputChange} />

                <label htmlFor="applicantAddress">Applicant Address:</label>
                <input type="text" id="applicantAddress" name="applicantAddress" value={formData.applicantAddress} onChange={handleInputChange} />

                <label htmlFor="applicantMobile">Applicant Mobile Number:</label>
                <input type="tel" id="applicantMobile" name="applicantMobile" value={formData.applicantMobile} onChange={handleInputChange} />

                <label htmlFor="applicantEmail">Applicant Email:</label>
                <input type="email" id="applicantEmail" name="applicantEmail" value={formData.applicantEmail} onChange={handleInputChange} />

                <label htmlFor="date">Date:</label>
                <input type="date" id="date" name="date" value={formData.date} onChange={handleInputChange} />

                <label htmlFor="time">Time:</label>
                <input type="time" id="time" name="time" value={formData.time} onChange={handleInputChange} />

                <label htmlFor="numPeople">Number of People:</label>
                <input type="number" id="numPeople" name="numPeople" value={formData.numPeople} onChange={handleInputChange} />

                <label htmlFor="foodType">Food Type:</label>
                <select id="foodType" name="foodType" value={formData.foodType} onChange={handleInputChange}>
                    <option value="Vegetarian">Vegetarian</option>
                    <option value="Non-Vegetarian">Non-Vegetarian</option>
                </select>

                <label>Add-ons:</label>
                <input type="checkbox" id="magicShow" name="magicShow" checked={formData.addons.magicShow} onChange={handleCheckboxChange} />
                <label htmlFor="magicShow">Magic Show</label>

                <input type="checkbox" id="djParty" name="djParty" checked={formData.addons.djParty} onChange={handleCheckboxChange} />
                <label htmlFor="djParty">DJ Party</label>
                <input type="checkbox" id="gameShow" name="gameShow" checked={formData.addons.gameShow} onChange={handleCheckboxChange} />
                <label htmlFor="gameShow">Game Show</label>
                  <br></br>
                  <center>
                  <input type="submit" value="Submit" />
                  </center>
            </form>
        </div>
    );
}

export default BookingForm;
