class UserDao {
    id;
    username;
    firstName;
    lastName;
    created;

    // constructor for user dao
    constructor(id, username, firstName, lastName, created) {
        this.id = id;
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.created = created;
    }
}

export default UserDao;