import { useState, useEffect } from 'react';
import { Candidate } from '../interfaces/Candidate.interface';

const SavedCandidates = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const candidates: Candidate[] = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
    setSavedCandidates(candidates);
  }, []);

  return (
    <div>
      <h1>Saved Candidates</h1>
      {savedCandidates.length > 0 ? (
        <ul>
          {savedCandidates.map(candidate => (
            <li key={candidate.id}>
              <img src={candidate.avatar_url} alt={`${candidate.login}'s avatar`} />
              <h2>{candidate.name}</h2>
              <p>Username: {candidate.login}</p>
              <p>Location: {candidate.location}</p>
              <p>Email: {candidate.email}</p>
              <p>Company: {candidate.company}</p>
              <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">GitHub Profile</a>
            </li>
          ))}
        </ul>
      ) : (
        <p>No candidates have been accepted</p>
      )}
    </div>
  );
};

export default SavedCandidates;