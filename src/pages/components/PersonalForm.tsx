import styles from "@/styles/components.module.css";
import ButtonSend from "./ButtonSend";
export default function PersonalForm() {
    return (
        <>
            <div className={styles.description}>
                <p>
                    Datos Personales

                </p>

            </div>
            <div className={styles.formdatos}>
                <p>Nombre *</p>
                <input type="text" className={styles.field}></input>
                <p>Apellido *</p>
                <input type="text" className={styles.field}></input>
                <p>Domicilio</p>
                <input type="text" className={styles.field}></input>
                <p>Telefono</p>
                <input type="text" className={styles.field}></input>
                <p>Correo Electronico *</p>
                <input type="text" className={styles.field}></input>
            </div>
            <div className={styles.button}>
                <ButtonSend />
            </div>
        </>
    )
}