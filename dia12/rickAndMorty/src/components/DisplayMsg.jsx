export const DisplayMsg = ({ msg, icon, color }) => {
   return (
      <div className={`msg ${color}`}>
         <span className="material-symbols-outlined">{icon}</span>
         {msg}
      </div>
   );
};
