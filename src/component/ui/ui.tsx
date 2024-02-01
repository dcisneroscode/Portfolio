import { useState, useRef } from "react";

import { Hero } from "../hero/hero";
import { WorkExperience } from "../workExperience/workExperience";


import spanish from '../../assets/espanol.png';
import english from '../../assets/ingles.png';

import './css/style.css';


function Ui(){
    const [language,setLanguage] = useState<string>('spanish');
    const changeLanguage = useRef<HTMLInputElement>(null);

    const HandlerLanguage = () : void =>{
        if(language === 'spanish'){
            setLanguage('english')
            changeLanguage.current?.classList.add('nav--language-change')
        }else if(language === 'english'){
            setLanguage('spanish')
            changeLanguage.current?.classList.remove('nav--language-change');
        }
    }


    return(
        <>
             <nav>
                <div className="nav--language">
                    <img src={spanish} alt="idioma español" />
                    <div onClick={HandlerLanguage}>
                        <span ref={changeLanguage}></span>
                    </div>
                    <img src={english} alt="idioma ingles" />
                </div>
            </nav>

            <Hero
            language={language}
            />
            <WorkExperience
            language={language}
            />

        </>
    )
};

export { Ui }