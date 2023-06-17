import React from 'react';
import {useNavigate} from "react-router-dom";

const Plus = () => {
    const navigate = useNavigate()

    return (
        <div className={'bg-red-600 fixed bottom-8 right-8 p-6 rounded-full cursor-pointer'} onClick={()=>navigate('/search')}>
            ➕
        </div>
    );
};

export default Plus;