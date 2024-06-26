import './Moviecontainer.css'

const Moviecontainer = () => {
     return(



     <div className='container'>
               <img src="/public/o-dia-que-te-conheci.webp" alt="" />
               <h2>O DIA QUE TE CONHECI</h2>
               <p>FICÇÃO, 77 MIN, CE, 2023, 10 ANOS <br/>
               DIREÇÃO: AMANDA PONTES E MICHELLINE HELENA</p>

            <div className='container-list'> 
                <div className='option'>
                  <div className='square'>
                    <p>5</p>
                  </div>
                  <div>
                    <img src="./prototype-mostra/5.png" className='emote'
                    alt="" />
                   </div>
                </div>
                <div className='option'>
                  <div className='square'>
                    <p>4</p>
                  </div><div>
                  <img src="./prototype-mostra/4.webp" className='emote' alt="" /></div>
                </div>
                <div className='option'>
                  <div className='square'>
                    <p>3</p>
                  </div><div>
                  <img src="./prototype-mostra/3.png" className='emote' alt="" /></div>
                </div>
                <div className='option'>
                  <div className='square'>
                    <p>2</p>
                  </div><div>
                  <img src="./prototype-mostra/2.png" className='emote' alt="" /></div>
                </div>
                <div className='option'>
                  <div className='square'>
                    <p>1</p>
                  </div><div>
                  <img src="./prototype-mostra/1.png" className='emote' alt="" /></div>
                </div>
            </div>
      </div>
          
     )
}

export default Moviecontainer