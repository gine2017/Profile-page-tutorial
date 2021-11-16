import * as t from "io-ts";

export const User = t.interface({
  name: t.string,
  job: t.string,
  cards: t.array(t.UnknownRecord),
});

export type UserData = t.TypeOf<typeof User>;
