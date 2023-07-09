const mongoose = require('mongoose');

const { Schema } = mongoose;

const CarSchema = new Schema({
    Make: String,
    model: String,
    variant: String,
    ExShowroom_Price: String,
    displacement: String,
    cylinders: Number,
    valvesPerCylinder: Number,
    drivetrain: String,
    cylinderConfiguration: String,
    emissionNorm: String,
    engineLocation: String,
    fuelSystem: String,
    fuelTankCapacity: String,
    fuelType: String,
    height: String,
    length: String,
    width: String,
    Body_Type: String,
    doors: Number,
    cityMileage: String,
    araiCertifiedMileage: String,
    kerbWeight: String,
    gears: Number,
    groundClearance: String,
    frontBrakes: String,
    rearBrakes: String,
    frontSuspension: String,
    rearSuspension: String,
    frontTrack: String,
    rearTrack: String,
    frontTyreAndRim: String,
    rearTyreAndRim: String,
    powerSteering: String,
    powerWindows: String,
    keylessEntry: String,
    power: String,
    torque: String,
    odometer: String,
    speedometer: String,
    tachometer: String,
    tripmeter: String,
    seatingCapacity: Number,
    seatsMaterial: String,
    type: String,
    wheelbase: String,
    wheelsSize: String,
    startStopButton: String,
    powerOutlet: String,
    audioSystem: String,
    auxInCompatibility: String,
    averageFuelConsumption: String,
    basicWarranty: String,
    bluetooth: String,
    bootLidOpener: String,
    bootSpace: String,
    cdMp3DvdPlayer: String,
    centralLocking: String,
    childSafetyLocks: String,
    clock: String,
    cupHolders: String,
    distanceToEmpty: String,
    doorPockets: String,
    engineMalfunctionLight: String,
    extendedWarranty: String,
    fmRadio: String,
    fuelLidOpener: String,
    fuelGauge: String,
    handbrake: String,
    instrumentConsole: String,
    lowFuelWarning: String,
    minimumTurningRadius: String,
    multifunctionDisplay: String,
    sunVisor: String,
    thirdRowACVents: String,
    ventilationSystem: String,
  });

  
const Car = mongoose.model('Car', CarSchema);

module.exports = Car;
