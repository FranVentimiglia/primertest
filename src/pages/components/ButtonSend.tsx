export default function ButtonSend () {
    const handleClick = () => {
        alert ('estoy en handleclick')
      }
    return(
        <button onClick={handleClick}>Enviar</button>
    )
}