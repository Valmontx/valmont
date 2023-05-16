
import candyGlow from '../assets-icon/candyGlow.gif'

function Welcome() {
    return (
   
   <div className="textHome">
    <p className="Mydescription"> Hello and welcome! My name is <span className="myName">Valeria Montero</span> and I’m a passionate web developer.
       I love creating memorable digital experiences that surprise and connect with users. </p>


<footer>
  <section className="lineFooter">
    <p className="textFooter">
    2023 Made by <span className="myName">Valeria Montero</span> 
    </p>
  </section>
  <section>
      <img   className="candyGlow" src={candyGlow}></img>
  </section>
</footer>
</div >
   
)
}
export {Welcome};