import "./Head.css"
import Button from "./Button"
const Header = () => {
  return (
    <div>
        <div className="head">
            <div className="logo"> <Button></Button></div>
          <div>  <h1>Button</h1>
          <p>A button triggers an event or action. They let user know what will happen next.</p></div>
        </div>
    </div>
  )
}

export default Header