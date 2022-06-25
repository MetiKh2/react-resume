import React, {useEffect, useState} from "react";

const Header = () => {
    const [bgDark,setBgDark]=useState(true)
    useEffect(()=>{
       window.addEventListener('scroll',()=>{
           if(window.scrollY>50)
               setBgDark(true)
           else setBgDark(false)
       })
    },[])
  return (
    <header className={`${bgDark&&'bg-dark'} p-3 position-fixed top-0 start-0 end-0`}>
      <div className="d-flex justify-content-between text-white">
          <h2 className={'text-uppercase fs-5'}>Mahdi Khodarahimi</h2>
          <div className={'d-flex justify-content-evenly'}>
              <a className={'ms-3'} href={'#about'}>About</a>
              <a className={'ms-3'} href={'#skills'}>Skills</a>
              <a className={'ms-3'} href={'#portfolio'}>Portfolio</a>
              <a className={'ms-3'} href={'#experience'}>Experience</a>
              <a className={'ms-3'} href={'#contact'}>Contact</a>
          </div>
      </div>
    </header>
  );
};

export default Header;
