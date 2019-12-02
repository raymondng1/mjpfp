import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';

//STORE -> Globalized state
//Action -> what you want to do, function returns an object
const next = () => {
    return {
        type: 'NEXT'
    }
}

const previous = () => {
    return {
        type: 'PREVIOUS'
    }
}

const pageNum = (state = 0, action )=> {
    switch(action.type){
        case 'NEXT':
            return state + 1 
        case 'PREVIOUS':
            return state + 1 
    }
}

