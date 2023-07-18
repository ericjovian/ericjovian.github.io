import React from 'react'
import { Button } from '../atoms/Button';
import { Image } from '../atoms/Image';

export const NavbarMobile: React.FC = () => {
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
      
    return (
        <div>
            <nav className="navbar__mobile" id="navbar">
                <div className="navbar__mobile__menu">
                    <ul className="navbar__mobile__menu__list">
                        <li className="navbar__mobile__item">
                            <Button className="navbar__mobile__item__button" onClick={scrollToAbout}>
                                <Image className='navbar__mobile__logo' src="https://img.icons8.com/ios-filled/50/000000/about.png" alt="about"/>
                            </Button>
                        </li>
                        <li className="navbar__mobile__item">
                            <Button className="navbar__mobile__item__button" onClick={scrollToEducation}>
                                <Image className='navbar__mobile__logo' src="https://img.icons8.com/ios-filled/50/000000/graduation-cap.png" alt="education"/>
                            </Button>
                        </li>
                        <li className="navbar__mobile__item">
                            <Button className="navbar__mobile__item__button" onClick={scrollToHero}>
                                <Image className='navbar__mobile__logo navbar__mobile__logo__home' src="https://img.icons8.com/ios-filled/50/000000/home.png" alt="home"/>
                            </Button>
                        </li>
                        <li className="navbar__mobile__item">
                            <Button className="navbar__mobile__item__button" onClick={scrollToExperience}>
                                <Image className='navbar__mobile__logo' src="https://img.icons8.com/ios-filled/50/000000/work.png" alt="experience"/>
                            </Button>
                        </li>
                        <li className="navbar__mobile__item">
                            <Button className="navbar__mobile__item__button" onClick={scrollToContact}>
                                <Image className='navbar__mobile__logo' src="https://img.icons8.com/ios-filled/50/000000/contacts.png" alt="contact"/>
                            </Button>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
