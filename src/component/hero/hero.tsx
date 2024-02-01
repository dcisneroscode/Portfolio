import { useState } from 'react';

import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { FiGithub } from "react-icons/fi";

import { ShowPhone } from './showPhone';
import { ShowLinkedin } from './showLinkedin';
import { ShowGithub } from './showGithub';
import { ShowEmail } from './showEmail';

import myPhoto from '../../assets/my-photo.jpg';

import english from '../../english-cv.json';
import spanish from  '../../spanish-cv.json';

import './css/style.css';



interface Props{
    language: string
}

function Hero({language}: Props){

    const [activeTab, setActiveTab] = useState<string | null>(null);

    const handleToggleTab = (tabId: string): void => {
        setActiveTab((prevTab) => (prevTab === tabId ? null : tabId));
    };


    
    return(
        <>
            <section className="hero">
                <div className="hero--data">
                    {language === 'spanish' && (
                        <>
                            <h1>Daniel Cisneros</h1>
                            <h2>{spanish.title} <br/> Caracas.Venezuela</h2>
                            <p>{spanish.profile}</p>
                        </>
                    )}
                     {language === 'english' && (
                        <>
                            <h1>Daniel Cisneros</h1>
                            <h2>{english.title} <br/> Caracas.Venezuela</h2>
                            <p>{english.profile}</p>
                        </>
                    )}
                </div>
                <img src={myPhoto} alt="mi foto" />
                <div className='hero--skills'>
                    {language === 'spanish' && (
                        <>
                            <p className='hero--skills-stack'>{spanish.stack}</p>
                            <p>{spanish.tecnologies}</p>
                        </>
                    )}
                      {language === 'english' && (
                        <>
                            <p className='hero--skills-stack'>{english.stack}</p>
                            <p>{english.tecnologies}</p>
                        </>
                    )}
                </div>
                <div className='hero--cv'>
                    {language === 'spanish' && (
                        <>
                            <button>
                                <a>Descargar CV</a>
                            </button>
                        </>
                    )}
                    {language === 'english' && (
                        <>
                            <button>
                                <a>Download resume</a>
                            </button>
                        </>
                    )}
                </div>
                <div className='hero--icon'>
                    <div>
                        <MdEmail onClick={ () => handleToggleTab('email')} />
                    </div>
                    <div>
                        <FaPhone onClick={() => handleToggleTab('phone')}/>
                    </div>
                    <div>
                        <IoLogoLinkedin onClick={ () => handleToggleTab('linkedin')} />
                    </div>
                    <div>
                        <FiGithub onClick={ () => handleToggleTab('github')} />
                    </div>
                </div>
                <div className='hero--icon-content'>
                    { activeTab === 'phone'  && <ShowPhone  /> }
                    { activeTab === 'email'  && <ShowEmail  /> }
                    { activeTab === 'github'  && <ShowGithub  /> }
                    { activeTab === 'linkedin' && <ShowLinkedin /> }
                </div>
            </section>
        </>
    )

};

export { Hero };