import { React } from 'react'
import NevigationItems from '../../component/Header/Nevigation/NevigationItems';

import Footer from '../../component/Footer/Footer';
const Layout = (props) => {
    return (
        <>
            <NevigationItems></NevigationItems>
            {/* <NevigationItems ></NevigationItems> */}
            {props.children}

            <Footer />

        </>
    );
}



export default Layout;
