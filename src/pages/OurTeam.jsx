import React from 'react';
import FacultyList from '../components/TeamPageComponents/FacultyList';
import ExecutiveCommittee from '../components/TeamPageComponents/ExecutiveCommittee';
import ExComList from '../components/TeamPageComponents/ExComList';

export function OurTeam() {
  return (
    <>
      <FacultyList/>
      <ExecutiveCommittee/>
      <ExComList/>
    </>
  );
}
