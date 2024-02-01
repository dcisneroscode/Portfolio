import './css/style.css';

interface Props{
    language: string
}

function WorkExperience({ language }: Props){

    return(
        <>
        <section className='work-experience'>
            {language === 'spanish' && (
                <h2>Experiencia laboral</h2>
            )}
              {language === 'english' && (
                <h2>Work experience</h2>
            )}
            
            <div className='work-experience--line-time'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </section>

        </>
    )
};

export { WorkExperience }