import profilePic from '../assets/profile-pic.jpg'
import mail from '../assets/Mail.svg'
import linkedIn from '../assets/linkedin.svg'

export default function Info() {
    return (
        <>
            <img src={profilePic} alt="profile pic" className='profile-pic' />

            <div className='info'>
                <h3>Selfi Irawan</h3>
                <p>Full-Stack Web Developer</p>
                <a href="#">portfolio.website</a>
            </div>

            <div className='btns'>
                <button className='mailBtn'>
                    <img src={mail} alt="mail" className='icon' />
                    <span>Email</span>
                </button>

                <button className='linkedinBtn'>
                    <img src={linkedIn} alt="linkedIn" className='icon' />
                    <span>LinkedIn</span>
                </button>
            </div>
        </>
    )
}