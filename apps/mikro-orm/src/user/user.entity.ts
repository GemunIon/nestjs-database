import { Entity, EntityRepositoryType, Enum, PrimaryKey, Property } from "@mikro-orm/core";

import { ns } from "../common/constants";
import { IUser, UserRole, UserStatus } from "./interfaces";
import { NativeEnumArrayType } from "../database/native.enum";

@Entity({ collection: `${ns}.user` })
export class UserEntity {
  [EntityRepositoryType]?: IUser;

  @PrimaryKey()
  public id: number;

  @Property({ columnType: "varchar" })
  public firstName: string;

  @Property({ columnType: "varchar" })
  public lastName: string;

  @Property({ columnType: "varchar" })
  public email: string;

  @Property({ columnType: "varchar", hidden: true })
  public password?: string;

  // @Enum({ items: () => UserRole, array: true, default: [UserRole.USER] })
  @Property({ type: NativeEnumArrayType })
  public roles: Array<UserRole>;

  @Enum({
    items: () => UserStatus,
    default: UserStatus.PENDING,
  })
  public status?: UserStatus;

  @Property()
  public createdAt? = new Date();

  @Property({ onUpdate: () => new Date() })
  public updatedAt? = new Date();
}
