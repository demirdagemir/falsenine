export class Player {
    constructor(
        public name: String,
        public marketValue: Number,
        public dateOfBirth: Date,
        public contractedUntil: Date,
        public nation_id: String,
        public club_id: String,
        public jerseyNumber: Number,
        public position: String,
        public photoDir: String
    ){}
}