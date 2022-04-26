import { useTransition } from 'react-spring';
import { ToastMessage } from '../../hooks/ToastContext';
import { Container } from './styles';
import { Toast } from './Toasts';

interface ToastContainerProps{
    message: ToastMessage[];
}

export function ToastContainer({message}:ToastContainerProps){

    //const {removeToast} = useToast();

    const messagesWithTransitions = useTransition(
        message,
        message => message.id,
        {
            from: { right: '-120%', opacity: 0 },
            enter: { right: '0%', opacity: 1 },
            leave: {right: '-120%', opacity: 0},
        }
    )

    return(
        <Container>
            {messagesWithTransitions.map(({item, key, props}) => (
                <Toast key={key} message={item} style={props} />
            ))}
        </Container>
    );
}