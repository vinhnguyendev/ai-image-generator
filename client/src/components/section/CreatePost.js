import React, { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
// import { useNavigate } from 'react-router-dom';
import preview from '../../assets/preview.png'

export function CreatePost(){
    const [form, setForm] = useState({
        name:'',
        prompt:'',
        photo:''
    });
    const [generatingImg, setGeneratingImg] = useState(false);
    const [loading, setLoading] = useState(false);
    const [imageSize, setImageSize] = useState('small')

    useEffect(() => {
     console.log(form.prompt)
     console.log(form)
    }, [form])
    

    const generateImage = async (e) => {
        e.preventDefault();
        if(form.prompt){
            try {
                setGeneratingImg(true)
                const response = await fetch(`http://localhost:5050/api/v1/dalle`, {
                    method: 'POST',
                    headers: {
                        'Content-Type' : 'application/json',
                    },
                    body: JSON.stringify({ prompt: form.prompt }),
                })
                const data = await response.json();
                setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}`})

            }catch (error){
                alert(error);
            }finally {
                setGeneratingImg(false)
            }
        }else{
            alert('Please enter a prompt')
        }
    }

    const handleFormOnChange = event => {
        setForm({ ...form, prompt: event.target.value })
    }

    const handleChange = event => {
        setImageSize(event.target.value);
      };

    return(
        <section className='container'>
        <div className='row mb-3'>
         <div className='col'>
          <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
           <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" value="small" onChange={handleChange} />
           <label className="btn btn-outline-primary" htmlFor="btnradio1">Small</label>

           <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" value="medium" onChange={handleChange}/>
           <label className="btn btn-outline-primary" htmlFor="btnradio2">Medium</label>

           <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" value="large" onChange={handleChange} />
           <label className="btn btn-outline-primary" htmlFor="btnradio3">Large</label>
          </div>
         </div>
        </div>    
        <div className="input-group">
                    <input 
                    type='text' 
                    className="form-control" 
                    placeholder="Enter your promt here" 
                    aria-label="prompt request" 
                    aria-describedby="button-addon2"
                    onChange={event => handleFormOnChange(event)}
                    />
                    <button 
                    className="btn btn-primary" 
                    type="button" 
                    id="button-addon2" 
                    onClick={generateImage}
                    
                    >{generatingImg? 'Generating...':'Generate'}</button>
        </div>

        <div className='row my-5 d-flex justify-content-center'>
            <div className='position-relative d-flex flex-column justify-content-center' style={
                imageSize === 'small'?  {height:'256px', width:'256px'} : 
                imageSize === 'medium'? {height:'512px', width:'512px'} : 
                imageSize === 'large'? {height:'1024px', width:'1024px'} : ''
                }>
            {form.photo? ( 
                <img
                src={form.photo}
                alt={form.prompt}
                className="img-gluid"
                />
            ):(
              <img
              src={preview}
              alt='preview'
              className='img-fluid'
              />  
            )}

            {generatingImg && (
                <div className='position-absolute top-50 start-50 translate-middle bg-dark z-1 bg-opacity-50 h-100 w-100 d-flex flex-column justify-content-center'>
                    <div className='align-middle'>
                    <Spinner  animation="border" variant="primary" />
                    </div>
                </div>
            )}
            </div>
        </div>
        </section>           
    )
} 