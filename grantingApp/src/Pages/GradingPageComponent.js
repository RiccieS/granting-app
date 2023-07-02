import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { BranchSelect } from '../components/BranchSelect'
import { SemesterSelect } from '../components/SemesterSelect'
import { StudentSelect } from '../components/StudentSelect'
import { UserClassification } from '../components/UserClassification'
import { StudentsBySubjectSemesterSelect } from '../components/StudentsBySubjectSemesterSelect'
import { ProgramSelect } from '../components/ProgramSelect'
import { SubjectSemesterSelect } from '../components/SubjectSemesterSelect'
import { SubjectSelect } from '../components/SubjectSelect'

/**
 * Komponenta GradingPageComponent pro stránku s hodnocením.
 */
export default function GradingPageComponent() {
    const [selectedBranch, setSelectedBranch] = useState('all'); // State pro vybranou studini skupinu
    const [, setSelectedSemester] = useState('all'); // State pro vybrany semestr
    const users = useSelector((state) => state.studentSelect.selectedStudent);

    /**
     * Funkce pro zachycení výběru studijní skupiny.
     * @param {string} branch - Vybraná studijní skupina
     */
    const handleBranchSelect = (branch) => {
        setSelectedBranch(branch);
    };

    /**
     * Funkce pro zachycení změny semestru.
     * @param {string} semester - Vybraný semester
     */
    const handleSemesterChange = (semester) => {
        setSelectedSemester(semester);
    };

    return (
        <div>
            <div className="container-fluid p-5 bg-success text-white text-center">
                <h1>Aplikace pro správu klasifikace</h1>
            </div>
            <div className="container mt-5">
                <div className="card">
                    <h2 className="card-header">Přehled studentů</h2>
                    <div className="card-body">
                        <BranchSelect onBranchSelect={handleBranchSelect} />
                        <SemesterSelect onSemesterChange={handleSemesterChange} />
                        <StudentSelect key={selectedBranch} selectedBranch={selectedBranch} />
                    </div>
                    <div className="card-body">
                        <UserClassification users={users} />
                    </div>
                </div>
            </div>
            <div className="container mt-5">
                <div className='card'>
                    <h2 className="card-header">Přehled studentů podle předmětu</h2>
                    <div className="card-body">
                        <StudentsBySubjectSemesterSelect />
                    </div>
                </div>
            </div>
            <div className="container mt-5">
                <div className="card">
                    <h2 className="card-header">Přehled statistik</h2>
                    <div className="card-body">
                        <ProgramSelect />
                        <SubjectSemesterSelect />
                        <SubjectSelect />
                    </div>
                </div>
            </div>
        </div>
    );
}
