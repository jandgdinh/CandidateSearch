import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import { Candidate } from '../interfaces/Candidate.interface';
import { updateCandidates } from '../utilities/LocalStorage';

const CandidateSearch = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [candidate, setCandidate] = useState<Candidate>({} as Candidate);
  const [index, setIndex] = useState(0);


  const fetchCandidates = async () => {
    const data = await searchGithub();
    setCandidates(data);
    setIndex(0);
  };

  useEffect(() => {
    fetchCandidates();
  }, []);

  const nextCandidate = () => {
    if (index < candidates.length - 1) {
      setIndex(index + 1);
    } else {
      fetchCandidates();
    }
  };

  const addCandidate = () => {
    updateCandidates(candidate);
    nextCandidate();
  };

  useEffect(() => {
    const fetchCandidate = async () => {
      if (candidates.length > 0 && candidates[index]) {
        const githubUser = candidates[index].login;
        if (githubUser) {
          try {
            const data = await searchGithubUser(githubUser);
            setCandidate(data);
          } catch (error) {
            console.error('Error fetching candidate details:', error);
            nextCandidate();
          }
        } else {
          nextCandidate();
        }
      }
    };
    fetchCandidate();
  }, [candidates, index]);



  if (candidates.length === 0 || !candidates[index]) {
    return <h1>No Candidates Available</h1>;
  } else {
    const candidate = candidates[index];
    return (
      <div>
        <h1>Candidate Search</h1>
        <img src={candidate.avatar_url || 'N/A'} alt={`${candidate.login}'s avatar`} />
        <h2>{candidate.name || 'N/A' }</h2>
        <p>Username: {candidate.login || 'N/A'}</p>
        <p>Location: {candidate.location || 'N/A'}</p>
        <p>Email: {candidate.email || 'N/A'}</p>
        <p>Company: {candidate.company || 'N/A'}</p>
        <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">GitHub Profile</a>
        <button onClick={addCandidate}>Add Candidate</button>
        <button onClick={nextCandidate}>Next Candidate</button>
      </div>
    );
  }
};

export default CandidateSearch;
