// Entity class for coach

export class Skill {
    
    skillId:number;
    skillName:string;
    skillDescription:string;


    // getters

    public getskillId(): number {
        return this.skillId;
    }

    public getskillName(): string {
        return this.skillName;
    }
    public getskillDescription(): string {
        return this.skillDescription;
    }



    // setters
    public setskillId(id: number) {
        this.skillId = id;
    }
    
    public setskillName(name: string) {
        this.skillName = name;
    }
    
    public setskillDescription(des: string) {
        this.skillDescription = des;
    }
}

