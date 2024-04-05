import styles from "@/styles/components.module.css";
import ButtonSend from "./ButtonSend";
export default function PersonalForm() {
    return (
        <>
            <div className={styles.description}>
                <h1>Datos Personales</h1>
            </div>
            <div className={styles.formdatos}>
                <p>Nombre *</p>
                <input type="Nombre" className={styles.field}></input>
                <p>Apellido *</p>
                <input type="Apellido" className={styles.field}></input>
                <p>Domicilio</p>
                <input type="Domicilio" className={styles.field}></input>
                <p>Telefono</p>
                <input type="Telefono" className={styles.field}></input>
                <p>Correo Electronico *</p>
                <input type="Correo Electronico" className={styles.field}></input>
            </div>
            <div className={styles.button}>
                <ButtonSend />
            </div>
        </>
    )
}