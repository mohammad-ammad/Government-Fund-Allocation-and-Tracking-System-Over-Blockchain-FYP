import React, {useState} from 'react'
import wallet from '../../../assets/wallet.png';
import metaMask  from '../../../assets/metaMask.png';
import etherLogo from '../../../assets/ethereum.png';
const HowToUse = () => {
    const [openFirst, setOpenFirst] = useState(true);
    const [openSecond, setOpenSecond] = useState(false);
    const [openThird, setOpenThird] = useState(false);
    const [openFourth, setOpenFourth] = useState(false);

    const PressFirst = () =>{
        setOpenFirst(true);
        setOpenSecond(false);
        setOpenThird(false);
        setOpenFourth(false);
    }
    const PressSecond = () =>{
        setOpenFirst(false);
        setOpenSecond(true);
        setOpenThird(false);
        setOpenFourth(false);
    }
    const PressThird = () =>{
        setOpenFirst(false);
        setOpenSecond(false);
        setOpenThird(true);
        setOpenFourth(false);
    }
    const PressFourth = () =>{
        setOpenFirst(false);
        setOpenSecond(false);
        setOpenThird(false);
        setOpenFourth(true);
    }
  return (
    <>
    <h3>How To Use</h3>
     <div className='dots'>
              <div></div>
              <div></div>
              <div></div>
      </div>
    <div className='howToUse_top-container'>
        <div className='options'>
            <div className={openFirst?'active-link':''} onClick={PressFirst}>
                <span>Create Etheruem Account</span>
            </div>
            <div className={openSecond?'active-link':''} onClick={PressSecond}>
                <span>Create Meta Mask Wallet</span>
            </div>
            <div className={openThird?'active-link':''} onClick={PressThird}>
                <span>Create GFATS Account</span>
            </div>
            <div className={openFourth?'active-link':''} onClick={PressFourth}>
                <span>Pay Gas Fee</span>
            </div>
        </div>
        <div className='options_details'>
            <div className={openFirst?'show':'hide'}>
               <div className='show_container'>
               <div className='left'>
                    <img src={wallet} alt="" />
                </div>
                <div className='right'>
                Creating an ethereum wallet is very easy. There are various options for storing your ethers. Each type of wallet has its own characteristics, and are different in terms of ease of use and safety.

                Which wallet should you choose? That depends on what you want to use your ethers for and what your buying needs are.

                Are you buying ether for the first time? Then a wallet for your smartphone is quick, easy and user-friendly. One of the most used mobile wallets for managing your ethers is the wallet from Coinomi. You can read below how to create such a wallet:
                <ol>
                    <li>
                    Go to the app store (iOS) or to Google Play (Android).
                    </li>
                    <li>
                    Search and download Coinomi.
                    </li>
                    <li>
                    Open the app and write down your recovery sentence of 24 words. Very important, this is the backup of your wallet!
                    </li>
                    <li>
                    Set a strong password.
                    </li>
                    <li>
                    Add ethereum to your wallet.
                    </li>
                    <li>
                    Use your receiving address to receive ether.
                    </li>
                </ol>
                </div>
               </div>
            </div>
            <div className={openSecond?'show':'hide'}>
            <div className='show_container'>
            <div className='left'>
                    <img src={metaMask} alt="" />
            </div>
            <div className='right'>
            When you create your MetaMask wallet, you will be given a Secret Recovery Phrase, and an account is automatically generated. You’ll see that as your Account 1 (default account).
            If you'd like to create and manage multiple MetaMask accounts, you could do so simply by creating more accounts.
            <ol>
                <li>Click the favicon (the circular account image) at the top right of your wallet.</li>
                <li>Enter your preferred account name (or keep default otherwise) on the New Account page</li>
                <li>Click “Create”</li>
                <li>A new MetaMask account has been created</li>
            </ol>
            </div>
            </div>
            </div>
            <div className={openThird?'show':'hide'}>
            <div className='show_container'>
            <div className='left'>
                    <img src={etherLogo} alt="" />
            </div>
            <div className='right'>
            Most of the prevailing government funds allocation don’t have a significant system. The matter that always occurred at the funding side was a lot of corruption which led the country progress down. Traditional or manual funds allocation system was everywhere in the world but that system was full of problems. We have seen huge amount of corruption in the countries due to mutable record system. In the traditional or manual system there’s no proper check and balance of the funds transaction as they are mostly in the form of mutable records so it can be erased or update easily. Although there are many research papers and thesis on this system, its implementation is not present yet.
            </div>
            </div>
            </div>
            <div className={openFourth?'show':'hide'}>
            <div className='show_container'>
            <div className='left'>
                    <img src={wallet} alt="" />
            </div>
            <div className='right'>
            Gas is the term for the amount of ether (ETH) – the native cryptocurrency of Ethereum – required by the network for a user to interact with the network. These fees are used to compensate Ethereum miners for the energy required to verify a transaction and for providing a layer of security to the Ethereum network by making it too expensive for malicious users to spam the network.

Even though they are an effective means of incentivizing miners to keep verifying transactions and maintain network security, gas fees are nonetheless every user’s most hated part about Ethereum. People hate gas fees not only for a general disdain toward fees, but because they can be absurdly expensive when the network is congested.
            </div>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default HowToUse