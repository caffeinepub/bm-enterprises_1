import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type Time = bigint;
export interface Enquiry {
    id: bigint;
    timestampCreated: Time;
    name: string;
    email: string;
    message: string;
}
export interface Feedback {
    id: bigint;
    suggestions: string;
    timestampCreated: Time;
    name: string;
    email: string;
    message: string;
    rating: bigint;
}
export interface backendInterface {
    getAllEnquiries(): Promise<Array<Enquiry>>;
    getAllFeedback(): Promise<Array<Feedback>>;
    getEnquiry(id: bigint): Promise<Enquiry>;
    getFeedback(id: bigint): Promise<Feedback>;
    submitEnquiry(name: string, email: string, message: string): Promise<bigint>;
    submitFeedback(name: string, email: string, message: string, rating: bigint, suggestions: string): Promise<bigint>;
}
