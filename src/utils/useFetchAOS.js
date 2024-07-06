import {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
function UseFetchAOS() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing : "ease-in"
        })
    }, [])
}

export default UseFetchAOS;