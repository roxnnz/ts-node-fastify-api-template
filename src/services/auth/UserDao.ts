import Database from '../../database/Database';

class UserDao extends Database {
  constructor() {
    super();
    super.connect();
  }
  public CreateUser(user: any) {
    try {
      return super.UserCollection().create(user);
    } catch (error) {
      console.log(error.message);
    }
  }

  // return user object
  public GetUserByUserId(): any {
    try {
      return super.UserCollection().findOne();
    } catch (error) {
      console.log(error.message);
    }
  }
}
export default new UserDao();
