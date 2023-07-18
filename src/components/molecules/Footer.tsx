import React from 'react'

export const Footer: React.FC = () => {
    return (
        <div className="footer" id='contact'>
            <hr className="footer__line"/>
            <div className="footer__content">
                <div className="footer__content__title">
                    <h1>Jovian</h1>
                </div>
                <div className="footer__content__links">
                    <a href="https://www.instagram.com/ericjovian" rel="noreferrer" target="_blank">
                        <img src="https://cdn-icons-png.flaticon.com/512/747/747393.png" alt="instagram"/>
                    </a>
                    <a href="https://www.twitter.com/ericjovian" rel="noreferrer" target="_blank">
                        <img src="https://cdn-icons-png.flaticon.com/512/39/39552.png" alt="twitter"/>
                    </a>
                    <a href="https://www.linkedin.com/in/ericjovian" rel="noreferrer" target="_blank">
                        <img src="https://cdn-icons-png.flaticon.com/512/254/254394.png" alt="linkedin"/>
                    </a>
                    <a href="https://www.github.com/ericjovian" rel="noreferrer" target="_blank">
                        <img src="https://cdn-icons-png.flaticon.com/512/38/38401.png" alt="github"/>
                    </a>
                </div>
            </div>
        </div>
    )
}
