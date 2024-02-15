import {useState} from "react";

const Accordion =  ({items}) => {

    const [activeItem, setActiveItem] = useState(1);

    // const handleChangeAccordion
    // const handleActiveAccordion
    const toggleAccordion = (itemId) => {
        setActiveItem(itemId);
    }

    console.log(items);
    return (
        <section className="Accordion">
            {items.map((item) => (
                <div key={item.id} className="Accordion-div" >
                    <button onClick={()=>toggleAccordion(item.id)} className="Accordion-btn">
                        {item.titulo}
                    </button>
                    { activeItem == item.id &&
                        <div>{item.contenido}</div>}
                </div>
            ) )}
            
        </section>
    )
}

export default Accordion;