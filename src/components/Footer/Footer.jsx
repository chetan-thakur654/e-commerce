import './Footer.scss'

export const Footer = () => {

  return (
    <>
      <div className="footer">
        <div className="top">
          <div className="item">
            <h1>Category</h1>
            <span>Women</span>
            <span>Men</span>
            <span>Shoes</span>
            <span>Accessories</span>
            <span>New Arrivals</span>
          </div>
          <div className="item">
            <h1>Links</h1>
            <span>FAQ</span>
            <span>Pages</span>
            <span>Stores</span>
            <span>Compare</span>
            <span>Cookies</span>
            
          </div>
          <div className="item">
            <h1>About</h1>
            <span>Git will clone the repository to your local machine. Once the process is complete, you'll have a copy of the repository's files and history on your computer.</span>
          </div>
          <div className="item">
             <h1>Contact</h1>
            <span>If the repository is private and requires authentication, Git may prompt you to enter your GitHub username and password or a personal access token. Enter the required credentials to proceed.
            </span>
          </div>
        </div>
        <div className="bottom">
          <div className="left">
            <div className="logo">Linkart</div>
            <div className="copyright">
              Copyright 2023. All Rights Reserved.
            </div>
          </div>
          <div className="right">
            <img src="" alt="payment"/>
          </div>
          
        </div>
      </div>
    </>
  )
}