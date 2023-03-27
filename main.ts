let distance = 0
basic.showString("Hello World!")
basic.forever(function () {
    distance = maqueen.Ultrasonic(PingUnit.Centimeters)
    if (distance <= 5) {
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 20)
        basic.pause(100)
    } else {
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 20)
        } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 15)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
        } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 15)
        }
    }
})
