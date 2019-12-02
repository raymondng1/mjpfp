import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'reactstrap';

const ClickButtons = () => {
    return (
    <div className="buttons">
        <Button variant='primary'> Previous </Button>
        <Button variant='primary'> Next</Button>
    </div>
    )
}

export default ClickButtons; 