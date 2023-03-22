import { string , func } from 'prop-types';

const Button = ({
    text,
    onClick
}) => {
    return <button onClick={onClick}>{text}</button>
}

Button.propTypes = {
    text : string.isRequired,
    onClick : func.isRequired
}

export default Button