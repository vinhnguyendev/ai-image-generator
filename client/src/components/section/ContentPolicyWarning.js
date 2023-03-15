import warning from '../../assets/warning.png'
import { Link } from 'react-router-dom'

export function ContentPolicyWarning(){
return(
    <div className='container my-5 '>
        <div className='row d-flex justify-content-center'>
        <div className='col-12 col-sm-10 col-md-8 col-lg-8 d-flex flex-column justify-content-center fs-5'>
        <p> Looks like the prompt you entered doesn't quite meet PixolabAI's <span><Link to={'/content-policy'}>content policy.</Link></span></p>
        <div className='align-self-center my-3' style={{borderRadius: "30% 70% 67% 33% / 30% 30% 70% 70%", height: "200px", width:"60%", backgroundColor:"rgb(13, 110, 253, 0.2)"}}>
        <img className='z-2 w-100 h-auto fluid' src={warning}></img>
        </div>
        </div>
        </div>
    </div>
      )
}