import { SignInModel } from 'src/hive/lib/types/signIn.model';
import { UserModel } from 'src/hive/lib/types/user/user.model';

export class AddUserModel extends UserModel {
    signIn!: SignInModel;
}
