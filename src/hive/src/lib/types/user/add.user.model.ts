import { SignInModel } from 'src/hive/src/lib/types/signIn.model';
import { UserModel } from 'src/hive/src/lib/types/user/user.model';

export class AddUserModel extends UserModel {
    signIn!: SignInModel;
}
