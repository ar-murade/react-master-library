import { Menu } from '@material-ui/icons'
import React from 'react'
import styles from './HeaderComponent.css'
import { logo } from '../Images/Images'

export const HeaderComponent=(props)=>{
console.log(props)
    return(
        <header className={styles.headerwrapper}>
            <div className={styles.headercontent}>
           {props.menuIcon && <div className={styles.menuicon}><Menu></Menu></div>} 
     
           <img src={props.logo? props.logo: logo} alt="logo" width={props.logoWidth? props.logoWidth: "135px"} height={props.logoHeight? props.logoHeight:"60px"}/>
            </div>
           
            <div className={styles.dark}>
  <nav role="navigation">
    {/* <a  className={styles.ic+' '+styles.menu} tabIndex="1">
      <span className={styles.line}></span>
      <span className={styles.line}></span>
      <span className={styles.line}></span>
    </a> */}
    {/* <a  className={styles.ic+' '+styles.close}></a> */}
    <ul className={styles.mainnav}>
      <li className={styles.toplevellink}>
        <a><span>Home</span></a>      
      </li> 
      
      <li className={styles.toplevellink}>
        <a className={styles.megamenu}><span>Products</span></a>
        <div className={styles.submenublock}>
          <div className={styles.row}>
            <div >
              <h2 className={styles.submenuhead}>Clothing</h2>
              <ul className={styles.submenulists}>
                <li><a>Mens</a></li>
                <li><a>Womens</a></li>
                <li><a>Kids</a></li>
                <li><a>New Born</a></li>
                <li><a>View All</a></li>
              </ul>           
            </div>
            <div >
              <h2 className={styles.submenuhead}>Handbags</h2>
              <ul className={styles.submenulists}>
                <li><a>Wallets</a></li>
                <li><a>Athletic bag</a></li>
                <li><a>Backpack</a></li>
                <li><a>Bucket Bag</a></li>
                <li><a>View All</a></li>
              </ul>
            </div>
            <div >
              <h2 className={styles.submenuhead}>Shoes</h2>
              <ul className={styles.submenulists}>
                <li><a>Mens</a></li>
                <li><a>Womens</a></li>
                <li><a>Kids</a></li>
                <li><a>View All</a></li>
              </ul>
            </div>
          </div>
        
          
        </div>
      </li>
      <li className={styles.toplevellink}>
        <a><span>Services</span></a>    
      </li>
      <li className={styles.toplevellink}>
        <a className={styles.megamenu}><span>About</span></a>
        <div className={styles.submenublock}>
          <div className={styles.row}>
            <div >
              <h2 className={styles.submenuhead}>Company</h2>
              <ul className={styles.submenulists}>
                <li><a>About</a></li>
                <li><a>Mission</a></li>
                <li><a>Community</a></li>
                <li><a>Team</a></li>
              </ul>           
            </div>
            <div >
              <h2 className={styles.submenuhead}>Media</h2>
              <ul className={styles.submenulists}>
                <li><a>News</a></li>
                <li><a>Events</a></li>
                <li><a>Blog</a></li>
              </ul>
            </div>
            <div >
              <h2 className={styles.submenuhead}>Careers</h2>
              <ul className={styles.submenulists}>
                <li><a>New Opportunities</a></li>
                <li><a>Life @ Company</a></li>
                <li><a>Why Join Us?</a></li>
              </ul>
            </div>
          </div>
          
        </div>
      </li>
      <li className={styles.toplevellink}>
        <a><span>Contact</span></a>      
      </li>
    </ul> 
  </nav>
 
</div>  
        </header>
    )
}