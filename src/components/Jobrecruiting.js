import React, { useState } from 'react';
import { getDatabase, ref, push } from "firebase/database";
import { getAuth } from "firebase/auth";
import { app } from '../firebase';

function JobForm() {
  const [jobName, setJobName] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [jobImage, setJobImage] = useState('');
  const [jobReward, setJobReward] = useState('');
  const [jobRecruitment, setJobRecruitment] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const jobData = {
      name: jobName,
      description: jobDescription,
      image: jobImage,
      reward: jobReward,
      recruitment: jobRecruitment
    };

    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      const db = getDatabase(app);
      push(ref(db, `jobs/${user.uid}`), jobData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={jobName} onChange={e => setJobName(e.target.value)} placeholder="Job Name" />
      <input type="text" value={jobDescription} onChange={e => setJobDescription(e.target.value)} placeholder="Job Description" />
      <input type="text" value={jobImage} onChange={e => setJobImage(e.target.value)} placeholder="Job Image" />
      <input type="text" value={jobReward} onChange={e => setJobReward(e.target.value)} placeholder="Job Reward" />
      <input type="text" value={jobRecruitment} onChange={e => setJobRecruitment(e.target.value)} placeholder="Job Recruitment" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default JobForm;
