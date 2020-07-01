import React from 'react';
import { Button } from './';
import { useHistory } from 'react-router-dom';

export const Navigation = (props) => {
    /* 
        https://boginoo.firebaseapp.com/navigation

        <div className='...'>ХЭРХЭН АЖИЛЛАДАГ ВЭ?</div>
        <Button> Нэвтрэх button-ийг эхний ээлжинд нэмэх
      
    */
   const history = useHistory()

    return (
        <div className='w100 flex justify-end items-center'>
            <div className='font-ubuntu fs-20 lh-23 bold c-primary'>ХЭРХЭН АЖИЛЛАДАГ ВЭ?</div>
            <Button className='font-ubuntu fs-20 lh-23 bold c-default h-5 ph-4 ml-4 b-primary' onClick={() => {history.push('/login')}}>Нэвтрэх</Button>
        </div>
    );
};