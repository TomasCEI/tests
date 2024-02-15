import Button from "./Button";
import { ScreenFitText } from "./ScreenFitText";

const Tailwind = () => {
   /**
    * intersante uso de componentes y animaciones:
    *
    * https://www.hover.dev/components/buttons
    * https://www.framer.com/motion/introduction/
    * https://www.youtube.com/watch?v=O5lZqqy7VQE
    */
   return (
      <>
         <h1 className="text-3xl font-bold underline">Hello from Tailwind!</h1>
         <Button />
         <ScreenFitText texto="Hola Tomi" />
      </>
   );
};

export default Tailwind;
