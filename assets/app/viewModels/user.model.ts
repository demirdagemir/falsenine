export class User {
    constructor(
        public email: String,
        public username: String,
        public password: String,
        public firstName: String,
        public lastName: String,
        public favoritePlayer?: String,
        public favoriteTeam?: String
    ){}
}