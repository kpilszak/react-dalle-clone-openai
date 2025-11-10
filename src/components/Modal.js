import { useState } from 'react'

const Modal = ({ setModalOpen, setSelectedImage, selectedImage }) => {
    const [ error, setError ] = useState(null)

    const closeModal = () => {
        setModalOpen(false)
        setSelectedImage(null)
    }

    return (
        <div className="modal">
            <div onClick={closeModal}>✖</div>
            <div className="img-container">
                {selectedImage && <img src={URL.createObjectURL(setSelectedImage)} alt="uploaded image"/>}
            </div>
            <button>Generate</button>
        </div>
    )
}

export default Modal