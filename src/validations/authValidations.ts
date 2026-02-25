import * as Yup from "yup"

export const loginValidationSchema = Yup.object().shape({
    email: Yup.string().email("Email inválido").required("Ingresa tu usuario"),
    password: Yup.string().required("Ingresa tu contraseña"),
})