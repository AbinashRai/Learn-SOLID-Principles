class PatientInfo {
    constructor(public patient: Patient) {}
  
    getPatientInfo(): string {
      return this.patient.getInfo();
    }
  }
  
  class DoctorInfo {
    constructor(public doctor: Doctor) {}
  
    getDoctorInfo(): string {
      return this.doctor.getInfo();
    }
  }
  
  class Appointment extends PatientInfo {
    constructor(
      public id: number,
      public doctor: DoctorInfo,
      public date: Date
    ) {
      super(doctor.patient);
    }
  
    getDetails(): string {
      return `Appointment ID: ${this.id}\n${super.getPatientInfo()}\n${this.doctor.getDoctorInfo()}\nDate: ${this.date}`;
    }
  }
  
  // Client Code
  const patientInfo = new PatientInfo(patient);
  const doctorInfo = new DoctorInfo(doctor);
  const appointment = new Appointment(1, doctorInfo, new Date('2024-01-23'));
  console.log(appointment.getDetails());
  