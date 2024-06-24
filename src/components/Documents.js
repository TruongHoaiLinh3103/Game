import React from 'react';
import { useLocation } from 'react-router-dom';

const Documents = () => {
    const path = useLocation();
    return (
        <div className='Documents'>
            {path.pathname === "/front" && 
                <div>
                    Xin chaof
                </div>
            }
            {path.pathname === "/back" &&
                <div>
                    ok
                </div>
            }
        </div>
    );
};

export default Documents;