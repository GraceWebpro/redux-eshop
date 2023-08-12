import React from "react"
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';


const Footer = () => {
    return (
        <footer className="footer" >
            <div className='icons'>
                <a className='socials'href='face'><FacebookRoundedIcon /></a>
                <a className='socials'href='inst'><InstagramIcon /></a>
                <a className='socials'href='twit'><TwitterIcon /></a>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>
    
            <div className="footer-copyright text-center py-3">© 2020 Copyright
                <a href="https://mdbootstrap.com/"> @GraceWebPro</a>
            </div>

        </footer>
    )
}

export default Footer