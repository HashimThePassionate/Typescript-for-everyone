"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function render(document) {
    if (typeof document === "string") {
        console.log(document.toUpperCase()); // ✅ Safe because it's a string
    }
    else {
        console.log("Invalid document type");
    }
}
render("TypeScript Guide"); // ✅ Output: TYPESCRIPT GUIDE
render(42); // ✅ Output: Invalid document type
function fetchData() {
    return __awaiter(this, void 0, void 0, function* () {
        return "{ \"name\": \"Alice\" }"; // Simulated API response
    });
}
function processData() {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield fetchData();
        if (typeof data === "string") {
            console.log("Data received:", JSON.parse(data)); // ✅ Safe JSON parsing
        }
        else {
            console.log("Unexpected data type");
        }
    });
}
processData();
