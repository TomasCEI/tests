import {useRef, useEffect} from 'react';

const FocusRef = () => {
  const nameRef = useRef();
  
  
  useEffect( ()=> {
    focus();
  }, [])
  

  const focus = () => {
    nameRef.current.focus();
  }
  const blur = () => {
    nameRef.current.blur();
  }

  const scrollToBottom = () => {
    nameRef.current.scrollIntoView({ behavior: "smooth" });
  }
  
  return (
    <section className="box">

      {/* scroll to bottom */}
      <button onClick={scrollToBottom}>Scroll to bottom</button>
      <div style={{margin: "0 0 1000px 0"}}>Separator</div>

      {/* focus blur */}
      <label htmlFor="name">Ingresa tu nombre:</label>
      <input ref={nameRef} type="text" name="name" id="name"/>
      <button onClick={focus}>Focus!</button>
      <button onClick={blur}>Remove Focus</button>
    </section>
  );
}

export default FocusRef;
