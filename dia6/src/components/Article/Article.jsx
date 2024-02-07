import "./Article.css";
function Article({ title, children }) {
   return (
      <>
         <div class="article" style={{ color: "blue" }}>
            <h1>{title}</h1>
            <div>{children}</div>
         </div>
      </>
   );
}
export default Article;
