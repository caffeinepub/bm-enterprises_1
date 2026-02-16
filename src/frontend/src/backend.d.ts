import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Enquiry {
    id: bigint;
    timestampCreated: Time;
    name: string;
    email: string;
    message: string;
}
export type Time = bigint;
export interface backendInterface {
    getAllEnquiries(): Promise<Array<Enquiry>>;
    getEnquiry(id: bigint): Promise<Enquiry>;
    submitEnquiry(name: string, email: string, message: string): Promise<bigint>;
}
