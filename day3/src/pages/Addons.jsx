import React, { useState } from 'react';
import '../assets/css/adthemes.css'; 

function Addons() {
    const [formData, setFormData] = useState({
        themeName: '',
        imageUrl: '',
        themeCost: '',
        themeDescription: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); 
    };

    return (
        <div className="theme-container">
            <h2>Create Add-ons</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="themeName"> Name:</label>
                <input type="text" id="themeName" name="themeName" value={formData.themeName} onChange={handleInputChange} />

                <label htmlFor="imageUrl">Image URL:</label>
                <input type="text" id="imageUrl" name="imageUrl" value={formData.imageUrl} onChange={handleInputChange} />

                <label htmlFor="themeCost"> Cost:</label>
                <input type="text" id="themeCost" name="themeCost" value={formData.themeCost} onChange={handleInputChange} />

                <label htmlFor="themeDescription"> Description:</label>
                <textarea id="themeDescription" name="themeDescription" value={formData.themeDescription} onChange={handleInputChange}></textarea>
                 <center>
                 <input type="submit" value="Submit" />
                 </center>
            </form>
        </div>
    );
}

export default Addons;
