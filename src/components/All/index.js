import React, {Component} from 'react';
import Left from '../../components/Left';
import Right from '../../components/Right';

import './style.css';



export default class  All extends Component{

    render(){
        return(
                <div className="all">
                    <Left/>        
                    <Right/>
                </div>
              )
            }

    }
