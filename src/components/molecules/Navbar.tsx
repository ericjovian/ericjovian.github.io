import React, {useState} from 'react'
import { Button } from '../atoms/Button';

export const Navbar: React.FC = () => {
    const [scroll, setScroll] = useState(false);
    const scrollToSection = (sectionId: string): void => {
        const section = document.querySelector(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
    };
      
    const scrollToHero = (): void => scrollToSection("#hero");
    const scrollToAbout = (): void => scrollToSection("#about");
    const scrollToEducation = (): void => scrollToSection("#education");
    const scrollToExperience = (): void => scrollToSection("#experience");
    const scrollToContact = (): void => scrollToSection("#contact");
      
    const changeScroll = () => {
        if(window.scrollY >= 100) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    }

    return (
        <div>
            <nav className="navbar" id="navbar" onScroll={changeScroll} style={{backgroundColor: scroll ? '#fff' : 'transparent'}}>
                <div className="navbar__container">
                    <div className="navbar__logo">
                        <Button className="navbar__item__button" onClick={scrollToHero}>Home</Button>
                    </div>
                    <div className="navbar__menu">
                        <ul className="navbar__menu__list">
                            <li className="navbar__item">
                                <Button className="navbar__item__button" onClick={scrollToAbout}>About</Button>
                            </li>
                            <li className="navbar__item">
                                <Button className="navbar__item__button" onClick={scrollToEducation}>Education</Button>
                            </li>
                            <li className="navbar__item">
                                <Button className="navbar__item__button" onClick={scrollToExperience}>Experience</Button>
                            </li>
                            <li className="navbar__item">
                                <Button className="navbar__item__button" onClick={scrollToContact}>Contact</Button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
