import Array "mo:core/Array";
import Iter "mo:core/Iter";
import Map "mo:core/Map";
import Nat "mo:core/Nat";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";
import Text "mo:core/Text";
import Time "mo:core/Time";



actor {
  type Enquiry = {
    id : Nat;
    name : Text;
    email : Text;
    message : Text;
    timestampCreated : Time.Time;
  };

  type Feedback = {
    id : Nat;
    name : Text;
    email : Text;
    message : Text;
    rating : Int;
    suggestions : Text;
    timestampCreated : Time.Time;
  };

  module Enquiry {
    public func compare(entry1 : Enquiry, entry2 : Enquiry) : Order.Order {
      Nat.compare(entry1.id, entry2.id);
    };
  };

  module Feedback {
    public func compare(entry1 : Feedback, entry2 : Feedback) : Order.Order {
      Nat.compare(entry1.id, entry2.id);
    };
  };

  let enquiries = Map.empty<Nat, Enquiry>();
  let feedbacks = Map.empty<Nat, Feedback>();
  var nextEnquiryId = 0;
  var nextFeedbackId = 0;

  public shared ({ caller }) func submitEnquiry(name : Text, email : Text, message : Text) : async Nat {
    let id = nextEnquiryId;
    nextEnquiryId += 1;

    let newEnquiry : Enquiry = {
      id;
      name;
      email;
      message;
      timestampCreated = Time.now();
    };
    enquiries.add(id, newEnquiry);
    id;
  };

  public shared ({ caller }) func submitFeedback(name : Text, email : Text, message : Text, rating : Int, suggestions : Text) : async Nat {
    if (rating < 1 or rating > 5) {
      Runtime.trap("Rating must be between 1 and 5");
    };

    let id = nextFeedbackId;
    nextFeedbackId += 1;

    let newFeedback : Feedback = {
      id;
      name;
      email;
      message;
      rating;
      suggestions;
      timestampCreated = Time.now();
    };
    feedbacks.add(id, newFeedback);
    id;
  };

  public query ({ caller }) func getEnquiry(id : Nat) : async Enquiry {
    switch (enquiries.get(id)) {
      case (null) { Runtime.trap("Could not find enquiry with id=" # id.toText()) };
      case (?enquiry) { enquiry };
    };
  };

  public query ({ caller }) func getAllEnquiries() : async [Enquiry] {
    enquiries.values().toArray().sort();
  };

  public query ({ caller }) func getFeedback(id : Nat) : async Feedback {
    switch (feedbacks.get(id)) {
      case (null) { Runtime.trap("Could not find feedback with id=" # id.toText()) };
      case (?feedback) { feedback };
    };
  };

  public query ({ caller }) func getAllFeedback() : async [Feedback] {
    feedbacks.values().toArray().sort();
  };
};
