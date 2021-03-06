
import { Project } from "../../project/Project";
import { RepoId } from "./RepoId";

/**
 * A function that knows how to materialize a repo, whether
 * by cloning or other means
 */
export type RepoLoader = (repoId: RepoId) => Promise<Project>;
