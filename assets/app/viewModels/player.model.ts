export class Player {
    constructor(
        public name: String,
        public marketValue?: Number,
        public dateOfBirth?: Date,
        public contractedUntil?: Date,
        public nation_name?: String,
        public club_id?: String,
        public jerseyNumber?: Number,
        public position?: String,
        public technical?: Object,
        public mental?: Object,
        public physical?: Object
    ){}
}