class AppointmentScheduler {
  private appointments: Appointment[] = [];

  scheduleAppointment(appointment: Appointment): void {
    this.appointments.push(appointment);
  }

  getAppointments(): Appointment[] {
    return this.appointments;
  }
}

const scheduler = new AppointmentScheduler();
const appointment = new Appointment(1, patient, doctor, new Date("2024-01-23"));
scheduler.scheduleAppointment(appointment);
console.log("All Appointments:");
console.log(scheduler.getAppointments());
