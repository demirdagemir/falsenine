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
        public attributes?: Attributes
    ){}
}

export class Attributes {
    constructor(
        public physical: PhysicalAttributes,
        public mental: MentalAttributes,
        public technical: TechnicalAttributes
    ){}
}

export class PhysicalAttributes {
    constructor(
        public Acceleration: Number,
        public Agility: Number,
        public Balance: Number,
        public JumpingReach: Number,
        public NaturalFitness: Number,
        public Pace: Number,
        public Stamina: Number,
        public Strength: Number,
        public GoalkeeperRating: Number
    ){}
}

export class MentalAttributes {
    constructor(
        public Aggression: Number,
        public Anticipation: Number,
        public Bravery: Number,
        public Composure: Number,
        public Concentration: Number,
        public Decision: Number,
        public Determination: Number,
        public Flair: Number,
        public Leadership: Number,
        public OfftheBall: Number,
        public Positioning: Number,
        public Teamwork: Number,
        public Vision: Number,
        public WorkRate: Number

    ){}
}

export class TechnicalAttributes {
    constructor(
        public Crossing: Number,
        public Dribbling: Number,
        public Finishing: Number,
        public FirstTouch: Number,
        public FreeKickTaking: Number,
        public Heading: Number,
        public LongShots: Number,
        public LongThrows: Number,
        public Marking: Number,
        public Passing: Number,
        public PenaltyTaking: Number,
        public Tackling: Number,
        public Technique: Number
    ){}
}