import React, {useState, useEffect, useRef} from 'react'
import style from './navbar.module.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlinePlus} from 'react-icons/ai'
import {Link} from 'react-scroll'

function NavTextLink(props){
    return(
    <Link 
            className={[style.navTextLink, props.isActive ? style.active : ""].join(' ')}
            to={props.to}
            smooth={true}
            offset={props.offset}
            duration= {500}
            onClick={props.onClick}
        >{props.children}</Link>
    );
}

export default function Navbar(props) {
    var [isOpen, setIsOpen] = useState(false);
    var [navHeight, setNavHeight] = useState(0);
    const navHeightRef = useRef();
    navHeightRef.current = navHeight;
    const navAnchors = ["home", "projects", "skills", "education", "employment", "work-experience"];
    var pageSectionNodes;
    var [activeSectionIdx, setActiveSectionIdx] = useState();

    useEffect(() => {
        setNavHeight(document.getElementById('navbar').clientHeight);
        pageSectionNodes = navAnchors.map(function(anchor) {
            return document.getElementById(anchor);
        })
        window.addEventListener('scroll', () => {
            updateActiveMenuItem();
        });
        updateActiveMenuItem();
    }, []);

    const getPosition = function(element){
        var yPosition = 0;
        while(element) {
          yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
          element = element.offsetParent;
        }
        return yPosition;
      }

    const updateActiveMenuItem = function() {
        var scrollPos = (window.pageYOffset || document.documentElement.scrollTop) + navHeightRef.current;
        var pageSectionArr = [...pageSectionNodes];
        var numPotentialActiveSections = 0;
        pageSectionArr.forEach(function(section){
            if (getPosition(section) <= scrollPos){
                numPotentialActiveSections += 1;
            }
        })
        var newActiveSectionIdx = navAnchors[numPotentialActiveSections - 1];
        if(activeSectionIdx !== newActiveSectionIdx){
            setActiveSectionIdx(newActiveSectionIdx);
        }
    }

    const toggleNav = function() {
        setIsOpen(!isOpen);
    }

    const closeNav = function() {
        setIsOpen(false);
    }
    
    const additionalScroll = 10;
    var offset = -navHeight + additionalScroll;
    return (
        <div className={style.nav} id="navbar">
            <div className={style.navCentre}>
                <div className={isOpen ? [style.navItemsContainer, style.showNav].join(' ') : style.navItemsContainer}>
                    <div className={isOpen ? [style.navTextContainer, style.showNavTextContainer].join(' ') : style.navTextContainer}>
                        <NavTextLink to={navAnchors[0]} isActive={navAnchors[0] === activeSectionIdx} offset={offset} onClick={closeNav}>{"About"}</NavTextLink>
                        <NavTextLink to={navAnchors[1]} isActive={navAnchors[1] === activeSectionIdx} offset={offset} onClick={closeNav}>{"Projects"}</NavTextLink>
                        <NavTextLink to={navAnchors[2]} isActive={navAnchors[2] === activeSectionIdx} offset={offset} onClick={closeNav}>{"Skills"}</NavTextLink>
                        <NavTextLink to={navAnchors[3]} isActive={navAnchors[3] === activeSectionIdx} offset={offset} onClick={closeNav}>{"Education"}</NavTextLink>
                        <NavTextLink to={navAnchors[4]} isActive={navAnchors[4] === activeSectionIdx} offset={offset} onClick={closeNav}>{"Employment"}</NavTextLink>
                        <NavTextLink to={navAnchors[5]} isActive={navAnchors[5] === activeSectionIdx} offset={offset} onClick={closeNav}>{"Work Experience"}</NavTextLink>
                    </div>
                    <button className={isOpen ? [style.menuBtn, style.hideMenuBtn].join(' ') : style.menuBtn}><GiHamburgerMenu className={style.menuIcon} onClick={toggleNav}/></button>
                </div>
                <button className={isOpen ? style.exitBtn : [style.exitBtn, style.hideExitBtn].join(' ')}><AiOutlinePlus className={style.exitIcon} onClick={closeNav}/></button>
            </div>
        </div>
    )
}
