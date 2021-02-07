import react from 'react';

const button = ({ label, handleClick }) => {
    return (
        <button onClick={handleClick}>{label}</button>
    )
}

export default button;
