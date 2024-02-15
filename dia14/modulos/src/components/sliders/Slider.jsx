import {useState} from "react";


const Slider = ({items})=> {

    const [currentSlide, setCurrentSlide] = useState(0);

    const handleNextSlide = () => {

        /*if(items.length > currentSlide+1 ){
            setCurrentSlide(currentSlide+1);
        } else {
            setCurrentSlide(0);
        }*/
        const nextSlide = items.length > currentSlide+1 ? currentSlide+1 : 0;
        setCurrentSlide(nextSlide);
    }
    const handlePrevSlide = () => {
        /*
        if(currentSlide){
            setCurrentSlide(currentSlide-1);
        } else {
            setCurrentSlide(items.length-1);
        }*/
        const nextSlide = currentSlide ? currentSlide-1: items.length-1;
        setCurrentSlide(nextSlide);
    }

    return (
        <>
        <button onClick={handlePrevSlide}>Ant</button>
        <h1>Slider</h1>
        <img src={items[currentSlide]} alt={items[currentSlide]} />
        {items[currentSlide]}
        <button onClick={handleNextSlide}>Sig</button>
        </>
    )
}

export default Slider;