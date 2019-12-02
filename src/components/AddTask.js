import React from 'react';
import ReactDOM from 'react-dom';

import { Input, InputGroup, InputGroupAddon, InputGroupText, Button } from 'reactstrap';
import Axios from 'axios';

const AddTask = () => {
    // aysnc addTask () {
    //   const created = (await axios.update(`/${this.state.to_do.id}`)).data;
    // }
    // will need to use an 'Update' request instead of the 'POST request'
    //this.addTask.bind(this)
    return (
      <InputGroup>
        <Button onClick={}>Add a Task </Button> 
        <Input placeholder="Post Task for a date" />
      </InputGroup>
    )
}

export default AddTask; 