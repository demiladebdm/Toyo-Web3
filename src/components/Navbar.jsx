import React, { useState } from 'react'
import Button from './Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardCheck, faBars } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  const [showWalletOptions, setShowWalletOptions] = useState(false);
  const [showNavItems, setShowNavItems] = useState(false);

  const toggleWalletOptions = () => {
    setShowWalletOptions(!showWalletOptions);
  };

  const toggleNavItems = () => {
    setShowNavItems(!showNavItems);
  };


  return (
    <div className="nav">
      <div className="left">
        <div className="nadLogo"><img className="nadLogo" src="Monad-Logo.webp" alt='Logo' /></div>
        <div className='navItem'>Swap</div>
        <div className='navItem'>Tokens</div>
        <div className='navItem'>NFTs</div>
        <div className='navItem'>Pool</div>
      </div>
      <div className="right">
        <div className='navItem '>
          <span className='spanNav'>
            <select className='select'>
              <option>USDT coin</option>
              <opton>USDC</opton>
              <option>USSD</option>
            </select>
            <span className='price'>0.0</span>
          </span>
          <span className='check'><FontAwesomeIcon icon={faClipboardCheck} /></span>
        </div>
        <div className='navItem'>
          <span className='spanNav'>
            <select className='select'>
              <option>SHIBA INU</option>
              <option>ETH</option>
              <option>SOL</option>
            </select>
            <span className='price'>0.0</span>
          </span>
          <span className='check'><FontAwesomeIcon icon={faClipboardCheck} /></span>
        </div>
        <div className='navItem' onClick={toggleWalletOptions}><Button className="navbtn" children="Connect Wallet" />
          {showWalletOptions && (
            <div className="walletOptionsPopup">
              <div className="popupContent">
                <ul>
                  <li>Option 1</li>
                  <li>Option 2</li>
                  <li>Option 3</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>

  );
};

export default Navbar