import Array "mo:core/Array";
import Text "mo:core/Text";
import Time "mo:core/Time";
import Iter "mo:core/Iter";
import Nat "mo:core/Nat";
import Runtime "mo:core/Runtime";
import Map "mo:core/Map";
import Order "mo:core/Order";

actor {
  type Enquiry = {
    id : Nat;
    name : Text;
    email : Text;
    message : Text;
    timestampCreated : Time.Time;
  };

  module Enquiry {
    public func compare(enquiry1 : Enquiry, enquiry2 : Enquiry) : Order.Order {
      Nat.compare(enquiry1.id, enquiry2.id);
    };
  };

  let entries = Map.empty<Nat, Enquiry>();
  var nextId = 0;

  public shared ({ caller }) func submitEnquiry(name : Text, email : Text, message : Text) : async Nat {
    let id = nextId;
    nextId += 1;

    let newEnquiry : Enquiry = {
      id;
      name;
      email;
      message;
      timestampCreated = Time.now();
    };
    entries.add(id, newEnquiry);
    id;
  };

  public query ({ caller }) func getEnquiry(id : Nat) : async Enquiry {
    switch (entries.get(id)) {
      case (null) { Runtime.trap("Could not find enquiry with id=" # id.toText()) };
      case (?enquiry) { enquiry };
    };
  };

  public query ({ caller }) func getAllEnquiries() : async [Enquiry] {
    entries.values().toArray().sort();
  };
};
