class UserModel {
  constructor(user) {
    this.id = user[`id`];
    this.name = user[`name`];
    this.email = user[`email`];
    this.avatar = user[`avatar_url`];
  }

  static getUser(user) {
    return new UserModel(user);
  }
}

export default UserModel;
