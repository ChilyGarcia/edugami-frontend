import * as Yup from "yup";

export const addUserValidationSchema = Yup.object().shape({
  role: Yup.string()
    .oneOf(["STUDENT", "INSTITUTION_MODERATOR"])
    .required("Obligatorio"),
  email: Yup.string().email("Email inválido").required("Obligatorio"),
  institution_user_data: Yup.object().shape({
    doc_type: Yup.string().oneOf(["CC", "TI", "OTHER"]).required("Obligatorio"),
    doc_number: Yup.number().required("Obligatorio"),
    class_id: Yup.string().required("Obligatorio"),
  }),
  name: Yup.string().required("Obligatorio"),
  last_name: Yup.string().required("Obligatorio"),
  institution: Yup.object().shape({
    id: Yup.string().required("Obligatorio"),
    label: Yup.string().required("Obligatorio"),
  }),
  password: Yup.string()
    .matches(
      new RegExp("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})"),
      "La contraseña debe tener al menos una mayúscula, una minúscula y un número"
    )
    .required("Ingresa tu contraseña"),
});

export const editUserValidationSchema = Yup.object().shape({
  role: Yup.string()
    .oneOf(["STUDENT", "INSTITUTION_MODERATOR"])
    .required("Obligatorio"),
  email: Yup.string().email("Email inválido").required("Obligatorio"),
  institution_user_data: Yup.object().shape({
    doc_type: Yup.string().oneOf(["CC", "TI", "OTHER"]).required("Obligatorio"),
    doc_number: Yup.number().required("Obligatorio"),
    class_id: Yup.string().required("Obligatorio"),
  }),
  name: Yup.string().required("Obligatorio"),
  last_name: Yup.string().required("Obligatorio"),
  institution: Yup.object().shape({
    id: Yup.string().required("Obligatorio"),
    label: Yup.string().required("Obligatorio"),
  }),
  password: Yup.string()
    .matches(
      new RegExp("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})"),
      "La contraseña debe tener al menos una mayúscula, una minúscula y un número"
    )
});

export const addInstitutionValidationSchema = Yup.object().shape({
  name: Yup.string().required("Obligatorio"),
  email: Yup.string().email("Email inválido").required("Obligatorio"),
  phone: Yup.string()
    .matches(/^\d{1,3}\d{4,14}$/, "Teléfono inválido")
    .required("Obligatorio"),
  description: Yup.string().required("Obligatorio"),
  country: Yup.mixed()
    .oneOf(["", "COLOMBIA", "VENEZUELA"])
    .required("Obligatorio"),
  state: Yup.string().required("Obligatorio"),
  city: Yup.string().required("Obligatorio"),
});

export const editInstitutionValidationSchema = Yup.object().shape({
  name: Yup.string(),
  email: Yup.string().email("Email inválido"),
  phone: Yup.string()
    .matches(/^\d{1,3}\d{4,14}$/, "Teléfono inválido")
  ,
  description: Yup.string(),
  country: Yup.mixed()
    .oneOf(["", "COLOMBIA", "VENEZUELA"])
  ,
  state: Yup.string(),
  city: Yup.string(),
});

export const addMassiveUsersValidationSchema = Yup.object().shape({
  source: Yup.mixed()
    .nonNullable("Sube el archivo de excel")
    .required("Sube el archivo de excel"),
});

export const addPaymentValidationSchema = Yup.object().shape({
  institution: Yup.object().shape({
    id: Yup.string().required("Obligatorio"),
    label: Yup.string().required("Obligatorio")
  }),
  amount_paid: Yup.number().required("Obligatorio"),
  student_number_agreement: Yup.number().required("Obligatorio"),
  due_date: Yup.date().required("Obligatorio")
})

/* 
{
    "institution_id" : "663fdb321ffb65292cba4498",
    "ammount_paid" : "200000000",
    "student_number_agreement" : 40,
    "due_date": "05/20/2024"
}
*/