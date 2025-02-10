class Ride {
    private static _activeRides: number = 0; // 🔒 Private static property
    
    constructor(
        public passenger: string,
        public pickupLocation: string,
        public dropoffLocation: string
    ) {}

    start(): void {
        Ride._activeRides++;
    }

    stop(): void {
        Ride._activeRides--;
    }

    static get activeRides(): number {
        return Ride._activeRides; // ✅ Read-only access
    }
}


const ride1 = new Ride("Alice", "Downtown", "Airport");
const ride2 = new Ride("Bob", "Mall", "Hotel");

ride1.start();
ride2.start();

console.log(Ride.activeRides); // Output: 2 🚖🚖 (Two active rides)

ride1.stop();
console.log(Ride.activeRides); // Output: 1 🚖 (One active ride remaining)
// Ride.activeRides = 1000