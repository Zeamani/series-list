import React, {useRef} from 'react';

const Modal = function({switchFunc, ...props}) {
    const modalInner = useRef(null);

    const posTouchClose = {
        start: 0,
        end: 0
    }

    function toggleModal() {
        modalInner.current.style.animation = "fadeOutModalInner 0.3s"
        modalInner.current.onanimationend = () => {
            switchFunc();
        }
    }

    function touchCloseStart(e) {
        if (e.pointerType == "mouse") return false;

        posTouchClose.start = e.clientX;
    }

    function touchCloseEnd(e) {
        if (e.pointerType == "mouse") return false;

        posTouchClose.end = e.clientX;

        if ((posTouchClose.end - posTouchClose.start) > 150) {
            toggleModal(e.target.closest('.modal'));
        }
    }

    return (
        <div 
            className="modal"
            tabIndex={0}
            onKeyDown={
                (e) => {
                    if (e.code == "Escape") {
                        toggleModal();
                    } 
                }
            }
            onPointerDown={
                (e) => {
                    if (e.target.classList.contains('modal')) {
                        toggleModal();
                    } 
                }
            }
        >
            <div 
                className="modal__inner" 
                onPointerDown={(e) => touchCloseStart(e)}
                onPointerUp={(e) => touchCloseEnd(e)}
                onDragStart={() => false}
                ref={modalInner}>
                {props.children}
            </div>
        </div>
    );
};

export default Modal;