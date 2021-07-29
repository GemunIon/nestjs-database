import { Entity, PrimaryKey, Property, ManyToOne, EntityRepositoryType } from "@mikro-orm/core";

import { UserEntity } from "../user/user.entity";
import { ns } from "../common/constants";
import { IAuth } from "./interfaces";

@Entity({ tableName: `${ns}.auth` })
export class AuthEntity {
  [EntityRepositoryType]?: IAuth;

  @PrimaryKey()
  id: number;

  @Property({ columnType: "varchar" })
  refreshToken: string;

  @Property({ columnType: "bigint" })
  refreshTokenExpiresAt: number;

  accessToken: string;

  accessTokenExpiresAt: number;

  @ManyToOne()
  user: UserEntity;

  @Property()
  timeCreatedAt = new Date();

  @Property({ onUpdate: () => new Date() })
  timeUpdatedAt = new Date();
}
