"use strict";
class Ride {
    constructor(passenger, pickupLocation, dropoffLocation) {
        this.passenger = passenger;
        this.pickupLocation = pickupLocation;
        this.dropoffLocation = dropoffLocation;
    }
    start() {
        Ride._activeRides++;
    }
    stop() {
        Ride._activeRides--;
    }
    static get activeRides() {
        return Ride._activeRides; // ✅ Read-only access
    }
}
Ride._activeRides = 0; // 🔒 Private static property
const ride1 = new Ride("Alice", "Downtown", "Airport");
const ride2 = new Ride("Bob", "Mall", "Hotel");
ride1.start();
ride2.start();
console.log(Ride.activeRides); // Output: 2 🚖🚖 (Two active rides)
ride1.stop();
console.log(Ride.activeRides); // Output: 1 🚖 (One active ride remaining)
// Ride.activeRides = 1000
