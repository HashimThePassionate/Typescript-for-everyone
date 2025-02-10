# **Static Members  in TypeScript** 🚗💨

## Introduction 🎯
Imagine you are building a **ride-sharing application** like **Uber**. Users can **request rides** using their phones. To implement this, we create a class called `Ride`, which includes essential details such as:

- **Passenger Name** 👤
- **Pickup Location** 📍
- **Drop-off Location** 🏁
- **Tracking Active Rides** 🚖

However, we need a way to track **how many rides are currently active** in a **single, global place** instead of keeping this count separately for each ride instance. This is where **static properties** come into play! 🚀

---

## Creating the `Ride` Class 🏗️
Let's define a **basic `Ride` class** with **static properties** to track active rides globally.

```typescript
class Ride {
    static activeRides: number = 0; // 🚖 Shared across all instances
    
    constructor(
        public passenger: string,
        public pickupLocation: string,
        public dropoffLocation: string
    ) {}

    start(): void {
        Ride.activeRides++; // ✅ Increment global active ride count
    }

    stop(): void {
        Ride.activeRides--; // ✅ Decrement global active ride count
    }
}
```

### Explanation 🧐
- **`static activeRides: number = 0;`** → A **static property** that tracks the number of active rides **globally**.
- **Each ride instance does NOT have its own copy** of `activeRides`. Instead, this property belongs to the **class itself**.
- **Methods**:
  - `start()` → Increments the active ride count when a ride begins.
  - `stop()` → Decrements the count when a ride ends.

---

## Using the `Ride` Class 🚖
Let's create **two rides** and track how many are active.

```typescript
const ride1 = new Ride("Alice", "Downtown", "Airport");
const ride2 = new Ride("Bob", "Mall", "Hotel");

ride1.start();
ride2.start();

console.log(Ride.activeRides); // Output: 2 🚖🚖 (Two active rides)

ride1.stop();
console.log(Ride.activeRides); // Output: 1 🚖 (One active ride remaining)
```

### Explanation 📌
- `ride1.start();` and `ride2.start();` → Increase `activeRides` to `2`.
- `ride1.stop();` → Decreases `activeRides` to `1`.
- We **access `activeRides` via the class (`Ride.activeRides`)**, not via an instance.

---

## Preventing Direct Modification 🚨
Currently, **anyone can modify** `Ride.activeRides` like this:

```typescript
Ride.activeRides = 1000; // ❌ This should not be allowed!
```

To **prevent direct modifications**, we can make `activeRides` **private** and provide a **getter method** instead. 🔒

### Improved Version with Encapsulation 🛡️
```typescript
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
```

### Explanation ✅
- **`private static _activeRides`** → Prevents external modifications.
- **`static get activeRides()`** → Provides **read-only access** to active rides.
- Users can **view** the active ride count but **cannot modify it directly**.

### Secure Usage 🔐
```typescript
console.log(Ride.activeRides); // ✅ Allowed (Reads value)
Ride.activeRides = 1000; // ❌ Error! Cannot assign directly
```

---

## Key Takeaways 🏆
✅ **Static properties** belong to the **class, not objects**.  
✅ **Used for global tracking**, like counting active rides.  
✅ **Prevents duplicate tracking** across multiple instances.  
✅ **Encapsulation** with `private` and `getter` prevents unintended modifications.  

---

## Conclusion ✅
Static properties are a powerful tool in TypeScript, allowing us to **share and track data across all instances** of a class. By using **encapsulation**, we ensure that global data **remains safe from unintended modifications**. 🚀🔥

