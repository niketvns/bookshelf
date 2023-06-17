import {useNavigate} from "react-router-dom";
import {AiOutlinePlus} from 'react-icons/ai'

const Plus = () => {
    const navigate = useNavigate()

    return (
        <div className={'bg-green-600 fixed bottom-8 right-8 p-4 rounded-full cursor-pointer text-white border-2 border-white/30'}
             onClick={() => navigate('/search')}>
            <AiOutlinePlus className={'text-2xl font-bold'}/>
        </div>
    );
};

export default Plus;