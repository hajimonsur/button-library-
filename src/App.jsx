import Header from './components/Header'
import Title from './components/Title'
import Button from './components/Button'
import './App.css'

const App = () => {
  const Disabled = () => {
    alert("Disabled")
  }

  const Hover = () => {
    alert("Hover")
  }

  const primary = () => {
    alert("Primary Button Clicked")
  }

  const defBtn = () => {
    alert("Default Button Clicked")
  }

  const plainBtn = () => {
    alert("Plain Button Clicked")
  }

  const desBtn = () => {
    alert("Destructive Button Clicked Be Careful")
  }

  const smallPrimary = () => {
    alert("Small Primary Button Clicked")
  }

  const smallDef = () => {
    alert("Small Default Button Clicked")
  }
  return (
    <div>

      <Header></Header>

    <div>
    <Title>
      <ul>
        <li>Primary</li>
        <p>Use to highlight the most important action in any experience.</p>
      </ul>
      </Title>

     <div className="container">
       <Button func={primary}>
        <p>Primary Button</p>
       </Button>
      <Button bground="rgb(74, 74, 160)" func={Hover}>
        <p>Hover State</p>
      </Button>
      <Button bground="darkblue">
        <p>Pressed State</p>
      </Button>
      <Button bground="grey" func={Disabled}>
        <p>Disabled State</p>
      </Button>
      <Button>
      <i className="fa-solid fa-chevron-left"></i>  <p>Icon Before</p>
      </Button>
      <Button>
        <p>Icon After</p>
        <i className="fa-solid fa-chevron-right"></i>
      </Button>
      </div>
    </div>

    <div>
    <Title>
      <ul>
        <li>Default</li>
        <p>Used to most in the interface. Only use another style if a button requires more or less visual weight.</p>  </ul>
      </Title>

     <div className="container">
       <Button bground="rgb(215, 212, 212)" ncolor="black" func={defBtn}>
        <p>Default Button</p>
       </Button>
      <Button bground="lightgrey" ncolor="black" func={Hover}>
        <p>Hover State</p>
      </Button>
      <Button bground="darkgrey" >
        <p>Pressed State</p>
      </Button>
      <Button bground="white" ncolor="black" func={Disabled} >
        <p>Disabled State</p>
      </Button>
      <Button bground="rgb(215, 212, 212)" ncolor="black" >
      <i className="fa-solid fa-chevron-left"></i> 
        <p>Icon Before</p>
      </Button>
      <Button bground="rgb(215, 212, 212)" ncolor="black">
        <p>Icon After</p>
        <i className="fa-solid fa-chevron-right"></i>
      </Button>
      </div>
    </div>

    <div>
    <Title>
      <ul>
        <li>Plain</li>
        <p>Used for less important or less commonly used actions since they are less prominent. For example, plain button are used as actions in card.</p>  </ul>
      </Title>

     <div className="container">
       <Button bground="aliceblue" ncolor="black" func={plainBtn}>
        <p>Plain Button</p>
       </Button>
      <Button bground="rgb(199, 213, 225)" ncolor="black" func={Hover}>
        <p>Hover State</p>
      </Button>
      <Button bground="rgb(178, 196, 212)" ncolor="black">  
        <p>Pressed State</p>
      </Button>
      <Button bground="white" ncolor="black" func={Disabled}>
        <p>Disabled State</p>
      </Button>
      <Button bground="aliceblue" ncolor="black">
      <i className="fa-solid fa-chevron-left"></i> 
        <p>Icon Before</p>
      </Button>
      <Button bground="aliceblue" ncolor="black">
        <p>Icon After</p>
        <i className="fa-solid fa-chevron-right"></i>
      </Button>
      </div>
    </div>

    <div>
    <Title>
      <ul>
        <li>Destructive</li>
        <p>Used when the action will delete data or be otherwise difficult to recover from.</p>  </ul>
      </Title>

     <div className="container">
       <Button bground="red" func={desBtn}>
        <p>Destructive Button</p>
       </Button>
      <Button bground="#DC2626" func={Hover}>
        <p>Hover State</p>
      </Button>
      <Button bground="#2b0202">
        <p>Pressed State</p>
      </Button>
      <Button bground="rgb(234, 138, 138)"  func={Disabled}>
        <p>Disabled State</p>
      </Button>
      <Button bground="red">
      <i className="fa-solid fa-chevron-left"></i> 
        <p>Icon Before</p>
      </Button>
      <Button bground="red">
        <p>Icon After</p>
        <i className="fa-solid fa-chevron-right"></i>
      </Button>
      </div>
    </div>

    <div>
    <Title>
      <ul>
        <li>Small/Primary</li>
        <p>Use to highlight the most important action in any experience.</p>  </ul>
      </Title>

     <div className="container">
       <Button nheight="35px" nsize="11px" func={smallPrimary}>
        <p>Small/Primary Button</p>
       </Button>
      <Button bground="rgb(74, 74, 160)" nheight="35px" nsize="11px" func={Hover}>
        <p>Hover State</p>
      </Button>
      <Button bground="darkblue" nheight="35px" nsize="11px">
        <p>Pressed State</p>
      </Button>
      <Button bground="grey" func={Disabled} nheight="35px" nsize="11px">
        <p>Disabled State</p>
      </Button>
      <Button nheight="35px" nsize="11px">
      <i className="fa-solid fa-chevron-left"></i> 
        <p>Icon Before</p>
      </Button>
      <Button nheight="35px" nsize="11px">
        <p>Icon After</p>
        <i className="fa-solid fa-chevron-right"></i>
      </Button>
      </div>
    </div>

    <div>
    <Title>
      <ul>
        <li>Small/Default</li>
        <p>Used to most in the interface. Only use another style if a button requires more or less visual weight.</p>  </ul>
      </Title>

     <div className="container">
       <Button bground="rgb(215, 212, 212)"  nsize="11px" ncolor="black" func={smallDef}>
        <p>Small/Default Button</p>
       </Button>
      <Button bground="lightgrey"  nsize="11px" ncolor="black" func={Hover}>
        <p>Hover State</p>
      </Button>
      <Button bground="darkgrey" nsize="11px">
        <p>Pressed State</p>
      </Button>
      <Button func={Disabled} nsize="11px"  bground="white" ncolor="black">
        <p>Disabled State</p>
      </Button>
      <Button  nsize="11px" bground="rgb(215, 212, 212)" ncolor="black">
      <i className="fa-solid fa-chevron-left"></i> 
        <p>Icon Before</p>
      </Button>
      <Button  nsize="11px" bground="rgb(215, 212, 212)" ncolor="black">
        <p>Icon After</p>
        <i className="fa-solid fa-chevron-right"></i>
      </Button>
      </div>
    </div>
    
    </div>
  )
}

export default App