import React, {useState} from 'react'
import { Button } from '../atoms/Button';

export interface NavbarProps {
    className?: string
}

export const Navbar: React.FC<NavbarProps> = ({ className }) => {
    const [scroll, setScroll] = useState(false);
    const scrollToSection = (sectionId: string): void => {
        const section = document.querySelector(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
    };
      
    const scrollToHero = (): void => scrollToSection("#hero");
    const scrollToAbout = (): void => scrollToSection("#about");
    const scrollToExperience = (): void => scrollToSection("#experience");
    const scrollToEducation = (): void => scrollToSection("#education");
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
            <nav className="navbar" id="navbar" onScroll={changeScroll} style={{backgroundColor: scroll ? '#696969' : 'transparent'}}>
                <div className="navbar__container">
                    <div className="navbar__logo">
                        <Button className="navbar__logo__button" onClick={scrollToHero}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff" width="48px" height="48px"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5v-2.23l-10 5-10-5V17z"/></svg>
                        </Button>
                    </div>
                    <div className="navbar__menu">
                        <ul className="navbar__menu__list">
                            <li className="navbar__item">
                                <Button className="navbar__item__button" onClick={scrollToHero}>Home</Button>
                            </li>
                            <li className="navbar__item">
                                <Button className="navbar__item__button" onClick={scrollToAbout}>About</Button>
                            </li>
                            <li className="navbar__item">
                                <Button className="navbar__item__button" onClick={scrollToExperience}>Experience</Button>
                            </li>
                            <li className="navbar__item">
                                <Button className="navbar__item__button" onClick={scrollToEducation}>Education</Button>
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
