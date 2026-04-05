import React, { useState, useEffect } from 'react';
import NavBar from '../NavBar/NavBar';
import './Login.css';

const Login = ({ onLogin }) => {
    const [lang, setLang] = useState('sv'); 
    const [texts, setTexts] = useState({});
    const [loading, setLoading] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username: email, password: password })
            });

            const data = await response.json();

            if (response.ok) {
            onLogin(data.token, data.username); 
            } else {
            alert(data.message || 'Error in login');
            }
        } catch (error) {
            console.error("Error in login:", error);
        }
    };

    const handleLanguageChange = (newLang) => {
        setLang(newLang);
    };

    useEffect(() => {
        const fetchTexts = async () => {
        setLoading(true);
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/translations/${lang}`);
            const data = await response.json();
            setTexts(data);
        } catch (error) {
            console.error("Error loading languages", error);
        } finally {
            setLoading(false);
        }
        };
        fetchTexts();
    }, [lang]);

  return (
    loading ? (
        <div style={{ 
            display: 'flex', 
            flexDirection: 'column',
            justifyContent: 'center', 
            alignItems: 'center', 
            height: '100vh',
            gap: '20px'
        }}>
            <div className="spinner"></div>
            <p style={{ fontFamily: 'Arial', color: '#666', fontWeight: 'bold' }}>
                Loading...
            </p>
        </div>
    ) : (   
      <div className="login-container">
        <NavBar currentLang={lang} onChangeLang={handleLanguageChange} texts={texts} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <img className='background-image' style={{width: "100%", height: "100%"}} src='https://storage.123fakturera.se/public/wallpapers/sverige43.jpg' alt='Background' />

        <div className="scrollable-content">
            <div className='login-card-wrapper'>
                <form onSubmit={handleSubmit} className='login-card'>
                    <h2 className="login-header-text" style={{color: "red", fontSize: "40px", fontWeight: "bold"}}>{texts.login_header}</h2>

                    <div className="inputs-container" style={{display: "flex", flexDirection: "column", gap: "30px"}}>
                        <div className="input-group">
                            <label>{texts.label_email}</label>
                            <input 
                                className='login-input' 
                                type="text" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder={texts.placeholder_user} 
                                required
                            />
                        </div>

                        <div className="input-group">
                            <label>{texts.label_password}</label>
                            <input 
                                className='login-input' 
                                type="password" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••" 
                                required
                            />
                        </div>
                    </div>

                    <button type="submit" className="login-button">
                        {texts.btn_login || 'Sign in'}
                    </button>

                    <div style={{display: "flex", alignItems: "center", gap: "40px"}} className="login-footer-links">
                        <span>{texts.btn_register || 'Register'}</span>
                        <span>{texts.forgot_password || 'Forgotten password?'}</span>
                    </div>
                </form>
            </div>

            <footer className="footer-full-width">
                <div className="footer-content">
                    <div className="footer-top-row">
                        <div className="footer-brand">123 Fakturera</div>
                        <div className="footer-links">
                            <a href="#">{texts.link_home || 'Home'}</a>
                            <a href="#">{texts.link_order || 'Order'}</a>
                            <a href="#">{texts.link_contact || 'Contact us'}</a>
                        </div>
                    </div>
                    <div className="footer-line"></div>
                    <div className="footer-bottom-row">
                        <span>© Lättfaktura, CRO no. 638537, 2025. {texts.footer_rights || 'All rights reserved.'}</span>
                    </div>
                </div>
            </footer>
        </div>
      </div>
    )
    );   
};

export default Login;