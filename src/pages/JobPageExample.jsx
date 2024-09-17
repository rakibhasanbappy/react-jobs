// // import React from "react";

// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import Spinner from "../components/Spinner";

// const JobPage = () => {
//   const { id } = useParams();
//   const [job, setJob] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchJob = async () => {
//       try {
//         const res = await fetch(`/api/jobs/${id}`);
//         const data = await res.json();
//         setJob(data);
//       } catch (err) {
//         console.log("Error fetching job", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchJob();
//   }, []);

//   return loading ? <Spinner loading={loading} /> : <h1>{job.title}</h1>;
// };

// // const jobLoader = async (params) => {
// //   const res = await fetch(`/api/jobs/${params.id}`);
// //   const job = await res.json();
// //   return job;
// // };

// export default JobPage;
