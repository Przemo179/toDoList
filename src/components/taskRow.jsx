import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

export const TaskRow = ({status, id, title}) => {
    return(
        <React.Fragment>
          <div className='taskBg column'>
            <div className={status ? 'finished' : ''}>
              <span className='taskNum'>{id + 1}</span>
              <span className='taskText'>{title}</span>
            </div>
            <div className='iconsWrap'>
              <span>
                <FontAwesomeIcon icon={faCircleCheck} />
              </span>
              <span>
                <FontAwesomeIcon icon={faPen} />
              </span>
              <span> 
                <FontAwesomeIcon icon={faTrashCan} />
              </span>
            </div>
          </div>
        </React.Fragment>
      );
}
