export interface IPayment {
  _id: string;
  institution_id: string;
  paid_at: Date;
  due_date: Date;
  ammount_paid: number;
  student_number_agreement: number;
  value_per_student_when_performed: number;
}
