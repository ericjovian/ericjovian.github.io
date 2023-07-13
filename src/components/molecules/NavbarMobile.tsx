import React, {useState} from 'react'
import { Button } from '../atoms/Button';

export const NavbarMpbile: React.FC = () => {
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
            <nav className="navbar__mobile" id="navbar" onScroll={changeScroll}>
                <div className="navbar__mobile__menu">
                    <ul className="navbar__mobile__menu__list">
                        <li className="navbar__mobile__item">
                            <Button className="navbar__mobile__item__button" onClick={scrollToHero}>
                                Home
                            </Button>
                        </li>
                        <li className="navbar__mobile__item">
                            <Button className="navbar__mobile__item__button" onClick={scrollToAbout}>
                                About
                                </Button>
                        </li>
                        <li className="navbar__mobile__item">
                            <Button className="navbar__mobile__item__button" onClick={scrollToExperience}>
                                Experience
                            </Button>
                        </li>
                        <li className="navbar__mobile__item">
                            <Button className="navbar__mobile__item__button" onClick={scrollToEducation}>
                                Education
                            </Button>
                        </li>
                        <li className="navbar__mobile__item">
                            <Button className="navbar__mobile__item__button" onClick={scrollToContact}>
                                Contact
                            </Button>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
