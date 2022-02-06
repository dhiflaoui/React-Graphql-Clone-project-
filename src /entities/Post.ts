import {
  Entity,
  PrimaryKey,
  SerializedPrimaryKey,
  Property,
} from "@mikro-orm/core";

@Entity()
export class Post {
  @PrimaryKey()
  _id!: number;

  @SerializedPrimaryKey()
  id!: string;

  @Property({ type: "date" })
  createdAt: Date = new Date();

  @Property({ type: "date", onUpdate: () => new Date() })
  updatedAt: Date = new Date();

  @Property()
  title!: string;
}
