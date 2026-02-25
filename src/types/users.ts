type DocType = "CC" | "TI" | "OTHER";

export type TUserRole =
  | "SUPERADMIN"
  | "ADMIN"
  | "INSTITUTION_MODERATOR"
  | "STUDENT";

export interface IUser {
  _id: string;
  name: string;
  last_name: string;
  email: string;
  username?: string;
  role: TUserRole;
  institution_user_data?: IInstitutionData;
  created_at: Date;
  last_modified_at: Date;
}

export interface IInstitutionData {
  class_id: string; // EJ: 11B
  institution_id: string;
  doc_number: number;
  doc_type: DocType;
}
