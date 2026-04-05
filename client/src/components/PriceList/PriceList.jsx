import React, { useState, useEffect } from 'react';
import './PriceList.css';
import { 
  FileText, 
  Users, 
  Settings, 
  Tag, 
  Files, 
  LogOut, 
  Menu,
  X
} from 'lucide-react';

const PriceList = ({ username, onLogout }) => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    
    fetch(`${import.meta.env.VITE_API_URL}/api/products`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` 
      }
    })
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Error cargando productos:", err));
  }, []);

  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="page-wrapper">
      <header className="top-bar">
        <div className="top-left">
          <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X color="white" /> : <Menu color="white" />}
          </button>
          
          <div className="avatar-circle desktop-only">
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s" alt="profile" />
          </div>
          <div className="user-text desktop-only">
            <span className="user-name">{username || ''}</span>
            <span className="user-sub">Storfjord AS</span>
          </div>
        </div>
        <div className="top-right" style={{display: "flex", alignItems: "center", gap: "20px"}}>
          <span>Norsk Bokmal</span>
          <img src="https://storage.123fakturera.se/public/flags/NO.png" width="25" alt="flag" />
        </div>
      </header>

      <div className="main-layout">
        <aside className={`sidebar ${isMenuOpen ? 'open' : ''}`}>
          <nav className="menu-nav">
            <div style={{display: "flex", flexDirection: "column", alignItems: 'center', justifyContent: 'center'}}>
              <h3 className="menu-header">Menu</h3>
              <div style={{height: "2px", width: "200px", backgroundColor: "blue",textAlign: 'center'}}></div>
            </div>
           <ul>
              <li><FileText size={18} color="#3498db" /> Invoices</li>
              <li><Users size={18} color="#2ecc71" /> Customers</li>
              <li><Settings size={18} color="#95a5a6" /> My Business</li>
              <li><Files size={18} color="#3498db" /> Invoice Journal</li>
              <li className="active"><Tag size={18} color="#f39c12" /> Price List</li>
              <li><FileText size={18} color="#3498db" /> Multiple Invoicing</li>
              <li onClick={onLogout} className="logout-item">
                <LogOut size={18} /> Log out
              </li>
            </ul>
          </nav>
        </aside>

        <main className="content-area">
          <section className="filter-section">
            <div className="search-group">
              <div className="search-input">
                <input type="text" placeholder="Search Article No..." />
                <span className="search-icon">🔍</span>
              </div>
              <div className="search-input">
                <input 
                  type="text" 
                  placeholder="Search Product..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <span className="search-icon">🔍</span>
              </div>
            </div>
            
            <div className="button-group">
              <button className="btn-action green">
                New Product <span>+</span>
              </button>
              <button className="btn-action gray">
                Print List <span>🖨️</span>
              </button>
              <button className="btn-action white">
                Advanced mode <span>🔘</span>
              </button>
            </div>
          </section>

          <div className="table-container">
            <table className="fakturera-table">
              <thead>
                <tr>
                  <th>Article No. ↓</th>
                  <th>Product/Service ↓</th>
                  <th className="text-right">In Price</th>
                  <th className="text-right">Price</th>
                  <th>Unit</th>
                  <th>In Stock</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map(p => (
                  <tr key={p.id}>
                    <td><span className="arrow">→</span> {p.id}</td>
                    <td><div className="pill">{p.name}</div></td>
                    <td><div className="pill text-right">{p.in_price || '900.50'}</div></td>
                    <td><div className="pill text-right">{p.price}</div></td>
                    <td><div className="pill">kilometers/hour</div></td>
                    <td><div className="pill">{p.stock}</div></td>
                    <td><div className="pill full-width">{p.description || '...'}</div></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PriceList;