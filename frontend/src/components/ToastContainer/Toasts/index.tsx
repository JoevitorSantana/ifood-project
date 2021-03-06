import { useEffect } from "react";
import { FiAlertCircle, FiCheckCircle, FiInfo, FiX } from "react-icons/fi";
import { ToastMessage, useToast } from "../../../hooks/ToastContext";
import { Container } from "./styles";

interface ToastProps{
    message: ToastMessage;
    style: object;
}

const icons = {
    info: <FiInfo size={24} />,
    error: <FiAlertCircle size={24} />,
    success: <FiCheckCircle size={24} />,
}

export function Toast({message, style}: ToastProps){

    const {removeToast} = useToast();

    useEffect(() => {
        const timer = setTimeout(() => {
            removeToast(message.id);
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    }, [removeToast, message.id])

    return(
        <Container type={message.type} hasdescription={Number(!!message.description)} style={style}>
            {icons[message.type || 'info']}

            <div>
                <strong>{message.title}</strong>
                {message.description && <p>{message.description}</p>}
            </div>

            <button onClick={() => removeToast(message.id)} type="button">
                <FiX size={18} />
            </button>
        </Container>
    )
}