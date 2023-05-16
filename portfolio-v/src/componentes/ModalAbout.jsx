import kitten from '../assets-icon/kitten.png'
import download from '../assets-icon/download.png'
import Vector2 from '../assets-icon/Vector2.png'
import miau from '../assets-icon/miau.gif'
import { useState } from 'react'
import { Modal } from './modal'


function ModalAbout() {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div className="modalAbout">

            <p className="textAbout"> Im Valeria Montero and as a front-end developer I want to create unique and enganging
                experiences I take pride in woring on projects that help my clients achieve their business
                goals and I strive to always deliver quality solutions.
                
                <button onClick={openModal} className='seeMore'>See more</button>
               
                <Modal isOpen={modalIsOpen} onClose={closeModal}>
                    
                    <h4 className='txt-fact'> Fact <img src={Vector2} alt="Lupita fact" /> </h4>
                    
                    <p className='txt-description' > I really enjoy creating animated content.
                        Especially for educational sites where a
                        positive impact on people is achieved.
                    </p>
                </Modal>
            </p>
           
            <section>
                <img className='kitten' src={kitten} />
                <p className='DownloadTxt'>Download CV</p>
                <button className='buttonDownload'> <span className="pdf">PDF</span>  <img className="flecha" src={download} /></button>
            </section>
            <img className='miau' src={miau} />
            
        </div>
    )
}

export { ModalAbout }