/* Event Entity */
var Event = function (eventId, eventname, eventDate,
    eventStart_time, eventEnd_time, eventCoordinator, eventContact, eventDescription) {

    this.eventId = eventId;
    this.eventname = eventname;
    this.eventDate = eventDate;
    this.eventStart_time = eventStart_time;
    this.eventEnd_time = eventEnd_time;
    this.eventCoordinator = eventCoordinator;
    this.eventContact = eventContact;
    this.eventDescription = eventDescription;
}

module.exports = Event;
 