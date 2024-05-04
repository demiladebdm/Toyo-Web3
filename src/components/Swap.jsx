import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons'
import Button from './Button';
import Token from './Token';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'


const Swap = () => {
  const handleClick = () => {
    alert('Button Clicked!')
  };

  const from = <><span>0.0</span><select className="layer1"><option>Eth</option><option>Sol</option><option>Opt</option></select></>;
  const to = <><span>0.0</span><select className='layer1 layer2'><option>Select a token</option><option>USDC</option><option>USDT</option></select></>;
  const amount = <><input placeholder="Enter an amount" /></>
  return (
    <div className="bodySwap">
      <div className='exp'>
        <div className='trade'>Trade</div>
        <div className='securely'>Securely</div>
        <div className='res'>
          <div>Swap, earn, and build seamlessly on the future of finance. Powering Decentralized Exchange: Built for the Monad Community. The Fastest, Most Secure DEX on the Monad Network.</div>
          <div className="btn-con"><Button onClick={handleClick} className="btn1" children="Get Started" />
            <Button onClick={handleClick} className="btn2" children="Swap ERC20" />
          </div>
        </div>
      </div>
      <div className='swapTabs'>
        <div className="swapTab">
          <div className='swap'>
            <div>Swap</div>
            <FontAwesomeIcon icon={faGear} />
          </div>
          <div className='tokens'>
            <Token className="from" children={from} />
            <span className='conversion'><FontAwesomeIcon icon={faArrowDown} /></span>
            <Token className="to" children={to} />
            <Token className="amount" children={amount} />
          </div>
        </div>


        {/* <div className='amount'>Enter an amount</div> */}
      </div>
    </div>
  )
}

export default Swap;