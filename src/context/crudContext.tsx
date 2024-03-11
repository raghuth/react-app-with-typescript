import {
  createContext,
  useReducer,
  ReactNode,
  Dispatch,
  useContext,
} from "react";
import { AppState, AppReducer, Action } from "./type";

export type Job = {
  title: string;
  isActive: boolean;
};

type JobAction =
  | {
      type: "SET_JOBS";
      payload: Job[];
    }
  | {
      type: "ADD_JOB" | "REMOVE_JOB";
      payload: Job;
    };

export const JobsContext = createContext<Job[] | null>(null);
export const JobsDispatchContext = createContext<React.Dispatch<JobAction>>(
  {} as React.Dispatch<JobAction>
);

function jobsReducer(jobs: Job[], action: JobAction): Job[] {
  switch (action.type) {
    case "SET_JOBS":
      return [...(action.payload as Job[])];
    case "ADD_JOB":
      return [...jobs, action.payload as Job];
    case "REMOVE_JOB":
      return [...jobs.filter((job) => job.title !== action.payload.title)];
    default:
      return jobs;
  }
}

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [jobs, dispatch] = useReducer(jobsReducer, []);

  return (
    <JobsContext.Provider value={jobs}>
      <JobsDispatchContext.Provider value={dispatch}>
        {children}
      </JobsDispatchContext.Provider>
    </JobsContext.Provider>
  );
};

export function useJobs() {
  const context = useContext(JobsContext);
  if (context === null) {
    throw new Error("useJobs must be used within a JobsContext");
  }
}

export function useJobsDispatch() {
  const context = useContext(JobsDispatchContext);
  if (context === null) {
    throw new Error(
      "useJobsDispatch must be used within a JobsDispatchContext"
    );
  }
}
