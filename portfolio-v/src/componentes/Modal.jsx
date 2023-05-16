


// eslint-disable-next-line react/prop-types
const Modal = ({isOpen, onClose, children}) => {

if(!isOpen){
    return null
}
    return (
        <div className="modal">
            < div className="modal-container">
                {children}
                <button className ="button-close" onClick={onClose}>X</button>
            </div>
        </div>
    );
};


export { Modal }