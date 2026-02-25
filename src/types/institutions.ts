export type TInstitutionForcedState = "INACTIVE" | "NOT_FORCED" | "ACTIVE"

export interface IInstitution {
    _id: string,
    name: string,
    email: string,
    phone: number,
    description: string,
    country: string,
    state: string,
    city: string,
    current_forced_state: TInstitutionForcedState
    amount_of_students: number,
    payments_status: string,
    created_at?: Date,
    updated_at?: Date

}


/* 


"Se ve una tabla con las columnas: 
- Nombre
- Correo
- Teléfono
- Descripción
- País
- Departamento / Estado
- Ciudad
- Cantidad Actual de Alumnos
- Estado de pagos
- Estado forzado"

*/