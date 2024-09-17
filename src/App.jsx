// import React from "react";
import MainLayout from "./layouts/MainLayout";
import AddJobPage from "./pages/AddJobPage";
import EditJobPage from "./pages/EditJobPage";
import HomePage from "./pages/HomePage";
import JobPage, { jobLoader } from "./pages/JobPage";
import JobsPage from "./pages/JobsPage";
import NotFoundPage from "./pages/NotFoundPage";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const addJob = async (newJob) => {
  await fetch("/api/jobs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newJob),
  });
};

const deleteJob = async (id) => {
  await fetch(`/api/jobs/${id}`, {
    method: "DELETE",
  });
};

const updateJob = async (updatedJob) => {
  await fetch(`/api/jobs/${updatedJob.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedJob),
  });
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/jobs" element={<JobsPage />} />
      <Route
        path="/edit-job/:id"
        element={<EditJobPage updateJobSubmit={updateJob} />}
        loader={jobLoader}
      />
      <Route
        path="/jobs/:id"
        element={<JobPage deleteJob={deleteJob} />}
        loader={jobLoader}
      />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob} />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;

  // <>
  //   <Navbar />
  //   <Hero />
  //   <HomeCard />
  //   <JobListings />
  //   <ViewAllJobs />
  // </>;
};

export default App;
