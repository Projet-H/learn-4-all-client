import { Ability, AbilityBuilder } from "@casl/ability";

import { roleById } from "../helpers/constants";

export const subjectName = (item) => {
  if (!item || typeof item === "string") {
    return item;
  }
  return item.__type;
};

export const ability = new Ability([], { subjectName });

export const defineRulesFor = (user) => {
  const { can, rules } = AbilityBuilder.extract();

  switch (roleById[user.role]) {
    case "ADMIN":
      can("view", "Class", { userId: user.id });
      can("view", "Subject", { userId: user.id });
      can("add", "Class", { userId: user.id });
      can("add", "Subject", { userId: user.id });
      can("view", "Issues", { userId: user.id });
      can("validate", "Degree", { userId: user.id });
      can("validate", "Subject", { userId: user.id });
      can("view", "Users", { userId: user.id });
      can("view", "Report", { userId: user.id });
      break;
    case "TEACHER":
      can("view", "Class", { userId: user.id });
      can("view", "Subject", { userId: user.id });
      can("add", "Class", { userId: user.id });
      can("add", "Subject", { userId: user.id });
      can("view", "Issues", { userId: user.id });
      can("join", "Issues", { userId: user.id });
      can("tchatWithStudent", "Issues", { userId: user.id });
      can("view", "Conversation", { userId: user.id });
      can("view", "MyIssues", { userId: user.id });
      break;
    case "STUDENT":
      can("view", "Class", { userId: user.id });
      can("view", "Subject", { userId: user.id });
      can("add", "Class", { userId: user.id });
      can("add", "Subject", { userId: user.id });
      can("view", "Issues", { userId: user.id });
      can("add", "Issues", { userId: user.id });
      can("tchatWithTeacher", "Issues", { userId: user.id });
      can("view", "Conversation", { userId: user.id });
      can("view", "MyIssues", { userId: user.id });
      break;
    default:
      can("view", "Profil", { userId: user.id });
      break;
  }
  return rules;
};
