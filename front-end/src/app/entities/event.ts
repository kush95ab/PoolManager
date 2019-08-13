// Entity class for event

export class Event { 
    
    eventId : number;
    eventName : string;
    eventDate : string;
    eventStart_time : string;
    eventEnd_time : string;
    eventCoordinator : string;
    eventContact : number;
    eventDescription : string;

    
    // getters
    
    public geteventId(): number {
        return this.eventId;
    }
    public geteventName(): string {
        return this.eventName;
    }
    public geteventDate(): string {
        return this.eventDate;
    }
    public geteventStart_time(): string {
        return this.eventStart_time;
    }
    public geteventEnd_time(): string {
        return this.eventEnd_time;
    }
    public geteventCoordinator(): string {
        return this.eventCoordinator;
    }
    public geteventContact(): number {
        return this.eventContact;
    }
    public geteventDescription(): string {
        return this.eventDescription;
    }


    // setters

    public seteventId(id : number) {
        this.eventId= id ;
    }
    public seteventName(id : string) {
        this.eventName= id ;
    }
    public seteventDate(id : string) {
        this.eventDate= id ;
    }
    public seteventStart_time(id : string) {
        this.eventStart_time= id ;
    }
    public seteventEnd_time(id : string) {
        this.eventEnd_time= id ;
    }
    public seteventCoordinator(id : string) {
        this.eventCoordinator= id ;
    }
    public seteventContact(id : number) {
        this.eventContact= id ;
    }
    public seteventDescription(id : string) {
        this.eventDescription= id ;
    }
}

 