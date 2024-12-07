

const Button = ({bground, ncolor, func, nwidth, nheight, nsize, children}) => {
  const styles = {
    color: ncolor || "white",
    backgroundColor: bground || "blue",
    border: "none",
    padding: "5px 10px",
    borderRadius: "8px",
    height: nheight || "70%",
    width: nwidth ||"100%",
    display: "inline-flex",
    alignItems: "center",
    fontSize: nsize || "16px",
  }
  return (
    <div><button style={styles} onClick={func}>{children}</button></div>
  )
}

export default Button