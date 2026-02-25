"use client";

import Button from "@/components/button/Button";
import InputFile from "@/components/form/InputFile";
import InputSelect from "@/components/form/InputSelect";
import InputText from "@/components/form/InputText";
import CustomMain from "@/components/layout/CustomMain";
import handleAddMassiveUsers from "@/handlers/user/handleAddMassiveUsers";
import { IAddUserData } from "@/handlers/user/handleAddUser";
import { TUserRole } from "@/types/users";
import {
  addMassiveUsersValidationSchema,
  addUserValidationSchema,
} from "@/validations/dashboardValidations";
import { Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import readXlsxFile from "read-excel-file";
import { toast } from "sonner";

interface IInitialValues {
  source: File | null;
}

export default function AddMassiveUsers() {
  const institutionId = "66455e11968ddbb1ca6eae17";
  const initialValues: IInitialValues = {
    source: null,
  };
  const router = useRouter();

  async function handleSubmit(values: IInitialValues) {
    if (values.source) {
      const readResult = await readXlsxFile(values.source);

      readResult.splice(0, 3);
      const users = readResult.map((row) => {
        const [email, name, lastName, password, classId, docType, docNumber] =
          row;

        const user: IAddUserData = {
          email: email.toString(),
          name: name.toString(),
          last_name: lastName.toString(),
          role: "STUDENT",
          password: password.toString(),
          institution: {
            id: institutionId,
            label: "_",
          },
          institution_user_data: {
            class_id: classId.toString(),
            doc_number: parseInt(docNumber.toString()),
            doc_type: docType.toString(),
          },
        };

        return user;
      });

      console.log(users);

      /* const res = await handleAddMassiveUsers(users);

      if (res.error) {
        return toast.error(res.error);
      }

      toast.success("Usuarios creados con éxito");

      router.push("/dashboard/institutionUsers"); */
    }
  }

  return (
    <CustomMain>
      <section className="min-h-[calc(100vh)] bg-links relative p-5 pt-24 flex flex-col items-center gap-10 text-primary">
        <h1 className="text-primary text-2xl font-bold text-center">
          AÑADIR USUARIOS MASIVOS
        </h1>
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => handleSubmit(values)}
          validationSchema={addMassiveUsersValidationSchema}
        >
          <Form className="w-full flex flex-col gap-4 items-stretch">
            <div className="bg-primary p-1 rounded-xl text-light text-center font-semibold">
              <InputFile
                multiple={false}
                accept=".xlsx, .xls, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                label="Archivo"
                name="source"
              />
            </div>

            <div className="mt-12 flex">
              <Button type="submit" hierarchy="primary">
                AÑADIR
              </Button>
            </div>
          </Form>
        </Formik>
      </section>
    </CustomMain>
  );
}
