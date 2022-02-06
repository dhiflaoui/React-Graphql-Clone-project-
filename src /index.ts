import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import microConfig from "./mikro-orm.config";

//!config the mikro-orm
const main = async () => {
  const orm = await MikroORM.init(microConfig);
  await orm.getMigrator().up();
};

main().catch((err) => {
  console.log(err);
});
