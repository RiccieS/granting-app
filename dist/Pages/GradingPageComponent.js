import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { BranchSelect } from '../components/BranchSelect';
import { SemesterSelect } from '../components/SemesterSelect';
import { StudentSelect } from '../components/StudentSelect';
import { UserClassification } from '../components/UserClassification';
import { StudentsBySubjectSemesterSelect } from '../components/StudentsBySubjectSemesterSelect';
import { ProgramSelect } from '../components/ProgramSelect';
import { SubjectSemesterSelect } from '../components/SubjectSemesterSelect';
import { SubjectSelect } from '../components/SubjectSelect';

/**
 * Komponenta GradingPageComponent pro stránku s hodnocením.
 */
export default function GradingPageComponent() {
  const [selectedBranch, setSelectedBranch] = useState('all'); // State pro vybranou studini skupinu
  const [, setSelectedSemester] = useState('all'); // State pro vybrany semestr
  const users = useSelector(state => state.studentSelect.selectedStudent);

  /**
   * Funkce pro zachycení výběru studijní skupiny.
   * @param {string} branch - Vybraná studijní skupina
   */
  const handleBranchSelect = branch => {
    setSelectedBranch(branch);
  };

  /**
   * Funkce pro zachycení změny semestru.
   * @param {string} semester - Vybraný semester
   */
  const handleSemesterChange = semester => {
    setSelectedSemester(semester);
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "container-fluid p-5 bg-success text-white text-center"
  }, /*#__PURE__*/React.createElement("h1", null, "Aplikace pro spr\xE1vu klasifikace")), /*#__PURE__*/React.createElement("div", {
    className: "container mt-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "card-header"
  }, "P\u0159ehled student\u016F"), /*#__PURE__*/React.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/React.createElement(BranchSelect, {
    onBranchSelect: handleBranchSelect
  }), /*#__PURE__*/React.createElement(SemesterSelect, {
    onSemesterChange: handleSemesterChange
  }), /*#__PURE__*/React.createElement(StudentSelect, {
    key: selectedBranch,
    selectedBranch: selectedBranch
  })), /*#__PURE__*/React.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/React.createElement(UserClassification, {
    users: users
  })))), /*#__PURE__*/React.createElement("div", {
    className: "container mt-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "card-header"
  }, "P\u0159ehled student\u016F podle p\u0159edm\u011Btu"), /*#__PURE__*/React.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/React.createElement(StudentsBySubjectSemesterSelect, null)))), /*#__PURE__*/React.createElement("div", {
    className: "container mt-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "card-header"
  }, "P\u0159ehled statistik"), /*#__PURE__*/React.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/React.createElement(ProgramSelect, null), /*#__PURE__*/React.createElement(SubjectSemesterSelect, null), /*#__PURE__*/React.createElement(SubjectSelect, null)))));
}